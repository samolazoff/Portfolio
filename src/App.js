import './styles/App.scss';

import {BrowserRouter, Routes, Route} from 'react-router';

import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Home></Home>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
}

export default App;
