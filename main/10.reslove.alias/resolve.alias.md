## 环境声明

### webpack.config.js所在的目录

`main/10.resolve.alias/`

### 组件所在的目录

`main/10.resolve.alias/src/node_modules/`
`main/10.resolve.alias/src/actions/`
`main/10.resolve.alias/src/comps/`

### 引用文件

`main/10.resolve.alias/src/resolve_*.js`

### 入口文件

`main/10.resolve.alias/src/entry.js`

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

#### 无配置

| resolve.alias | import 'app' | import 'app/plugins.js' |
|--------------------|--------------------|-------------------|
| {} | /main/src/node_modules/app/index.js | /main/src/node_modules/app/plugins.js |

#### filePath

| resolve.alias | import 'lib' | import 'lib/lodash.js' |
|--------------------|--------------------|-------------------|
| {lib: '/main/src/comps/lib.js'} | /main/src/comps/lib.js | `error` |
| {lib: './actions/lib.js'} | /main/src/actions/lib.js | `error` |
| {lib: 'routes/lib.js'} | /main/src/node_modules/routes/lib.js | `error` |

#### filePath$

| resolve.alias | import 'utils' | import 'utils/query.js' |
|--------------------|--------------------|-------------------|
| {utils$: '/main/src/comps/utils.js'} | /main/src/comps/utils.js  | /main/src/node_modules/utils/query.js |
| {utils$: './actions/utils.js'} | /main/src/actions/utils.js  | /main/src/node_modules/utils/query.js |
| {utils$: 'routes/utils.js'} | /main/src/node_modules/routes/utils.js | /main/src/node_modules/utils/query.js |

#### dirPath

| resolve.alias | import 'base' | import 'base/extend.js' |
|--------------------|--------------------|-------------------|
| {base: '/main/src/comps'} | /main/src/comps/index.js | /main/src/comps/extend.js |
| {base: './actions'} | /main/src/actions/index.js | /main/src/actions/extend.js |
| {base: 'routes'} | /main/src/node_modules/routes/index.js | /main/src/node_modules/routes/extend.js |

#### dirPath$

| resolve.alias | import 'helpers' | import 'helpers/search.js' |
|--------------------|--------------------|-------------------|
| {helpers$: '/main/src/comps'} | /main/src/comps/index.js | /main/src/node_modules/helpers/search.js |
| {helpers$: './actions'} | /main/src/actions/index.js | /main/src/node_modules/helpers/search.js |
| {helpers$: 'routes'} | /main/src/node_modules/routes/index.js | /main/src/node_modules/helpers/search.js |