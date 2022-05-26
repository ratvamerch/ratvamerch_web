import React from 'react'

const FeatureCard = ({feature}) => {
    const [isOpen, setOpen] = React.useState(true);

    return (
        <div 
            key={feature.id} 
            className={`relative flex flex-col ${!isOpen ? "" : "justify-center"} items-center shadow-md px-4 pb-4 w-72 h-72 min-w-36 max-w-52 max-h-60 overflow-hidden border-2 border-neutral-200 rounded-xl`}
        >
            <button onClick = {()=> {setOpen(!isOpen)}} >
                <span 
                    className={`iconify absolute right-2 top-1 cursor-pointer ${isOpen ? "" : "rotate-90"}`}
                    data-icon="ic:outline-navigate-next"
                    data-width="30" 
                    data-height="30"
                />
            </button>
            <div name="features_content" className="mx-auto">
                <img
                    className={!isOpen ? "w-24 h-24" : "w-40 h-40"}
                    src={feature.thumbnail.url} 
                    alt={feature.title} 
                    title={feature.title}
                />
            </div>
            <h2 className={`font-bold text-center text-cyan-500 ${isOpen ? "text-lg" : "text-sm"}`}>{feature.title}</h2>
            <p className={isOpen ? "hidden" : "text-neutral-500"}>{feature.des}</p>
        </div>
    )
}

export default FeatureCard