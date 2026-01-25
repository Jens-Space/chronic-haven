export default function Symptoms() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Symptoms of Fibromyalgia</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Primary Symptoms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-semibold text-blue-800 mb-2">Widespread Pain</h3>
            <p className="text-gray-700 text-sm">Persistent pain affecting multiple areas of the body, often described as aching, burning, or throbbing.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold text-green-800 mb-2">Severe Fatigue</h3>
            <p className="text-gray-700 text-sm">Extreme tiredness that isn't relieved by rest, often worse in the morning.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-2">Sleep Disturbances</h3>
            <p className="text-gray-700 text-sm">Difficulty falling asleep, staying asleep, or feeling refreshed after sleep.</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold text-orange-800 mb-2">Cognitive Issues</h3>
            <p className="text-gray-700 text-sm">Problems with memory, concentration, and mental clarity (often called "fibro fog").</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Associated Symptoms</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            <span>Muscle stiffness and spasms</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            <span>Chronic headaches or migraines</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            <span>Irritable bowel syndrome (IBS)</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            <span>Temporomandibular joint disorder (TMJ)</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            <span>Sensitivity to noise, light, and temperature</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            <span>Restless legs syndrome</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            <span>Depression and anxiety</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            <span>Dry eyes and mouth</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tender Points</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Fibromyalgia is often diagnosed using the concept of "tender points" - specific areas on the body that are particularly sensitive to pressure. These include:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
          <div className="text-center">
            <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-2"></div>
            <span>Neck</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-2"></div>
            <span>Shoulders</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-2"></div>
            <span>Upper back</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-2"></div>
            <span>Lower back</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-2"></div>
            <span>Elbows</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-2"></div>
            <span>Hips</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-2"></div>
            <span>Knees</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-2"></div>
            <span>Chest</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Notes</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 leading-relaxed">
            <strong>Symptoms vary:</strong> Not everyone experiences all symptoms, and their intensity can fluctuate. Some people have mild symptoms while others are severely affected.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Seek professional help:</strong> If you suspect you have fibromyalgia, consult with a healthcare professional for proper diagnosis and treatment. Self-diagnosis can be misleading.
          </p>
        </div>
      </section>
    </div>
  );
}