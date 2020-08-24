import {createApp} from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: HelloWorld},
    {path: '/test', component: Test}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');