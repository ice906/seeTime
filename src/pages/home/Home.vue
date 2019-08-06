<template>
<div class="page" id="home">
    <span class="terms">二十四节气</span>
    <span class="detial">详情</span>
    
</div>
</template>

<script>
/* import footer from '../../components/footer'
export default {
    components: {
        [footer.name]: footer
    }
} */
</script>

<style lang="scss" scoped>
#home{
    border:1px solid transparent;
    position: relative;
    height: 100%;
    color: #fff;

    span{
        display: block;
        position: absolute;
        background-color: rgb(145, 145, 145);
    }
    .terms{
        text-align: center;
        line-height: 1.7rem;
        width: 1.875rem;
        padding: .56rem;
        border-radius: .425rem;
        top: 13%;
        left: 45%;
    }
    .detial{
        padding: .5rem .2rem;
        border-radius: 1.5rem;
        bottom: 22%;
        right: 7%;
    }
}
</style>
