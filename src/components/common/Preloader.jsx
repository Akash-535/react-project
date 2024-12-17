import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [preLoader, setPreloader] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
            setPreloader(false);
            document.body.style.overflow = 'auto'
        }, 2000)

    }, []);

    return (
        <div>
            {preLoader ? (
                <div className="bg-black fixed inset-0 flex justify-center top-0 left-0 items-center z-50 min-h-screen">
                    <span className="text-white">Loading...</span>
                </div>
            ) : null}
        </div>
    );
};

export default Preloader;
