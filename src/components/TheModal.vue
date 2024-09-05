<script setup>
  defineProps({
    show: Boolean,
  });
</script>

<template>
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <header>
        header
      </header>
      <div>
        Main
      </div>
      <footer>
        Footer
      </footer>
    </div>
  </div>

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
}
</style>