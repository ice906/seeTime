<template> 
<v-touch @swipeleft="swiperleft" @swiperight="swiperright" class="wrapper">

<div class="page" id="diagram">
    <router-link to="/diagram/scenery" class="scenery">
        <h1>鹰始鸷</h1>
    </router-link>
    <router-link to="/diagram/scenery" class="date">
        <span>荷月</span>
        <span>六月十九</span>
    </router-link>
    <div class="time"> 
        <span>07</span>
        <span>21</span>
        <img src="../../../public/images/home_to_right/today-line@3x.png" alt="">
    </div>
    <router-link to="/home" class="return">
        <span>回到今天</span>
        <img src="../../../public/images/home_to_right/today_return_icon@3x.png" alt="">
    </router-link>
    <router-link to="/diagram/photoShow" class="photo">
        <div class="text">
                <span>“星星发亮，是为了让每一个人有一天都能找到属于自己的星星。”</span>
        </div>
        <h1>「圣埃克苏佩里/作家」</h1>
        <div class="detail">
            <img src="../../../public/images/home_to_right/yesterday_eye_icon@3x.png" alt="">
        </div>
    </router-link>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
    </transition>
    <see-bottom></see-bottom>
</div>

</v-touch>
</template>

<script>
import footer from '../../components/footer'

export default {
    name: 'Diagram',
    components: {
        [footer.name]: footer,
    },
    data () {
    return {
    
    }
    },
    methods: {
        swiperleft: function () {
        this.$router.push({'path':'/home'});
        },
        swiperright: function () {
            this.$router.push({'path':'/dictum'});
        },
    }
}
</script>

<style lang="scss" scoped>
#diagram{
    width: 100%;
    height: 100%;
    background: url('../../../public/images/home_to_right/yesterday-bg@3x.png') no-repeat;
    .scenery{
        position: absolute;
        left: 25px;
        top: 40px;
        h1{
            font-family: Arial;
            font-size: 36px;
            color: #FFFFFf;
            font-weight: normal;
        }
    }
    .date{
        position: absolute;
        left: 25px;
        top: 95px;
        span{
            font-size: 18px;
            font-family: Arial;
            color: #FFFFFf;
            margin-right: 15px;
        }
    }
    .time{
        position: absolute;
        right: 31px;
        top: 40px;
        img{
            width: 55px;
            height: 75px;
        }
        span{
            font-size: 20px;
            font-family: Arial;
            color: #FFFFFf;
        }
        span:nth-child(1){
            position: absolute;
            top: 0px;
            left: 0px;
        }
        span:nth-child(2){
            position: absolute;
            bottom: 0px;
            right: 0px;
        }
    }
    .return{
        position: absolute;
        right: 31px;
        top: 125px;
         span{
            line-height: 25px;
            font-size: 14px;
            font-family: Arial;
            color: #FFFFFf;
            margin-right: 2px;
        }
        img{
            width: 12px;
            height: 12px;
        }
    }
    .photo{
        position: absolute;
        left: 25px;
        top: 188px;
        width: 325px;
        height: 300px;
        border-radius: 15px;
        background-color:#fff;
        box-shadow: 5px 6px 14px 1px rgba(170, 170, 170, 1);
        border: 1px solid rgba(255, 255, 255, 0);
        .text{
            width: 260px;
            margin: 0 auto;
            margin-top: 90px;
            span{     
                line-height: 34px;
                font-size: 18px;
                font-family: Arial;
                color: #666666;
            }
        }
        
        h1{
            position: absolute;
            left: 24px;
            bottom: 24px;
            font-size: 14px;
            font-family: Arial;
            color: #666666;
            font-weight: normal;
        }
        .detail{
            position: absolute;
            right: 17px;
            bottom: -5px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0);  
            img{
                 width: 60px;
                 height: 60px;  
            }
        }
    }
}
</style>
