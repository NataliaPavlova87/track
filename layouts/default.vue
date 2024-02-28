<template>
    <div class="flex flex-col min-h-screen">
        <Header class="sticky top-0" />
        <div class="min-h-screen">
            <slot />
        </div>
        <Menu class="w-full sticky bottom-0" />
    </div>
</template>

<script lang="ts" setup>
    import Header from '@components/header/Header.vue'
    import Menu from '@components/menu/Menu.vue'
</script>
