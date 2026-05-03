import Link from 'next/link';

export default function Symptoms() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-purple-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Symptoms Guide
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Learn about common symptoms of chronic invisible illnesses and how to recognize them in yourself and others.
            </p>
          </div>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Symptoms</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Symptoms of chronic invisible illnesses vary widely but often include these common experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🤕
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chronic Pain</h3>
              <p className="text-gray-600 leading-relaxed">
                Persistent pain that lasts for more than three months. This can include muscle pain, joint pain, 
                headaches, or widespread pain throughout the body.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                😴
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fatigue</h3>
              <p className="text-gray-600 leading-relaxed">
                Extreme tiredness that doesn't improve with rest. This can include physical fatigue, 
                mental fatigue, or both.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🤯
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brain Fog</h3>
              <p className="text-gray-600 leading-relaxed">
                Difficulty concentrating, memory problems, or mental confusion. This can make it 
                hard to focus, remember things, or think clearly.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mixed Symptoms</h3>
              <p className="text-gray-600 leading-relaxed">
                Chronic invisible illnesses often present with a combination of symptoms that can 
                vary in severity and frequency over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Symptom Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategies and techniques for managing chronic invisible illness symptoms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                📋
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Your Symptoms</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep a symptom diary to track your symptoms, triggers, and patterns over time. 
                This can help you and your healthcare provider better understand your condition.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🧘
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relaxation Techniques</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore relaxation techniques such as deep breathing, meditation, or yoga to help 
                manage stress and reduce symptom severity.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🍎
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthy Lifestyle</h3>
              <p className="text-gray-600 leading-relaxed">
                Adopting a healthy lifestyle with regular exercise, a balanced diet, and adequate 
                sleep can help manage symptoms and improve overall health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to See a Doctor */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-purple-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-3xl mx-auto mb-4">
                🏥
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">When to See a Doctor</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you're experiencing persistent symptoms that interfere with your daily life, 
                it's important to see a healthcare provider. They can help diagnose your condition 
                and develop a treatment plan.
              </p>
              <p>
                Some signs that you should see a doctor include:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Symptoms that last for more than three months</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Symptoms that interfere with your daily activities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Symptoms that get worse over time</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>New or unusual symptoms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
            <p className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed">
              If you're experiencing symptoms of a chronic invisible illness, we're here to support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources" 
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-md"
              >
                Explore Resources
              </Link>
              <Link 
                href="/community" 
                className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg border border-purple-300 hover:bg-purple-800 transition-colors"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
