import {useState, useEffect} from 'react'
import Link from 'next/link';

const SearchBox = () => {
    const data = [
        {
            id: 1,
            title: 'Preorder',
            url: 'preorder'
        },
        {
            id: 2,
            title: 'News',
            url: 'news'
        },
        {
            id: 3,
            title: 'Home',
            url: ''
        },
    ];
    // Set state to open the SearchBox 
    const [opened, setOpened] = useState(false);

    // Set state to show the SearchBox's FilterData
    const [showed, setShowed] = useState(false);

    useEffect(() => {
        function handleResize() {
            setOpened(false)
        }
    
        window.addEventListener('resize', handleResize)
    });

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filterData = data.filter((el) => {
        if (inputText === '') {
            return el;
        }
        else {
            return el.title.toLowerCase().includes(inputText);
        }
    })
    //Check if filterData is empty
    const isEmpty = Object.keys(filterData).length === 0;

    return (
        <div className="box-border flex lg:col-span-4 items-center">
            <button 
                className="flex lg:hidden justify-center items-center"
                onClick={() => {setOpened(!opened)}}
            >   
                <span className="iconify flex lg:hidden" data-icon="fe:search" data-width="30" data-height="30"></span>
            </button>
            <div className={`${!opened ? 'relative hidden' : 'absolute top-20 left-0'} box-border lg:flex flex-col w-screen h-full px-2`}>
                <div className="overflow-hidden w-full h-full py-1 flex flex-col justify-center items-center">
                    <input 
                        className="w-full h-full lg:py-2 px-4 bg-transparent rounded-xl" 
                        onChange={inputHandler}
                        onFocus={(e)=> setShowed(true)}
                        onBlur={()=> setTimeout((e) => {
                            setOpened(!opened)
                            setShowed(false)
                        }, 100)} 
                        placeholder="What's in your mind?"
                    />
                    <span className="iconify absolute right-5 ml-2 z-20" data-icon="fe:search" data-width="30" data-height="30"></span>
                </div>
                <div className={`${showed ? 'flex' : 'hidden'} bg-cyan-500 text-medium text-lg lg:absolute top-10 w-full flex-col justify-center px-4 pt-1 py-10 rounded-md`}>
                    {isEmpty ?
                    <div className="flex flex-col justify-center items-center py-2">
                        <span className="font-bold text-center">Không tìm được thứ bạn đang nhập <br/> Hãy thử nhập từ khóa khác nhé</span>
                        <Link href="/news">
                            <a className="underline decoration-solid decoration-inherit px-2 mt-2">Liên hệ với chúng mình</a>
                        </Link>
                    </div> 
                    :
                    filterData.map((item) => {
                        return ( 
                            <Link key={item.id} href={`/${item.url}`}>
                                <a className="hover:bg-neutral-200">{item.title}</a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchBox;