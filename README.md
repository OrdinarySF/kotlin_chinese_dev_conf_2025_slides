# Kotlin 全栈驱动的脑机接口与智能体未来实践

Kotlin Dev Conf China 2025 演讲幻灯片

## 内容简介

本演讲分享如何基于实际的脑机接口和智能体业务，用 Kotlin 把多语言混杂的系统收拢成一条清晰的链路。以 Zherica.AI 项目为例，讲解工程实践中的经验与解决思路。

## ⭐ 开源项目

### kt2c (KSP-C 转译器)

**🔗 https://github.com/OrdinarySF/kt2c**

本演讲中介绍的 Kotlin → C 转译器。通过 `@CModule`、`@CExport`、`@CFunction` 三个注解，将 Kotlin 算法代码自动转译为 C 代码，实现算法在服务端、客户端、嵌入式（STM32）三端复用。

**算法只写一遍 Kotlin，自动生成 C。**

如果这个项目对你有帮助，欢迎 Star ⭐

## 运行

```bash
# 安装依赖
bun install

# 启动开发服务器
bun run dev

# 构建静态文件
bun run build

# 导出 PDF
bun run export
```

## 技术栈

- [Slidev](https://sli.dev/) - 基于 Markdown 的演示文稿框架

## 许可证

[CC BY 4.0](./LICENSE) - 使用时请注明来源
