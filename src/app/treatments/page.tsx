export default function Treatments() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Treatments and Management</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Treatment</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          While there is no cure for fibromyalgia, effective management is possible through a combination of treatments tailored to individual needs. The goal is to reduce pain, improve sleep, and enhance quality of life.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-gray-700">
            <strong>Key principle:</strong> Treatment plans should be individualized and may require trying different approaches to find what works best for you.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Medications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Pain Relief</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Over-the-counter pain relievers (ibuprofen, acetaminophen)</li>
              <li>• Prescription medications (tramadol, opioids - used cautiously)</li>
              <li>• Topical treatments (lidocaine patches, capsaicin cream)</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Antidepressants</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• SNRIs (duloxetine, milnacipran) - help with pain and mood</li>
              <li>• SSRIs (paroxetine, fluoxetine) - for depression and anxiety</li>
              <li>• Tricyclic antidepressants (amitriptyline) - for sleep and pain</li>
            </ul>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">Anti-Seizure Medications</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Gabapentin (Neurontin)</li>
              <li>• Pregabalin (Lyrica)</li>
              <li>• Help reduce nerve-related pain</li>
            </ul>
          </div>
          <div className="p-4 bg-teal-50 rounded-lg">
            <h3 className="font-semibold text-teal-800 mb-2">Sleep Aids</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Melatonin supplements</li>
              <li>• Sleep hygiene improvements</li>
              <li>• Prescription sleep medications when needed</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Non-Medication Approaches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Physical Therapy & Exercise</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Low-impact aerobic exercise (walking, swimming)</li>
              <li>• Strength training</li>
              <li>• Stretching and flexibility exercises</li>
              <li>• Tai Chi or yoga</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Cognitive Behavioral Therapy</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Learning coping strategies</li>
              <li>• Stress management techniques</li>
              <li>• Cognitive restructuring</li>
              <li>• Relaxation training</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Alternative Therapies</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Acupuncture</li>
              <li>• Massage therapy</li>
              <li>• Chiropractic care</li>
              <li>• Biofeedback</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Lifestyle Modifications</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Balanced diet and nutrition</li>
              <li>• Adequate sleep hygiene</li>
              <li>• Stress reduction techniques</li>
              <li>• Pacing activities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Management Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">📅</div>
            <h4 className="font-semibold mb-2">Pacing</h4>
            <p className="text-sm text-gray-600">Balance activity and rest to avoid flare-ups</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">🧘</div>
            <h4 className="font-semibold mb-2">Stress Management</h4>
            <p className="text-sm text-gray-600">Practice relaxation techniques and mindfulness</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">👥</div>
            <h4 className="font-semibold mb-2">Support Network</h4>
            <p className="text-sm text-gray-600">Connect with others who understand your experience</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Working with Healthcare Providers</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>Multidisciplinary approach:</strong> Consider working with a team including rheumatologists, pain management specialists, physical therapists, and mental health professionals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Track your progress:</strong> Keep a symptom diary and communicate openly with your healthcare providers about what works and what doesn't. Treatment plans may need adjustment over time.
          </p>
        </div>
      </section>
    </div>
  );
}