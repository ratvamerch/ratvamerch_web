import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import RippleButton from '../components/RippleButton';

const ConfirmModal = ({ isShowing, hide, data }) => {
    //set state for confirming sending form
    const [confirmed, setConfirmed] = useState(false);

    //disable body scrolling when modal isShowing
    useEffect(()=> {
        isShowing ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"
        //enable body scrolling when modal unmouted
        return () => {
            hide
        }
    })

    return (
        isShowing ? ReactDOM.createPortal(
            <>
                <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-neutral-200 opacity-40"/>
                <div className="fixed top-0 left-0 z-50 w-full h-full overflow-x-hidden overflow-y-hidden outline-0 px-10" aria-modal aria-hidden role="dialog">
                <div
                    className="z-30 bg-black overflow-hidden relative flex flex-col justify-center items-center max-w-40 mx-auto my-60 rounded-xl h-2/5 p-2 shadow-md
                    before:content-[''] before:absolute before:-bottom-5 before:bg-cyan-500 before:w-4/5 before:h-5 before:rounded-lg before:mx-auto"
                >
                    <div className="absolute right-4 top-2 flex justify-end">
                        <button 
                            type="button" 
                            className="cursor-pointer text-2xl" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={hide}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className={`${confirmed ? '-translate-x-full' : ''} absolute flex flex-col justify-center items-center px-2 text-center`}>
                        <span className="text-2xl text-cyan-500 font-bold uppercase">Xác nhận form</span>
                        <span className="text-lg font-bold mb-2">Kiểm tra lại thông tin bạn đã điền</span>
                        <p className="text-left text-sm px-2 mb-6">Bạn có chắc chắn thông tin form đã điền chính xác chưa?</p>
                        <button
                            onClick={handleConfirm}
                            className="w-44 bg-cyan-500 rounded-md shadow-md mx-1 my-2 px-6 py-3 font-bold overflow-hidden cursor-pointer"
                        >
                            Xác nhận & Gửi
                        </button>
                        <RippleButton type="bordered" onClick={hide}>Đợi một chút</RippleButton>
                    </div>
                </div>
                </div>
            </>, document.body
        ) : null
    )
}

export default ConfirmModal;