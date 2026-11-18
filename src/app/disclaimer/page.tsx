
export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-green-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            HealthyReceipe
          </span>

          <h1 className="mb-4 text-4xl font-bold text-green-900">
            Disclaimer
          </h1>

          <p className="text-gray-600">
            Important information about the content
            available on HealthyReceipe.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 rounded-2xl bg-white p-8 shadow-md">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-green-800">
              1. General Information
            </h2>
            <p className="leading-7 text-gray-600">
              All information provided on HealthyReceipe is
              published in good faith and for general
              informational and educational purposes.
              We make no guarantees regarding the completeness,
              reliability, or accuracy of the information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-green-800">
              2. Recipe Disclaimer
            </h2>
            <p className="leading-7 text-gray-600">
              Recipes, ingredients, cooking instructions,
              preparation times, and nutritional information
              are provided as general guidance. Actual results
              may vary depending on ingredients, equipment,
              cooking methods, and individual preferences.
            </p>
            <p className="mt-3 leading-7 text-gray-600">
              Always check ingredients carefully before
              preparing or consuming any recipe, especially
              if you have food allergies or dietary restrictions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-green-800">
              3. Health and Nutrition Disclaimer
            </h2>
            <p className="leading-7 text-gray-600">
              The food and nutrition information on this
              website is not intended to replace professional
              medical, dietary, or nutritional advice.
              Please consult a qualified healthcare
              professional for personal health concerns
              or dietary recommendations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-green-800">
              4. External Links Disclaimer
            </h2>
            <p className="leading-7 text-gray-600">
              HealthyReceipe may contain links to external
              websites. We do not control or guarantee the
              accuracy, relevance, or reliability of
              information provided by third-party websites.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-green-800">
              5. Advertising Disclaimer
            </h2>
            <p className="leading-7 text-gray-600">
              In the future, HealthyReceipe may display
              advertisements from third-party advertising
              services such as Google AdSense. Advertisements
              are provided by third parties, and their content
              does not necessarily represent our opinions
              or recommendations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-green-800">
              6. Affiliate Disclaimer
            </h2>
            <p className="leading-7 text-gray-600">
              If we participate in affiliate marketing
              programs in the future, some links on our
              website may be affiliate links. We may earn
              a commission when users make qualifying
              purchases through those links, at no
              additional cost to them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-green-800">
              7. Personal Responsibility
            </h2>
            <p className="leading-7 text-gray-600">
              By using this website, you acknowledge that
              you are responsible for your own decisions
              when using recipes and other information
              provided on HealthyReceipe.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-green-800">
              8. Contact Us
            </h2>
            <p className="leading-7 text-gray-600">
              If you have any questions regarding this
              Disclaimer, please contact us through
              our Contact Us page.
            </p>
          </section>

          <div className="border-t border-green-100 pt-5">
            <p className="text-sm text-gray-500">
              Last Updated: November 2026
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
