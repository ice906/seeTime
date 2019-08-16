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
              <button class="btn" @click = "sendAction" :disabled="disabled">{{btntxt}}</button>
            </div>
            <div class="box-center2">
                  验证码<input type="text" placeholder="发送验证码后自动获取" :value="code">
            </div>

            <div class="box2">
                <button class="btnAction" @click="loginAction(code)" >登录</button>
            </div>

            <div class="box3">
              <input type="checkbox" v-model="checkAction" /><span>已完成阅读并同意<a href="#">《用户协议》</a></span>
            </div>

            <footer class="foot">
                <a class="foot-top">或使用快速登录</a>
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
export default {
  components:{
    [Header.name]: Header,
  },
  computed:{
    ...mapState({
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
        //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
        if(this.phone==''){
            alert("请输入手机号码");
        }else if(!reg.test(this.phone)){
            alert("手机格式不正确");
        }else{
            this.time=5;
            this.disabled=true;
            this.timer();
            this.$store.dispatch('login/requestLoginCode',{phone:String(this.phone)});
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
    loginAction(code){
      this.$store.dispatch('login/requestLoginPhoneCode',{phone:this.phone, code:code});
      // this.checkAction === true ? (this.$router.push({path: "/setting"})) : console.log("no");
    },
    

    //测试
    /* homeData(){
      this.$store.dispatch('login/requestHomePhoneCode');
    } */
  },
    //更新视图
    created(){
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
        width: 260px;
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
      margin-top: 75px;
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