import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        "card": "",
        "phoneNum":"",
        "cardNum":"",
        "cardId":"",
        "wechat_id":"",
        "open_id":"",
        "authen_mobile":"",
        "link":'http://yixianghua-crm.yixinonline.com:8080/crm',
        //"link":'https://yixianghuacrm.yirendai.com/crm',
        //"link":'http://10.106.158.124:8080/crm'
        //"link":'http://10.106.158.124:8011/crm'   
        
    },
    mutations: {
        changeCard: function(state, payload) {
            state.card = payload;
        },
        changeCardId: function(state, payload) {
            state.cardId = payload;
        },
        changePhoneNum: function(state, payload) {
            state.phoneNum = payload;
        },
        changeCardNum: function(state, payload) {
            state.cardNum = payload;
        },
        changeOpenId: function(state, payload) {
            state.open_id= payload;
        },
        changeMobile: function(state, payload) {
            state.authen_mobile= payload;
        },
        changeWechat_id: function(state, payload) {
            state.wechat_id= payload;
        }
    },
    actions:{
    	changeCard({commit},payload){
            commit("changeCard",payload)
        },
        changeCardId({commit},payload){
            commit("changeCardId",payload)
        },
        changePhoneNum({commit},payload){
            commit("changePhoneNum",payload)
        },
        changeCardNum({commit},payload){
            commit("changeCardNum",payload)
        },
        changeOpenId({commit},payload){
            commit("changeOpenId",payload)
        },
        changeMobile({commit},payload){
            commit("changeMobile",payload)
        },
        changeWechat_id({commit},payload){
            commit("changeWechat_id",payload)
        }
    },
    getters: {
        "perfectCity": function(state) {
            return state.card+ "^<>^"
        }

    }
})

