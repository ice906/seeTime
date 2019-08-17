<template>

<div class="noNetwork page subpage">

    <div class="gheader">
        <div class="back">
            <setting-header/>
        </div>
    </div>
    <div class="img">
        <img class="show" src="/images/no_network/img_noweb@3x.png" alt="">
        <img class="yezia" src="/images/no_network/yezia.png" alt="">
        <img class="yezib" src="/images/no_network/yezib.png" alt="">
        <img class="wind" src="/images/no_network/wind.png" alt="">
    </div>
    <em>没有网络</em>
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
.noNetwork{
    height: 100%;
    background:#fff;
    background-size: cover;
    .gheader{
        height: 44px;
        .back{
            height: 44px;
        }
    }.img{
        overflow: hidden;
        position: relative;
        .yezia, .yezib, .wind{
            position: absolute;
        }
        .yezia{
            top: -80px;
            width: 440px;
            left: -10px;
        }
        .yezib{
            top: -60px;
            width: 400px;
            left: 10px;
        }
        .wind{
            width: 40px;
            top: 80px;
            right: 75px;
        }
    }
    .img .show{
        display: block;
        margin: 50px auto 0;
        width: 260px;
        
    }
    em{
        font-size: 20px;
        text-align: center;
        color: #999;
    }
    
}
</style>
