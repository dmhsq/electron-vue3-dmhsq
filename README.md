# electron-vue-dmhsq

如果您只是想打包vue项目成exe 
```
最终打包需要删除electron/main.js中的fs模块
npm run builds
执行完成后
在electron文件夹中
npm run build
```
[github地址](https://github.com/dmhsq/electron-vue3-dmhsq)
## 安装依赖
```
npm install
```

### 热开发页面
```
npm run serve
```

### 只打包vue 不打包electron
```
npm run builds
```
### 热开发页面
```
npm run build
执行完成后
开启额外的控制台
cd electron
npm run serve
```

### 热开发electron
```
npm run builds
执行完成后
开启额外的控制台
cd electron
npm run serve
```

### 打包electron应用
```
最终打包需要删除electron/main.js中的fs模块
npm run builds
执行完成后（如果页面已经打包过无需此步）
在electron文件夹中
npm run build
```
