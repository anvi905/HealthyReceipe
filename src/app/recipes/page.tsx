
"use client";

import { useState } from "react";
import { RecipeData } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";

export default function RecipesPage() {
    const [search, setSearch] = useState("");
    const [foodFilter, setFoodFilter] = useState("All");
    const [regionFilter, setRegionFilter] = useState("All");
    const [sortBy, setSortBy] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 8;

    const regions = [
        "All",
        ...new Set(RecipeData.map((recipe) => recipe.region)),
    ];

    const filteredRecipes = RecipeData.filter((recipe) => {
        const matchesSearch = recipe.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesFoodType =
            foodFilter === "All" || recipe.foodType === foodFilter;
        const matchesRegion =
            regionFilter === "All" || recipe.region === regionFilter;

        return matchesSearch && matchesFoodType && matchesRegion;
    });

    const sortedRecipes = [...filteredRecipes].sort((a, b) => {
        if (sortBy === "az") {
            return a.name.localeCompare(b.name);
        }

        if (sortBy === "za") {
            return b.name.localeCompare(a.name);
        }

        return 0;
    });

    // pagination logic
    const totalPages = Math.ceil(
        sortedRecipes.length / recipesPerPage
    );
    const startIndex = (currentPage - 1) * recipesPerPage;
    const currentRecipes = sortedRecipes.slice(
        startIndex,
        startIndex + recipesPerPage
    );


    return (
        <main className="min-h-screen bg-[#fafcf7] px-6 py-12">

            {/* Page Heading */}
            <section className="mx-auto mb-10 max-w-7xl text-center">
                <p className="mb-2 font-semibold uppercase tracking-widest text-green-700">
                    Discover Your Taste
                </p>

                <h1 className="text-4xl font-extrabold text-green-900">
                    All Healthy Recipes
                </h1>

                <p className="mt-3 text-gray-600">
                    Explore delicious and healthy recipes for every occasion.
                </p>
            </section>

            <section className="mx-auto max-w-7xl">

                {/* Search Bar */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search recipes by name..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full rounded-xl border border-green-200 bg-white px-5 py-4 text-gray-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                </div>

                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

                    {/* Food Type Buttons */}
                    <div className="flex flex-wrap gap-3">
                        {["All", "Veg", "Non-Veg"].map((type) => (
                            <button
                                key={type}
                                onClick={() => {
                                    setFoodFilter(type);
                                    setCurrentPage(1);
                                }}
                                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${foodFilter === type
                                    ? "bg-green-700 text-white shadow-md"
                                    : "border border-green-200 bg-white text-green-700 hover:bg-green-50"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    {/* Region Dropdown - Right Side */}
                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="region"
                            className="whitespace-nowrap text-sm font-semibold text-gray-700"
                        >
                            Region:
                        </label>

                        <select
                            id="region"
                            value={regionFilter}
                            onChange={(e) => {
                                setRegionFilter(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="min-w-40 rounded-xl border border-green-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        >
                            {regions.map((region) => (
                                <option key={region} value={region}>
                                    {region === "All" ? "All Regions" : region}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={() => {
                            setSearch("");
                            setFoodFilter("All");
                            setRegionFilter("All");
                            setSortBy("default");
                            setCurrentPage(1);
                        }}
                        className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                    >
                        Clear Filters ✕
                    </button>
                </div>

                {/* Recipe Count */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-800">
                        Explore All Recipes
                    </h2>
                    <p className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                        Showing {sortedRecipes.length === 0 ? 0 : startIndex + 1}
                        {"–"}
                        {Math.min(startIndex + recipesPerPage, sortedRecipes.length)}
                        {" "}of {sortedRecipes.length} recipes
                    </p>

                    <div className="flex items-center gap-3">
                        <label htmlFor="sort" className="text-sm font-semibold text-gray-700">
                            Sort By:
                        </label>

                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="rounded-xl border border-green-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-green-600"
                        >
                            <option value="default">Default</option>
                            <option value="az">Name: A–Z</option>
                            <option value="za">Name: Z–A</option>
                        </select>
                    </div>
                </div>


                {/* Recipe Cards */}
                {sortedRecipes.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {currentRecipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                name={recipe.name}
                                slug={recipe.slug}
                                region={recipe.region}
                                foodType={recipe.foodType}
                                image={recipe.image}
                                from="recipes"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-16 text-center">
                        <p className="text-5xl">🍽️</p>
                        <h3 className="mt-4 text-xl font-bold text-gray-800">
                            No Recipes Found
                        </h3>
                        <p className="mt-2 text-gray-500">
                            Try searching with another recipe name.
                        </p>
                    </div>
                )}

            </section>
            {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-3">

                    {/* Previous Button */}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Previous
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`rounded-lg px-4 py-2 ${currentPage === page
                                ? "bg-green-700 text-white"
                                : "border border-gray-300 hover:bg-green-50"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Next
                    </button>

                </div>
            )}
        </main>
    );
}
