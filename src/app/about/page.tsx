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
        <ul className="list-disc list-inside mb-4 text-gray-700 leading-relaxed space-y-2">
          <li><strong>Chronic Pain:</strong> Persistent pain that can affect multiple areas of the body</li>
          <li><strong>Fatigue:</strong> Severe tiredness that isn't relieved by rest</li>
          <li><strong>Sleep Issues:</strong> Difficulty falling asleep or staying asleep</li>
          <li><strong>Cognitive Problems:</strong> Often called "fibro fog" - issues with memory and concentration</li>
          <li><strong>Other Symptoms:</strong> Headaches, irritable bowel syndrome, sensitivity to noise/light/temperature</li>
        </ul>
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

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Our website aims to provide comprehensive support through accurate information, community connection, symptom tracking tools, and innovative AI assistance to help people better understand and manage fibromyalgia.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We're committed to being a reliable resource for those affected by fibromyalgia and their loved ones.
        </p>
      </section>
    </div>
  );
}