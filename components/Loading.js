import React from 'react'
import Image from 'next/image';
import logo from '../public/rv_logo.png';

const Loading = () => {
  return (
    <>
        <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-neutral-200 opacity-40"/>
        <div className="fixed top-0 left-0 z-50 backdrop-blur-md w-full h-full overflow-x-hidden overflow-y-hidden outline-0 px-10" aria-modal aria-hidden role="dialog">
            <div className="z-30 overflow-hidden relative flex flex-col justify-center items-center max-w-40 mx-auto my-60 rounded-xl h-2/5 p-2 shadow-md">
                <Image src={logo} alt="Logo" title="Logo" width={150} height={150}/>
                <div className="w-full flex mt-6 justify-center items-center">
                    <span className="text-cyan-500 text-xl font-bold mr-4">Loading</span>
                    <div className="w-20 h-4 box-border my-auto flex nowrap items-center justify-between">
                        <div className="fade_2 w-4 h-4 rounded-full bg-cyan-500"></div>
                        <div className="fade_1 w-4 h-4 rounded-full bg-cyan-500"></div>
                        <div className="fade_2 w-4 h-4 rounded-full bg-cyan-500"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Loading