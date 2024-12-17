import React, { useState } from 'react';
import { ACCORDION_DATA, CUSTOM_TABS_DATA } from '../common/Helper';

const CustomTabs = () => {
    const [open, setOpen] = useState(null);

    const toggleAccordion = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <>
            <div>
                <p className='text-center text-4xl font-bold pb-10'>Accordion</p>
            </div>
            <div className="max-w-[590px] mx-auto flex gap-4">
                {CUSTOM_TABS_DATA.map((obj, i) => (
                    <div key={i} className="mb-4">
                        <div className='flex gap-4'>
                            <button
                                onClick={() => toggleAccordion(i)}
                                className="w-full py-2 flex justify-between items-center font-bold text-3xl"
                            >{obj.question}
                            </button></div>
                        <div
                            className={`overflow-hidden transition-[max-height] duration-700 ease-linear bg-black ${open === i ? 'max-h-[200px]' : 'max-h-0'
                                }`}
                        >
                            <p className={`overflow-hidden transition-[max-height] duration-700 ease-linear text-white p-2 ${open === i ? 'max-h-[200px]' : 'max-h-0'
                                }`}>
                                {obj.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CustomTabs;
