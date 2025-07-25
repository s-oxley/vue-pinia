<template>
  <button :class="['btn btn-primary']" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'click'): void;
}>();
</script>
