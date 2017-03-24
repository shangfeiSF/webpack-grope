## 环境声明

### webpack.config.js所在的目录

`/Users/webpack-grope/main/10.resolve_alias/`

### 组件所在的目录

`/Users/webpack-grope/main/10.resolve_alias/src/node_modules/`
`/Users/webpack-grope/main/10.resolve_alias/src/actions/`
`/Users/webpack-grope/main/10.resolve_alias/src/comps/`

### 引用文件

`/Users/webpack-grope/main/10.resolve_alias/src/resolve_*.js`

### 入口文件

`/Users/webpack-grope/main/10.resolve_alias/src/entry.js`

#### webpack.config.js中context字段声明的路径

`path.resolve(__driname, 'src')`

## alias解析规则

```
reslove: {
 <alias[$]: String>: <dirPath: String>
 <alias[$]: String>: <filePath: String>
}
```

* `<alias:String>`是模块名称（moduleName）或者模块目录（moduleDirectory）
* `<alias[$]:String>`可以使用后缀`$`表示精确匹配
* `<dirPath:String>`可以是绝对路径（以`/`开头）、相对路径（以`./`或`../`开头）、目录（形如`dir/subdir`）
* `<filePath:String>`可以是绝对路径（以`/`开头）、相对路径（以`./`或`../`开头）、目录（形如`dir/subdir/filename.ext`）

## alias解析表

#### 设置 `@mainSrc = /Users/webpack-grope/main/src`

#### 无配置

| resolve.alias | import 'app' | import 'app/plugins.js' |
|--------------------|--------------------|-------------------|
| {} | @mainSrc/node_modules/app/index.js | @mainSrc/node_modules/app/plugins.js |

#### filePath

| resolve.alias | import 'lib' | import 'lib/lodash.js' |
|--------------------|--------------------|-------------------|
| { lib: '@mainSrc/comps/lib.js' } | @mainSrc/comps/lib.js | `error` |
| { lib: './actions/lib.js' } | @mainSrc/actions/lib.js | `error` |
| { lib: 'routes/lib.js' } | @mainSrc/node_modules/routes/lib.js | `error` |

#### filePath$

| resolve.alias | import 'utils' | import 'utils/query.js' |
|--------------------|--------------------|-------------------|
| { utils$: '@mainSrc/comps/utils.js' } | @mainSrc/comps/utils.js  | @mainSrc/node_modules/utils/query.js |
| { utils$: './actions/utils.js' } | @mainSrc/actions/utils.js  | @mainSrc/node_modules/utils/query.js |
| { utils$: 'routes/utils.js' } | @mainSrc/node_modules/routes/utils.js | @mainSrc/node_modules/utils/query.js |

#### dirPath

| resolve.alias | import 'base' | import 'base/extend.js' |
|--------------------|--------------------|-------------------|
| { base: '@mainSrc/comps' } | @mainSrc/comps/index.js | @mainSrc/comps/extend.js |
| { base: './actions' } | @mainSrc/actions/index.js | @mainSrc/actions/extend.js |
| { base: 'routes' } | @mainSrc/node_modules/routes/index.js | @mainSrc/node_modules/routes/extend.js |

#### dirPath$

| resolve.alias | import 'helpers' | import 'helpers/search.js' |
|--------------------|--------------------|-------------------|
| { helpers$: '@mainSrc/comps' } | @mainSrc/comps/index.js | @mainSrc/node_modules/helpers/search.js |
| { helpers$: './actions' } | @mainSrc/actions/index.js | @mainSrc/node_modules/helpers/search.js |
| { helpers$: 'routes' } | @mainSrc/node_modules/routes/index.js | @mainSrc/node_modules/helpers/search.js |