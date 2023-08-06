"use client"
import { useGoals } from '@/store/addGoals';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const Page = () => {
    const { deleteValueCollector } = useGoals();
    const [celebrate, setCelebrate] = useState(false);

    useEffect(() => {
        // Function to add balloons on page load
        const createBalloons = () => {
            const balloonCount = 10; // Number of balloons you want to show

            for (let i = 0; i < balloonCount; i++) {
                const balloon = document.createElement('div');
                balloon.classList.add('balloon');
                document.body.appendChild(balloon);

                // Randomly position the balloons on the screen
                const randomX = Math.floor(Math.random() * window.innerWidth);
                const randomY = Math.floor(Math.random() * window.innerHeight);

                balloon.style.left = `${randomX}px`;
                balloon.style.top = `${randomY}px`;
            }
        };

        createBalloons();

        // Cleanup function to remove balloons when component unmounts
        return () => {
            const balloons = document.querySelectorAll('.balloon');
            balloons.forEach((balloon) => balloon.remove());
        };
    }, []);

    useEffect(() => {
        // Trigger celebration effect when component is mounted
        setCelebrate(true);

        // Stop the celebration effect after 4-5 minutes (adjust the duration as needed)
        const celebrationDuration = 4 * 60 * 1000; // 4 minutes
        const celebrationInterval = setInterval(() => {
            setCelebrate(false);
            clearInterval(celebrationInterval);
        }, celebrationDuration);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(celebrationInterval);
    }, []);

    return (
        <div className="text-center mt-8 min-h-screen">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
                Congratulations on Completing Your Goals!
            </h2>
            {deleteValueCollector.length === 0 ? (
                <div className="text-gray-600">No completed goals yet.</div>
            ) : (
                <ul className="mt-4">
                    {deleteValueCollector.map((goal) => (
                        <li key={goal.id} className="text-lg text-gray-800">
                            {goal.goal}
                        </li>
                    ))}
                </ul>
            )}

            {/* React Confetti component for celebration effect */}
            {(celebrate && deleteValueCollector.length > 0) && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    gravity={0.2} // Adjust gravity to make confetti come down (0.2 is a good value to start with)
                />
            )}
        </div>
    );
};

export default Page;
