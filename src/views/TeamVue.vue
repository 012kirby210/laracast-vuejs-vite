<script setup>
import {useTeamStore} from "@/Stores/TeamStore.js";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";

let team = useTeamStore();
team.fill();
setTimeout( () => {team.grow(25)}, 2000);

</script>

<template>
  <TeamHeader />
  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>

<style scoped>
  input[type="email"]{
    background: var(--vt-c-black-soft);
  }
  input[type="email"] + button:hover {
    color: var(--vt-c-white-mute);
  }
</style>