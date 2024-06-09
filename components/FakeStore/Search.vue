<script setup>
const id = ref("");

const fetchProduct = async () => {
    if (id.value.trim()) {
        navigateTo(`/products/${id.value}`);
    }
};

watch(id, (newVal, oldVal) => {
    if (newVal !== oldVal && newVal.trim()) {
        fetchProduct();
    }
});
</script>

<template>
    <div class="px-2 bg-white w-full flex gap-3 items-center justify-center">
        <input
            v-model="id"
            type="text"
            class="rounded-md border border-slate-400 italic px-4 py-2 bg-white w-3/5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Search product here"
            @input="fetchProduct"
        />
        <button
            @click="fetchProduct"
            class="bg-white hover:bg-indigo-500 text-violet-600 hover:text-white px-4 py-2 ring-1 ring-indigo-500 rounded-lg transition-all"
        >
            Search Product
        </button>
    </div>
</template>
