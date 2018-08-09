
import * as types from './mutation-types'

//  Action 提交的是 mutation，而不是直接变更状态。
//  Action 可以包含任意异步操作。
//  Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
//  Action 通过 store.dispatch 方法触发：
//  我们可以在 action 内部执行异步操作，也可以分发多重 mutation
//  
export const addAction = function ({commit}) {
    commit(types.ADD_ACTION) 
    // commit(types.SUBTRACT_ACTION)
}

export const subtractAction = function ({commit}) {
    commit(types.SUBTRACT_ACTION)
}

