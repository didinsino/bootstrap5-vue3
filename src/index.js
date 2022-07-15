import BvAlert from './components/BvAlert.vue'

export default {
  install: (app, options) => {
    app.component('BvAlert', BvAlert)
  }
}