import Link from 'next/link';
import logo from "../public/rv_logo.png";
import Image from 'next/image';
import SearchBox from './SearchBox';
import {useTheme} from 'next-themes';
import {useState, useEffect} from 'react';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const {theme, setTheme} = useTheme();

    const navLinks = [
        {
            id: 1,
            title: "Tin mới",
            dataIcon: "carbon:notification",
            url: "news"
        },
        {
            id: 2,
            title: "Sản phẩm",
            dataIcon: "ion:extension-puzzle-outline",
            url: "preorder"
        },
    ];

    const contactInfos = [
        {
            id: 1,
            title: "Facebook",
            content: "Rất Vã Merch",
            dataIcon: "akar-icons:facebook-fill"
        },
        {
            id: 2,
            title: "Email",
            content: "ratva.merch@gmail.com",
            dataIcon: "carbon:email"
        },
        {
            id: 3,
            title: "Hotline",
            content: "0398435344",
            dataIcon: "akar-icons:phone"
        },
    ];

    return (
        <div className="w-screen box-border" id="navbar">
            <div className="fixed top-0 z-20 backdrop-blur-2xl grid grid-cols-10 grid-flow-col w-full h-1/6 max-h-10 place-content-center py-8 px-10 border-b-2 border-neutral-200">
                <Link href="/">
                    <a className="flex items-center col-span-4 md:col-span-2 text-lg md:text-2xl" id="home">
                        <Image
                            src={logo} 
                            className="w-10 h-10"
                            alt="Rất Vã Merch"
                            title="Rất Vã Merch"
                            width={40}
                            height={40} 
                        />
                        <span className="text-cyan-500 font-bold">merch</span>
                    </a>
                </Link>

                <SearchBox />

                <div className="ml-14 lg:ml-6 flex justify-center items-center col-span-4" id="navLinks">
                    {navLinks.map(navLink => {
                        return (
                            <div key={navLink.id}>
                                <Link href={`/${navLink.url}`} passHref>
                                    <a className="flex justify-center items-center ml-4">
                                        <span 
                                            className="iconify" 
                                            data-icon={navLink.dataIcon} 
                                            data-width="30" 
                                            data-height="30"
                                            title={navLink.title}
                                        />
                                        <p className="text-sm font-bold ml-1 hidden lg:inline-block">{navLink.title}</p>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                    {!mounted ? 
                        null : 
                        <button 
                            className="ml-4 px-6 py-2 bg-cyan-500 font-bold rounded-lg shadow-md"
                            onClick = {() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        >
                            {theme === 'light' ? 
                                'Dark'
                                :
                                'Light'
                            }        
                        </button> 
                    }
                </div>
            </div>
            <div className="w-full overflow-hidden top-6 grid lg:grid-cols-3 gap-2 mt-20">
                {contactInfos.map(contactInfo => {
                    return (
                        <div key={contactInfo.id} className="flex justify-center items-center">
                            <span className="iconify" data-icon={contactInfo.dataIcon} />
                            <p className="font-bold ml-1">{contactInfo.title}: {contactInfo.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar;