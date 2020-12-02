const Vue = window.Vue


Vue.config.productionTip = false
import Demo from "@/Demo";

new Vue({
    components: {Demo},
    data: {
        visible: true
    },
    template: `
      <div>

      <button @click="toggle">toggle</button>
      <hr>
      <Demo v-if="visible===true"/>
      </div>
    `,
    methods: {
        toggle() {
            this.visible = !this.visible
        }
    }
}).$mount('#frank')
