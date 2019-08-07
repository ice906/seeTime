<template>
    <div class="page subpage" id="story">
       <div class="return">
           <span @click="returnAction">返回</span>
       </div>
       <div class="title">
            <span>故事标题</span>
        </div>
        <div class="story">
            <span>故事</span>
        </div>
    </div>
</template>

<script>
export default {
     methods: {
        returnAction(){
            this.$router.back()
        },
    },
}
</script>
<style lang="scss" scoped>
#story{
    .return{
        position: absolute;
        left: 25px;
        top: 8px;
        width: 32px;
        height: 32px;
        background-color: rgba(198, 198, 198, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
        span{
            font-family: Arial;
            font-size: 14px;
            line-height: 32px;
            color: #FFFFFf
        }
    }
    .title{
        position: absolute;
       left: 25px;
        top: 58px;
        width: 141px;
        height: 53px;
        border-radius: 8px;
        background-color: rgba(145, 145, 145, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
        span{
            font-family: Arial;
            font-size: 14px;
            line-height: 53px;
            color: #FFFFFf
        }
    }
   .story{
       position: absolute;
       left: 27px;
       top: 121px;
        margin-bottom: 22px;
        width: 321px;
        height: 754px;
        line-height: 20px;
        border-radius: 8px;
        background-color: rgba(145, 145, 145, 1);
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        box-shadow: 5px 6px 14px 1px rgba(170, 170, 170, 1);
        font-family: Arial;
        border: 1px solid rgba(255, 255, 255, 0);
        span{
            font-family: Arial;
            font-size: 14px;
            line-height: 754px;
            color: #FFFFFf
        }
   }
}
</style>