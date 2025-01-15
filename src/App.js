import './styles/App.scss';

import {BrowserRouter, Routes, Route} from 'react-router';

import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Portfolio from './pages/Portfolio/Portfolio';
import Contacts from './pages/Contacts/Contacts';

function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Home></Home>}/>
                <Route path='/blog' element={<Blog></Blog>}/>
                <Route path='/portfolio' element={<Portfolio></Portfolio>}/>
                <Route path='/contacts' element={<Contacts></Contacts>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
}

export default App;
