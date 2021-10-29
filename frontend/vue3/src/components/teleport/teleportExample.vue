<template>
  <div>
    <teleport to="#destination">
      <!-- 자식 엘리먼트 접근 -->
      <VModal ref="modal">
        modal content
      </VModal>
    </teleport>
  </div>
</template>

<script>
import VModal from "./VueModal";
import { ref } from "vue";
export default {
  components: {
    VModal
  },
  setup() {
    const disableTeleport = ref(false);
    const modal = ref(null);
    function showModal() {
      // VMmodal.vue에 접근하여 show 함수 실행
      modal.value.show();
    }
    return {
      disableTeleport,
      modal,
      showModal
    };
  }
};
</script>
