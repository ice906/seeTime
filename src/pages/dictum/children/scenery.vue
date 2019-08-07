<template>
    <div class="page subpage" id="scenery">
       <div class="return">
           <span @click="returnAction">返回</span>
       </div>
       <div class="scenery">
            <span>候风物</span>
        </div>
        <div class="paraphrase">
            <span>释义</span>
        </div>
        <div class="photo">
            <span>插画</span>
        </div>
        <div class="download">
            <span>下载</span>
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
    .scenery{
        position: absolute;
        left: 25px;
        top: 65px;
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
    .paraphrase{
        position: absolute;
        left: 25px;
        top: 122px;
        width: 220px;
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
    .photo{
        position: absolute;
        left: 25px;
        top: 207px;
        width: 323px;
        height: 238px;
        border-radius: 8px;
        background-color: rgba(145, 145, 145, 1);
        text-align: center;
        box-shadow: 5px 6px 14px 1px rgba(170, 170, 170, 1);
        border: 1px solid rgba(255, 255, 255, 0);
        span{
            font-family: Arial;
            font-size: 14px;
            line-height: 238px;
            color: #FFFFFf
        }
    }
    .download{
        position: absolute;
        left: 168px;
        bottom: 73px;
        width: 36px;
        height: 37px;
        border-radius: 50%;
        background-color: rgba(145, 145, 145, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
        span{
            font-family: Arial;
            font-size: 14px;
            line-height: 37px;
            color: #FFFFFf
        }
    }
}
</style>
