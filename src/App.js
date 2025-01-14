import './styles/App.scss';

import {BrowserRouter, Routes, Route} from 'react-router';

import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Home></Home>}/>
                <Route path='/blog' element={<Blog></Blog>}/>
                <Route path='/portfolio' element={<Portfolio></Portfolio>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
}

export default App;
