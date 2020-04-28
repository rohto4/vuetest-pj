// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyACHsvPhxmfWzpVNthNaP6d3CxV0q-nv9g",
  authDomain: "flowchart-vue.firebaseapp.com",
  databaseURL: "https://flowchart-vue.firebaseio.com",
  projectId: "flowchart-vue",
  storageBucket: "flowchart-vue.appspot.com",
  messagingSenderId: "578092443616",
  appId: "1:578092443616:web:20ed517485b6e89e022d85"
};
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
