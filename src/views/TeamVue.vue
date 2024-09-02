<script setup>

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
      <tr class="px-12">
        <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
          <img src="https://i.pravatar.cc/50?u=james@doe.com" alt="" class="rounded-xl">
          James Doe
        </td>
        <td class="text-gray-500 px-6 py-4">James Doe</td>
        <td class="px-6 py-4">
          <button class="text-green-400 text-xl">
            Active
          </button>
        </td>
      </tr>

      <tr class="px-12">
        <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
          <img src="https://i.pravatar.cc/50?u=sarah@doe.com" alt="" class="rounded-xl">
          James Doe
        </td>
        <td class="text-gray-500 px-6 py-4">Sarah Doe</td>
        <td class="px-6 py-4">
          <button class="text-green-400 text-xl">
            Active
          </button>
        </td>
      </tr>

      <tr class="px-12">
        <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
          <img src="https://i.pravatar.cc/50?u=steven@doe.com" alt="" class="rounded-xl">
          James Doe
        </td>
        <td class="text-gray-500 px-6 py-4">Steven Doe</td>
        <td class="px-6 py-4">
          <button class="text-green-400 text-xl">
            Active
          </button>
        </td>
      </tr>

      <tr class=" px-12">
        <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
          <img src="https://i.pravatar.cc/50?u=jen@doe.com" alt="" class="rounded-xl">
          James Doe
        </td>
        <td class="text-gray-500 px-6 py-4">Jen Doe</td>
        <td class="px-6 py-4">
          <button class="text-green-400 text-xl">
            Active
          </button>
        </td>
      </tr>

      <tr class=" px-12">
        <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
          <img src="https://i.pravatar.cc/50?u=john@doe.com" alt="" class="rounded-xl">
          James Doe
        </td>
        <td class="text-gray-500 px-6 py-4">John Doe</td>
        <td class="px-6 py-4">
          <button class="text-green-400 text-xl">
            Active
          </button>
        </td>
      </tr>

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