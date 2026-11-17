
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#fafcf7]">

            {/* Hero Section */}
            <section className="bg-green-900 px-6 py-20 text-center text-white">
                <p className="mb-3 font-semibold uppercase tracking-widest text-green-300">
                    About Us
                </p>

                <h1 className="text-4xl font-extrabold md:text-5xl">
                    Discover the Joy of Healthy Eating
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
                    Welcome to HealthyReceipe – your destination for
                    delicious, nutritious and easy-to-make recipes.
                </p>
            </section>

            {/* About Content */}
            <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

                <div>
                    <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
                        Who We Are
                    </p>

                    <h2 className="text-3xl font-bold text-green-950">
                        Making Healthy Eating Simple and Delicious
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        HealthyReceipe is a recipe platform created to
                        make everyday cooking easier, healthier and more
                        enjoyable.
                    </p>

                    <p className="mt-4 leading-8 text-gray-600">
                        From traditional Indian dishes to healthy everyday
                        meals, we bring together recipes that help you
                        explore different tastes and cooking experiences.
                    </p>

                    <Link
                        href="/recipes"
                        className="mt-8 inline-block rounded-xl bg-green-700 px-7 py-3 font-semibold text-white transition hover:bg-green-800"
                    >
                        Explore Recipes →
                    </Link>
                </div>

                <div className="flex min-h-80 items-center justify-center rounded-3xl bg-green-100 p-10">
                    <div className="text-center">
                        <p className="text-8xl">🥗</p>
                        <h3 className="mt-5 text-2xl font-bold text-green-900">
                            Eat Healthy, Live Happy
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Good food. Good health. Good life.
                        </p>
                    </div>
                </div>

            </section>

            {/* Mission & Vision */}
            <section className="bg-white px-6 py-20">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 text-center">
                        <p className="font-semibold uppercase tracking-widest text-green-700">
                            What Drives Us
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-green-950">
                            Our Mission & Vision
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">

                        <div className="rounded-2xl border border-green-100 bg-[#fafcf7] p-8">
                            <div className="text-4xl">🎯</div>
                            <h3 className="mt-5 text-2xl font-bold text-green-900">
                                Our Mission
                            </h3>
                            <p className="mt-4 leading-7 text-gray-600">
                                To inspire people to prepare healthy,
                                delicious and accessible meals using
                                simple ingredients and easy recipes.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-green-100 bg-[#fafcf7] p-8">
                            <div className="text-4xl">🌱</div>
                            <h3 className="mt-5 text-2xl font-bold text-green-900">
                                Our Vision
                            </h3>
                            <p className="mt-4 leading-7 text-gray-600">
                                To build a community where everyone can
                                discover new recipes, enjoy cooking and
                                make healthier food choices.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="mx-auto max-w-7xl px-6 py-20">

                <div className="mb-12 text-center">
                    <p className="font-semibold uppercase tracking-widest text-green-700">
                        Why HealthyReceipe
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-green-950">
                        What Makes Us Special?
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {[
                        {
                            icon: "🥦",
                            title: "Healthy Choices",
                            description: "Discover recipes that encourage healthier everyday eating."
                        },
                        {
                            icon: "👩‍🍳",
                            title: "Easy Cooking",
                            description: "Simple ingredients and step-by-step cooking instructions."
                        },
                        {
                            icon: "🍛",
                            title: "Variety of Recipes",
                            description: "Explore different cuisines, regions and food preferences."
                        }
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-green-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <p className="text-5xl">{item.icon}</p>

                            <h3 className="mt-5 text-xl font-bold text-green-900">
                                {item.title}
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-green-900 px-6 py-16 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Ready to Explore Something Delicious?
                </h2>

                <p className="mt-4 text-green-100">
                    Find your next favourite recipe with HealthyReceipe.
                </p>

                <Link
                    href="/recipes"
                    className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-bold text-green-900 transition hover:bg-green-100"
                >
                    Explore All Recipes →
                </Link>
            </section>

        </main>
    );
}
