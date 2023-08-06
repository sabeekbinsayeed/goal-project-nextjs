"use client"
import { useGoals } from '@/store/addGoals';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { animated, useSpring } from 'react-spring';

const Page = () => {
    const [goals, setGoals] = useState("");
    const { handleGoals } = useGoals();

    const formAnimation = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        config: { tension: 220, friction: 20 },
    });

    useEffect(() => {
        // Simulate the form fade-in animation on page load
        setTimeout(() => {
            formAnimation.opacity.start(1);
            formAnimation.transform.start('translateY(0)');
        }, 200); // Adjust the delay as needed
    }, [formAnimation]);

    function handleSubmit(e) {
        e.preventDefault();
        toast.success('Successfully added!');
        console.log(goals);
        handleGoals(goals);
        setGoals("");
    }

    return (

        <div className="flex flex-col items-center">
            <img
                className="h-[500px] w-full"
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1102&q=80"
                alt=""
            />

            <div className=" flex flex-col py-12">
                <img />
                <h1 className="text-center text-3xl lg: mb-10 mt-8 text-blue-700 font-bold">
                    Add your goals
                </h1>

                <animated.div style={formAnimation} className="flex items-center justify-center">
                    <form onSubmit={handleSubmit} className="flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="Write your goals"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                            className="py-2 px-4 rounded-l border border-r-0 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="ms-2 py-2 px-4 bg-blue-500 text-white rounded-r font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        >
                            Done
                        </button>
                    </form>
                </animated.div>
            </div>
        </div>
    );
};

export default Page;
