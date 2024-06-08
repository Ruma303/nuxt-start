<!-- <script setup>
const route = useRouter();
const id = route.params.id;
// console.log(route.params.id);
const nuxt = useNuxtApp();
// console.log(nuxt);
</script> -->

<script setup>
const route = useRoute();

definePageMeta({
    middleware: [
        (to) => {
            // Accedere direttamente ai parametri della rotta
            const id = to.params.id;

            // Logica condizionale basata sull'ID della rotta
            if (id === "1") return navigateTo("/");
            if (id === "2") return navigateTo("/about");
            if (id === "3") return abortNavigation();
            if (id === "4") return abortNavigation("Internal Error");

            console.log("middleware after page load");
        },
        (to, from) => {
            console.log("middleware before page load");
            console.log("From: ", from);
            console.log("To: ", to);
        },
    ],
});
const id = ref(route.params.id);
// Osserva i cambiamenti del parametro della rotta e aggiorna la variabile reattiva
watch(
    () => route.params.id,
    (newId) => {
        id.value = newId;
    },
);
</script>

<template>
    <div class="mx-auto w-full rounded-lg h-full flex flex-col gap-2">
        <h1 class="mt-2 p-2 text-4xl font-semibold h-fit text-center">
            Wildcard: {{ id }}
        </h1>
    </div>
</template>

<style scoped lang="scss"></style>
