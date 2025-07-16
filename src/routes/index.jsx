import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import Wishlist from '../pages/Wishlist';
import History from '../pages/History';
import About from '../pages/About'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: AllProducts },
    { path: '/wishlist', component: Wishlist },
    { path: '/history', component: History },
    { path: '/about', component: About }
]



export { publicRoutes };