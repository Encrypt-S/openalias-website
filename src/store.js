import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)


const checkGoogleDNS = async (name) => {
  return new Promise(async function(resolve, reject) {
    try {
      const oaUrl = 'nav.community'
      const randomPadding = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
      const dnsUrlWithoutPadding = `https://dns.google.com/resolve?name=${name.toLowerCase()}.${oaUrl}&type=16&cd=0&edns_client_subnet=0.0.0.0/0&random_padding=`
      const url = dnsUrlWithoutPadding.padEnd(255, randomPadding)
      const dnsResponse = await fetch(url)
      const json = await dnsResponse.json()

      // Get the previous address from DNS
      if (json.Status === 0) {
        if (Array.isArray(json.Answer)) {
          for (var i = 0; i < json.Answer.length; i++ ) {
            const oaAddr = json.Answer[i].data
            if (oaAddr.includes('oa1:nav')) {
              // Found a previous address. Use this to check signature
              resolve(oaAddr.substring(oaAddr.indexOf('recipient_address=') + 18, oaAddr.indexOf(';')))
            }
          }
        }
      }

      resolve('')
    } catch (err) {
      reject(err)
    }
  })
}

const store = new Vuex.Store({
  state: {
    address: '',
    alias: '',
    aliasCurrentAddress: '',
    addressVerification: '',
    prevAddressVerification: '',
    updatingAddress: false,
    checkRequestComplete: false,
    openAliasResponse: {},
    homePageError: '',
  },
  mutations: {
    saveAlias (state, payload) {
      state.address = payload.address
      state.alias = payload.alias.toLowerCase()
    },
    saveCurrentAddress (state, address) {
      state.aliasCurrentAddress = address
    },
    saveAddressVerification (state, verification) {
      state.addressVerification = verification
    },
    savePrevAddressVerification (state, verification) {
      state.prevAddressVerification = verification
      state.updatingAddress = true
    },
    saveOpenAliasResponse (state, response) {
      state.openAliasResponse = response
    },
    saveCheckRequestComplete (state, status) {
      state.checkRequestComplete = status
    },
    homePageError (state, error) {
      state.homePageError = error
    },
    resetStateData (state) {
      state.address = ''
      state.alias = ''
      state.aliasCurrentAddress = ''
      state.addressVerification = ''
      state.prevAddressVerification = ''
      state.openAliasResponse = {}
      state.checkRequestComplete = false
    },
  },
  actions: {
    async checkAliasNew (context, alias) {
      try {
        context.commit('homePageError', '')
        const address = await checkGoogleDNS(alias)
        if (address) {
          return context.commit('homePageError', 'Alias already taken. If you already own this Alias please select "Update Alias" or else choose a new Alias')
        }
        return router.push({ name: 'VerifyNewAddress'})
      } catch (err) {
        return context.commit('homePageError', 'Connection error. Please try again later.')
      }
    },
    async checkAliasUpdate (context, alias) {
      try {
        context.commit('homePageError', '')
        const address = await checkGoogleDNS(alias)
        if (!address) {
          return context.commit('homePageError', 'This alias does not exist. Please select "Create Alias"')
        }
        context.commit('saveCurrentAddress', address)
        return router.push({ name: 'VerifyPrevAddress'})
      } catch (err) {
        return context.commit('homePageError', 'Connection error. Please try again later.')
      }
    },
    async createAlias (context) {
      try {
        const { alias, address, addressVerification, aliasCurrentAddress, prevAddressVerification } = context.state
        const res = await fetch('https://openalias-api.nav.community/', {
          headers: { 'Content-Type': 'application/json' },
          method: 'post',
          body: JSON.stringify({
            name: alias.toLowerCase(),
            address: address,
            addressSig: addressVerification,
            prevaddress: aliasCurrentAddress,
            prevaddressSig: prevAddressVerification,
          })
        })

        const json = await res.json()
        context.commit('saveOpenAliasResponse', json)
      } catch (err) {
        context.commit('saveOpenAliasResponse', { error: "Connection error. Please try again later."})
      }
    }
  }
})

export default store
