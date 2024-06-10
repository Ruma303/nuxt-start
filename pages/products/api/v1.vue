<script setup>
const {data} = await useAsyncData('getAllFakeStore',
    async () => {
        const [products, carts, users] = await Promise.all([
            $fetch('https://fakestoreapi.com/products'),
            $fetch('https://fakestoreapi.com/carts'),
            $fetch('https://fakestoreapi.com/users'),
        ]);
        return {products, carts, users};
    }
)
console.log(data);
</script>


<template>
    <div>
        <h1>Products</h1>
        <ul>
            <li v-for="product in data.products" :key="product.id">
                {{ product.title }}
            </li>
        </ul>
        <h1>Carts</h1>
        <ul>
            <li v-for="cart in data.carts" :key="cart.id">
                {{ cart.id }}
            </li>
        </ul>
        <h1>Users</h1>
        <ul>
            <li v-for="user in data.users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>
