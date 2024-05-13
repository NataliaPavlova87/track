<template>
    <li class="px-2 py-5 border-t-2 relative">
        <a href="" :class="trackItemClasses" class="px-2 py-1 rounded-md absolute -top-4 left-1/2 -translate-x-1/2">
            {{ trackItem.hour }}:00
        </a>
    </li>
</template>

<script setup lang="ts">
    import { type TrackItem } from '@components/trak/interfaces'

    interface Props {
        item: TrackItem
    }

    const props = defineProps<Props>()

    const trackItem = computed(() => props.item)

    const hourNow = new Date().getHours()

    const trackItemClasses = computed(() => unref(trackItem).hour === hourNow ? 'bg-violet-800 text-white' : 'bg-slate-300')
</script>
