import {defineStore} from "pinia";

export let useTeamStore = defineStore('team',
    {
       state: () => {
           return {
               name: '',
               spots: '',
               members: []

           }
       },
        actions: {
           async fill() {
               let r = await import('@/team.json');
               this.$state = r.default;
           },
            grow(spots) {
                this.spots = spots;
            }
        },

        getters: {
           spotsRemaining() {
               return this.spots - this.members.length;
           }
        }

    });

