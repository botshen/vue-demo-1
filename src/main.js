
const Vue = window.Vue


Vue.config.productionTip = false

new Vue({
    data() {
        return {
            n: 0,
            array: [1,2,3,4,5,6,7,8]
        }
    },
    template: `
      <div class="red">
      {{n}}
      <button @click="add">+1</button>
      </div>
    `,
    created() {
        console.log("我还没出现在页面中")
    },
    mounted() {
        debugger
        console.log("我已经出现在页面中")
    },
    methods: {
        add() {
            this.n += 1
        },
},
}).$mount('#frank')
