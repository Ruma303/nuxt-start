<script setup>
definePageMeta({
    layout: 'products'
})
const {
    data: products,
    pending,
    error,
} = await useFetch("https://fakestoreapi.com/products");
// console.log("Pending: ", pending);
// console.log("Products: ", products);
// console.log("Error: ", error);


</script>

<template>
    <div class="mx-auto w-full rounded-lg min-h-full flex flex-col gap-2">
        <h1
            class="mt-2 p-2 text-4xl font-semibold h-fit text-violet-600 text-center"
        >
            Products from Fake Store API
        </h1>
        <section class="flex flex-wrap gap-4 justify-center">
            <template v-if="pending">
                <div class="text-2xl font-semibold text-center text-gray-500">
                    Loading...
                </div>
            </template>

            <template v-else-if="error">
                <div class="text-2xl font-semibold text-center text-red-500">
                    Error: {{ error }}
                </div>
            </template>

            <div v-else class="flex flex-col gap-2 items-center justify-center">
                <div class="flex gap-5 items-center justify-center">
                    <p class="text-center text-gray-500">Total Products: {{ products.length }}</p>
                    <NuxtLink to="/products/create"
                        class="btn btn-outline btn-accent hover:text-white">Create product</NuxtLink>
                    <NuxtLink to="/products/api/v1"
                        class="btn btn-outline btn-info hover:text-white">API</NuxtLink>
                </div>
                <section
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
                >
                    <NuxtLink
                        :to="`/products/${product.id}`"
                        v-for="product in products"
                        :key="product.id"
                        class="card max-w-64 shadow-xl bg-white hover:scale-105 transition-all"
                    >
                        <figure>
                            <img
                                :src="product.image"
                                :alt="product.title"
                                class="w-32 h-32 object-contain object-center"
                            />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title text-lg text-violet-500">
                                {{ product.title }}
                            </h2>
                            <p
                                class="text-md text-slate-600 truncate hover:text-clip"
                            >
                                {{ product.description }}
                            </p>
                            <div
                                class="card-actions flex items-center justify-between"
                            >
                                <span
                                    class="text-lg font-semibold text-violet-600"
                                    >{{ product.price }}$</span
                                >
                                <button class="btn btn-primary hover:text-white">Buy Now</button>
                            </div>
                        </div>
                    </NuxtLink>
                </section>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss"></style>
