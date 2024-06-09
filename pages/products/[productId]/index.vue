<script setup>
definePageMeta({
    layout: "products",
});

const route = useRoute();
const productId = ref(route.params.productId);

const { data: product, refresh,  pending,} = useFetch(
    () => productId.value ? `https://fakestoreapi.com/products/${productId.value}` : null,
    { immediate: true },
);

watch(() => route.params.productId,
    (newProductId) => {
        productId.value = newProductId;
        if (productId.value && refresh) {
            refresh();
        }
    },
);

onMounted(() => {
    if (productId.value && refresh) {
        refresh();
    }
});
</script>

<template>
    <div
        v-if="product"
        class="mx-auto mt-6 p-4 bg-white w-3/5 grid grid-cols-2 gap-3 items-center justify-center"
    >
        <figure>
            <img
                v-if="product.image"
                :src="product.image"
                :alt="product.title"
                class="w-full max-h-64 object-contain object-center"
            />
        </figure>
        <article class="flex flex-col gap-4">
            <h1 class="card-title text-4xl text-violet-500">
                {{ product.title }}
            </h1>
            <p
                v-if="product.description"
                class="text-md text-slate-600 hover:text-clip"
            >
                {{ product.description ?? "" }}
            </p>
            <div
                v-if="product.price"
                class="card-actions flex items-center justify-between"
            >
                <span class="text-xl font-semibold text-violet-600">
                    Price:
                    {{ product.price ? `${product.price} $` : null }}</span
                >
                <button class="btn btn-primary hover:text-white">
                    Buy Now
                </button>
            </div>
            <NuxtLink
                to="/products"
                class="bg-indigo-500 px-4 p-2 text-white w-fit rounded-md"
            >
                Go back to products</NuxtLink
            >
        </article>
    </div>
    <div v-else class="flex flex-col gap-2 p-4 items-center">
        <p class="text-red-400 text-center">
            Product {{ productId }} not found
        </p>
        <NuxtLink
            to="/products"
            class="bg-indigo-500 px-4 p-2 text-white w-fit rounded-md"
        >
            Go back to products</NuxtLink
        >
    </div>
</template>
