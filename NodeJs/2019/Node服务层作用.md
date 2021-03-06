## Node服务层作用

#### 服务端渲染（传给客户端的是生成的包含数据的页面）
1. 首屏性能，无需等待资源下载完成
2. SEO
3. 无需关注客户端兼容性问题
4. 无需关注客户端机身性能

#### 客户端渲染
1. 局部刷新，无需每次都进行完整页面请求
2. 懒加载，可通过react-lazyload实现
3. 节约服务器成本，只需服务器支持静态文件即可
4. 前后端完全分离

#### 同构（将一部分前端代码拿到服务端执行）
* 优点：兼容服务端渲染和客户端渲染的优点
* 缺点：服务器负载过大

#### node服务层
1. 代理： 解决常见的跨域问题，利用代理，可以转发请求多个服务端
2. 缓存：node中间层实现缓存需求
    * 在node层对请求进行封装，实现强制缓存或协商缓存
    * 将一部分内容设置过期时间，存在内存中，客户端请求，中间层直接返回缓存内容
3. 限流：node中间层，针对接口或路由做响应的限流
4. 日志：在node中间层做一些埋点日志
5. 监控：对流量，订单量等做监控
6. 鉴权
7. 路由
8. 服务端渲染或同构
