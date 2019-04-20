import Mine from "./mine";
import Loadable from 'react-loadable';
import Loading from '@common/loading'

const Home = Loadable({
    loader:()=>import('./home'),
    loading:Loading
})
const Shopcar = Loadable({
    loader:()=>import('./shopcar'),
    loading:Loading
})
const Indent = Loadable({
    loader:()=>import('./indent'),
    loading:Loading
})
const Classify = Loadable({
    loader:()=>import('./classify'),
    loading:Loading
})
export {
    Home,
    Classify,
    Shopcar,
    Mine,
    Indent
}