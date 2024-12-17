import React, { useEffect, useState } from 'react'

const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 100)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)

    return (
        <div>
            {scrollTop && (
                <button onClick={scrollHandler} className='text-xl text-red-900 fixed right-[10px] bottom-[10px]'>top</button>)
            }
        </div>
    )
}

export default BackToTop
