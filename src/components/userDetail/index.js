import Vue from 'vue'
import user from './userDetail.vue'

let UserDetailConstructor = Vue.extend(user)

let instance
let instances = []
let seed = 1

function UserDetail(options) {
    options = options || {}
    if (typeof options === 'string') {
        options = {
            name: options
        }
    }
    let id = 'user_' + seed++
    instance = new UserDetailConstructor({
        data: options
    })
    instance.id = id
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    instance.vm.show = true
    instances.push(instance)
}
const install = Vue => {
    Vue.prototype.$user = UserDetail
}

export default  install
