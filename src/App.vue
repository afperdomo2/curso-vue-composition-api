<template>
  <div>
    <button @click="show = !show">Menu</button>
    <Transition name="fade">
      <NavMenu v-show="show" />
    </Transition>
    <hr />

    <ModalExample />
    <hr />

    <p>{{ textoBase }}</p>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
import ModalExample from "./components/ModalExample.vue";
import base from "./mixins/base";

export default {
  name: "App",
  mixins: [base],
  components: {
    NavMenu,
    ModalExample,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*
  Las transiciones tienen 2 estados

  Enter => Al entrar en la transición
  Leave => Al salir de la transición

  Cada estado tiene 3 clases:
  - from   = Al iniciar el estado
  - activa = Al encontrarnos ya en el estado
  - to     = Al finalizar el estado

  Documentación: https://vuejs.org/guide/built-ins/transition.html#the-transition-component
*/

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
</style>
