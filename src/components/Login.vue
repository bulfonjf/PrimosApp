<template>
  <div id="login">
    <h3>Login</h3>
    <button id="b-loggin-google" v-on:click="login()">Google</button>
  </div>
</template>

<script>
import firebase from '../firebase/firebaseInit';


export default {
  name: 'Login',
  data() {
    return {};
  },
  created() {
    console.log(`user: ${firebase.auth().currentUser}`);
  },
  methods: {
    login: () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(`result.user: ${result.user.displayName}`);
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
