<template>
  <div class="modal" v-show="isOpen">
    <div class="modal-content">
      <div class="modal-content-header">
        <span class="close" @click="hide">&times;</span>
      </div>
      <div class="modal-content-body">
        <div class="modal-content-body-1">
          <div class="modal-content-body-1-color">
            <span class="modal-content-body-1-color-box" v-bind:style="{backgroundColor: getCalendarData.bgColor}"></span>
          </div>
          <div class="modal-content-body-1-title">
            <div class="modal-content-body-1-title-title" >
              <span>{{ getCalendarData.title }}</span>
            </div>
            <div class="modal-content-body-1-title-day">
              <span>start : {{ getCalendarData.startDate }}</span>
              <br>  
              <span>end : {{ getCalendarData.endDate }}</span>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    curModal : { type: Object }
  },
  setup() {
    const isOpen = ref(false);
    const hide = () => {
      isOpen.value = false;
    };
    const show = () => {
      isOpen.value = true;
    };

    return { isOpen, hide, show };
  },
  data() {
    return {
    }
  },
  computed: {
    getCalendarData() {
      if (this.isOpen) {
        const { data } = this.curModal
        return {
          'title' : data.title,
          'startDate': data.start,
          'endDate': data.end,
          'bgColor': data.backgroundColor,
          'borderColor': data.borderColor,
          'textColor': data.textColor,
        }
      }
      return {
        'title' : '',
        'startDate': '',
        'endDate': '',
        'bgColor': '',
        'borderColor': '',
        'textColor': '',
      }
    }
  },
  method: {
    
  }
};
</script>

<style>
.modal {
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 1000vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.modal-content {
  background-color: #ffffff;
  margin: 15% auto;
  padding: 20px;
  width: 500px;
  border: 1px solid #888;
}

.modal-content-header {
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
}

.modal-content-body-1 {
  display: flex;
}

.modal-content-body-1-color {
  margin-right: 10px;
}

.modal-content-body-1-color-box {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 20%;
}

.close {
  padding: 10px;
  cursor: pointer;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
}
</style>
