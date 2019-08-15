<template>
    <div class="page subpage" id="story">
       <div class="return">
           <img src="../../../../public/images/saprophytic_grass_fluorescent/yesterday_return_icon@3x.png" alt="" @click="returnAction">
       </div>
        <div class="photo">
           <img src="../../../../public/images/eye_pic_detail/yesterday_details_pic03@3x.png" alt=""  class="photo-one">
 
            <img src="../../../../public/images/eye_pic_detail/yesterday_details_pic02@3x.png" alt=""  class="photo-two">
      
            <img src="../../../../public/images/eye_pic_detail/yesterday_details_pic01@3x.png" alt=""  class="photo-three">
        </div>
        <div class="bottom">
            <span>自然的声音</span>
            <span>1/3</span>
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
    background: #fff;
    .return{
       margin: 20px 0 0 18px;
       img{
           width: 24px;
           height: 24px;
       }
    }
    .photo{
        width: 100%;
        height: 565px;
        .photo-one{
            position: absolute;
            left: 15px;
            top: 115px;
            width: 300px;
            height: 470px;
        }
        .photo-two{
            position: absolute;
            left: 32px;
            top: 95px;
            width: 315px;
            height: 515px;
        }
        .photo-three{
            position: absolute;
            left: 70px;
            top: 85px;
            width: 291px;
            height: 470px;
        }
    }
    .bottom{
        margin: 0 20px;
        display: flex;
        justify-content: space-between;
        span{
            font-size: 18px;
            color: #666666;
        }
        span:nth-child(2){
            font-size: 14px;
        }
    }
}
</style>