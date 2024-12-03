import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Gsap = () => {
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const box7 = useRef(null);
    const box8 = useRef(null);

    useEffect(() => {
        const boxes = [
            box1.current,
            box2.current,
            box3.current,
            box4.current,
            box5.current,
            box6.current,
            box7.current,
            box8.current
        ];

        // Bounce animation for boxes
        gsap.fromTo(
            boxes,
            {
                y: 0,
                opacity: 0,
            },
            {
                y: -40,
                opacity: 1,
                stagger: 0.2,
                duration: 0.6,
                yoyo: true,
                repeat: -1,
                ease: "bounce.out",
            }
        );

        // Color transition for boxes
        gsap.to(boxes, {
            backgroundColor: "random(['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F3FF33'])",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Hover scaling effect
        boxes.forEach((box) => {
            box.addEventListener("mouseenter", () => {
                gsap.to(box, {
                    scale: 1.2,
                    duration: 0.3,
                });
            });
            box.addEventListener("mouseleave", () => {
                gsap.to(box, {
                    scale: 1,
                    duration: 0.3,
                });
            });
        });
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="grid grid-cols-4 gap-6">
                <div ref={box1} className="w-16 h-16 bg-red-500 rounded-lg shadow-xl"></div>
                <div ref={box2} className="w-16 h-16 bg-blue-500 rounded-lg shadow-xl"></div>
                <div ref={box3} className="w-16 h-16 bg-green-500 rounded-lg shadow-xl"></div>
                <div ref={box4} className="w-16 h-16 bg-yellow-500 rounded-lg shadow-xl"></div>
                <div ref={box5} className="w-16 h-16 bg-purple-500 rounded-lg shadow-xl"></div>
                <div ref={box6} className="w-16 h-16 bg-pink-500 rounded-lg shadow-xl"></div>
                <div ref={box7} className="w-16 h-16 bg-teal-500 rounded-lg shadow-xl"></div>
                <div ref={box8} className="w-16 h-16 bg-indigo-500 rounded-lg shadow-xl"></div>
            </div>
        </div>
    );
};

export default Gsap;
