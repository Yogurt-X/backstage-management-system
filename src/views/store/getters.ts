//定义store的计算属性
//Getter 接受 state 作为其第一个参数：
//Getter 也可以接受其他 getter 作为第二个参数
const getters = {
    //这里目前没有做什么处理
    token: (state:any) => state.token,
}
export default getters