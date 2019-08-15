<template>
    <header class="header">
        <div class="left" @click="routerBack">
            <img src="/images/saprophytic_grass_fluorescent/yesterday_return_icon@3x.png" alt="">
        </div>
    </header>
</template>

<script>
export default {
    name: "setting-header",
     methods:{
         //返回
        routerBack(){
            this.$router.back()
        }
     }
}
</script>

<style lang="scss">
.header{
      position: absolute;
      top: 0;
      left: 0;
      height: 44px;
      width: 100%;
      .left{
        img{
        width: 33px;
        height: 33px;
        display: block;
        padding: 5px 0 0 10px;
        }
      }
}
</style>