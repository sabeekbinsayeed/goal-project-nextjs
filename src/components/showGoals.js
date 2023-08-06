"use client"
import React, { useState } from 'react';
import { GoGoal } from 'react-icons/go';
import { useGoals } from '@/store/addGoals';
import { useTrail, animated } from 'react-spring';
import Link from 'next/link';

const ShowGoals = () => {
    const { goals, handleDeleteGoals } = useGoals();
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

    // Define the animation transitions using react-spring
    const trail = useTrail(goals.length, {
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { tension: 220, friction: 20 },
    });

    const handleCheckboxChange = (e, goalId) => {
        setSelectedCheckboxes({
            ...selectedCheckboxes,
            [goalId]: e.target.checked,
        });
    };

    const isButtonDisabled = (goalId) => {
        return !selectedCheckboxes[goalId];
    };

    return (
        <div className="pb-20">
            <div className="flex justify-center items-center">
                <h1 className="text-2xl text-center text-blue-700 mt-10 font-bold">
                    Your goals
                </h1>
                <span className="ml-2 mt-10 text-2xl text-blue-700">
                    <GoGoal />
                </span>
            </div>

            <div className="w-1/2 mx-auto">
                {goals.length > 0 &&
                    trail.map((styles, index) => (
                        <animated.div
                            key={goals[index].id}
                            className="flex items-center justify-between py-2 border-b border-gray-300"
                            style={styles}
                        >
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id={`goal-${goals[index].id}`}
                                    onChange={(e) => handleCheckboxChange(e, goals[index].id)}
                                />
                                <span className="text-lg font-medium">{goals[index].goal}</span>
                            </label>
                            <button
                                onClick={() => handleDeleteGoals(goals[index].id)}
                                className={`text-blue-500 hover:text-blue-700 font-medium ${isButtonDisabled(goals[index].id)
                                    ? 'cursor-not-allowed text-gray-400'
                                    : ''
                                    }`}
                                disabled={isButtonDisabled(goals[index].id)}
                            >
                                Done
                            </button>
                        </animated.div>
                    ))}
                {goals.length === 0 && (
                    <h1 className="mt-10 text-lg">
                        Please add your goals in the{' '}
                        <Link
                            href="/setgoals"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            set goals section
                        </Link>
                        . Goals help us to keep focus and do well. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore quas dicta, obcaecati minima repudiandae delectus ratione et nulla molestiae voluptatum cumque dolorem vel perspiciatis iste suscipit eius autem ipsum.
                    </h1>
                )}
            </div>
        </div>
    );
};

export default ShowGoals;
