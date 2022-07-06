<template>
  <h1>Composition API</h1>
  <p>{{ text }} - Contador: {{ counter }}</p>
  <p>
    <b>Nombre Completo:</b>
    {{ persona.nombreCompleto }}
  </p>
  <p>
    <b>Nombre Completo Mayúsculas:</b>
    {{ nombreCompletoMayus }}
  </p>
  <p>
    <b>Edad:</b>
    {{ persona.edad }}
  </p>
  <input type="text" v-model="persona.nombre" />
  <input type="text" v-model="persona.apellido" />
</template>

<script>
import { ref, reactive, onMounted, watch, computed } from "vue";

export default {
  setup() {
    // Refs
    // Sirve para agregar reactividad a tipos de datos primitivos
    // Ejemplo: String, Number, Boolean, etc
    const text = ref("Hola vue");
    const counter = ref(0);
    const casa = ref("🐺Stark");

    // Reactive
    // Sirve para agregar reactividad a objetos
    const persona = reactive({
      nombre: "Felipe",
      apellido: "Perez",
      edad: 20,
      nombreCompleto: computed(() => {
        return `${persona.nombre} ${persona.apellido}`;
      }),
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
      // Computed props
      nombreCompletoMayus: computed(() => {
        return `${persona.nombre} ${persona.apellido} de la casa ${casa.value}`.toUpperCase();
      }),
    };
  },
};
</script>
