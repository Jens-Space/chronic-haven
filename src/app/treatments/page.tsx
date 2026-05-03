import Link from 'next/link';

export default function Treatments() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-purple-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Treatment Options
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Explore various management and treatment approaches for chronic invisible illnesses, from lifestyle changes to medical interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treatment Approaches</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chronic invisible illnesses require personalized treatment plans. Here are some common approaches:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                💊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medications</h3>
              <p className="text-gray-600 leading-relaxed">
                Various medications may be prescribed to manage symptoms, reduce inflammation, or slow disease progression. 
                Always consult with a healthcare provider before starting any medication.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🧘
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifestyle Changes</h3>
              <p className="text-gray-600 leading-relaxed">
                Adopting a healthy lifestyle with regular exercise, a balanced diet, stress management techniques, 
                and adequate sleep can help manage symptoms and improve overall health.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                💆
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complementary Therapies</h3>
              <p className="text-gray-600 leading-relaxed">
                Complementary therapies such as acupuncture, massage, chiropractic care, or herbal supplements 
                may be used alongside conventional treatments to manage symptoms.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🧠
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mental Health Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Chronic illness can take a toll on mental health. Counseling, therapy, or support groups can help 
                manage stress, anxiety, or depression related to chronic illness.
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
              Strategies and techniques for managing specific symptoms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🤕
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pain Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Various approaches to managing chronic pain, including medications, physical therapy, 
                and alternative therapies like acupuncture.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                😴
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fatigue Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategies for managing fatigue, including pacing, energy conservation, and sleep hygiene.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🤯
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brain Fog Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Techniques for managing brain fog, including cognitive training, stress management, 
                and lifestyle adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working with Healthcare Providers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-purple-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-3xl mx-auto mb-4">
                👩‍⚕️
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Working with Healthcare Providers</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Building a strong relationship with your healthcare provider is crucial for managing chronic invisible illnesses. 
                Here are some tips for effective communication:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Prepare a list of questions before your appointment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Keep a symptom diary to track your symptoms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Be honest about your symptoms and concerns</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Ask about treatment options and potential side effects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Don't hesitate to get a second opinion if needed</span>
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
              If you're looking for treatment options or need help managing your condition, we're here to support you.
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
