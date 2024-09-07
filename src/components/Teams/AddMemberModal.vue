<script setup>
import TheModal from "@/components/TheModal.vue";
import {ref} from "vue";
import {useTeamStore} from "@/Stores/TeamStore.js";

let team = useTeamStore();
let showModal = ref(false);

</script>

<template>
  <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
          :disabled="! team.spotsRemaining"
          @click="showModal = true"
  >
    Add member ({{ team.spotsRemaining }} spots left)
  </button>
  <Teleport to="body">
    <TheModal :show="showModal" @close="showModal=false">
      <template #headaer>
        New header
      </template>
      <template #default>
        <div>Need to add a new member ?</div>
        <form action="" class="my-6">
          <div class="flex gap-2">
            <input type="email" placeholder="Email adress..." class="flex-1 p-2">
            <button>Add</button>
          </div>
        </form>
      </template>
    </TheModal>
  </Teleport>
</template>

<style scoped>

</style>