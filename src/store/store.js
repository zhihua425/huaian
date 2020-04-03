import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    naviname: '首页',
    userinfo: localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")) : {}
  },
  mutations: {
    changeNaviname(state, naviname) {
      state.navinamuserinfoe = naviname
    },
    changeuserinfo(state, userinfo) {
      localStorage.setItem("userinfo", userinfo)
      state.userinfo = userinfo
    }
  }
});

export default store;
