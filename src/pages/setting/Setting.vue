<template>
  <div class="page subpage" id="setting">
    <setting-header/>

    <div class="bg">
      <div class="conten">

        <div class="login">
             <div>
                <img src="../../../public/images/setting/img_login@3x.png" alt="">
                <router-link to="/setting/login" class="loginAction">请登录</router-link>
             </div>
        </div>

        <div class="setList">

        </div>

      </div>

    </div>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <router-view></router-view>
        </transition>
  </div>
</template>

<script>
import Header from "./common/header"
export default {
   components:{
    [Header.name]: Header,
  }

}
</script>

<style lang="scss" scoped>
#setting{
   height: 100%;
   width: 100%;
   .bg{
     background: url("/images/phone_login/login_bg@3x.png") no-repeat 0 0;
     width: 100%;
     height: 100%;
     background-size: 100%;
    .conten{
      position: absolute;
      width: 100%;
      top: 44px;
      left: 0;
      width: 100%;
      .login{
        height: 140px;
        width: 100%;
        margin-bottom: 32px;
        div{
          margin: 0 auto;
          width: 75px;
          text-align: center;
          img{
            width: 75px;
            height: 75px;
          }
          .loginAction{
            display: block;
            margin-top: 10px;
            font-size: 18px;
            color: #ffffff;
          }
        }
      }
      .setList{
        z-index: 888;
        background: #E4E4E4;
        height: 600px;
        width: 100%;
      }
    }
  }
}
</style>