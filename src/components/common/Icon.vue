<template>
  <div class="ts-icon">
    <img
      v-if="icon === 'email'"
      :src="require(`../../assets/icon_email.${getExtension}`)"
      alt
    >
    <img
      v-else-if="icon === 'close'"
      :src="require(`../../assets/icon_close.${getExtension}`)"
      alt
    >
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      default: "",
      required: true
    },
    notSvg: {
      default: false
    }
  },
  computed: {
    getExtension() {
      return this.notSvg ? "png" : "svg";
    }
  }
};
</script>

<style>
</style>
