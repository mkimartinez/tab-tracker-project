<template>
<div>
  <h1>Register</h1>
  <input type="email" name="email"
  v-model="email"
   placeholder="Input email">
  <br>
  <input type="password" name="password"
  v-model="password"
   placeholder="password">
  <br>
  <button value="submit" @click="register">Register</button>
  <!-- <img src="./assets/logo.png"> -->
</div>
</template>
<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }

  }
}
</script>
<style scoped>
</style>
