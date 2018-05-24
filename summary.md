1. 安装

- webpack

webpack4之前cli是包含在webpack之中的，所以-g全局安装之后就可以在控制台输入webpack命令，但是在4之后，需要再安装webpack-cil 

还是不是内部命令的话，需要配置全局环境变量，添加路劲到path中

- webpack-dev-server

- 热替换

- react-hot-loader

- 绝对路径 相对路径（url-loader）？  
/static/...开头的路径，不会处理。  
css 中碰到url()，css-loader会把它当成一种webpack的资源去 import，配置了url-loader 对 /\.(jpg|jpeg|gif|png)$/ 进行处理。   
name=imgs/[name].[ext]的意思是把 url(./images/big.png) -> url(imgs/big.png) 并把图片拷贝到 output.path + name的地方(这里name指的是 url?name=xxx 的 name)。即从 /src/images/big.png -> /dist/imgs/big.png  
js 中图片，需要import引入，再由url-loader处理。  
url-loader在文件大小小于limit时，转换为base64，而大于limit时，用file-loader处理，所以需要安装file-loader，不用config中配置。  
https://www.jianshu.com/p/e80c468ddb32

- output.publicPath 表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换。如：background-image: url(./images/bg.jpg);=》background-image: url(/assets/images/f593fbb9.bg.jpg);  
https://www.cnblogs.com/ghost-xyx/p/5812902.html   
https://www.jianshu.com/p/3429cd456982

- common.css?

- 组件初次渲染生命周期：   
constructor  
componentWillMount  
render  
componentDidMount  
componentWillUnmount  

- 试试换react-jPlayer？

- react中的this，事件处理函数中this，需要通过bind绑定，或者箭头函数处理。  
作为props传入的函数，如果这个函数中用到了this，同样需要绑定处理。

- getBoundingClientRect()；该方法获得页面中某个元素的左，上，右和下分别相对浏览器视窗的上，左位置，他返回的是一个对象，即Object，该对象有是个属性：top，left，right，bottom；

- Element.clientWidth 属性表示元素的内部宽度，以像素计。该属性包括内边距，但不包括垂直滚动条（如果有）、边框和外边距。

- state传入子组件中，state改变，那么子组件也会自动更新渲染。如果state传入到子组件中，子组件用props来初始化state，那么在父组件state改变时，子组件并不会更新渲染，因为子组件的construcotor只在创建时调用，这种情况下需要componentWillReceiveProps 

- postcss?