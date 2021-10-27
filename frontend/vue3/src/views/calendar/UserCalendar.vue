<template>
  <div class=calendar-main>
    <h2>Calendar!</h2>
    <div class='calendar-calwrap'>
      <FullCalendar
        class="calendar-calendar"
        :options="calendarOptions" />
    </div>
    <div class='calendar-todowrap'>
      <TodoList 
        class="calendar-todolist"/>
    </div>
  </div>
</template>

<script>

// Calendar
import '@fullcalendar/core/vdom' // solves problem with Vite
// import FullCalendar, { CalendarOptions, EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/vue3'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

// Component
import TodoList from '@/views/calendar/TodoList'

export default {
  name: "UserCalendar",
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    TodoList
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ 
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin
        ],
        headerToolbar: {
          left: 'prev next today',
          center: '',
          right: 'dayGridMonth timeGridWeek timeGridDay listWeek'
        },
        initialView: 'dayGridMonth',
        dateClick: this.handleClickDate,
        events: [
          { title: 'event 1',
            start: '2021-10-01',
            end: '2021-10-07',
            color: 'yellow',
            textColor:'black',
            extendedProps: {
              // status: 'done',
            }
          },
          { title: 'event 2', date: '2021-10-28' },
          {
            title: 'event 3 add time',
            start: '2021-10-27T18:00:00',
            end: '2021-10-30T18:00:00',
            color: '#156452',
            textColor: 'black',
          }
        ],
        eventColor: 'red', // color default?
        timeZone: "local", // local default
        display: 'list-item',
      }
    }
  },
  methods: {
    handleClickDate: function (arg) {
      alert('check your schedule!' + arg.dateStr)
    }
  }
}
</script>

<style>

  /* calendar 크기는 width 를 통해서 조절한다. %, px 둘 다 된다.*/
  .calendar-calwrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .calendar-calendar {
    height: 100%;
    width: 900px;
  }

</style>