<template>
    <header class="flex items-center px-1 pt-1 pb-3 justify-between border-b-2 ring-offset-gray-500">
        <div class="flex items-center">
            <img src="~assets/images/logo.png" alt="Logo" class="w-1/6 max-w-32">
            <h1 class="text-xl font-bold px-1">
                OnTrack
            </h1>
        </div>
        <Progress class="" />
    </header>
</template>
<script setup lang="ts">
    import Progress from '@components/progress/Progress.vue'
</script>
