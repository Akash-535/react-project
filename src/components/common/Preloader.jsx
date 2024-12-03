import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [preLoader, setPreloader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreloader(false);
        }, 2000)

    }, []);

    return (
        <div>
            {preLoader ? (
                <div className="bg-black fixed inset-0 flex justify-center items-center z-50">
                    <span className="text-white">Loading...</span>
                </div>
            ) : null}
        </div>
    );
};

export default Preloader;
