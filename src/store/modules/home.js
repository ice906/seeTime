import {get,post} from "../../request/index"
import api from "../../request/api"

export default {
    namespaced: true,
    state:{
        // img: [],
        terms: [],
    },

    mutations: {
        /* setQidongImg(state,params){
            state.img = params;
        }, */
        setHomeTerms(state,params){
            state.terms = params;
        }
    },
    actions: {

        //启动页图片数据
       /*  async requestHomeCode(context){
            let {data} = await get(api.GET_STARTUP_IMAGE);
            console.log(data);
            let newData = data.map((data)=>(data));
            console.log(newData);
            context.commit("setQidongImg",newData);
        }, */
        //节气数据
        async requestHomeTerms(context){
            let {data} = await get(api.GET_TOPIC);
            console.log(data);
            /* let newData = data.map((data)=>(data));
            console.log(newData);
            context.commit("setQidongImg",newData); */
        },

    }
}