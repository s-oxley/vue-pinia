<template>
  <button :class="['btn btn-circle btn-secondary fixed', props.position]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
const props = withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
});
defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style scoped>
@reference "tailwindcss";

.top-left {
  @apply top-10 left-10;
}
.top-right {
  @apply top-10 right-10;
}
.bottom-left {
  @apply bottom-10 left-10;
}
.bottom-right {
  @apply bottom-10 right-10;
}
</style>
