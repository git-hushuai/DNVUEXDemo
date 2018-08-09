<template>
  <div class="hello">

    <div><label>{{this.sum}}</label></div>
    <div><label>{{this.sumWithParam(10)}}</label></div>
    <div><label>{{this.sumCopy}}</label></div>
    <button @click="addActionCommit">加</button>
    <button @click="subtractAction">减</button>
    <button @click="addAction">actionCommit</button>

    <button @click="addActionWithParam">addActionWithParam</button>
  </div>
</template>

<script>
// mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
// 当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性
// mapMutations 辅助函数将组件中的 addActionCommit 映射为 store.commit 调用
// 使用 mapActions 辅助函数将组件的 addAction 映射为 store.dispatch 调用
import {mapMutations,mapGetters,mapActions,mapState} from 'vuex'
export default {
  data () {
     return {
      msg: 0
     }
  },
  methods:{
    ...mapMutations({
      addActionCommit : 'ADD_ACTION',
      subtractAction : 'SUBTRACT_ACTION',
      addActionWithParam : "ADD_ACTION"
    }),
    ...mapActions([
      'addAction'
    ]),
    // 覆盖mapGetters辅助函数的实现
    addActionWithParam(param) {
      console.log('addActionWithParam');
    }
  },
  computed:{
     ...mapGetters([
      'sum',
      'sumWithParam'
    ]),
    ...mapState({
      sumCopy : 'sum'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
