<template>
    <div class="progress">
        <template v-if="true">
            <p class="progress__text">
                Day complete!
            </p>
            <svg class="progress__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M6 10l6 6l6-6l-1.4-1.4l-4.6 4.6l-4.6-4.6z" /></svg>
        </template>
        <template v-else>
            <p class="progress__text">
                Progress 10%
            </p>
            <div class="progress__error" />
        </template>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  @import '@components/progress/styles/progress';
</style>
