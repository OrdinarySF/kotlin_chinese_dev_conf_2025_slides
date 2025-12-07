---
layout: section
background: /bg-section.png
---

# Part 4：前端架构

<!--
## 演讲稿（Part 4 Section Header）
⏱️ 20:00

接下来看前端架构。
-->

---

# Compose Multiplatform：一份代码，多端运行

<div class="grid grid-cols-[1fr_1.5fr] gap-6">
<div>

### 模块结构

```
composeApp/src/
├── commonMain/     ← 95% 共享代码
│   └── features/
│       ├── chat/
│       ├── bluetooth/
│       └── home/
├── androidMain/    ← 平台胶水
└── iosMain/        ← 平台胶水
```

<br>

**共享内容：**

- ViewModel + StateFlow
- UI 组件 (Compose)
- 网络/存储服务
- 业务逻辑

</div>
<div>

### 共享 ViewModel 示例

```kotlin
// commonMain - Android/iOS 共用
class ChatViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(ChatUiState())
    val uiState: StateFlow<ChatUiState> = _uiState.asStateFlow()

    fun onSendMessage() {
        viewModelScope.launch {
            chatService.sendMessage(text).collect { chunk ->
                _uiState.update { state ->
                    state.copy(messages = state.messages + msg)
                }
            }
        }
    }
}
```

</div>
</div>

> **同一份 ViewModel 代码，Android 和 iOS 直接复用，不用写两遍**

<!--
## 演讲稿（P14 - Compose Multiplatform 多端统一）
⏱️ 20:00 - 21:30

前端用 Compose Multiplatform，核心收益是**一份代码多端运行**。

看左边的目录结构：commonMain 里放的是共享代码，占整个前端代码量的 95% 以上。androidMain 和 iosMain 只放平台胶水代码，比如本地存储用 DataStore 还是 NSUserDefaults。

右边是个真实例子：ChatViewModel。这个 ViewModel 处理聊天消息的发送和接收，用 StateFlow 管理 UI 状态。

重点是：**这份代码写一次，Android 和 iOS 都能跑**。不是什么框架生成的，就是你写的 Kotlin 代码，在两个平台上编译运行。

对于 BCI 这种需要频繁迭代 UI 的场景，不用每个平台改一遍，开发效率直接翻倍。
-->

---

# 原生 Canvas 动画

<div class="grid grid-cols-[1fr_1.2fr_1fr] gap-6">
<div>

### 呼吸动画

```kotlin
Canvas(modifier) {
    rotate(rotation, center) {
        drawCircle(
            color, radius,
            blendMode = BlendMode.Multiply
        )
    }
    drawArc(brush, startAngle, sweepAngle)
}
```

- 6 花瓣设计
- 4 秒呼吸周期
- 外圈进度环

</div>
<div class="flex items-center justify-center">

<img src="/canvas.jpeg" class="h-80 rounded-lg shadow-lg" />

</div>
<div>

### 数据质量可视化

- CH0/CH1 通道质量条
- 缓冲进度指示器
- 频段数据卡片 (δ θ α β γ)

<br>

**技术点：**

- Flow 节流 / 合并
- 实时但不卡 UI

</div>
</div>

<!--
## 演讲稿（P15 - 原生 Canvas 动画）
⏱️ 21:30 - 23:00

代码能复用了，那复用的代码能做什么？

BCI 场景有大量可视化需求：脑电波形、情绪状态、呼吸引导动画。我们用 Compose 的 Canvas API 直接画。

左边是呼吸动画的代码片段，6 个花瓣旋转叠加，外圈有进度环。中间是实际效果。

技术上有个点：EEG 数据每秒 60 帧，不能每帧都刷新 UI。我们用 Flow 的节流和合并，只把有意义的变化推给 Canvas。

这套渲染逻辑也是 commonMain 里的共享代码，Android 和 iOS 效果一致。
-->

---

# 可观测性：Koin + Kotzilla 平台

<div class="grid grid-cols-2 gap-8">
<div>

### 依赖注入 - Koin

**前后端统一使用 Koin**

Module 分层：

- **core module** - 模型/算法
- **infra module** - 网络/存储
- **app module** - 平台相关部分

</div>
<div>

### Kotzilla 可观测性平台

<img src="/koin-insights.png" class="h-48" />

监测各个组件的问题：

- **Dependency Performance**
- **Child Dependency Performance**
- **Background Thread Performance**

</div>
</div>

> **可观测性让复杂的依赖关系变得清晰可调试**

<!--
## 演讲稿（P16 - 可观测性：Koin + Kotzilla）
⏱️ 23:00 - 24:30

功能做出来了，怎么保证系统可维护？

我们前后端统一用 Koin 做依赖注入，按职责分三层 Module。这样不管是前端的 ViewModel 还是后端的 Service，依赖关系都是一套体系。

右边是 Kotzilla 可观测性平台。当系统变复杂，某个组件突然变慢，你很难靠日志定位。Kotzilla 能直接看到每个依赖的性能数据，哪里慢一目了然。

这对于多模块、多平台的项目特别有用，出问题时不用猜。
-->
