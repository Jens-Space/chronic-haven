export default function Resources() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Resources</h1>
      <p className="mb-8 text-gray-700 leading-relaxed">
        Find helpful links and organizations for fibromyalgia support, research, and community resources.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Medical Organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://www.arthritis.org/diseases/fibromyalgia" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-teal-600 mb-2">Arthritis Foundation</h3>
            <p className="text-sm text-gray-600">Comprehensive information about fibromyalgia symptoms, treatments, and research.</p>
          </a>
          <a href="https://www.mayoclinic.org/diseases-conditions/fibromyalgia/symptoms-causes/syc-20354780" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-teal-600 mb-2">Mayo Clinic</h3>
            <p className="text-sm text-gray-600">Detailed medical information about symptoms, causes, and treatment options.</p>
          </a>
          <a href="https://www.nhs.uk/conditions/fibromyalgia/" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-teal-600 mb-2">NHS - Fibromyalgia</h3>
            <p className="text-sm text-gray-600">UK National Health Service information and treatment guidance.</p>
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Research & Support Organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://www.fmauk.org/" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-teal-600 mb-2">Fibromyalgia Association UK</h3>
            <p className="text-sm text-gray-600">UK-based support, information, and advocacy for fibromyalgia patients.</p>
          </a>
          <a href="https://painuk.org/members/charities/fibromyalgia-action/" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-teal-600 mb-2">Fibromyalgia Action</h3>
            <p className="text-sm text-gray-600">Charity providing support, information, and research for fibromyalgia.</p>
          </a>
          <a href="https://www.thebraincharity.org.uk/condition/fibromyalgia/" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-teal-600 mb-2">The Brain Charity - Fibromyalgia</h3>
            <p className="text-sm text-gray-600">Information and support for neurological conditions including fibromyalgia.</p>
          </a>
          <a href="https://www.webmd.com/fibromyalgia/default.htm" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-teal-600 mb-2">WebMD - Fibromyalgia</h3>
            <p className="text-sm text-gray-600">Health information, news, and community discussions.</p>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Online Communities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://www.reddit.com/r/fibromyalgia/" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-teal-600 mb-2">Reddit - r/fibromyalgia</h3>
            <p className="text-sm text-gray-600">Active community for sharing experiences and support.</p>
          </a>
          <a href="https://www.dailystrength.org/group/fibromyalgia" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-teal-600 mb-2">Daily Strength - Fibromyalgia</h3>
            <p className="text-sm text-gray-600">Online support groups and discussion forums.</p>
          </a>
        </div>
      </section>
    </div>
  );
}