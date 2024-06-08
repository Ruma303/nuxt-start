export default defineNuxtPlugin((nuxtApp) => {
    // Aggiunge middleware anonimo
    addRouteMiddleware((to) => {
        if (to.path === "/database") abortNavigation("Forbidden route");
    });
    // Aggiunge middleware globale anonimo
    addRouteMiddleware(
        (to) => {
            if (to.path === "/home") {
                console.log("Redirecting to /");
                return nuxtApp.$router.push("/");
            }
        },
        { global: true },
    );
    // Aggiunge middleware nominato
    addRouteMiddleware("jhonIsNotAllowed", (to) => {
        if (to.params.name === "jhon") abortNavigation("Jhon is not allowed");
    });
});
