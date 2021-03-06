# React Native性能调优
1. 减少`re-render`
    1. `shouldComponentUpdate`
    2. `React.PureComponent`
    3. `React.memo`
2. 减轻渲染压力
    1. 使用`React.Fragment`进行组件的包裹
    2. 减少GPU的过度绘制
        * 减少背景色的重复设置
        * 避免设置半透明颜色
        * 避免设置圆角
        * 避免设置阴影 
3. 图片优化
    1. 在`source`的`headers`中设置缓存
    2. 使用`react-native-fast-image`插件，自动对图片做优化
    3. 使用`webp`格式图片
    4. 使用`tinypng`图片压缩
4. 避免在`render`中创建对象或者函数
5. 动画优化
    1. 使用`useNativeDrive: true`开启原生动画渲染
        * 只能用于非布局相关的属性
    2. 使用`setNativeProps`操作浏览器的DOM
        ```js
        setOpacityTo(value) {
            // Redacted: animation related code
            this.refs[CHILD_REF].setNativeProps({
                opacity: value
            });
        }
        ```
    3. 使用`InteractionManager`在交互和动画完成后再执行
        ```js
        InteractionManager.runAfterInteractions(() => {
            // ...long-running synchronous task...
        });
        ```
    4. 使用`react-native-gesture-handler`和`react-native-reanimated`让手势捕捉和动画在 UI Thread 进行, 更加流畅
6. 长列表性能优化
    1. `VirtualizedList`
        * 渲染屏幕上可见的元素
        * 清空不可见元素所占用的内存
        * 使用`getItemLayout`
    2. `FlatList`(底层使用VirtualizedList)
        * 用于渲染简单列表组件
    3. `SectionList`(底层使用VirtualizedList)
        * 高性能的分组列表组件
        * 将2维数据转换成1纬数据
7. React Native性能优化工具
    1. RN官方调试工具
    2. `react-devtools`
    3. 开启模拟器或者真机调试的`debug`