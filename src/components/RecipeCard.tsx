
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type RecipeCardProps = {
    name: string;
    slug: string;
    region: string;
    foodType: string;
    image: string;
    from: "home" | "recipes";
};

export default function RecipeCard({
    name,
    slug,
    region,
    foodType,
    image,
    from
}: RecipeCardProps) {
    const [likeCount, setLikeCount] = useState(0);

   
return (
  <div className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

    {/* Recipe Image */}
    <Link
     href={`/recipes/${slug}?from=${from}`}
      className="relative block h-44 w-full overflow-hidden bg-[#f5f7ef]"
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </Link>

    {/* Recipe Details */}
    <div className="p-4">

      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
          {region}
        </span>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
          {foodType}
        </span>
      </div>

      <Link href={`/recipes/${slug}?from=${from}`}>
        <h2 className="mb-4 min-h-12 text-lg font-bold leading-snug text-gray-800 transition-colors group-hover:text-green-700">
          {name}
        </h2>
      </Link>

      <div className="flex items-center justify-between gap-2 border-t border-gray-100 pt-3">

        <Link
          href={`/recipes/${slug}?from=${from}`}
          className="rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
        >
          View Recipe →
        </Link>

        <button
          onClick={() => setLikeCount(likeCount + 1)}
          className="flex items-center gap-2 rounded-lg border border-red-100 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-all hover:bg-red-100"
        >
          <span className="text-lg">♥</span>
          <span>{likeCount}</span>
        </button>

      </div>
    </div>
  </div>
);

}
