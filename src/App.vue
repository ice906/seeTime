<template>
<div id="app">
  <router-view></router-view>
  <see-bottom></see-bottom>
</div>
</template>

<script>
import footer from './components/footer'
export default {
    components: {
        [footer.name]: footer
    }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  background-color: rgb(198, 198, 198);
}
</style>
