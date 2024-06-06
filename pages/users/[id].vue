<script setup>
    const route = useRouter();
    console.log(route.params.id);
</script>

<template>
    <div class="mx-auto">
        <h1 class="p-2 text-4xl font-semibold h-fit">
            Wildcard: {{ $route.params.id }}</h1>
    </div>
</template>

<style scoped lang="scss">
</style>