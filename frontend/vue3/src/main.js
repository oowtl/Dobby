import { createApp, h } from 'vue'
import App from './App.vue'
// import { store } from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp({
  render: () => h(App),
})

// App.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
