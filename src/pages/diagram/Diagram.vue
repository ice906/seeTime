<template>
<div class="page" id="diagram">
    <div class="scenery">
        <span>候风物</span>
    </div>
    <div class="date">
        <span>农历日期</span>
    </div>
    <div class="time">
        <span>日期</span>
    </div>
    <div class="return">
        <span>回到今天</span>
    </div>
    <div class="photo">
        <span>组图</span>
        <h1>标题</h1>
        <div class="detail">
            <span>详情</span>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#diagram{
    .scenery{
        position: absolute;
        left: 25px;
        top: 55px;
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
    .date{
        position: absolute;
        left: 1.5625rem;
        top: 7rem;
        width: 8.8125rem;
        height: 1.5625rem;
        border-radius: .5rem;
        background-color: rgba(145, 145, 145, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
        span{
            line-height: 1.5625rem;
            font-size: .875rem;
            font-family: Arial;
            color: #FFFFFf;
        }
    }
    .time{
        position: absolute;
        left: 209px;
        top: 55px;
        width: 141px;
        height: 82px;
        border-radius: 8px;
        background-color: rgba(145, 145, 145, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
        span{
            line-height: 82px;
            font-size: 14px;
            font-family: Arial;
            color: #FFFFFf;
        }
    }
    .return{
        position: absolute;
        left: 209px;
        top: 145px;
        width: 141px;
        height: 25px;
        border-radius: 8px;
        background-color: rgba(145, 145, 145, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
         span{
            line-height: 25px;
            font-size: 14px;
            font-family: Arial;
            color: #FFFFFf;
        }
    }
    .photo{
        position: absolute;
        left: 25px;
        top: 222px;
        width: 323px;
        height: 238px;
        border-radius: 8px;
        background-color: rgba(145, 145, 145, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
         span{
            line-height: 238px;
            font-size: 14px;
            font-family: Arial;
            color: #FFFFFf;
        }
        h1{
            position: absolute;
            left: 24px;
            bottom: 14px;
            font-size: 14px;
            font-family: Arial;
            color: #FFFFFf;
        }
        .detail{
            position: absolute;
            right: 17px;
            bottom: 14px;
            width: 33px;
            height: 34px;
            background-color: rgba(198, 198, 198, 1);
            text-align: center;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0);
             span{
                line-height: 34px;
                font-size: 14px;
                font-family: Arial;
                color: #FFFFFf;
            }
        }
    }
}
</style>
