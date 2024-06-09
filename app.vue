<template>
    <NuxtLayout>
        <div class="bg-gray-100 min-w-screen min-h-screen flex items-center justify-center py-8 px-40" >
            <div class="w-screen h-[90vh] bg-white shadow-xl rounded-lg flex flex-col justify-center" >
                <Header />
                <NuxtPage />
            </div>
        </div>
    </NuxtLayout>
</template>


<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* .layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
} */
</style>