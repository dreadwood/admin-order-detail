import { createRouter, createWebHistory } from 'vue-router'
import Main from '@pages/MainPage.vue'
import OrderDetail from '@pages/OrderDetailPage.vue'
import Gigs from '@pages/GigsPage.vue'
import SetCall from '@pages/SetCallPage.vue'
import IncomingCalls from '@pages/IncomingCallsPage.vue'
import CallDialer from '@pages/CallDialerPage.vue'

const routeMain = [{ path: '/', name: 'Main', component: Main }]
export const routesOrderDetail = [
  { path: '/order_detail', name: 'Order Detail', component: OrderDetail }
]
export const routesGigs = [{ path: '/gigs', name: 'Gigs', component: Gigs }]
export const routesCallCenter = [
  { path: '/call-dialer', name: 'Call Dialer', component: CallDialer },
  { path: '/incoming-calls', name: 'Incoming Calls', component: IncomingCalls },
  { path: '/modal-set-call', name: 'Set Call Note', component: SetCall }
]

const routes = [
  ...routeMain,
  ...routesOrderDetail,
  ...routesGigs,
  ...routesCallCenter
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
