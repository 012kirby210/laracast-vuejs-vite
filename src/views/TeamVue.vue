<script setup>
import {useTeamStore} from "@/Stores/TeamStore.js";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import TheModal from '@/components/TheModal.vue';
import {ref} from "vue";

let team = useTeamStore();
team.fill();
setTimeout( () => {team.grow(25)}, 2000);

let showModal = ref(false);

</script>

<template>
  <TeamHeader @add="showModal = true"/>
  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />
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

</template>

<style scoped>
  input[type="email"]{
    background: var(--vt-c-black-soft);
  }
  input[type="email"] + button:hover {
    color: var(--vt-c-white-mute);
  }
</style>