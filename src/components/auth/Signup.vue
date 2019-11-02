<template>
  <div class="signup container">
    <form @submit.prevent="signup"  class="card-panel">
      <h2 class="center deep-puple-text">Sign Up</h2>
      <div class="field">
        <label for="email">Email</label>
        <input type="text" name="email" v-model="email">
      </div>
        <div class="field">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="field">
        <label for="alias">Alias</label>
        <input type="text" name="alias" v-model="alias">
      </div>
      <p v-if="feedback" class="red-text center">{{feedback}}</p>
      <div class="field center">
        <button class="btn deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>

  import slugify from 'slugify';
  import db from '@/firebase/init';
    export default {
        name: "Signup",
        data(){
            return{
                email : null,
                password : '',
                alias : '',
                feedback : null,
                slug : null
            }
        },
        methods:{
            signup(){
              if (this.alias){
                 this.slug = slugify(this.alias, {
                    replacement : '-',
                    remove : /[$*_+~.()'"!\-:@]/g,
                    lower : true
                 });
                let ref = db.collection('users').doc(this.slug);
                  ref.get().then(doc => {
                      if (doc.exists){
                          this.feedback = 'This alias is exists'
                      }else {
                          this.feedback = 'this alias is fee to use'
                      }
                  })
              }else {
                  this.feedback = "Input Your alias";
              }
            }
        }
    }
</script>

<style scoped>
.signup{
  max-width: 400px;
  margin-top: 60px;
}

  .signup h2{
    font-size: 2.4em;

  }

  .signup .field{
    margin-bottom: 16px;
  }
</style>
