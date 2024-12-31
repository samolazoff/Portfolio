import './Navigation.scss';

import { NavLink } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import {isEN, isRU} from '../../slices/languageSlice';


function NavigationItem(name, link){
    return(
        <li className='nav-header-menu__item'>
            <NavLink to={link}>{name}</NavLink>
        </li>
    )
}

function Navigation() {
    
    const data = useSelector((state) => state.language.data.header);
    const dispatch = useDispatch();
    
    return(
        <nav className="nav-header">
            <ul className='nav-header-menu'>
                {
                    data.map((item) => {
                       return( NavigationItem(item.name, item.link))
                    })
                }
            </ul>
            <ul className="language-panel">
                <li>
                    <button className='language-panel__btn' onClick={()=>dispatch(isEN())}>EN</button>
                </li>
                <li>
                    <button className='language-panel__btn' onClick={()=>dispatch(isRU())}>RU</button>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;