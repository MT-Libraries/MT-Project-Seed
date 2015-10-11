
MT.Project.seed

Node项目模板/前端自动构建

## Before

    npm install

## Usage

    # 开发环境
    # js/css模块化
 
    # css
    cd frontend && gulp watch
    
    # js
    cd frontend && webpack -w
    
    # 临时编译
    cd frontend && gulp css && gulp js
    
    # 生产环境
    cd frontend && gulp publish-css && gulp publish-js && gulp publish-tpl
    
    	
## Structure

```
├── backend
│   ├── app_run.json  # 运行环境
│   └── enum_env.json # 运行环境枚举
├── frontend
│   ├── bower.json  # 包管理
│   ├── gulpfile.js # gulp配置文件
│   ├── public
│   │   ├── css     # 开发与生产环境的css文件
│   │   ├── js      # 开发与生产环境的js文件
│   │   └── vendors # 公共库
│   │       └── normalize.css
│   ├── src
│   │   ├── css
│   │   │   ├── less
│   │   │   └── less-page # 待编译的css页面
│   │   ├── js
│   │   │   └── js-page # 待编译的js页面
│   │   ├── rev # 版本号信息
│   │   │   ├── css
│   │   │   └── js  
│   │   └── tpl
│   │       └── dev # 开发环境模板
|   |       └── pro # 生产环境模板
│   └── webpack.config.js # js配置文件
└── package.json
```