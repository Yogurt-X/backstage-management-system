// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作
import { sysUserLogin } from '@/views/interface/login';
import { getToken, setToken, removeToken } from '@/views/utils/auth';
import { ActionTree } from 'vuex';
import { Message } from 'element-ui';


const actions: ActionTree<any,any> = {
    /**
     * 登陆
     * @param param0
     * @param userInfo 登陆信息
     */
    async Login({state, commit}, userInfo: any) {
        return new Promise((resolve, reject) => {
            sysUserLogin(userInfo).then((response: any) => {

                setToken(response.data.systoken);
                console.log(response.data.systoken);

                commit('SET_TOKEN', response.data.systoken); //调用上面的方法
                resolve(response);

            }).catch((error)=>{
                reject(error);
            });
        });
    },

     /**
     * 深拷贝
     * @param param0
     * @param params
     */
    async deep({state, commit} , params: any) {
        let obj = {};
        obj = JSON.parse(JSON.stringify(params));
        return obj;
    }
}

export default actions;