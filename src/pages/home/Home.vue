<template>
<v-touch @swiperight="swiperright" class="wrapper">
<div class="page" id="home">
        <span class="terms">今日大暑</span> 
        <router-link to="/home/detial">
            <span class="detial"></span>
        </router-link>
    
        <!-- <li v-for="item in termData" :key="item.pic">
            <img :src="item.pic" alt="">
        </li> -->

        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <router-view></router-view>
        </transition>
        <see-bottom></see-bottom>
 
</div>
</v-touch>
</template>
 
<script>

import footer from '../../components/footer'

import {mapState} from 'vuex'


export default {
    name:'Home',
    components: {
        [footer.name]: footer,
    },
    data () {
    return {
    
    }
    },
    computed: {
      ...mapState({
          termData: state=>state.home.termData
      })  
    },
    methods: {
        swiperright: function () {
            this.$router.push({'path':'/diagram'});
        },


        //获取启动页图片
        /* homeData(){
            this.$store.dispatch('home/requestHomeCode');
        }, */
        //获取节气数据
        homeTerms(){
            this.$store.dispatch('home/requestHomeTerms');
        }

    },
    created(){
        // this.homeData();
        this.homeTerms();
    }
}
</script>

<style lang="scss" scoped>

#home{
    height: 100%;
    position: relative;
    color: #fff;
    background: url('/images/home/banner@3x.png') no-repeat;
    background-size: cover;
    span{
        display: block;
        position: absolute;
    }
    .terms{
        text-align: center;
        font-size: 2rem;
        line-height:3rem;
        width: 1.875rem;
        padding: .56rem;
        top: 13%;
        left: 45%;
    }
    .detial{
        width: 20px;
        height: 17px;
        background: url('/images/home/today_eye_icon@3x.png') no-repeat;
        background-size: cover;
        bottom: 24%;
        right: 13%;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    } 
}
</style>
