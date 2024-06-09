<script setup></script>

<template>
    <nav>
        <div class="flex justify-center items-center gap-4">
            <NuxtLink
                to="/"
                class="text-black font-semibold hover:text-emerald-500"
                >Home</NuxtLink
            >
            <NuxtLink to="/about" class="text-black hover:text-emerald-500"
                >About</NuxtLink
            >
            <NuxtLink to="/users" class="text-black hover:text-emerald-500"
                >Users</NuxtLink
            >
        </div>
    </nav>
</template>
