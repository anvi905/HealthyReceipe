
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(path);
    };
     const linkStyle = (path: string) =>
        `font-medium transition-colors ${
            isActive(path)
                ? "font-bold text-green-700"
                : "text-gray-600 hover:text-green-700"
        }`;

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/95 shadow-sm backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-2xl">
                        🌿
                    </div>
                    <div>
                        <h1 className="text-xl font-extrabold text-green-800">
                            HealthyReceipe
                        </h1>
                        <p className="text-xs text-gray-500">
                            Eat Fresh. Live Healthy.
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className={linkStyle("/")}>
                        Home
                    </Link>
                    <Link href="/recipes" className={linkStyle("/recipes")}>
                        Recipes
                    </Link>
                    <Link href="/about" className={linkStyle("/about")}>
                        About
                    </Link>
                     <Link href="/contact" className={linkStyle("/contact")}>
                        Contact Us
                    </Link>
                </div>

                {/* Desktop Button */}
                <Link
                    href="/recipes"
                    className="hidden rounded-full bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800 md:block"
                >
                    Explore Recipes →
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg border border-green-200 p-2 text-green-800 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="flex flex-col gap-4 border-t border-green-100 bg-white px-6 py-5 md:hidden">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="font-medium text-gray-700">
                        Home
                    </Link>
                    <Link href="/recipes" onClick={() => setMenuOpen(false)} className="font-medium text-gray-700">
                        Recipes
                    </Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)} className="font-medium text-gray-700">
                        About
                    </Link>
                    <Link
                        href="/recipes"
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg bg-green-700 px-4 py-3 text-center font-semibold text-white"
                    >
                        Explore Recipes →
                    </Link>
                </div>
            )}
        </nav>
    );
}
