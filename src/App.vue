<template>
<div id="app">
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
    </transition>
</div>
</template>
  
<script>
import Index from './pages/index'
export default {
    components: {
        Index,
    },
}
</script>

<style>
.wrapper{
    height: 100%;
}
</style>
