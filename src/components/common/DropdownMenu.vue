<template>
  <div>
    <div class="dropdown" :class="{ opened: isOpen }">
      <div
        type="button"
        class="dropdown-button"
        :class="{ opened: isOpen }"
        @click="onMenuClick"
        v-click-outside="onClickOutside"
      >
        <span>{{ selectedMenuItem }}</span>
        <img
          alt="arrow"
          class="dropdown-button__arrow"
          :class="{ opened: isOpen }"
        />
      </div>
      <div v-show="isOpen" class="dropdown-menu">
        <div
          v-for="(item, index) in menuItems"
          :key="index"
          class="dropdown-menu__item"
          @click="handleClick(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    menuItems: {
      type: Array,
      default: () => {
        return ['주소', '회사'];
      },
    },
  },
  data() {
    return {
      isOpen: false,
      selectedMenuItem: '주소',
    };
  },
  methods: {
    onMenuClick() {
      this.isOpen = !this.isOpen;
    },
    onClickOutside() {
      this.isOpen = false;
    },
    handleClick(item) {
      this.selectedMenuItem = item;
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/dropdownMenu.scss';
</style>
