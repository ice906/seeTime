import {get,post} from "../../request/index"
import api from "../../request/api"

export default {
    namespaced: true,
    state:{
        //验证码
        code:[],
    },

    mutations: {
        setCodeLogin(state,params){
            state.code = params;
        }
    },

    actions: {
        //获取验证码值
        async requestLoginCode(context,phone){
            let {data} = await get(api.GET_LOGIN_CODE,phone);
            context.commit("setCodeLogin",data);
        },
        //手机登录
        async requestLoginPhoneCode(context,phoneCode){
            console.log(phoneCode);
            let data = await post(api.GET_LOGIN, phoneCode);
            console.log(data);
            // context.commit("setCodeLogin",data);
        },
        //测试
       /*  async requestHomePhoneCode(context){
            let {data} = await get(api.GET_STARTUP_IMAGE);
            console.log(data);
        }, */
    }
}