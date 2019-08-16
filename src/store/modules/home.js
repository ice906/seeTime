import {get,post} from "../../request/index"
import api from "../../request/api"

export default {
    namespaced: true,
    state:{
        img: [],
    },

    mutations: {
        setQidongImg(state,params){
            state.img = params;
        }
    },
    actions: {
        async requestHomeCode(context){
            let {data} = await get(api.GET_STARTUP_IMAGE);
            console.log(data);
            let newData = data.map((data)=>(data));
            console.log(newData);
            context.commit("setQidongImg",newData);

        },
    }
}