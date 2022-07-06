<template>
  <h1>Composition API</h1>
  <p>{{ text }} - Contador: {{ counter }}</p>
  <p>
    <b>Nombre:</b>
    {{ persona.nombre }}
    <b>Edad:</b>
    {{ persona.edad }}
  </p>
  <input type="text" v-model="persona.nombre" />
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";

export default {
  setup() {
    // Refs
    // Sirve para agregar reactividad a tipos de datos primitivos
    // Ejemplo: String, Number, Boolean, etc
    const text = ref("Hola vue");
    const counter = ref(0);

    // Reactive
    // Sirve para agregar reactividad a objetos
    const persona = reactive({
      nombre: "Felipe",
      edad: 20,
    });

    setInterval(() => {
      counter.value++;
    }, 5000);

    // Watchers
    // Con refs
    watch(counter, (actual, anterior) => {
      console.log(actual, anterior);
    });
    // Con reactive
    watch(
      () => persona.nombre,
      (actual, anterior) => {
        console.log("Nombre actual:", actual, "Nombre anterior:", anterior);
      }
    );

    // Hooks
    onMounted(() => {
      counter.value = 100;
      console.log("mounted Composition API");
    });

    return {
      text,
      counter,
      persona,
    };
  },
};
</script>
