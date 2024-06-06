<script setup>
import logo_image from "@@/img/nuxt-logo.png"
</script>

<template>
    <div class="mx-auto w-full rounded-lg h-full flex flex-col gap-2">
        <h1 class="p-2 text-4xl font-semibold h-fit text-emerald-600 text-center">
            Homepage Nuxt 3</h1>
            <img :src="logo_image" alt="Nuxt Logo" class="mx-auto h-24" />

        <!-- <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/users">Users</NuxtLink>
        </nav> -->
    </div>
</template>

<style scoped lang="scss">
</style>
