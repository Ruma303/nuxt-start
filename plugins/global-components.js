// plugins/global-components.js
import Logo from "~/components/Header/Logo/index.vue";
import Navbar from "~/components/Header/Navbar/index.vue";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("LogoComponent", Logo);
    console.log("Global Logo component added");

    nuxtApp.vueApp.component("NavbarComponent", Navbar);
    console.log("Global Navbar component added");
});
