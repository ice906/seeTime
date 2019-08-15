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

</style>
