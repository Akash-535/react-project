import React, { useState } from 'react';
import { ACCORDION_DATA } from '../common/Helper';
import { FaqIcon } from '../common/Icons';

const CustomAccordion = () => {
    const [open, setOpen] = useState();

    const toggleAccordion = (index) => {
        setOpen(open === index ? "" : index);
    };

    return (
        <>
            <div>
                <p className='text-center text-4xl font-bold pb-10'>Accordion</p>
            </div>
            <div className="max-w-[590px] mx-auto">
                {ACCORDION_DATA.map((obj, i) => (
                    <div key={i} className="mb-4 border-b pb-2">
                        <button
                            onClick={() => toggleAccordion(i)}
                            className="w-full py-2 flex justify-between items-center font-bold text-3xl"
                        >
                            {obj.question}
                            <span
                                className={` ${open === i ? 'rotate-180' : 'rotate-0'
                                    } duration-500 ease-linear`}
                            >
                                <FaqIcon />
                            </span>
                        </button>
                        <div
                            className={`md:overflow-hidden overflow-auto transition-all duration-700 ease-linear ${open === i ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0np'
                                }`}
                        >
                            <p className="text-base text-gray-600">
                                {obj.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CustomAccordion;
