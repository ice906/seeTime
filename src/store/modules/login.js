import {get,post} from "../../request/index"
import api from "../../request/api"

export default {
    namespaced: true,
    state:{
        //是否登录
        isLogin:false,
        //验证码
        code:[],
        //用户信息
        // userPhone:[]
    },

    mutations: {
        //设置验证码
        setCodeLogin(state,params){
            state.code = params;
        },
        //登录成功
        setLoginPhoneCode(state,params){
            if (params !== "") {
                state.isLogin = true;
            }
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
            let data = await post(api.GET_LOGIN, phoneCode)
            // let newData = [data.phone = phoneCode.phone];
            context.commit("setLoginPhoneCode",data);
        },
    }
}