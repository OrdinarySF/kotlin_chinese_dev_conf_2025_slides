<script setup lang="ts">
const props = withDefaults(defineProps<{
  background?: string
}>(), {
  background: '/bg-end.png',
})
</script>

<template>
  <div
    class="slidev-layout end"
    :style="{
      backgroundImage: `url(${background})`,
    }"
  >
    <!-- 标题区域（左下角） -->
    <div class="title-area">
      <slot />
    </div>

    <!-- Logo 区域（最底部） -->
    <div class="logo-area">
      <img src="/jetbrains-logo.png" class="h-10" alt="JetBrains" />
      <img src="/kotlin-logo.png" class="h-10" alt="Kotlin" />
      <span class="text-white text-xl font-medium font-['Montserrat']">Kotlin</span>
    </div>
  </div>
</template>

<style scoped>
.end {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.title-area {
  position: absolute;
  bottom: 6rem;
  left: 0;
  padding: 0 3rem;
  color: white;
}

.title-area :deep(h1) {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  color: white;
}

.logo-area {
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
</style>
