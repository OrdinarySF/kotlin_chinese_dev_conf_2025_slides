import {defineShikiSetup} from '@slidev/types'

const kotlinTheme = {
    name: 'kotlin-custom',
    type: 'light' as const,
    colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#000000',
    },
    tokenColors: [
        // 默认 - 黑色
        {
            scope: ['source'],
            settings: {foreground: '#000000'}
        },
        // 关键字 - 紫色 (Kotlin 品牌色)
        {
            scope: [
                'keyword',
                'keyword.control',
                'keyword.other',
                'storage.modifier',
                'storage.type',
                'storage.type.function',
                'keyword.declaration.function',
                'keyword.declaration.interface',
                'keyword.declaration.class',
            ],
            settings: {foreground: '#7F52FF'}
        },
        // 注解 - 黄色
        {
            scope: [
                'meta.annotation',
                'storage.type.annotation',
                'punctuation.definition.annotation',
                'entity.name.type.annotation',
            ],
            settings: {foreground: '#B8860B'}  // 深金黄色
        },
        // 泛型参数 - 灰色
        {
            scope: [
                'entity.name.type.type-parameter',
                'punctuation.definition.typeparameters',
                'meta.type-parameter',
            ],
            settings: {foreground: '#808080'}
        },
        // 符号、标点、运算符 - 黑色
        {
            scope: [
                'punctuation',
                'punctuation.definition',
                'punctuation.separator',
                'punctuation.terminator',
                'punctuation.bracket',
                'punctuation.section',
                'keyword.operator',
                'keyword.operator.comparison',
                'keyword.operator.assignment',
                'keyword.operator.arithmetic',
                'keyword.operator.logical',
                'meta.brace',
            ],
            settings: {foreground: '#000000'}
        },
        // 其他保持黑色
        {
            scope: [
                'entity.name.function',
                'entity.name.type',
                'variable.parameter',
                'variable.other',
                'support.type',
                'support.class',
            ],
            settings: {foreground: '#000000'}
        },
    ]
}

export default defineShikiSetup(() => {
    return {
        themes: {
            light: kotlinTheme,
            dark: kotlinTheme,
        },
    }
})
