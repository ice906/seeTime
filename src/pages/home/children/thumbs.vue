<template>
<div class="home-thumbs page subpage">
    <router-link to="/home">
        <div class="back"></div>
    </router-link>
    <div class="thumb-btn">

        <em>通知中心</em>
        <i>
            <router-link to="/home/comment">
                <span>评论</span>
            </router-link>
            <router-link to="/home/thumbs">
                <span>点赞</span>
            </router-link>
        </i>
    </div>
    <div class="content">
        <ul>
            <li v-for="item in thumbList" :key="item.id">
                <img :src=item.img alt=""></img>
                <em>
                    <span>{{item.message}}</span>
                    <span>赞了你的评论</span>
                    <p>{{item.tip}}</p>
                </em>
                <i>{{item.time}}</i>
            </li>
        </ul>
    </div>

</div>
</template>

<script>
export default {
    data () {
        return {
            thumbList:[
                {img:"/images/notification_center/Center_user1@3x.png", message:"穿破的格子衫", tip:"仁者不忧，威者不努，信者不言", time:"今天17.52", id:1},
                {img:"/images/notification_center/Center_user1@3x.png", message:"穿破的格子衫", tip:"仁者不忧，威者不努，信者不言", time:"今天17.52", id:2},
                {img:"/images/notification_center/Center_user1@3x.png", message:"穿破的格子衫", tip:"仁者不忧，威者不努，信者不言", time:"今天17.52", id:3},
                {img:"/images/notification_center/Center_user1@3x.png", message:"穿破的格子衫", tip:"仁者不忧，威者不努，信者不言", time:"今天17.52", id:4},
                {img:"/images/notification_center/Center_user1@3x.png", message:"穿破的格子衫", tip:"仁者不忧，威者不努，信者不言", time:"今天17.52", id:5},
                {img:"/images/notification_center/Center_user1@3x.png", message:"穿破的格子衫", tip:"仁者不忧，威者不努，信者不言", time:"今天17.52", id:6},
                {img:"/images/notification_center/Center_user1@3x.png", message:"穿破的格子衫", tip:"仁者不忧，威者不努，信者不言", time:"今天17.52", id:7},
                {img:"/images/notification_center/Center_user1@3x.png", message:"穿破的格子衫", tip:"仁者不忧，威者不努，信者不言", time:"今天17.52", id:8}
            ]      
        }
    }
}
</script>

<style lang="scss" scoped>
.home-thumbs{
    color: #333;
    background-color: #fff;
    overflow: auto;
    .back{
        position: absolute;
        left: 5%;
        top: 5%;
        background:url('/images/saprophytic_grass_fluorescent/yesterday_return_icon@3x.png') no-repeat;
        background-size: cover;
        width: 15px;
        height: 18px;
    }
    .thumb-btn{
        padding: 20% 8% 0 8%;
        em,i{
            color: #333;
        }
        em{
            float: left;
            font-size: 28px;
            font-weight: 600;
        }
        i{
            line-height: 37px;
            float: right;
            width: 32%;
            display: flex;
            justify-content: space-around;
            span{
                display: block;
                font-size: 14px;
            }
            :nth-child(2) span{
                border-bottom: 2px solid #555;
            }
        }
    }
    .content{
        margin: 70px 12px 0;
        ul{
            height: 200%;
            border-bottom: 1px solid #fff;
        }
        li{
            border-bottom: 1px solid #ccc;
            display: flex;
            padding: 15px 20px;
            white-space:nowrap;          /* 不换行 */
            overflow:hidden;               /* 内容超出宽度时隐藏超出部分的内容 */
            text-overflow:ellipsis;
            img{
                flex: 1;
                height: 41px;
            }
            em{
                flex: 6;
                padding: 10px;
                span,p{font-size: 13px;}
                p{
                    margin-top: 5px;
                    font-size: 14px;
                }
            }
            i{
                flex: 2;
                font-size: 12px;
                padding:12px 0 0 42px;
            }
        }
    }
}
</style>
