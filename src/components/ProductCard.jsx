import React from "react";

export default function ProductCard({ name, image }) {
    return (
        <article className="overflow-hidden pb-4 bg-gray-100 rounded">
            <div className="overflow-hidden w-full mb-4">
                <img className="w-full object-cover transition duration-200 hover:scale-[1.1]" src={image} alt={`${name}`} />
            </div>
            <h2 className="text-center font-semibold">{name}</h2>
        </article>
    );
}
