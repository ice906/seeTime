<template>

<div class="home-share page subpage">
    <div class="mask">
    </div>
    <div class="back" @click="backAction"></div>
    <div class="img"></div>
    <div class="share-way">
        <ul>
        <li v-for="item in shareList" :key="item.name">
            <em :style="{backgroundImage:'url('+item.img+')'}"></em>
            <i>{{item.name}}</i>
        </li>
        </ul>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return {
            shareList: [
                {name:'QQ', img: '/images/share/share_QQ_icon@3x.png'},
                {name:'微信', img: '/images/share/share_weixin_icon@3x.png'},
                {name:'微博', img: '/images/share/share_weibo_icon@3x.png'},
                {name:'朋友圈', img: '/images/share/share_friend_icon@3x.png'},
            ]
        }
    },
    methods: {
        backAction(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
.home-share{
    .mask{
        width: 100%;
        height: 100%;
        background:url('/images/share/today_share_BG@3x.png') no-repeat;
        background-size: cover;
    }
    .back{
        position: absolute;
        left: 5%;
        top: 5%;
        background:url('/images/home_to_right/today_return_icon@3x.png') no-repeat;
        background-size: cover;
        width: 10px;
        height: 18px;
        transform:rotate(180deg);
    }
    .img{
        width: 70%;
        height: 73%;
        position: absolute;
        top: 10%;
        left: 14%;
        background:url('/images/home/banner@3x.png') no-repeat;
        background-size: cover;
    }
    .share-way{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        ul{
            padding: 6%;
            display: flex;
            justify-content: space-around;
            :nth-child(1) em{
                width: 25px;
                height: 29px;
            }
            :nth-child(2) em{
                width: 37px;
                height: 30px;
            }
            :nth-child(3) em{
                width: 37px;
                height: 30px;
            }
            :nth-child(4) em{
                width: 30px;
                height: 29px;
            }
        }
        li{
            em{
                
                background-size: cover;
                background-repeat: no-repeat;
            }
            i{
                margin-top: 12px;
                font-size: 13px;
                color:#fff;
                text-align: center;
            }
        }
    }

}
</style>



