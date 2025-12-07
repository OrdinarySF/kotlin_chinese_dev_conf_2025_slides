<script setup lang="ts">
const props = withDefaults(defineProps<{
  background?: string
}>(), {
  background: '/bg-section.png',
})
</script>

<template>
  <div class="slidev-layout section">
    <!-- 背景图区域（上方） -->
    <div
      class="bg-area"
      :style="{
        backgroundImage: `url(${background})`,
      }"
    />

    <!-- 标题区域（左下角） -->
    <div class="title-area">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #bfbfbf;
  overflow: hidden;
}

.bg-area {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 75%;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
}

.title-area {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 3rem;
  color: white;
}

.title-area :deep(h1) {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  color: white;
}
</style>
