- mocker.js
    Scroll  https://github.com/sanyuan0704/react-cloud-music/tree/master/src/baseUI/scroll
    判断是否滑动到了底部
    lessonList 
- 解决tsx文件引入图片的时候报错的问题
    1. 新建一个ts声明文件：images.d.ts
     ```ts
        declare module '*.svg'
        declare module '*.png'
        declare module '*.jpg'
        declare module '*.jpeg'
        declare module '*.gif'
        declare module '*.bmp'
        declare module '*.tiff'
     ```
    2. 将这个文件配置到tsconfig.json文件中
     ```json
        "include":[
            "./image.d.ts"
        ]
     ```