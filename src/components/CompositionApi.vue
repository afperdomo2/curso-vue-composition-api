<template>
  <h1>Composition API</h1>

  <slot name="content"></slot>

  <p>{{ text }} - Contador: {{ counter }}</p>
  <p>
    <b>Nombre Completo:</b>
    {{ persona.nombreCompleto }}
    🚹<input type="text" v-model="username" />
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
import { ref, toRefs, reactive, onMounted, watch, computed, inject } from "vue";

export default {
  props: {
    ciudad: String,
    continente: String,
  },
  setup(props, { attrs, expose, slots }) {
    /*
     * Context - attrs
     * Atributos pasados al componente, que no son recibidos en props
     */
    console.log("Attrs =>", attrs.otro);

    /**
     * Context - Solts
     * Un objeto con todas las funciones de renderizado de los templates de Slots
     */
    console.log("Slots =>", slots);

    /*
     * toRefs
     * Convierte todas las propiedades en un objeto simple con propiedades que son referencias.
     * Con esto se le puede dar reactividad todos los props, ya que estos no lo son, en caso de
     * que se necesite
     */
    const { ciudad, continente } = toRefs(props);

    /*
     * toRef
     * Hace lo mismo que toRefs, pero enfocado a una sola propiedad del objeto
     *
     * const ciudad = toRef(props, "ciudad");
     * const continente = toRef(props, "continente");
     *
     */

    // Refs
    // Sirve para agregar reactividad a tipos de datos primitivos
    // Ejemplo: String, Number, Boolean, etc
    const text = ref("Hola vue");
    const counter = ref(0);
    const casa = ref("🐺Stark");
    /*
     * Los props también se podrían volver reactivos usando ref, pero serían más repetitivos
     *
     * const ciudad = ref(props.ciudad);
     * const continente = ref(props.continente);
     */

    const username = inject("username");

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

    // Context - Expose. Puede publicar una variable o un objeto
    expose({
      persona,
      counter,
    });

    return {
      text,
      counter,
      persona,
      username,
      // Computed props
      nombreCompletoMayus: computed(() => {
        return `${persona.nombre} ${persona.apellido} de la casa ${casa.value} ${ciudad.value} (${continente.value})`.toUpperCase();
      }),
    };
  },
};
</script>
