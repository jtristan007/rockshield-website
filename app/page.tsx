export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-50">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-yellow-400">Rockshield</span> Epoxy Coatings
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="#why-us" className="hover:text-yellow-400 transition-colors">Why Us</a>
          <a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>
        <a
          href="tel:+15555555555"
          className="bg-yellow-400 text-gray-900 font-semibold text-sm px-4 py-2 rounded hover:bg-yellow-300 transition-colors"
        >
          Call Now
        </a>
      </nav>

      {/* Hero */}
      <section className="relative bg-gray-900 text-white px-6 py-28 md:py-40 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Professional Floor Coatings
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Floors with Rockshield Epoxy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Durable, beautiful epoxy coatings for garages, basements, warehouses, and commercial spaces. Built to last — backed by our lifetime warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded text-lg hover:bg-yellow-300 transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="border border-white text-white font-semibold px-8 py-4 rounded text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-yellow-400 py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-900">
          {[
            { stat: "500+", label: "Projects Completed" },
            { stat: "10+ yrs", label: "Experience" },
            { stat: "100%", label: "Satisfaction Rate" },
            { stat: "Lifetime", label: "Warranty" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-2xl font-extrabold">{stat}</div>
              <div className="text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Services</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            We offer a full range of epoxy coating solutions tailored to your needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Garage Floor Coatings",
                desc: "High-performance epoxy that resists oil, chemicals, and heavy traffic. Available in dozens of colors and flake systems.",
                icon: "🏠",
              },
              {
                title: "Commercial & Industrial",
                desc: "Heavy-duty polyurea and epoxy systems designed for warehouses, factories, and high-traffic commercial spaces.",
                icon: "🏭",
              },
              {
                title: "Basement Floors",
                desc: "Moisture-resistant coatings that protect and beautify your basement, turning it into a usable living space.",
                icon: "🏗️",
              },
              {
                title: "Metallic Epoxy",
                desc: "Stunning 3D metallic effects that create a one-of-a-kind showroom finish for any room.",
                icon: "✨",
              },
              {
                title: "Concrete Repair",
                desc: "Crack filling and surface prep to ensure your new coating bonds perfectly and lasts for decades.",
                icon: "🔧",
              },
              {
                title: "Anti-Slip Coatings",
                desc: "Safety-grade textured finishes for pool decks, shop floors, and any surface where traction matters.",
                icon: "🛡️",
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why-us" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Rockshield?</h2>
            <ul className="space-y-4">
              {[
                "Factory-trained installers with 10+ years of experience",
                "Professional-grade materials — not big-box store kits",
                "Full surface prep included: diamond grinding and crack repair",
                "Lifetime warranty on all coatings",
                "Clean, professional job site — we protect your property",
                "Fast 1-2 day installs, back to use in 24 hours",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <span className="text-yellow-500 font-bold mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <p className="text-yellow-400 font-semibold uppercase tracking-widest text-xs mb-3">Our Process</p>
            <ol className="space-y-4">
              {[
                ["1", "Free On-Site Quote", "We assess your space and give you a detailed, no-pressure estimate."],
                ["2", "Surface Preparation", "Diamond grinding to open the concrete and ensure a permanent bond."],
                ["3", "Primer & Base Coat", "High-build epoxy primer followed by your chosen color and flake system."],
                ["4", "Clear Topcoat", "UV-stable polyaspartic topcoat for durability and a long-lasting shine."],
              ].map(([num, title, desc]) => (
                <li key={num} className="flex gap-4">
                  <span className="bg-yellow-400 text-gray-900 font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">
                    {num}
                  </span>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-gray-400 text-sm">{desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Recent Work</h2>
          <p className="text-gray-500 text-center mb-12">A sample of floors we&apos;ve transformed across the area.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 text-sm"
              >
                Photo {i + 1}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Replace the placeholders above with your project photos.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-gray-400 mb-10">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
          <form className="grid gap-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
            <select className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-400 focus:outline-none focus:border-yellow-400">
              <option value="">Select Service</option>
              <option>Garage Floor Coating</option>
              <option>Basement Floor Coating</option>
              <option>Commercial / Industrial</option>
              <option>Metallic Epoxy</option>
              <option>Other</option>
            </select>
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-bold py-4 rounded text-lg hover:bg-yellow-300 transition-colors"
            >
              Request My Free Quote
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-sm text-center py-6">
        © {new Date().getFullYear()} Rockshield Epoxy Coatings. All rights reserved.
      </footer>
    </div>
  );
}
