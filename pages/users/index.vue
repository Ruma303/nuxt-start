<script setup>
const userID = ref(null);
</script>

<template>
    <div class="mx-auto w-full rounded-lg h-full flex flex-col gap-2">
        <h1
            class="mt-2 p-2 text-4xl font-semibold h-fit text-blue-600 text-center"
        >
            All Users
        </h1>
        <div class="flex flex-col items-center gap-4 w-full mx-auto rounded-lg">
            <input
                v-model="userID"
                type="number"
                class="p-2 w-1/2 mx-auto rounded-lg border-2 border-blue-600 focus:outline-none focus:border-blue-400"
                placeholder="Search user by id..."
            />
            <p>
                <NuxtLink
                    v-if="userID"
                    :to="`/users/${userID}`"
                    class="p-2 w-1/2 mx-auto rounded-lg border-2 text-center text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:border-blue-400"
                >
                    Go to user {{ userID }}
                </NuxtLink>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
