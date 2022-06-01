import React from 'react'
import Link from 'next/link';
import RippleButton from "../components/RippleButton";

const PageNotFound = () => {
  return (
    <section className="w-screen my-20">
        <div className="w-4/5 mx-auto flex justify-center items-center px-24 flex-col md:flex-row">
            <span className="font-bold text-9xl text-cyan-500">404</span>
            <div className="w-screen px-4 mt-6 md:ml-10">
                <h1 className="font-bold text-center text-3xl mt-4 md:mt-0 md:text-5xl mb-4">Không tìm thấy trang</h1>
                <p className="text-neutral-500 px-2 mb-2">Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc không thuộc tên miền này. Hãy thử tìm một tên miền khác hoặc quay lại trang trước đó</p>
                <Link href="/news">
                    <a className="font-medium text-cyan-500 underline decoration-solid decoration-inherit px-2">Liên hệ với chúng tôi</a>
                </Link>
                <div className="w-full flex flex-col md:flex-row justify-center items-center mt-6">
                    <RippleButton type="bordered" link="">Về trang chủ</RippleButton>
                    <RippleButton link="">Quay lại</RippleButton>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageNotFound;