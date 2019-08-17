<template>

<div class="mine page subpage">
    <div class="gheader">
        <div class="back">
            <setting-header/>
        </div>
        <div class="potrait">
            <img src="/images/login_status_collection/login_user@3x.png" alt=""/>
        </div>
    </div>
    <div class="collect-comment">
        <router-link to="/home/collection">
            <em>
            我的收藏
            </em>
        </router-link>
        <img src="/images/setting/center_not_guide1@3x.png" alt="">
        <router-link to="/home/comment">
            <i>
            我的评论
            </i>
        </router-link>
    </div>
    <div class="push-clear">
        <em>推送通知
            <van-switch v-model="checked" active-color="#07c160"
  inactive-color="#f44" size="18px"/>
        </em>
        <i>清空缓存
            <van-icon name="arrow" />
        </i>
    </div>
    <div class="lamente-grade">
        <router-link to="/setting/lamente">
            <em>我要吐槽
                <van-icon name="arrow" />
            </em>
        </router-link>
        <router-link to="/setting/grade">
            <i>应用评分
                <van-icon name="arrow" />
            </i>
        </router-link>

    </div>
    <div class="exit">
        <router-link to="/setting/login">
            <em>退出登录
                <van-icon name="arrow" />
            </em>
        </router-link>
    </div>
    <span class="version">v1.0.2</span>
</div>

</template>

<script>
import Vue from 'vue';
import 'vant/lib/switch/style';
import { Switch } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Switch);

import Header from "../common/header"
export default {
   components:{
    [Header.name]: Header,
  },
  data() {
    return {
      checked: true
    };
  }

}
</script>

<style lang="scss" scoped>
.mine{
    height: 100%;
    background: url('/images/phone_login/login_bg@3x.png') no-repeat;
    background-size: cover;
    .gheader{
        height: 190px;
        
        .back{
            height: 44px;
        }
        .potrait{
            display: block;
            margin: 20px auto;
            width: 90px;
            img{
                width: 90px;
                padding: 0;
            }
        }
        
        .check img{
            width: 25px;
            margin: auto 0;
        }
    }
    .van-icon{
        float: right;
        padding: 0;
        border-top: none;
    }
    em,i,img{
        padding:15px 30px; 
        font-weight: 500;
    }
    i{
        border-top: 1px solid #ccc;
    }
    .collect-comment{
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        border-bottom:5px solid #ccc;
        i{
            border-top: none;
        }
        img{
            display: block;
            width: 2px;
            height: 30px;
        }

    }
    .push-clear{
        border-bottom:5px solid #ccc;
        .van-switch{
            float: right;
            font-size: 18px;
        }

    }
    .lamente-grade{
        border-bottom:5px solid #ccc;

    }
    .exit{
        border-bottom:5px solid #ccc;;

    }
    .version{
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translate(-50%,0)
    }
    a{
            color: #333;
        }
}
</style>
