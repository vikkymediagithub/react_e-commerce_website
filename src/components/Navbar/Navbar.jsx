import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';


const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#home",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#about",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blog",
    },
];




const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className='py-4'>
        <div className="container flex items-center justify-between">
            {/* Logo and link section */}
            <div className="flex items-center gap-4"> 
                <a href="#" className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl">ShopMedia</a>
                {/* Menu Items */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-4">
                        {
                            MenuLinks.map((data, index) => (
                                <li key={index}>
                                    <a key={data.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 cursor-pointer">{data.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            {/* Navbar right section */}
            <div className='flex justify-between items-center gap-4'>
                {/* Search bar section */}
                <div className="relative group hidden sm:block">
                    <input type="text" placeholder="Search" className="search-bar" />
                    <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3' />
                </div>
                {/* Order Button Section */}
                <button className='relative p-3'>
                    <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400'/>
                    <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>5</div>
                </button>
                {/* Dark Button Section */}
                <div>
                    <DarkMode />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
