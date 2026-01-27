export default function About() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Fibromyalgia</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is Fibromyalgia?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Fibromyalgia is a long-term medical condition characterized by widespread pain and tenderness in the muscles, joints, and soft tissues. It affects millions of people worldwide, predominantly women, and can significantly impact daily life, work, and relationships.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The condition is often referred to as a "central sensitivity syndrome" because it amplifies pain signals in the brain and spinal cord. While the exact cause is unknown, it's believed to involve a combination of genetic, environmental, and psychological factors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Characteristics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-semibold text-blue-800 mb-2">Chronic Pain</h3>
            <p className="text-gray-700 text-sm">Persistent pain that can affect multiple areas of the body</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold text-green-800 mb-2">Severe Fatigue</h3>
            <p className="text-gray-700 text-sm">Extreme tiredness that isn't relieved by rest</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-2">Sleep Issues</h3>
            <p className="text-gray-700 text-sm">Difficulty falling asleep or staying asleep</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold text-orange-800 mb-2">Cognitive Problems</h3>
            <p className="text-gray-700 text-sm">Often called "fibro fog" - issues with memory and concentration</p>
          </div>
          <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-400">
            <h3 className="font-semibold text-teal-800 mb-2">Other Symptoms</h3>
            <p className="text-gray-700 text-sm">Headaches, irritable bowel syndrome, sensitivity to noise/light/temperature</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Diagnosis and Management</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Diagnosis typically involves ruling out other conditions and using established criteria. There's no cure, but effective management strategies include medication, physical therapy, exercise, stress management, and lifestyle adjustments.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Many people with fibromyalgia lead full lives by working with healthcare providers to develop personalized management plans.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Our website aims to provide comprehensive support through accurate information, community connection, symptom tracking tools, and innovative AI assistance to help people better understand and manage fibromyalgia.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We're committed to being a reliable resource for those affected by fibromyalgia and their loved ones.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Notes</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 leading-relaxed">
            <strong>Individual experiences vary:</strong> Fibromyalgia affects people differently, and symptoms can change over time. What works for one person may not work for another.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Seek professional medical advice:</strong> Always consult healthcare professionals for personalized diagnosis and treatment plans. This website provides general information and is not a substitute for medical advice.
          </p>
        </div>
      </section>
    </div>
  );
}