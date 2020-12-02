const Vue = window.Vue


Vue.config.productionTip = false
import Demo from "@/Demo";

new Vue({
    components: {Demo},
    data: {
        visible: true,
        n: 0
    },
    template: `
      <div>
      <!--      <button @click="toggle">toggle</button>-->
      <!--      <hr>-->
      <!--      <Demo v-if="visible===true"/>-->
      {{n}}
<!--      <Demo :message="'0'"/>-->
<!--      <Demo message="0"/>-->
      <Demo :message="n" :fn="add"/>

      </div>
    `,
    methods: {
        add() {
            this.n += 1
        },
        toggle() {
            this.visible = !this.visible
        }
    }
}).$mount('#frank')
