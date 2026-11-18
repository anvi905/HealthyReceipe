
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-green-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-center text-4xl font-bold text-green-800">
          Contact Us
        </h1>

        <p className="mb-10 text-center text-gray-600">
          Have a question or suggestion?
          We would love to hear from you!
        </p>

        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-green-800">
            Get in Touch
          </h2>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border p-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border p-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full rounded-lg border p-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-lg border p-3 outline-none focus:border-green-600"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
