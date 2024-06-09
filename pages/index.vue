<script setup>
    const showMessage = ref(false);
    const showLogo = ref(false);
</script>

<template>
    <div class="mx-auto w-full rounded-lg h-full flex flex-col items-center gap-2">
        <h1 class="p-2 text-4xl font-semibold h-fit text-emerald-600 text-center"> Homepage Nuxt 3
        </h1>

        <!-- <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/users">Users</NuxtLink>
        </nav> -->

        <button @click="showMessage = !showMessage"
            class="p-2 bg-emerald-500 text-white rounded-lg">
            {{ showMessage ? 'Hide message' : 'Show message' }}
            </button>
        <LazyMessage v-if="showMessage" />


        <button @click="showLogo = !showLogo"
            class="p-2 bg-indigo-500 text-white rounded-lg">
            {{ showLogo ? 'Hide Logo' : 'Show Logo' }}
        </button>
        <nuxt-img
            v-if="showLogo"
            src="/img/logo.png"
            sizes="100vw sm:50vw md:400px"
        />

    </div>
</template>

<style scoped lang="scss"></style>
