<script setup>
  defineProps(
      {
        email: String,
        firstName: String,
        lastName: String,
        status: String
      }
  )

</script>

<template>
  <tr class=" px-12">
    <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
      <img :src="`https://i.pravatar.cc/50?u=${email}`" alt="" class="rounded-xl">
      {{email}}
    </td>
    <td class="text-gray-500 px-6 py-4">{{firstName}} {{lastName}}</td>
    <td class="px-6 py-4">
      <button class="text-green-400 text-xl">
        {{status}}
      </button>
    </td>
  </tr>
</template>

<style scoped>

</style>