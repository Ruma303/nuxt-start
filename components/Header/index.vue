<script setup>
import logo_image from "@@/img/logo.png";
</script>

<template>
    <header
        class="w-full grid grid-cols-3 items-center shadow-md shadow-gray-200 rounded-t-lg p-2"
    >
        <img
            :src="logo_image"
            alt="Nuxt Logo"
            class="mx-auto h-12 place-self-start object-contain object-center"
        />
        <HeaderNavbar />
    </header>
</template>
