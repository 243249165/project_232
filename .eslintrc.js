// 配置前需做的事情
// sudo npm install -g eslint
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",    // 集成eslint推荐规则 http://eslint.cn/docs/rules/
    "globals": {
        "cc": true,
        "CC_EDITOR": true,
        "Editor": true,
        "CC_JSB": true,
        "jsb": true,
        "G": true,
        "JMC": true,
        "XXTEA": true,
        "MD5": true,
        "wx": true,
        "qttGame": true,
        "MJ": true,
        "ZN": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {  // "always": 0, "warning": 1, "error": 2
        "no-unused-vars": [2, { "args": "none" }], // 禁止未使用过的变量
        "array-bracket-spacing": [2, "never"], // 禁止或强制在括号内使用空格
        // "camelcase": [2, { "properties": "always" }], // 要求使用骆驼拼写法
        "comma-dangle": [2, "never"], // 要求或禁止使用拖尾逗号
        "comma-spacing": [2, { "before": false, "after": true }], // 强制在逗号周围使用空格
        "function-paren-newline": [2, "multiline"], // 强制在函数括号内使用一致的换行
        "indent": [2, 4, {"SwitchCase": 1}], // 强制使用一致的缩进
        "key-spacing": [2, { "afterColon": true }], // 强制在对象字面量的键和值之间使用一致的空格
        "keyword-spacing": [2, { "before": true, "after": true }], // 强制关键字周围空格的一致性
        "linebreak-style": [2, "unix"], // 强制使用一致的换行符风格
        "lines-between-class-members": [2, "always"], // 要求或禁止在类成员之间出现空行
        "no-tabs": 2, // 禁用 tab
        "no-trailing-spaces": [2, { "skipBlankLines": false, "ignoreComments": false }], // 禁用行尾空白
        "no-whitespace-before-property": 2,   // 禁止属性前有空白
        "nonblock-statement-body-position": [2, "below"], // 强制单个语句的位置
        "object-curly-spacing": [2, "never", { "objectsInObjects": true }], // 强制在大括号中使用一致的空格
        "semi": [2, "always"], // 要求或禁止使用分号代替 ASI
        "semi-style": [2, "last"],    // 强制分号的位置
        "quotes": [2, "single", { "allowTemplateLiterals": true }], // 强制使用一致的反勾号、双引号或单引号
        "space-infix-ops": [2, { "int32Hint": false }], // 要求操作符周围有空格
        "space-before-function-paren": [2, "always"], // 强制在 function的左括号之前使用一致的空格
        "spaced-comment": [2, "always"], // 强制在注释中 // 或 /* 使用一致的空格
        "switch-colon-spacing": [2, { "before": false, "after": true }], // 强制在 switch 的冒号左右有空格
        "template-tag-spacing": [2, "never"], // 要求或禁止在模板标记和它们的字面量之间有空格
        "wrap-regex": 2, // 要求正则表达式被括号括起来
        "object-property-newline": [2, { "allowAllPropertiesOnSameLine": true }], //强制将对象的属性放在不同的行上
    }
};