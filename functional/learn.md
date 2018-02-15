## Functional
### Curry Compose 函数组合
* Curry: 将函数的参数拆分可以自由生成不同的函数
* Compose: 将函数自由组合, 从右至左链式调用
### functor 容器, 处理不纯操作
#### of, map, chain, ap
* of( value ) 工厂函数, 构造新容器
* map( f ) 隐射函数, 将functor中的值通过f映射成一个新的functor
* chain(  ) 链式调用 ( 参数传递 ) ( 相比map避免了functor的循环嵌套 ) ( Monad )
* ap( )

#### functor
* Container
* Maybe 当值为null时停止调用下一个f, 返回Maybe( null ), 处理了空指针的问题
* Left, Right 处理error, 代替try catch
* IO 传入一个 fuc ( io操作 ), map的时候 f 才会调用
* Task 处理异步回调问题, 通过 .fork(errFuc, resFuc) 来处理不同的结果