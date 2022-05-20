import React from 'react'

const PostDetail = ({postDetail}) => {
  return (
    <div className="px-4 pb-2 border-2 border-neutral-500 rounded-2xl overflow-hidden">
        <div className="w-full rounded-md">
            <img 
                src={postDetail.thumnail.url}
                alt={postDetail.tittle}
                title={postDetail.tittle}
            />
        </div>
        <div>
            <h2 className="px-2 font-bold text-lg">{postDetail.tittle}</h2>
            <span className="text-sm text-neutral-500">{postDetail.dateCreated}</span>
        </div>
        <div className="text-neutraul-500">
            <p>{postDetail.detail}</p>
        </div>
    </div>
  )
}

export default PostDetail