<script setup>
  import {useTeamStore} from "@/Stores/TeamStore.js";
  import AddMemberModal from "@/components/Teams/AddMemberModal.vue";
  let team = useTeamStore();
</script>

<template>
  <header class="flex justify-between">
    <div>
      <AddMemberModal />
    </div>

    <div>
      <h3 class="inline-flex items-center text-3xl relative gap-4">
        <div class="w-8">
          <img src="../../assets/smile.jpg" alt="" class="mr-2 w-full"/>
        </div>

        {{ team.name }} team
        <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">{{team.spots}}</div>
      </h3>
    </div>
  </header>
</template>

<style scoped>

</style>