// http://eslint.org/docs/user-guide/configuring
//

// const globalVas = ['$', '_','DF', 'createjs', 'TweenMax', 'THREE', 'd3', 'require', 'window', 'document', 'test', 'expect', 'process', 'describe', 'Velocity']
// const getEslintVarsGlobals = () => {
//     let gObj = {};
//     globalVas.map(v => {
//         gObj[v] = true
//     })
//     return gObj
// }

const eslintConfig = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    // extends: 'vue',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // 强制行的最大长度 默认80个
        "max-len": [1, {
            "code": 150
        }],
        // 变量引号
        "quotes": [1, "single", {
            "allowTemplateLiterals": true
        }],
        // 缩进4个空格 swtich case缩进
        "indent": [2, 4, {
            "SwitchCase": 1,
            "VariableDeclarator": 1
        }],
        // 要求或禁止使用分号代替
        "semi": [0, "always"],
        // 不允许非空数组里面有多余的空格
        "array-bracket-spacing": [2, "never"],
        // 不允许函数括号之间存在空格
        "space-before-function-paren": ["error", "never"],
        // 强制 getter 和 setter 在对象中成对出现
        "accessor-pairs": 1,
        // 强制 要求箭头函数的箭头之前或之后有空格
        "arrow-spacing": 2,
        // 块语句作用域中禁止使用var 先声明再在块里使用
        "block-scoped-var": 2,
        // 大括号风格要求
        "brace-style": [1, "1tbs", {
            "allowSingleLine": true
        }],
        // 对象属性中禁止使用空格 obj[foo ] obj[ 'foo']
        "computed-property-spacing": 2,
        // 要求使用骆驼拼写法
        "camelcase": 0,
        // 对象字面量项尾不能有逗号
        "comma-dangle": [2, "never"],
        // 逗号前后的空格
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        // this别名 that ,self ,me
        "consistent-this": [1, "me"],
        // 要求 switch 语句中有 default 分支
        "default-case": 2,
        // 点号操作符应该和属性在同一行
        "dot-location": [2, "property"],
        // 要求使用 === 和 !==  (比较两个字面量的 、 比较 typeof 的值 、与 null 进行比较 可以)
        "eqeqeq": [1, "smart"],
        // 要求使用函数声明 而不是函数表达式 避免作用域提升
        "func-style": [1, "declaration", {
            "allowArrowFunctions": true
        }],
        // 强制块语句的最大可嵌套深度 最大4层
        "max-depth": 2,
        // 限制函数定义中最大参数个数 4个最多
        "max-params": [2, 5],
        // 要求调用无参构造函数时带括号
        "new-parens": 2,
        // 禁止alert
        "no-alert": 2,
        // 禁止使用 Array 构造函数 因为容易全局层面被重写
        "no-array-constructor": 2,
        // 禁止位操作符
        "no-bitwise": 2,
        // 禁用 arguments.caller 或 arguments.callee
        "no-caller": 2,
        // 禁止箭头函数 中使用 三元表达式
        "no-confusing-arrow": 2,
        // console不禁用
        "no-console": 0,
        // 禁止使用看起来像除法的正则表达式
        "no-div-regex": 2,
        // 禁止debuuger 生产模式中
        "no-debugger": process.env.NODE_ENV !== 'production' ? 0 : 2,
        // 禁止一个模块 重复导入
        "no-duplicate-imports": 2,
        // 禁止 if 语句中 return 语句之后有 else 块
        "no-else-return": 2,
        // 禁止label
        "no-empty-label": 0,
        // 禁止空的块级代码
        "no-empty": 2,
        // 禁eval
        "no-eval": 2,
        // 禁止扩展原生对象
        "no-extend-native": 2,
        // 禁止不必要的函数绑定
        "no-extra-bind": 2,
        // 禁止冗余的括号
        "no-extra-parens": 2,
        // 禁止浮点小数 缩写写法 例如.3 、 2. =>  0.3 、2.0
        "no-floating-decimal": 2,
        // 禁止使用类似 eval() 的方法
        "no-implied-eval": 2,
        // 禁止使用内联注释
        "no-inline-comments": 2,
        // 禁用 __iterator__ 属性
        "no-iterator": 2,
        // 禁用不必要的嵌套块
        "no-lone-blocks": 2,
        // 禁止循环中存在函数
        "no-loop-func": 2,
        // 禁止 require 调用与普通变量声明混合使用
        "no-mixed-requires": 2,
        // 禁止使用嵌套的三元表达式
        "no-nested-ternary": 0,
        // 禁用Function构造函数 new Function()
        "no-new-func": 2,
        // 禁止使用 Object 构造函数 直接 var obj = {}
        "no-new-object": 2,
        // 禁止调用 require 时使用 new 操作符
        "no-new-require": 2,
        // 禁止原始包装实例 new String('abc') => String('abc')
        "no-new-wrappers": 2,
        // 禁止new实例后 不赋值
        "no-new": 2,
        // 禁止在字符串字面量中使用八进制转义序列
        "no-octal-escape": 2,
        // 当使用 _dirname 和 _filename 时不允许字符串拼接
        "no-path-concat": 2,
        // 禁用__proto__  正确: var a = Object.getPrototypeOf(obj);
        "no-proto": 2,
        // 禁用 Node.js 模块
        "no-restricted-modules": 2,
        // 禁止在 return 语句中使用赋值语句
        "no-return-assign": 2,
        // 禁止自身比较
        "no-self-compare": 2,
        // 禁止使用逗号运算符
        "no-sequences": 2,
        // 禁止赋值关键字
        "no-shadow-restricted-names": 2,
        // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        "no-this-before-super": 2,
        // 禁止抛出字面量错误 throw "error";
        "no-throw-literal": 2,
        // 禁用行尾空白
        "no-trailing-spaces": 2,
        // 禁止将变量初始化为 undefined
        "no-undef-init": 2,
        // 禁止 更简单的可替代的 表达式时使用三元操作符 isYes = answer === 1 ? true : false;
        "no-unneeded-ternary": 2,
        // 禁止未使用过的表达式
        "no-unused-expressions": [2, {
            "allowTernary": true
        }],
        // 禁止未使用过的变量
        "no-unused-vars": [1, {
            "vars": "all",
            "argsIgnorePattern": "\(h\)",
            "args": "after-used" // 最后一个参数必须使用。如：一个函数有两个参数，你使用了第二个参数，ESLint 不会报警告。
        }],
        // 禁止定义前使用
        "no-use-before-define": 2,
        // 禁用不必要的 .call() 和 .apply()
        "no-useless-call": 2,
        // 禁止没有必要的字符拼接
        "no-useless-concat": 2,
        // 禁用 void 操作符
        "no-void": 2,
        // 要求对象字面量简写语法 es6 标准
        "object-shorthand": ["off", "always", {
            "avoidQuotes": true
        }],
        // 要求或禁止尽可能地简化赋值操作
        "operator-assignment": 2,
        // 强制操作符使用一致的换行符风格
        "operator-linebreak": [2, "after"],
        // 要求使用 const 声明那些声明后不再被修改的变量
        "prefer-const": 0,
        // 建议使用扩展运算符而非.apply()
        "prefer-spread": 2,
        // parseInt必须带第二个参数
        "radix": 2,
        // 变量排序
        "sort-vars": 0,
        // 要求正则表达式被包裹起来
        "wrap-regex": 2,
        // 要求箭头函数的参数使用圆括号  "as-needed" 当只有一个参数时允许省略圆括号。
        "arrow-parens": [2, "as-needed"],
    }
}


module.exports = eslintConfig
