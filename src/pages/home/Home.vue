<template>

<div class="page" id="home">

    <span class="terms">今日大暑</span>

    <router-link to="/home/detial">
        <span class="detial"></span>
    </router-link>

    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
    </transition>
</div>

</template>

<script>
export default {
    
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
}
</style>
