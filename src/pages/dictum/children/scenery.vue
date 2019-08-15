<template>
    <div class="page subpage" id="scenery">
       <div class="return">
           <img src="../../../../public/images/saprophytic_grass_fluorescent/yesterday_return_icon@3x.png" alt="" @click="returnAction">
       </div>
        <div class="photo">
           <img src="../../../../public/images/saprophytic_grass_fluorescent/yesterday_pic@3x.png" alt="">
        </div>
        <div class="text">
            <h1>腐草为萤</h1>
            <p>大暑初候。 离明之极， 则幽阴至微之物亦化而为明也。 “毛诗”曰：熠耀宵行。</p>
        </div>
        <div class="download">
           <img src="../../../../public/images/saprophytic_grass_fluorescent/yesterday_download_icon@3x.png" alt="">
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
    .photo{
       text-align: center;
       img{
           width: 258px;
           height: 275px;
           margin: 20px 0;
       }
    }
    .text{
        margin: 0 20%;
        h1{
            font-size: 24px;
            color: #333333;
            margin: 10px 0;
        }
        p{
            word-break:break-all;
            color:#666666;
            font-size: 18px;
            line-height: 32px;
        }
    }
    .download{
        width: 24px;
        margin: 50px auto 0px;
        img{
            width: 24px;
            height: 24px;
        }
    }
}
</style>
