<template>
    <div class="page subpage" id="wrap">

        <router-link to="/home">
            <div class="enter">enter</div>
        </router-link>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#wrap{
    background: url('/images/home/banner@3x.png') no-repeat;
    background-size: cover;
    .enter{
        position: absolute;
        bottom: 0;
        left: 0;
    }
}
</style>
