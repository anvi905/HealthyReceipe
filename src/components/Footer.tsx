
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand Section */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-green-400">
              HealthyReceipe
            </h2>

            <p className="max-w-sm leading-7 text-green-100">
              Discover delicious and healthy recipes.
              Explore different cuisines and bring
              happiness to your kitchen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-green-100">
              <li>
                <Link href="/" className="transition hover:text-green-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/recipes" className="transition hover:text-green-400">
                  Recipes
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-green-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-green-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Legal Information
            </h3>

            <ul className="space-y-3 text-green-100">
              <li>
                <Link href="/privacy-policy" className="transition hover:text-green-400">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms-and-conditions" className="transition hover:text-green-400">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/disclaimer" className="transition hover:text-green-400">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-green-800 pt-6 text-center">
          <p className="text-sm text-green-200">
            © 2026 HealthyReceipe.
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
