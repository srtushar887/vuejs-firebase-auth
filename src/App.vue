<template>
  <div id="app">
    <Nabvar></Nabvar>
    <router-view/>
  </div>
</template>

<script>
  import Nabvar from "./components/layout/Nabvar";
export default {
  name: 'App',
    components:{Nabvar}
}
</script>

<style>

</style>
