<template>
  <div>
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
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>
