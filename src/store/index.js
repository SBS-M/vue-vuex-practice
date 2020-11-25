import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: 'Vuex desde Cero.',
    nombre: 'Sebastian',
    apellido: 'Salazar',
    amigos: ['Sofia', 'Sebastian'],
    amigo: null
  },
  mutations: {
    agregarAmigo (state, nuevoAmigo) {
      state.amigos = [nuevoAmigo, ...state.amigos];
    },
    eliminarAmigo(state, indexEliminarAmigo) {
      state.amigos.splice(indexEliminarAmigo, 1);
    }
  },
  actions: {
    agregarAmigoAction( context , nuevoAmigo) {
      context.commit('agregarAmigo', nuevoAmigo)
    },
    eliminarAmigoAction( context, indexEliminarAmigo ) {
      context.commit('eliminarAmigo', indexEliminarAmigo)
    }
  },
  modules: {
  },
  getters: {
    mensaje(state) {
      return state.msg
    },
    nombreCompleto(state){
      return `${state.nombre} ${state.apellido}`;
    },
    listAmigos(state){
      return state.amigos
    }
  }
})
