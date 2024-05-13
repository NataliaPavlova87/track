<template>
    <li>
        <NuxtLink
            :to="menuItem.href"
            :class="activeClass"
            class="flex flex-col items-center p-2"
        >
            <span v-html="menuItem.icon" />
            <span>
                {{ menuItem.name }}
            </span>
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
    import type { MenuItemData } from '@components/menu/interfaces/menuItem'

    interface Props {
        item: MenuItemData
    }
    const props = defineProps<Props>()

    const menuItem = computed(() => props.item)

    const currentPage = ref()

    const router = useRouter()

    const activeClass = computed(() => ({ 'bg-gray-200 pointer-events-none': unref(currentPage) === unref(menuItem).href }))

    watch(router.currentRoute, () => {
        currentPage.value = router.currentRoute.value.path
    }, { immediate: true })

</script>
