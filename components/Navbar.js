import Link from 'next/link';
import logo from "../public/rv_logo.png";
import Image from 'next/image';

const Navbar = () => {
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
        {
            id: 3,
            title: "Đăng nhập/Đăng ký",
            dataIcon: "ic:baseline-account-circle",
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
        <div className="w-screen" id="navbar">
            <div className="fixed top-0 z-20 backdrop-blur-2xl grid grid-cols-10 grid-flow-col w-full h-1/6 max-h-10 place-content-center py-8 px-10 border-b-2 border-gray">
                <Link href="/">
                    <a className="flex items-center col-span-4 md:col-span-3 text-lg md:text-2xl" id="home">
                        <Image
                            src={logo} 
                            className="w-10 h-10"
                            alt="Rất Vã Merch"
                            title="Rất Vã Merch"
                            width={40}
                            height={40} 
                        />
                        <span className="text-cyan-400 font-bold">merch</span>
                    </a>
                </Link>
                <div className="hidden lg:flex col-span-4 lg:col-span-3 items-center px-4 py-1 border-2 rounded-xl " id="searchBox">
                    <p className="opacity-40">What is in your mind?</p>
                    <span className="iconify ml-auto" data-icon="fe:search"></span>
                </div>
                <div className="ml-20 lg:ml-6 flex justify-center items-center col-span-4" id="navLinks">
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
                </div>
            </div>
            <div className="sticky top-6 grid lg:grid-cols-3 gap-2 mt-20">
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