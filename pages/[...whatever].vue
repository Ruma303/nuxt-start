<script setup>
const route = useRoute();
const whatEver = ref(route.params.whatever);

onMounted(() => {
    whatEver.value = route.params.whatever;
});
</script>

<template>
    <div class="mx-auto w-full rounded-lg h-full flex flex-col gap-2">
        <h3 class="mt-2 p-2 text-2xl h-fit text-center">
            The path <span class="font-bold">{{ whatEver }}</span> you searched
            for is not found
        </h3>
    </div>
</template>
