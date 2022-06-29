<template>
  <div>
    <div>
      <h1>{{ text }}</h1>
      <input type="text" v-model="text" />
    </div>
    <hr />
    <button @click="toggle">Modal</button>
    <!--
      Teleport
      Renderiza el contenido dentro del componente <Teleport>, en
      otra parte del DOM, en este caso en el Body
    -->
    <Teleport to="body">
      <div v-show="show" class="modal">
        <h1>Titulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
          sunt?
        </p>
        <button @click="toggle">Cerrar</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Vue Lifecycle",
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
  // Ciclo de vida de un componente en Vue
  // https://vuejs.org/api/options-lifecycle.html
  beforeCreate() {
    // Se llama cuando la instancia se inicializa, después de que las props se resuelven
    // y antes de procesar opciones como data() o computed
    console.log("beforeCreate", this.$data, this.$el);
  },
  created() {
    // se llama cuando la instancia ha terminado de procesar todas las opciones relacionados
    // con el estado, como lo son: datos reactivos, propiedades computadas, métodos y observadores,
    // pero aún no comienza la fase de montado y la función $el aún no esta disponible
    console.log("created", this.$data, this.$el);
  },
  mounted() {
    // Se llama cuando el componente ha sido montado, pero no existen nodos en el DOM aún, pero
    // están a punto de ser ejecutado el render el DOM por primera vez, no se llama si usamos
    // renderizado del lado de servidor.
    console.log("mounted", this.$data, this.$el);
  },
  beforeUpdate() {
    // Se llama justo cuando el componente esta por actualizar su árbol del DOM, debido a un cambio
    // reactivo. Este hook se puede usar para acceder al DOM justo cuando Vue esta por hacer un cambio.
    console.log("beforeUpdate", this.$data, this.$el);
  },
  updated() {
    // Se llama justo cuando el componente ha sido actualizado por un cambio en su estado, En caso del
    // padre su método se llamará cuando los métodos de sus hijos hayan terminado. Es importante tener
    // cuidado si no somos precavidos podemos provocar ciclos de renderizado infinito.
    console.log("updated", this.$data, this.$el);
  },
  beforeUnmount() {
    console.log("beforeUnmount", this.$data, this.$el);
  },
  unmounted() {
    console.log("unmounted", this.$data, this.$el);
  },
};
</script>
