<template>

<div class="grade page subpage">

    <div class="gheader">
        <div class="back">
            <setting-header/>
        </div>

        <router-link to="/setting/gradeSuccess">
            <div class="check">
                <img src="/images/app_grade/icon_collect_finish@3x.png" alt=""/>
            </div>
        </router-link>

    </div>
    <div class="title">
        <p>应用评分</p>
    </div>
    <div class="content">
        <div class="email">
            <em>标题</em>
            <i>
                <input type="text" name="" id="">
            </i>
        </div>
        <div class="suggestion">
            <em>评论（选填）</em>
            <i>
                <textarea></textarea>
            </i>
        </div>
        
    </div>
    <div class="star">
        <van-rate 
        v-model="value"
        :size="30"
        color="#f44"
        allow-half
        void-icon="star"
        void-color="#fff"
        />
    </div>
    <p>轻点星形状来评分</p>

</div>

</template>

<script>
import Vue from 'vue';
import { Rate } from 'vant';

Vue.use(Rate);
import Header from "../common/header"
import 'vant/lib/rate/style';

export default {
   components:{
    [Header.name]: Header,
  },
  data() {
    return {
      value: 2.5
    };
  }

}
</script>

<style lang="scss" scoped>
.grade{
    height: 100%;
    background:#fff url('/images/app_grade/bg_Application score@3x.png') no-repeat;
    background-size: cover;
    .gheader{
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
    .star{
        margin-top: 50px;
        text-align: center;
     }
     p{
         margin-top: 5px;
         font-size: 13px;
         color: #999;
         text-align: center;
     }
}
</style>
