import axios from "axios";
import { useState } from "react";

export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [meal, setMeal] = useState(null);
    async function fetchMeal() {
        try {
            const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
            console.log(data);
            console.log(data.data.meals[0].strMeal);
            setMeal(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="grid place-items-center min-h-screen bg-blue-950">
            <div className="w-[80%]">
                <input className="block mx-auto mb-4 px-4 py-2 bg-white rounded" type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="Enter some meals" />
                <button className="block m-auto mb-8 px-4 py-2 bg-gray-200 rounded-md hover:cursor-pointer" onClick={fetchMeal}>
                    Search
                </button>
                {meal && <p className="text-center text-white">Your meal is {meal.data.meals[0].strMeal}</p>}
            </div>
        </div>
    );
}
