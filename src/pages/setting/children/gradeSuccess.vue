<template>

<div class="gradeSuccess page subpage">

    <div class="gheader">

        <router-link to="/home">
            <div class="back"></div>
        </router-link>

    </div>
    <div class="img">
        <img src="/images/grade_success/img_score_success@3x.png" alt="">
    </div>
    <div class="content">
        <p>评分成功</p>
        <em>3S后自动跳转到首页</em>
        <i>立即跳转</i>
        
    </div>

</div>

</template>

<script>
import Header from "../common/header"
export default {
   components:{
    [Header.name]: Header,
  }

}
</script>

<style lang="scss" scoped>
.gradeSuccess{
    height: 100%;
    background:#fff;
    background-size: cover;
    .back{
        position: absolute;
        left: 5%;
        top: 5%;
        background:url('/images/saprophytic_grass_fluorescent/yesterday_return_icon@3x.png') no-repeat;
        background-size: cover;
        width: 15px;
        height: 18px;
    }
    .img img{
        display: block;
        margin: 50px auto 0;
        width: 260px;
    }
    .content{
        text-align: center;
        p{
            font-size: 18px;
            margin-bottom: 20px;
        }
        em{
            color: #999;
            margin-bottom: 5px;
            font-size: 14px;
        }
        i{
            color: red;
            font-size: 14px;
        }
    }
}
</style>
