import RecipeCard from "@/components/RecipeCard";
import { RecipeData } from "@/data/recipes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen bg-green-50">
      {/* Hero Section */}

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-[#eaf3e8] px-6 py-12 md:px-12 md:py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="max-w-xl">

            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-800">
              🌿 Healthy Food, Happy Life
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-[#244b32]">
              Discover Delicious
              <span className="block text-green-700">
                & Healthy Recipes
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg leading-8 text-gray-600">
              Explore traditional Indian recipes, discover new flavours
              and make every meal healthy and special.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/recipes"
                className="rounded-full bg-green-700 px-7 py-3.5 text-white font-semibold shadow-md hover:bg-green-800 transition"
              >
                Explore Recipes →
              </Link>

              <Link
                href="#popular-recipes"
                className="rounded-full border border-green-700 px-7 py-3.5 text-green-800 font-semibold hover:bg-green-100 transition"
              >
                Popular Recipes
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-8">

              <div>
                <p className="text-2xl font-bold text-green-800">Fresh</p>
                <p className="text-sm text-gray-600">Ingredients</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-green-800">Easy</p>
                <p className="text-sm text-gray-600">Cooking Steps</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-green-800">Tasty</p>
                <p className="text-sm text-gray-600">Indian Recipes</p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="absolute -inset-3 rounded-3xl bg-green-200/60 rotate-3"></div>

            <div className="relative h-72 md:h-[420px] overflow-hidden rounded-3xl shadow-xl">

              <Image
                src="/images/homefood.png"
                alt="Fresh and delicious Indian food"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

            <div className="absolute -bottom-5 -left-3 md:-left-8 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-sm font-bold text-green-800">
                Made with Love ❤️
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Homemade Goodness
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Popular Recipes */}
      <section id="popular-recipes" className="px-6 py-10">

        <h2 className="mb-8 text-2xl font-bold text-green-800">
          Popular Recipes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {RecipeData.map((recipe, index) => (
            <RecipeCard
              key={index}
              slug={recipe.slug}
              name={recipe.name}
              region={recipe.region}
              foodType={recipe.foodType}
              image={recipe.image}
              from="home"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
