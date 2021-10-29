<template>
  <div>
    <user-calendar />
  </div>
</template>

<script>
// vue
import { mapActions } from 'vuex'
import UserCalendar from '@/views/calendar/UserCalendar'

// import { onBeforeMount } from 'vue'


export default {
  name: 'Calendar',
  components : {
    UserCalendar,
  },
  setup() {
    // const store = useStore()

    const test = 1
    
    
    // onMount( () => {
    //   // this.getCalendrData()
    //   this.$store.dispatch('getCalendrData')
    // })

    return {
      test,
      // store
    }
  },
  methods: {
    ...mapActions([
      'getCalendarData',
    ]),
  },
  created: () => {
    
  },

  beforeMount: () => {
    // this.getCalendrData()
    this.$store.dispatch('getCalendrData')
    // this.store.dispatch('getCalendarData')
  }
}
</script>

<style>

</style>