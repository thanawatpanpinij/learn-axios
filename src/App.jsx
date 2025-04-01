import axios from "axios";
import { useState } from "react";
import ProductCard from "./components/ProductCard";

export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [menus, setMenus] = useState(null);

    async function fetchMeal(e) {
        try {
            console.log(e.target.textContent);
            if (!inputValue) return;
            if (e.key === "Enter" || e.target.textContent === "Search") {
                const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
                setMenus(data.data.meals);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen py-8 bg-blue-950">
            <section className="max-w-[1440px] mx-auto px-8">
                <h1 className="mb-8 text-white text-center text-5xl font-bold">Our menu</h1>
                <section className="relative mx-auto mb-8 w-[50%]">
                    <div className="flex justify-between mx-auto mb-4">
                        <input className="px-4 py-2 w-[80%] bg-white rounded" type="text" onChange={(e) => setInputValue(e.target.value)} onKeyUp={fetchMeal} value={inputValue} placeholder="Search meals here..." />
                        <button className="px-4 py-2 bg-gray-200 rounded-md hover:cursor-pointer" onClick={fetchMeal}>
                            Search
                        </button>
                    </div>
                </section>
                <section className="grid grid-cols-5 gap-4 flex-wrap">{menus && menus.map((menu) => <ProductCard key={menu.idMeal} name={menu.strMeal} image={menu.strMealThumb} />)}</section>
            </section>
        </div>
    );
}
