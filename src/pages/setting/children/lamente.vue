<template>

<div class="lamente page subpage">

    <div class="lheader">
        <div class="back">
            <setting-header/>
        </div>

        <router-link to="/setting/lamenteSuccess">
            <div class="check">
                <img src="/images/app_grade/icon_collect_finish@3x.png" alt=""/>
            </div>
        </router-link>

    </div>
    <div class="title">
        <p>我要吐槽</p>
    </div>
    <div class="content">
        <div class="email">
            <em>请输入您的邮箱</em>
            <i>
                <input type="text" name="" id="">
            </i>
        </div>
        <div class="suggestion">
            <em>留下你宝贵的意见</em>
            <i>
                <textarea placeholder="感谢您使用见时APP，使用过程中又任何的建议或者意见请反馈给我们"></textarea>
            </i>
        </div>
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
.lamente{
    height: 100%;
    background:#fff url('/images/app_grade/bg_Application score@3x.png') no-repeat;
    background-size: cover;
    .lheader{
        height: 44px;
        .back{
            height: 44px;
        }
        .check{
            position: absolute;
            top: 3%;
            right: 30px;
        }
        .check img{
            width: 25px;
            margin: auto 0;
        }
    }
    .title{
        font-size: 24px;
        font-weight: 600;
        margin: 25px;
    }
    .content{
        padding: 70px 25px 0;
        em{
            color: #555;
            margin-bottom: 10px;
        }
        .suggestion{
            margin-top: 50px;
        }
        i {
            border: 1px solid #555;
            padding: 10px;
            background: #fff;
            border-radius: 5px;
            input{
                border: none;
                width: 100%;
                height: 40px;
            }
            textarea{
                border: none;
                width: 100%;
                height: 100px;
            }
        }
    }
}
</style>
