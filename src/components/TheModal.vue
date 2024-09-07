<script setup>
  defineProps({
    show: Boolean,
  });
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-150"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
  >
    <div class="modal-mask" v-if="show">
      <div class="modal-container">
        <header>
          <slot name="headaer">default header</slot>
        </header>
        <div>
          <slot name="default">Main content</slot>
        </div>
        <footer>
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>

</template>

<style scoped>
.modal-mask{
  position: fixed;
  inset: 0;
  background: #00000088;
  display: grid;
  place-items: center;
}
.modal-container{
  background: var(--vt-c-black);
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}
.modal-container footer{
  font-size: 14px;
  border-top: 1px solid var(--vt-c-black-mute);
  padding-top: 5px;
}
footer button{
  background: var(--vt-c-black-mute);
  border-radius: 20px;
  padding: 0 1rem;
}
footer button:hover{
  background: var(--vt-c-black-soft);
}
.modal-container header + div {
  padding-bottom: 1rem;
}
</style>