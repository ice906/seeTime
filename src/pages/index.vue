<template>
<v-touch class="wrapper">

<div class="page subpage" id="wrap">

    <div class="enter" @click="clickAction">
        进入
    </div>
    
</div>

</v-touch>
</template>
 
<script>

export default {
    name:'Index',
    components: {
  },
  methods: {
        clickAction: function () {
        this.$router.push({'path':'/home'});
        },
    }
}
</script>

<style lang="scss" scoped>
#wrap{
    background: url('/images/home/start.jpg') no-repeat;
    background-size: cover;
    height: 100%;
    .enter{
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translate(-50%,0);

        a{
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            font-family:"微软雅黑","黑体","宋体";
        }
    }
}
</style>
