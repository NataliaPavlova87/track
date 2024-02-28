<template>
    <div class="flex items-center relative">
        <NuxtLink to="progress" class="w-full h-full absolute top-0 left-0 z-10" />
        <template v-if="true">
            <p class="pr-1">
                Day complete!
            </p>
            <svg class="w-5 fill-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M6 10l6 6l6-6l-1.4-1.4l-4.6 4.6l-4.6-4.6z" />
            </svg>
        </template>
        <template v-else>
            <p class="pr-2">
                Progress 10%
            </p>
            <div class="w-4 h-4 rounded-full bg-red-600" />
        </template>
    </div>
</template>

<script setup lang="ts">

</script>
