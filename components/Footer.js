import React from 'react'

const Footer = () => {
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
        <div id="footer" className="border-t-2 border-gray">
            <div className="grid grid-rows-3 grid-flow-col justify-center items-center">
                <p className="block text-center font-bold text-cyan-500">RẤT VÃ MERCH</p>
                <p className="block text-center font-bold">FOLLOW CHÚNG MÌNH</p>
                <p className="block text-center text-neutral-500">Để cập nhật những thông tin mới nhất về anime&merch</p>
            </div>
            <div className="sticky top-6 grid grid-cols-3 gap-4 mt-1">
                {contactInfos.map(contactInfo => {
                    return (
                        <div key={contactInfo.id} className="flex justify-center items-center">
                            <span className="iconify" data-icon={contactInfo.dataIcon} />
                            <p className="font-bold ml-1">{contactInfo.title}: {contactInfo.content}</p>
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
                <p className="font-bold text-center">Chính sách mua hàng</p>
                <p className="font-bold text-center">Chính sách bảo mật</p>
                <p className="font-bold text-center">Chính sách thanh toán</p>
            </div>
            <p className="text-neutral-500 text-center mt-2 mb-6">Copyright 2022 Rất Vã Merch, All Rights Reserved</p>
        </div>  
    )
}

export default Footer