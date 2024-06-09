<script setup>
    const route = useRouter();
    // console.log(route.params.id);
    const nuxt = useNuxtApp();
    // console.log(nuxt);
</script>

<template>
    <div class="mx-auto w-full rounded-lg h-full flex flex-col gap-2">
        <Head>
            <Title>Page of user {{ $route.params.id }}</Title>
            <Meta name="description" :content="title" />
            <Style type="text/css" children="body { background-color: green; }" />
        </Head>

        <h1 class="mt-2 p-2 text-4xl font-semibold h-fit text-center">
            Wildcard: {{ $route.params.id }}
        </h1>
    </div>
</template>

<style scoped lang="scss">
</style>