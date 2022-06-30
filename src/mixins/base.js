// Mixins
// https://vuejs.org/api/options-composition.html#mixins
export default {
  data() {
    return {
      textoBase: "Texto del mixin: base",
    };
  },
  created() {
    console.log("Base created");
  },
};
