<template>
    <div class="page subpage" id="scenery">
       <div class="return">
           <img src="../../../../public/images/saprophytic_grass_fluorescent/yesterday_return_icon@3x.png" alt="" @click="returnAction">
       </div>
       <h1>鹰始鸷</h1>
        <div class="paraphrase">
            <p>鸷，挚也，凶猛之意。</p>
            <span>
                应氏曰：杀气未肃，鸷猛之鸟始习于击，
                迎杀气也。
            </span>
        </div>
        <div class="photo">
           <img src="../../../../public/images/saprophytic_grass_fluorescent/yesterday_eagle_pic@3x.png" alt="" >
        </div>
        <div class="download">
           <img src="../../../../public/images/saprophytic_grass_fluorescent/yesterday_download_icon@3x.png" alt="" >
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
#scenery{
    background: #fff;
    .return{
       margin: 20px 0 0 18px;
       img{
           width: 24px;
           height: 24px;
       }
    }
    h1{
        font-size: 24px;
        margin: 20px 48px;
        color: #333333;
    }
    .paraphrase{
        width: 295px;
        margin: 0 auto;
        p{
            line-height: 32px;
            font-size: 16px;
            color: #666666;
        }
        span{
            line-height: 32px;
            font-size: 16px;
            color: #666666;
        }
    }
    .photo{
       width: 100%;
       margin-top: 20px;
       img{
           width: 100%;
       }
    }
    .download{
        width: 24px;
       margin: 80px auto;
        img{
            width: 24px;
            height: 24px;
        }
    }
}
</style>
