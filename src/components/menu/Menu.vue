<template>
    <nav class="border-t-2 ring-offset-gray-500">
        <ul class="flex">
            <MenuItem
                v-for="(item, itemIndex) in MENU_ITEMS"
                :key="`${item.name}-${itemIndex}`"
                :item="item"
                class="flex-1"
            />
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import { MENU_ITEMS } from '@components/menu/constants/menuItems'
    import MenuItem from '@components/menu/MenuItem.vue'
</script>
