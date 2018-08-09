
import * as types from './mutation-types'
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// 不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，
// 你需要以相应的 type 调用 store.commit 方法：
const mutation = {
    [types.ADD_ACTION](state,sum){
        state.sum += 1
    },

    [types.SUBTRACT_ACTION](state,sum){
        state.sum -= 1 
    }

}

export default mutation;