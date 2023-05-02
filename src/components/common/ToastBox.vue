<template>
  <div v-if="isShow" class="toast">{{ message }}</div>
</template>

<script>
import EventBus from '@/utils/eventBus';

export default {
  name: 'ToastBox',
  props: {
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      message: '',
      isShow: false,
    };
  },
  methods: {
    close() {
      setTimeout(() => {
        this.isShow = false;
      }, this.duration);
    },
  },
  mounted() {
    EventBus.$on('onToastShow', (message) => {
      this.isShow = true;
      this.message = message;
      this.close();
    });
  },
  beforeDestroy() {
    EventBus.$off('onToastShow');
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/toastBox.scss';
</style>
