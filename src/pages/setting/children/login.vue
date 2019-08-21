<template>
  <div class = "page subpage" id="login">
      <div class="bg">

          <setting-header/>

        <div class="conten">
          <div class="box">
            <h2>验证码登录</h2>
            <div class="box-center">
              <div class="input1">
                  手机号<input type="text" v-model="phone">
              </div>
              <el-button type="success" @click = "sendAction" :disabled="disabled" :plain="true">{{btntxt}}</el-button >
            </div>
            <div class="box-center2">
                  验证码<input type="text" placeholder="发送验证码后自动获取" :value="code" >
            </div>

            <div class="box2">
                <button class="btnAction" @click="loginAction(code,isLogin)" >登录</button>
            </div>

            <div class="box3">
              <el-checkbox type="checkbox" v-model="checkAction" /><span>已完成阅读并同意<a href="#">《用户协议》</a></span></el-checkbox>
            </div>

            <footer class="foot">
                <el-button class="foot-top" @click = "other">或使用快速登录</el-button>
                <div class="foot-bottom">
                    <ul class="list">
                      <li  v-for="item in lists" :key="item.id" class="item">
                        <div>
                            <img :src="item.img" alt="">
                        </div>
                      </li>
                    </ul>
                </div>
            </footer>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from "../common/header";
import { setInterval } from 'timers';
import {mapState} from "vuex"
import { Message } from 'element-ui';
export default {
  components:{
    [Header.name]: Header,
    [Message.name]: Message
  },
  computed:{
    ...mapState({
      isLogin:state => state.login.isLogin,
      code:state => state.login.code,
    })
  },
  data(){
    return{
        disabled:false,
        time:0,
        btntxt:"发送验证码",
        phone:"",
        checkAction: false,
        lists: [
          {id:1 , img:"/images/phone_login/login_QQ_icon@3x.png"},
          {id:2 , img:"/images/phone_login/login-weixin_icon@3x.png"},
          {id:3 , img:"/images/phone_login/login_weibo_icon@3x.png"}
        ]
    }
  },
  methods: {
     // 发送验证码
    sendAction(){
        var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(this.phone==''){
            this.$message({
              message: '手机号码不能为空!',
              type: 'warning',
              center: true,
          });
        }else if(!reg.test(this.phone)){
            this.$message({
              message: '手机号码格式不正确!',
              type: 'warning',
              center: true,
          });
        }else{
            this.time=60;
            this.disabled=true;
            this.timer();
            this.$store.dispatch('login/requestLoginCode',{phone:String(this.phone)});

            this.$message({
              showClose: true,
              message: '发送成功啦!~',
              type: 'success',
              center: true,
          });
        }
    },
    timer() {
        if (this.time > 0) {
              this.time--;
              this.btntxt=this.time+"s重新获取";
              setTimeout(this.timer, 1000);
        } else{
              this.time=0;
              this.btntxt="获取验证码";
              this.disabled=false;
        }
    },
    //手机登录
    loginAction(code,isLogin){
      //把手机号码和验证码提交到后台
      this.$store.dispatch('login/requestLoginPhoneCode',{phone:String(this.phone), code:code});

      if (this.checkAction === true && isLogin===true) {
          this.$message({
                showClose: true,
                message: '恭喜你登录成功啦!~',
                type: 'success',
                center: true,
            });
        if (!window.localStorage) {
          this.$message.error({
                message:'浏览器不支持localStorage哦！~',
                type: 'success',
                center: true,
            })
        }else{
           localStorage.setItem('phone',this.phone);
        }
        this.$router.back()
      }else{
        this.$message.error({
            message:'登录失败！~',
            type: 'success',
            center: true,
          });
      }
    },
    //其他方式登录
    other(){
        this.$message('抱歉!暂时只支持手机登录!~');
    },

    //测试
    homeData(){

    }
  },
    //更新视图
    created(){
      // console.log(userPhone);
      // this.homeData()
    }
  }

</script>

<style lang="scss" scoped>
#login{
   background: #ffffff;
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
      .box{
      h2{
        color: #ffffff;
        font-size: 27px;
        margin-top: 65px;
        margin-left: 38px;
        font-weight: 400;
      }
    }
    .box-center{
      width: 100%;
      margin-top: 115px;
      display: flex;
      justify-content:space-around;
      .input1{
        height: 35px;
        width: 230px;
        border-bottom: 1px solid #888;
        font-size: 15px;
        color: #666;
        input{
          border:none;
          height: 30px;
          display: inline-block;
          outline:0;
          padding-left: 10px;
          color: #666;
        }
        }
        .btn{
            display: inline-block;
            height: 35px;
            width: 72px;
            border-radius: 8px 8px;
            background: #fff;
            font-size: 12px;
          }
      }
      .box-center2{
        margin-top: 20px;
          margin-left: 20px;
         height: 35px;
         width: 90%;
          border-bottom: 1px solid #888;
          font-size: 15px;
        color: #666;
         input{
          border:none;
          height: 30px;
          display: inline-block;
          outline:0;
          padding-left: 10px;
          color: #666;
        }
      }
      .box2{
         text-align: center;
         margin-top: 57px;
        .btnAction{
          background: url("/images/phone_login/login_red_btm@3x.png") no-repeat;
          width: 321px;
          height: 46px;
          background-size: 100%;
          border: none;
          font-size: 15px;
          color: #fefefe;
        }
      }
      .box3{
        margin-top: 43px;
        text-align: center;
       font-size: 13px;
       color: #B9B9B9;
        a{
          font-size: 13px;
          color: #B9B9B9;
          text-decoration: underline;
        }
      }
    }
    .foot{
      text-align: center;
      margin-top: 30px;
      a{
        font-size: 14px;
        color: #878787;
      }
      .foot-bottom{
        margin-top: 46px;
        .list{
          display: flex;
          justify-content: center;
          .item{
           div{
              img{
                width: 40%;
              }
           }
          }
        }
      }
    }
  }
}

</style>