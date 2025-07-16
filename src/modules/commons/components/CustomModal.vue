import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
<template>
  <dialog class="modal" :open="props.open">
    <div class="modal-box z-5">
      <div class="border-b border-blue-500">
        <slot name="header" />
      </div>
      <div class="modal-action flex flex-col">
        <form method="dialog ">
          <slot name="body" />
          <div class="flex justify-end mt-8">
            <button class="btn" @click="$emit('close')">Cerrar</button>
          </div>
        </form>
      </div>
    </div>
    <!-- <div
      v-if="props.open"
      class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-40 w-screen h-screen"
    /> -->
  </dialog>
</template>

<script setup lang="ts">
interface Props {
  open: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  open: false,
});

defineEmits<{
  (e: 'close'): void;
}>();
</script>
