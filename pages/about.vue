<script setup lang="ts">
    definePageMeta({
        layout: "about",
    });
    useHead({
        title: "About Page",
        meta: [
            {
                name: "description",
                content: "This is the about page",
            },
        ],
    });
</script>

<template>
    <div class="mx-auto w-full rounded-lg h-full flex flex-col gap-2">
        <h1 class="mt-2 p-2 text-4xl font-semibold h-fit text-violet-600 text-center">
            About Page
        </h1>
    </div>
</template>

<style scoped lang="scss"></style>