<template>
    <nav class="border-t-2 ring-offset-gray-500 sticky bottom-0">
        <ul class="flex justify-around">
            <li v-for="(item, itemIndex) in MENU_ITEMS" :key="`menu-item--${itemIndex}`">
                <a href="#" class="flex flex-col items-center p-2">
                    <span v-html="item.icon" />
                    <span>
                        {{ item.name }}
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import { MENU_ITEMS } from '@components/menu/constants/menuItems'
</script>
