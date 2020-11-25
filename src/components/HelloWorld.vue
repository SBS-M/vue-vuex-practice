<template>
  <div class="hello">
    <h1>{{ mensaje }}</h1>
    <h3>{{ nombreCompleto }}</h3>
    <h2>Amigos</h2>
    <input type="text" v-model="newAmigo">
    <button class="btn btn-success" @click="agregarAmigo">Agregar Amigo</button>
    <ul>
      <li v-for="(amigo, index) of $store.state.amigos" :key="index">
      {{ amigo }}
       <button class="btn btn-danger" @click="eliminarAmigo(index)">Eliminar Amigo</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      newAmigo: ''
    }
  },
  methods: {
    agregarAmigo(){
      /* this.$store.state.amigo = this.newAmigo; */
      this.$store.dispatch('agregarAmigoAction', this.newAmigo);
      this.newAmigo = '';
    },
    eliminarAmigo(index){
      /* this.$store.state.amigo = this.newAmigo; */
      this.$store.dispatch('eliminarAmigoAction', index);
      this.newAmigo = '';
    }
  },
  computed: {
    ...mapGetters([
      'mensaje',
      'nombreCompleto',
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
