import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
    // nuxtApp.provide(
    //     "axios",
    //     axios.create({
    //         baseURL: "https://jsonplaceholder.typicode.com",
    //     }),
    // );
    console.log("Axios instance added to the app");
});
