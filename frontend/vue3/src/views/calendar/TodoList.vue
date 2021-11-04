<template>
  <div class="todoList">
    {{ state.mData}}
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  name: "TodoList",

  setup() {
    const store = useStore()
    const state = reactive({
      mData: computed(() => store.getters.getTodayToDoList)
    })    

    return { state }
  }
}
</script>

<style>
.todoList {
  padding: 0 10%;
}

</style>