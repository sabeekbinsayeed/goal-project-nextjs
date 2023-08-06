"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const goalContext = createContext(null);

export function GoalSetProvider({ children }) {



    const [goals, setGoals] = useState([])


    const [deleteValueCollector, setDeleteValueCollector] = useState([]);
    // bujhanor somoy pore dekhao, jokhon dekhba refresh diar por value ta nai, tokhon
    useEffect(() => {
        try {
            const newGoals = localStorage.getItem("newgoals") || "[]";
            setGoals(JSON.parse(newGoals));
        } catch (e) {
            setGoals([]);
        }
        //later
        try {
            const completedGoals = localStorage.getItem("completedGoals") || "[]";
            setDeleteValueCollector(JSON.parse(completedGoals));
        } catch (e) {
            setDeleteValueCollector([]);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("completedGoals", JSON.stringify(deleteValueCollector));
    }, [deleteValueCollector]);


    // useEffect(() => {
    //     const newGoals = localStorage.getItem('newgoals') || "[]";
    //     setGoals(JSON.parse(newGoals))

    // }, [])
    console.log(goals)

    function handleGoals(goal) {
        console.log(goal);
        setGoals((prev) => {
            const newGoals = [
                {
                    id: Math.random().toString(),
                    goal
                },
                ...prev,
            ];
            localStorage.setItem("newgoals", JSON.stringify(newGoals));
            return newGoals;


        });

    }

    function handleDeleteGoals(id) {
        setGoals((prev) => {

            const deletedGoal = prev.find((goal) => goal.id === id);
            setDeleteValueCollector((prev) => [...prev, deletedGoal]);


            const newGoals = prev.filter((goal) => goal.id !== id);
            toast.success('Successfully task done!');
            localStorage.setItem("newgoals", JSON.stringify(newGoals));
            return newGoals;



        })
    }

    return (
        <goalContext.Provider value={{ goals, handleGoals, handleDeleteGoals, deleteValueCollector }}>
            {children}
        </goalContext.Provider>

    );

}



export function useGoals() {
    const goalContextValue = useContext(goalContext);
    if (!goalContextValue) {
        throw new Error("error from contxt");
    }
    return goalContextValue;

}