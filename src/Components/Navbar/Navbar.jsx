import { CiMenuFries } from "react-icons/ci";

import { RxCross1 } from "react-icons/rx";

import Link from '../Link/Link';
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/',  name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name:'contact' },
        { id: '4', path: '/service', name:'service'},
        { id: '5', path: '*', name:'not found'},
      ];
    return (
        <nav>
            <div className="md:hidden" onClick={() =>setOpen(!open )}> 
            {
                open === true ? 
                <RxCross1 className="text-2xl"></RxCross1>  
                 :    <CiMenuFries className="text-2xl "></CiMenuFries>
            }
         
            </div>

        <ul className='md:flex gap-12'>
        {
                routes.map(route =><Link key={route.id} route={route}></Link> )
            }
        </ul>
        </nav>
    );
}; 

export default Navbar;