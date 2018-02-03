<template>
  <div class="hello">
    <pre>
      {{ dbdata | json }}
    </pre>
  </div>
</template>

<script>
import firebase from '../firebase/firebaseInit'
export default {
  name: 'HelloWorld',
  data() {
    return {
      dbdata: []
    }
  },
  created () {
    const db = firebase.database();
    const self = this;
    db.ref('servicios').on('value', function(response){
      self.dbdata = response;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
