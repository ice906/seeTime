<template>
<div class="footer">
    <ul>
        <li>点赞</li>
        <li>收藏</li>
        <li>评论</li>
        <li>分享</li>
    </ul>
    <span>头像</span>
</div>
</template>

<script>
export default {
    name: 'see-bottom'
}
</script>

<style lang="scss" scoped>
.footer{
    display: block;
    position: absolute;
    width: 100%;
    bottom: 8%;
    color: #fff;
    ul{
        margin-left: 6%;
        display:flex;
        li{
            background-color: rgb(145, 145, 145);
            text-align: center;
            margin-right: 3%;
            padding: .5rem .2rem;
            border-radius: .6rem;
            font-size: .875rem;

        }
    }
    span{
        background-color: rgb(145, 145, 145);
        position: absolute;
        right: 4%;
        top: -75%;
        padding: 1.3rem 1rem;
        border-radius: 2rem;
        font-size: .875rem;
    }
}
</style>
