<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'

const props = withDefaults(defineProps<{
  background?: string
  dim?: boolean
  conference?: string
  footer?: string
}>(), {
  conference: '2025 Kotlin 中文开发者大会',
  footer: 'Developed by JetBrains',
  dim: true,
})

function handleBackground(background?: string, dim = false): CSSProperties {
  if (!background) return {}

  const isColor = background.startsWith('#')
    || background.startsWith('rgb')
    || background.startsWith('hsl')

  if (isColor) {
    return { background }
  }

  return {
    backgroundImage: dim
      ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`
      : `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
}

const style = computed(() => handleBackground(props.background, props.dim))
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <!-- 左上角 JetBrains + Kotlin Logo -->
    <div class="abs-tl m-10 flex items-center gap-3">
      <img src="/jetbrains-logo.png" class="h-8" alt="JetBrains" />
      <img src="/kotlin-logo.png" class="h-8" alt="Kotlin" />
      <span class="text-white text-xl font-medium font-['Montserrat']">Kotlin</span>
    </div>

    <!-- 右上角会议名称 -->
    <div class="abs-tr m-10">
      <span class="text-white text-xl font-bold">{{ conference }}</span>
    </div>

    <!-- 主标题区域 -->
    <div class="mt-1">
      <div class="title-wrapper">
        <slot />
      </div>
      <p class="mt-12 text-gray-400">
        <slot name="speaker" />
      </p>
    </div>

    <!-- 左下角文字 -->
    <div class="abs-bl m-10">
      <span class="text-white text-lg font-medium">{{ footer }}</span>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;
  color: white;
}

.title-wrapper :deep(h1) {
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 1 !important;
  color: white;
  margin: 0;
}

.cover div p {
  font-size: 3.65rem;
  opacity: 1 !important;
  margin-top: 1rem !important;
}
</style>
