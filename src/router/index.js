import Vue from 'vue';
import Router from 'vue-router';
import MacchinaPage from '@/views/Ciclatura/MacchinaView.vue';
import StalloDetailPage from '@/views/Ciclatura/StalloDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'macchina', component: MacchinaPage },
    {
      path: '/detail',
      name: 'detail',
      component: StalloDetailPage,
      props: true
    }
  ]
});
