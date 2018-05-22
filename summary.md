1. 安装

- webpack

webpack4之前cli是包含在webpack之中的，所以-g全局安装之后就可以在控制台输入webpack命令，但是在4之后，需要再安装webpack-cil 

还是不是内部命令的话，需要配置全局环境变量，添加路劲到path中

- webpack-dev-server

- 热替换

- react-hot-loader

- 绝对路径 相对路径（url-loader）？

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