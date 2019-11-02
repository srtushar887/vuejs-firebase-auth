<template>
    <div class="navbar">
      <nav class="deep-purple darken-1">
        <div class="container">
          <a href="" class="brand-logo">Map Chat</a>
          <ul class="right">
            <li><router-link :to="{name : 'Signup'}">Sign Up</router-link> </li>
            <li><a href="">Login</a> </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "Nabvar",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
