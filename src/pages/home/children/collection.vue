<template>
<div class="home-collection page subpage">

    <div class="back" @click="backAction"></div>

    <div class="tip">
        <em></em>
        <i></i>
    </div>
    <div class="user">
        <em>LADYDOG</em>
        <i></i>
    </div>
    <div class="content">
        <ul>
            <li v-for="item in contentList" :key="item.content">
                <div class="date">
                    <em>{{item.month}}</em>
                    <i>{{item.day}}</i>
                </div>
                <div class="information">
                    <em>{{item.message}}</em>
                    <i>{{item.today}}</i>
                </div>
                <div class="img">
                    <img :src=item.logo alt=""/>
                </div>
            </li>
        </ul>
    </div>
    <div class="nomore">
        <em></em>
        <i>没有更多了</i>
    </div>

</div>
</template>

<script>
export default {
    data () {
        return {
            contentList:[
                {month:"07", day:12, message:"山有木兮木有枝，五月君兮君不知", today:"北野武", logo:"/images/login_status_collection/icon_collect_article@3x.png"},
                {month:"07", day:23, message:"山有木兮木有枝，五月君兮君不知", today:"北野武", logo:"/images/login_status_collection/icon_collect_map@3x.png"},
            ]
        }
    },
    methods: {
        backAction(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
.home-collection{
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
    .tip{
        margin-top: 44px;
        height: 25px;
        text-align: right;
        em{
            background: url('/images/unlogged_status/icon_collect_setup@3x.png') no-repeat;
        }
        i{
            background: url('/images/unlogged_status/icon_collect_inform@3x.png') no-repeat;
        }
        
        em,i{
            float: right;
            width: 25px;
            height: 25px;
            background-size: 100%;
            margin-right: 20px;
        }
    }
    .user{
        margin-top: 32px;
        display: flex;
        align-items: center;
        em{
            flex: 1;
            padding-left: 40px;
            font-size: 24px;
            font-weight: 700;
        }
        i{

            width: 55px;
            height: 55px;
            margin:0 50px;
            background: url('/images/login_status_collection/login_user@3x.png') no-repeat;
            background-size: cover;
        }
    }
    .content{
        margin-top: 50px;
        li{
            background: url('/images/login_status_collection/Gradient box1@3x.png') no-repeat;
            background-size: cover;
            margin-bottom: 2px;
            display: flex;
            padding: 10px 40px;
            color: #fff;
            border: 1px solid ccc;
            .date{
                width: 38px;
                height: 38px;
                background: url('/images/home_to_right/today-line@3x.png') no-repeat;
                background-size: cover;
                em{
                }
                i{
                    float: right;
                }

            }
            .information{
                flex: 1;
                margin-left: 20px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                em{
                    margin-bottom: 5px;
                }
            }
            .img{
                flex: 1;
                text-align: right;
                margin: auto 0;
                img{
                    width: 22px;
                    height: 22px;
                }
            }
        }
    }
    .nomore{
            em{
                width: 60px;
                height: 100px;
                margin: 50px auto 35px;
                background: url('/images/login_status_collection/img_nomore@3x.png') no-repeat;
                background-size: cover;
            }
            i{
                text-align: center;
                color: #999;
                font-size: 20px;
            }
        }
}
</style>
