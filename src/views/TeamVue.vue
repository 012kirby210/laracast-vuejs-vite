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
  <TheModal :show="showModal"/>
</template>

<style scoped>

</style>