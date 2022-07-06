<template>
  <h1>Composition API</h1>
  <p>{{ text }} - Contador: {{ counter }}</p>
  <p>
    <b>Nombre:</b>
    {{ persona.name }}
    <b>Edad:</b>
    {{ persona.age }}
  </p>
  <input type="text" v-model="persona.name" />
</template>

<script>
import { ref, reactive, onMounted } from "vue";

export default {
  setup() {
    // Ref
    // Sirve para agregar reactividad a tipos de datos primitivos
    // Ejmeplo: String, Number, Boolean, etc
    const text = ref("Hola vue");
    const counter = ref(0);

    // Reactive
    // Sirve para agregar reactividad a objetos
    const persona = reactive({
      name: "Felipe",
      age: 20,
    });

    setInterval(() => {
      counter.value++;
    }, 500);

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
