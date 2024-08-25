<script setup>

import {useFlash} from "@/composables/useFlash.js";

let { flash } = useFlash();


</script>

}

<template>
  <main>
    <p>
      <button @click="flash('Yay ! ','It works', 'info')">Click me</button>
    </p>
  </main>
</template>
