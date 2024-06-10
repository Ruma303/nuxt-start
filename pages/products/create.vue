<script setup>
const { data: newProduct } = await useFetch("products", {
    method: "POST",
    baseURL: "https://fakestoreapi.com",
    body: {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
    },
});

const counter = ref(0);
const nuxtApp = useNuxtApp();

const {
    data: sortedProducts,
    pending,
    status,
    execute,
    clear
} = await useFetch("products", {
    method: "GET",
    baseURL: "https://fakestoreapi.com",
    params: {
        limit: 5,
        sort: "desc",
    },
    //pick: ["id", "title", "image"],
    timeout: 5000,
    server: false,
    lazy: true,
    //immediate: false,
    default: (sortedProducts) => {
        sortedProducts = 'No data available';
        return sortedProducts;
    },
    transform: (sortedProducts) => {
        return sortedProducts.map(product => ({
            ...product,
            title: product.title.toUpperCase(),
            price: product.price.toFixed(2),
        }));
    },
    // watch: false,
    // getCachedData: key => {
    //     return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    // },
});
</script>

<template>
    <section
        v-if="pending || status === 'error'"
        class="flex flex-col items-center gap-4 py-4"
    >
        <h1 v-if="status === 'idle'" class="text-4xl text-center py-4">La richiesta non è stata ancora elaborata</h1>
        <h1 v-else-if="status === 'pending'" class="text-4xl text-center py-4">Loading...</h1>
        <h1 v-else-if="status === 'error'" class="text-4xl text-center py-4">
            Error
        </h1>
        <p class="text-lg text-black text-center">{{ sortedProducts }}</p>
        <button @click="execute" class="btn btn-outline btn-info">
            Fetch data
        </button>
    </section>
    <section v-if="status === 'success'" class="flex flex-col items-center gap-4 py-4">
        <div class="flex items-center justify-center gap-4 py-4">
            <button @click="clear" class="btn btn-outline btn-warning">
                Delete data
            </button>
            <button @click="counter++" class="btn btn-outline btn-secondary">
                Counter: {{ counter }}
            </button>
        </div>
        <article v-text="newProduct" />
        <div class="card w-96 shadow-xl text-black">
            <div class="card-body">
                <h2 class="card-title">{{ newProduct.title }}</h2>
                <p>{{ newProduct.description }}</p>
                <p>{{ newProduct.price }}$</p>
                <p class="text-xl text-indigo-500">{{ newProduct.category }}</p>
            </div>
            <figure>
                <img :src="newProduct.image" :alt="newProduct.title" />
            </figure>
        </div>
        <div class="flex flex-col items-center gap-4">
            <h2 class="text-2xl">Top 5 products</h2>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="product in sortedProducts"
                    :key="product.id"
                    class="card w-80 shadow-xl text-black"
                >
                    <div class="card-body">
                        <img :src="product.image" :alt="product.title" />
                        <p class="text-xl text-indigo-500">{{ product.category }}</p>
                        <h2 class="card-title">{{ product.title }}</h2>
                        <p>{{ product.description }}</p>
                        <p>{{ product.price }}$</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
