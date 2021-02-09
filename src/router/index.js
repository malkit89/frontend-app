import Vue from 'vue';
import Router from 'vue-router';
import CiclaturaPage from '@/views/Ciclatura/Index.vue';
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
    },
    { path: '/ciclatura', name: 'ciclatura', component: CiclaturaPage }
  ]
});
