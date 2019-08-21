<template>
<div class="footer">
    <ul>
        <router-link v-for="item in homeList" :key="item.id" :to="item.path">
            <em :style="{backgroundImage:'url('+item.bgImage+')'}"></em>
            <i>{{item.count}}</i>
        </router-link>
    </ul>
    <router-link to="/setting/mine">
        <span></span>
    </router-link>
</div>
</template>

<script>
export default {
    name: 'see-bottom',
    data(){
        return {
            homeList: [
                {id:1, count:8, bgImage:'/images/home/today_like_icon@3x.png', path:'/home/thumbs'},
                {id:2, count:2, bgImage:'/images/home/today_collect_icon@3x.png', path:'/home/collection'},
                {id:3, count:8, bgImage:'/images/home/today_comment_icon@3x.png', path:'/home/comment'},
                {id:4, count:'', bgImage:'/images/home/today_share_icon@3x.png', path:'/home/share'}
            ]
        }
    },
    computed: {
        
    },
    methods: {
        //获取通知中心数据
        NoticCenter(){
            this.$store.dispatch('footer/requestNoticCenter');
        }
        //
    },
    created () {
        this.NoticCenter();
    }
}
</script>

<style lang="scss" scoped>
.footer{
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 5%;
    color: #fff;
    ul{
        margin-left: 10%;
        display:flex;
        a{
            margin-right: 3%;
            display: flex;
            em,i{
                width: 18px;
                height: 17px;
            }
            em{
                background-size: cover;
                background-repeat: no-repeat;
            }
        }
    }
    span{
        background: url('/images/home/today-photo@3x.png') no-repeat;
        background-size: cover;
        position: absolute;
        width: 51px;
        height: 50px;
        right: 10%;
        bottom: 0;
    }
}
</style>
