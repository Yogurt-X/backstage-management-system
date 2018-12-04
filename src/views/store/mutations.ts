
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

// import state from './state';
// export default mutations{
//     SET_TOKEN( state: any, data: any) {
//         state.token = data
//     },
// }

// import { MutationTree } from 'vuex'

// const mutations: MutationTree<any> = {
//     'SET_TOKEN'(
//         state: any,
//         data: any
//     ): void {
//         state.token = data
//     }
// }
export default {
    // 登陆成功后执行
    SET_TOKEN(state: any, data: any) {
        state.token = data
    },
}

// 调用
// store.commit('SET_TOKEN', xxx)
