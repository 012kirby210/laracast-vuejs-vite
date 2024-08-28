<script setup>

defineProps({
  modelValue: String
});

const emit = defineEmits(["update:modelValue"]);

function onTabPress(e) {
  let textarea = e.target;


  let val = textarea.value,
      start = textarea.selectionStart,
      end = textarea.selectionEnd;

  textarea.value = val.substring(0,start) + "\t" + val.substring(end);

  textarea.selectionStart = textarea.selectionEnd = start + 1;

}

</script>

<template>
  <textarea
      @keydown.tab.prevent="onTabPress"
      @keyup="emit('update:modelValue',String($event.target.value))"
      v-text="modelValue" />
</template>

<style scoped>

</style>