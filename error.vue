<script setup lang="ts">
defineProps(['error']);
</script>

<template>
<div class="bg-gray-100 min-w-screen min-h-screen flex items-center justify-center py-8 px-40" >
    <div class="w-3/5 h-[90vh] bg-white shadow-xl rounded-lg flex flex-col items-center p-2" >
        <h1 class="mt-2 p-2 text-4xl font-semibold h-fit text-red-500 text-center">
            Error
        </h1>
        <NuxtLink to="/"
            class="p-2 rounded-lg min-w-52 bg-emerald-500 text-white text-center">
            Go back home</NuxtLink>
        <p class="rounded-lg text-center text-black"> Status: <span class="text-red-500 ms-2">
        {{ error.statusCode }}</span> </p>
        <p class="rounded-lg text-center text-black"> Message: <span class="text-red-500 ms-2">
        {{ error.message }}</span> </p>

        <div class="collapse bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            Expand full error
          </div>
          <div class="collapse-content">
            <p class="rounded-lg">
                <pre>
                    <span class="text-red-500 ms-2">{{ error }}</span>
                </pre>
            </p>
          </div>
        </div>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>
