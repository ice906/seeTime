<template>
<v-touch @swipeleft="swiperleft" class="wrapper">

<div class="page" id="dictum">
    <router-link to="/dictum/scenery" class="scenery">
        <h1>腐草为萤</h1>
    </router-link>
    <router-link to="/dictum/scenery" class="date">
            <span>荷月</span>
        <span>六月二十</span>
    </router-link>
    <div class="time"> 
        <span>07</span>
        <span>22</span>
        <img src="../../../public/images/home_to_right/today-line@3x.png" alt="">
    </div>
    <router-link to="/home" class="return">
        <span>回到今天</span>
        <img src="../../../public/images/home_to_right/today_return_icon@3x.png" alt="">
    </router-link>
    <router-link to="/dictum/story" class="story">
        <img src="../../../public/images/home_to_right/richu.png" alt="">
        <img src="../../../public/images/home_to_right/today_eye_icon@3x.png" alt="">     
        <p>自然的声音</p>       
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
    name: 'Dictum',
    components: {
        [footer.name]: footer,
    },
    data () {
    return {
    
    }
    },
    methods: {
        swiperleft: function () {
        this.$router.push({'path':'/diagram'});
        },
    }
}
</script>

<style lang="scss" scoped>
#dictum{
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
    .story{
        position: absolute;
        left: 25px;
        top: 188px;
        width: 323px;
        height:300px;
        border-radius: 15px;
        background-color: #fff;
        box-shadow: 5px 6px 14px 1px rgba(170, 170, 170, 1);
        border: 1px solid rgba(255, 255, 255, 0);
        
        img{
            width: 308px;
            height: 228px;
           margin: 8px;
        }
        img:nth-child(2){
            width: 20px;
            height: 17px;
            position: absolute;
            left: 10px;
            top: 200px;
        }
        p{
            color: #666666;
            font-size: 14px;
            margin: 10px 0 0 13px;
        }
    }
}
</style>
