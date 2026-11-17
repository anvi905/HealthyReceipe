import { RecipeData } from "@/data/recipes";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type RecipeDetailsProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    returnTo?: string;
  }>;
};

async function RecipeContent({
  params,
  searchParams,
}: RecipeDetailsProps) {
  const [{ slug }, query] = await Promise.all([
    params,
    searchParams,
  ]);

  const returnTo = query.returnTo || "/recipes";

  const recipe = RecipeData.find(
    (recipe) => recipe.slug === slug
  );

  if (!recipe) {
    notFound();
  }



  return (
    <main className="min-h-screen bg-[#f8f8f3] px-4 py-6 md:py-10">

      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <Link
          href={returnTo}
          className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:text-green-900 mb-5"
        >
          ← Back
        </Link>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">

          <div className="relative h-64 md:h-[340px]">
            <Image
              src={recipe.image}
              alt={recipe.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10 flex flex-col justify-center">

            <p className="text-green-700 text-xs font-bold tracking-[3px] uppercase">
              HealthyReceipe
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              {recipe.name}
            </h1>

            <p className="text-gray-500 text-sm leading-6 mt-3">
              Discover this delicious traditional Indian recipe.
              Follow the simple steps and enjoy homemade food.
            </p>

            <div className="flex gap-3 mt-5">

              <div className="bg-green-50 rounded-xl px-5 py-3">
                <p className="text-xs text-gray-500">Region</p>
                <p className="font-semibold text-gray-800 text-sm mt-1">
                  {recipe.region}
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl px-5 py-3">
                <p className="text-xs text-gray-500">Food Type</p>
                <p className="font-semibold text-gray-800 text-sm mt-1">
                  {recipe.foodType}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Ingredients and Instructions */}
        <div className="grid lg:grid-cols-12 gap-5 mt-7 items-start">

          {/* Ingredients */}
          <section className="lg:col-span-4 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100">

            <p className="text-green-700 font-bold text-xs tracking-wider">
              WHAT YOU NEED
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-2">
              Ingredients
            </h2>

            <p className="text-xs text-gray-500 mt-2 mb-5">
              All ingredients for your recipe.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs shrink-0">
                    ✓
                  </span>

                  <span className="leading-5">
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section className="lg:col-span-8 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100">

            <p className="text-orange-600 font-bold text-xs tracking-wider">
              LET'S START COOKING
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-2">
              Cooking Instructions
            </h2>

            <p className="text-xs text-gray-500 mt-2 mb-5">
              Follow these steps to prepare your recipe.
            </p>

            <ol className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

              {recipe.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 py-3 border-b border-gray-100"
                >

                  <span className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Step {index + 1}
                    </p>

                    <p className="text-sm text-gray-600 leading-5 mt-1">
                      {instruction}
                    </p>
                  </div>

                </li>
              ))}

            </ol>
          </section>

        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-green-800 font-semibold">
            Made with love, served with happiness ❤️
          </p>
        </div>

      </div>
    </main>
  );


}

export default function RecipeDetailsPage({
  params,
  searchParams
}: RecipeDetailsProps) {
  return (
    <Suspense fallback={<p>Loading recipe...</p>}>
      <RecipeContent params={params} searchParams={searchParams}/>
    </Suspense>
  );
}