---
layout: default
---

# 总结

<div class="grid grid-cols-[1fr_auto] gap-8 items-start">

<div>

### 今日要点回顾

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 bg-red-50 dark:bg-red-900 rounded">

**问题：多语言架构之痛**

- 技术割裂，协议混乱
- 性能瓶颈，扩展成本高

</div>

<div class="p-3 bg-purple-50 dark:bg-purple-900 rounded">

**方案：Kotlin 全栈**

- 端到端一致性
- 统一 Intent / Model

</div>

<div class="p-3 bg-blue-50 dark:bg-blue-900 rounded">

**前端：CMP + Koin**

- 一份代码多端运行
- Canvas 原生动画

</div>

<div class="p-3 bg-green-50 dark:bg-green-900 rounded">

**后端：Ktor + Koog**

- kRPC + RSocket
- ReAct Agent 编排

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 dark:bg-orange-900 rounded">

**核心创新：KSP-C 转译器** — 算法只写一遍 Kotlin，自动生成 C，部署到服务端 / 移动端 / MCU

</div>

</div>

<div class="flex flex-col items-center">

<img src="/qrcode-wx.jpeg" class="w-40 rounded-lg shadow-lg" />

<div class="text-sm text-gray-500 mt-2">微信交流</div>

</div>

</div>

<!--
演讲稿：
⏱️ 34:00 - 35:00

总结一下今天的内容。

我们从四个层面讲了 Kotlin 全栈的实践：

1. **问题**：多语言、多协议、多份模型导致的割裂和沟通成本，是复杂系统的隐形杀手。

2. **方案**：Kotlin 全栈提供端到端的一致性——从硬件到前端，用一份 Intent / Model 串起整个系统。

3. **前端**：Compose Multiplatform 实现多端统一，Koin + Kotzilla 保障可观测性。

4. **后端**：Ktor 做服务框架，kRPC 和 RSocket 分工明确，Koog Agent 用 ReAct 模式做智能决策。

核心创新是 KSP-C 转译器：算法只写一遍 Kotlin，自动生成 C 代码，可以部署到服务端、移动端、甚至 STM32 MCU。

如果你也在维护多语言系统，不一定要一次性重写，可以先把最核心的 Model 改用 Kotlin 定义一份，然后围绕它慢慢重构。

右边是我的微信二维码，欢迎交流。
-->

---
layout: end
---

# Thanks!<br>Have a<br>Nice Kotlin