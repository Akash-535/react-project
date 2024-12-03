import React, { useState } from 'react';
import { ACCORDION_DATA } from '../common/Helper';

const CustomAccordion = () => {
    const [open, setOpen] = useState(null);

    const toggleAccordion = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="max-w-[590px] mx-auto">
            {ACCORDION_DATA.map((obj, i) => (
                <div key={i} className="mb-4 border-b pb-2">
                    <button
                        onClick={() => toggleAccordion(i)}
                        className="w-full py-2 flex justify-between items-center font-bold text-3xl"
                    >
                        {obj.heading}
                        <span
                            className={`transform ${open === i ? 'rotate-180' : 'rotate-0'
                                } duration-700 ease-linear`}
                        >
                            v
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-[max-height] duration-700 ease-linear bg-black ${open === i ? 'max-h-[200px]' : 'max-h-0'
                            }`}
                    >
                        <p className={`overflow-hidden transition-[max-height] duration-700 ease-linear text-white p-2 ${open === i ? 'max-h-[200px]' : 'max-h-0'
                            }`}>
                            {obj.peragraph}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomAccordion;
