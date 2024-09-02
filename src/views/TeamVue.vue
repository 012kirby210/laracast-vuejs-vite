<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
              :disabled = true
      >
        Add member (0 spots left)
      </button>
    </div>

    <div>
      <h3 class="inline-flex items-center text-3xl relative">
        <div class="w-8">
          <img src="../assets/smile.jpg" alt="" class="mr-2 w-full"/>
        </div>

        Smiley teams
        <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">5</div>
      </h3>
    </div>
  </header>

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <table class="table-fixed border-spacing-2 border-separate">
      <thead>
      <th class="text-left-px-6 py-2">Name</th>
      <th class="text-left-px-6 py-2">Email</th>
      <th class="text-left-px-6 py-2">Status</th>
      </thead>
      <tbody>

      <TeamMember first-name="James" last-name="Doe" email="james@doe.com" status="Active"/>
      <TeamMember first-name="Sarah" last-name="Doe" email="sarah@doe.com" status="Active"/>
      <TeamMember first-name="Steven" last-name="Doe" email="steven@doe.com" status="Active"/>
      <TeamMember first-name="Jen" last-name="Doe" email="jen@doe.com" status="Active"/>
      <TeamMember first-name="John" last-name="Doe" email="john@doe.com" status="Active"/>

      </tbody>
    </table>

    <p class="text-right text-gray-600 italic">There are no remaining team spots. Upgrade to add more.</p>
  </div>

  <footer class="mt-12 py-4 text-center">
    <h4 class="font-semibold text-lg">Smiley - 5 members team</h4>
  </footer>

</template>

<style scoped>

</style>