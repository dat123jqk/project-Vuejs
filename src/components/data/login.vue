<template>
    <div class="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-8 col-lg-6">
            <div class="card">
              <div class="card-header">
                <div class="card-title">Login User</div>
              </div>
              <div class="card-body">
                <form novalidate @submit.prevent="loginUser">
                  <div class="form-group">
                    <input type="text" 
                    :class="`form-control ${errors.username ? 'is-invalid' : ''}`" 
                    placeholder="username" v-model="username"/>
                    <div class="invalid-feedback">{{ errors.username}}</div>
                  </div>
                  <div class="form-group">
                    <input type="password" 
                    :class="`form-control ${errors.password ? 'is-invalid':''}`" 
                    placeholder="password" v-model="password"/>
                    <div class="invalid-feedback">{{ errors.password}}</div>
                  </div>
                  <button class="btn btn-outline-success form-control">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import validateLoginInput from '../../js/validateLoginInput';
    export default{
        data(){
            return{
              username: "",
              password: "",
              errors: {},
            };
        },
        methods: {
            loginUser() {
                let creden = {
                  username: this.username,
                  password: this.password,
                };
                const {isInvalid, errors} = validateLoginInput(creden); 
                if(isInvalid){
                  this.errors = errors
                } else {
                  this.errors = {};
                  // login codo goes here
                  let IsUsers = localStorage.users;
                  IsUsers = JSON.parse(IsUsers);
                  let usernameIndex = IsUsers.findIndex(
                    (user) => user.username == creden.username);

                  if(usernameIndex > -1){
                  let passwordIndex = IsUsers.findIndex(
                    (user) => user.password === creden.password);

                  if(passwordIndex > -1){
                    this.$router.push("/blog");
                  }else {
                    this.errors.password = "password does not match!"
                  }
                  } else {
                    this.errors.username = "Username does not exits!";
                  }
                }
            },
        },
    };
    
</script>