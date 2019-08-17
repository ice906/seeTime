<template>
    <div class="btn">
        
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <router-view></router-view>
        </transition>
        <router-link to="/test/mine">我的</router-link>
        <router-link to="/setting/grade">评分</router-link>
        <router-link to="/setting/gradeSuccess">评分成功</router-link>
        <router-link to="/setting/lamente">吐槽</router-link>
        <router-link to="/setting/lamenteSuccess">吐槽成功</router-link>
        <router-link to="/test/noNetwork">没有网络</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn{
    overflow: hidden;
    background: #fff;
    height: 100%;
}
</style>
