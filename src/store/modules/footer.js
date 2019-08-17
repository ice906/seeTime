import {get,post} from "../../request/index"
import api from "../../request/api"

export default {
    namespaced: true,
    state:{
        // img: [],
        thumbList: [],
        commentList: [],
    },

    mutations: {
        /* setQidongImg(state,params){
            state.img = params;
        }, */
        setNoticCenter(state,params){
            state.notic = params;
        }
    },
    actions: {

        //通知中心数据（点赞和评论）
        async requestNoticCenter(context){
            let {data} = await get(api.GET_NOTICE_COMMENT_PAGE);
            console.log(data);
            /* let newData = data.map((data)=>(data));
            console.log(newData);
            context.commit("setQidongImg",newData); */
        },

    }
}