export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Logging from logMiddleware.js");
    // console.log("From: ", from);
    // console.log("To: ", to);
});
