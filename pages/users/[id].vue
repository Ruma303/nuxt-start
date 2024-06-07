<!-- <script setup>
const route = useRouter();
const id = route.params.id;
// console.log(route.params.id);
const nuxt = useNuxtApp();
// console.log(nuxt);
</script> -->

<script setup>
const route = useRoute();
const id = ref(null);

onMounted(() => {
    id.value = route.params.id;
});

definePageMeta({
    middleware: [
        function (to, from) {
            console.log("middleware before page load");
            console.log("From: ", from);
            console.log("To: ", to);
        },
    ],
});
</script>

<template>
    <div class="mx-auto w-full rounded-lg h-full flex flex-col gap-2">
        <h1 class="mt-2 p-2 text-4xl font-semibold h-fit text-center">
            Wildcard: /{{ id }}
        </h1>
    </div>
</template>

<style scoped lang="scss"></style>
