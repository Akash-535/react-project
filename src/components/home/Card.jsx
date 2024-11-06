import React, { useState } from 'react'

const Card = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore((ShowMore) => !ShowMore);
    return (
        <>
            <div className='flex gap-3 flex-col'>
                <div className='flex gap-3 items-center justify-center flex-wrap'>        {[...Array(showMore ? 6 : 3)].map((_, i) => (
                    <div key={i} className='w-96 h-96 bg-black mx-3 my-5 flex'></div>
                ))}</div>
                <button className='text-xl text-center flex items-center justify-center py-5 border border-black rounded-xl max-w-40 w-full mx-auto' onClick={toggleShowMore}>{(showMore ? "Less More" : "Show More")}</button>
            </div></>
    )
}

export default Card
