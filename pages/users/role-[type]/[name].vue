<script setup>
const route = useRoute();

definePageMeta({
    middleware: ["jhonIsNotAllowed"],
});

const userType = ref(route.params.type);
const userName = ref(route.params.name);

watchEffect(() => {
    userType.value = route.params.type;
    userName.value = route.params.name;
});

// onMounted(() => {
//     userType.value = route.params.type;
//     userName.value = route.params.name;
// });
</script>

<template>
    <div class="mx-auto w-full rounded-lg h-full flex flex-col gap-2">
        <h1 class="mt-2 p-2 text-4xl font-semibold h-fit text-center">
            Role: {{ userType }}
        </h1>
        <h3 class="mt-2 p-2 text-3xl font-semibold h-fit text-center">
            User Name: {{ userName }}
        </h3>
    </div>
</template>

<style scoped lang="scss"></style>
