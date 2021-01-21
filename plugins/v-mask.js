import Vue from "vue";
import VueMask from "v-mask";

Vue.use(VueMask, {
  placeholders: {
    _: null, // passing `null` removes default placeholder, so `#` is treated as character
    D: /\d/, // define new placeholder
    Я: /[\wа-яА-Я]/ // cyrillic letter as a placeholder
  }
});
