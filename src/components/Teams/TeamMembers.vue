<script setup>
import team from "@/team.json";
import TeamMember from "@/components/Teams/TeamMember.vue";
</script>

<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
    <th class="text-left-px-6 py-2">Name</th>
    <th class="text-left-px-6 py-2">Email</th>
    <th class="text-left-px-6 py-2">Status</th>
    </thead>
    <tbody>
    <TeamMember v-for="(member, index) in team.members" :first-name="member.firstName" :last-name="member.lastName" :email="member.email" :status="member.status" :key="index"/>
    </tbody>
  </table>
  <p class="text-right text-gray-600 italic" v-show="team.members.length===team.spots">There are no remaining team spots. Upgrade to add more.</p>
</template>

<style scoped>

</style>