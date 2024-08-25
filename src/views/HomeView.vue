<script setup>

import {useStorage} from '@/composables/useStorage.js';

let food = useStorage('food', 'salad');
let age = useStorage('age');

</script>

}

<template>
  <main>
    <p>
      what is your favorite food? <input type="text" v-model="food" />
    </p>
    <p>
      how old are you <input type="text" v-model="age"/>
    </p>
  </main>
</template>
