'use client';

import { useState, useEffect } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ id: string; title: string; messages: typeof messages; timestamp: string }[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load chat history from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('fibro-chat-history');
    if (saved) {
      setChatHistory(JSON.parse(saved));
    }
  }, []);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fibro-chat-history', JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Save current chat when messages change
  useEffect(() => {
    if (messages.length > 0 && currentChatId) {
      setChatHistory(prev => prev.map(chat =>
        chat.id === currentChatId
          ? { ...chat, messages, timestamp: new Date().toISOString() }
          : chat
      ));
    }
  }, [messages, currentChatId]);

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('good morning') || input.includes('good afternoon')) {
      return "Hello! I'm here to provide information and support about fibromyalgia. I can help answer questions about symptoms, treatments, management strategies, and resources. What would you like to know?";
    }

    // Gratitude
    if (input.includes('thank') || input.includes('thanks') || input.includes('appreciate')) {
      return "You're welcome! Remember, I'm here to provide general information, but for personalized medical advice, please consult with your healthcare provider. Take care!";
    }

    // Pain-related questions
    if (input.includes('pain') || input.includes('hurt') || input.includes('aching') || input.includes('sore')) {
      return "I'm sorry you're experiencing pain. Fibromyalgia pain can be managed through various approaches including medication, physical therapy, acupuncture, or relaxation techniques. Consider discussing these options with your healthcare provider. Would you like information about specific pain management strategies?";
    }

    // Fatigue-related questions
    if (input.includes('fatigue') || input.includes('tired') || input.includes('energy') || input.includes('exhausted')) {
      return "Fatigue is a common fibromyalgia symptom. Try maintaining a consistent sleep schedule, gentle exercise, and pacing your activities. Some people find that certain medications or supplements help with energy levels. Consider consulting your doctor about sleep hygiene and possible treatments.";
    }

    // Sleep-related questions
    if (input.includes('sleep') || input.includes('insomnia') || input.includes('rest') || input.includes('bed')) {
      return "Sleep disturbances are very common with fibromyalgia. Establishing a bedtime routine, creating a comfortable sleep environment, and avoiding screens before bed can help. Some medications are specifically designed to improve sleep quality. Consider discussing sleep hygiene with your healthcare provider.";
    }

    // Treatment and medication questions
    if (input.includes('treatment') || input.includes('medication') || input.includes('therapy') || input.includes('medicine')) {
      return "Treatment for fibromyalgia often involves a combination of approaches: medications (like antidepressants, anti-seizure meds), physical therapy, cognitive behavioral therapy, and lifestyle modifications. What specific aspect of treatment are you curious about?";
    }

    // Exercise and activity questions
    if (input.includes('exercise') || input.includes('activity') || input.includes('workout') || input.includes('physical')) {
      return "Gentle, consistent exercise can be very beneficial for fibromyalgia. Try low-impact activities like walking, swimming, or yoga. Start slowly and gradually increase intensity. Listen to your body and stop if you experience increased pain. A physical therapist can help design a suitable program.";
    }

    // Diet and nutrition questions
    if (input.includes('diet') || input.includes('food') || input.includes('nutrition') || input.includes('eat') || input.includes('meal')) {
      return "While no specific diet cures fibromyalgia, some people find that certain foods help manage symptoms. Consider eating anti-inflammatory foods, staying hydrated, and maintaining stable blood sugar. Some find relief from avoiding trigger foods. A registered dietitian can provide personalized guidance.";
    }

    // Doctor and specialist questions
    if (input.includes('doctor') || input.includes('specialist') || input.includes('rheumatologist') || input.includes('physician')) {
      return "A rheumatologist specializes in fibromyalgia and related conditions. They can provide comprehensive evaluation and treatment. Other specialists like pain management doctors or physical therapists may also be helpful. Don't hesitate to seek a second opinion if needed.";
    }

    // Flare-up questions
    if (input.includes('flare') || input.includes('flare-up') || input.includes('worse') || input.includes('bad day')) {
      return "Flare-ups can be triggered by stress, overexertion, weather changes, or other factors. During a flare, focus on rest, gentle stretching, heat/cold therapy, and your prescribed medications. Keeping a symptom diary can help identify your personal triggers.";
    }

    // Support and community questions
    if (input.includes('support') || input.includes('help') || input.includes('alone') || input.includes('community')) {
      return "You're not alone in this journey. Many people with fibromyalgia find great support through online communities, support groups, and connecting with others who understand. Consider joining fibromyalgia support organizations or online forums. Professional counseling can also be very helpful.";
    }

    // Symptom tracking questions
    if (input.includes('track') || input.includes('symptom') || input.includes('diary') || input.includes('log')) {
      return "Tracking your symptoms can be very helpful for managing fibromyalgia. Our symptom tracker allows you to log pain, fatigue, sleep quality, mood, and concentration levels. Over time, this can help you identify patterns and triggers. Would you like to try the symptom tracker?";
    }

    // Diagnosis questions
    if (input.includes('diagnos') || input.includes('test') || input.includes('confirm')) {
      return "Fibromyalgia diagnosis typically involves ruling out other conditions and using established criteria. A healthcare provider will consider your symptoms, medical history, and may perform tests to exclude other conditions. Early diagnosis and treatment can make a significant difference.";
    }

    // Mental health questions
    if (input.includes('depress') || input.includes('anxiety') || input.includes('mental') || input.includes('mood') || input.includes('stress')) {
      return "Mental health is an important aspect of fibromyalgia management. Many people experience depression or anxiety alongside physical symptoms. Cognitive behavioral therapy, support groups, and sometimes medication can be helpful. Consider discussing these concerns with your healthcare provider.";
    }

    // Work and daily life questions
    if (input.includes('work') || input.includes('job') || input.includes('disability') || input.includes('employ')) {
      return "Many people with fibromyalgia continue working with appropriate accommodations. This might include flexible hours, ergonomic adjustments, or modified duties. Consider discussing workplace accommodations with your employer or HR department. Some people may qualify for disability benefits if symptoms significantly impact work ability.";
    }

    // Weather and environmental questions
    if (input.includes('weather') || input.includes('cold') || input.includes('humidity') || input.includes('temperature')) {
      return "Many people with fibromyalgia notice that weather changes affect their symptoms. Cold, damp weather often triggers increased pain and fatigue. Some find relief by staying warm, using humidifiers, or planning activities around weather patterns.";
    }

    // Questions about the condition itself
    if (input.includes('what is') || input.includes('explain') || input.includes('fibromyalgia')) {
      return "Fibromyalgia is a long-term condition characterized by widespread pain, fatigue, and other symptoms. It's believed to involve how the brain processes pain signals. While there's no cure, many people manage well with appropriate treatment and lifestyle adjustments. Would you like information about symptoms, treatments, or management strategies?";
    }

    // Coping strategies
    if (input.includes('cope') || input.includes('manage') || input.includes('deal') || input.includes('handle')) {
      return "Coping with fibromyalgia involves finding what works for you. Common strategies include pacing activities, stress management, maintaining social connections, and using relaxation techniques. Building a support network and working with healthcare providers are also important. What specific challenges are you facing?";
    }

    // Default response
    return "I understand you're dealing with fibromyalgia, which can be challenging. While I can provide general information about symptoms and management strategies, I'm not a substitute for professional medical advice. For personalized guidance, please consult with your healthcare provider. What specific aspect would you like information about?";
  };

  const saveCurrentChat = () => {
    console.log('Save button clicked, messages:', messages);
    if (messages.length === 0) {
      alert('No messages to save!');
      return;
    }

    const defaultTitle = messages[0]?.text.slice(0, 30) + (messages[0]?.text.length > 30 ? '...' : '');
    const customTitle = prompt('Enter a name for this chat:', defaultTitle || 'My Chat');

    if (customTitle === null) {
      console.log('User cancelled save');
      return; // User cancelled
    }

    const title = customTitle.trim() || defaultTitle || 'Chat';
    const newChat = {
      id: Date.now().toString(),
      title: title,
      messages: [...messages],
      timestamp: new Date().toISOString()
    };

    console.log('Saving chat:', newChat);
    setChatHistory(prev => {
      const newHistory = [newChat, ...prev];
      console.log('New chat history after save:', newHistory);
      return newHistory;
    });
    setCurrentChatId(newChat.id);
    alert('Chat saved successfully!');
  };

  const startNewChat = () => {
    setMessages([]);
    setCurrentChatId(null);
  };

  const loadChat = (chatId: string) => {
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
      setMessages(chat.messages);
      setCurrentChatId(chatId);
      setSidebarOpen(false);
    }
  };

  const deleteChat = (chatId: string) => {
    console.log('Deleting chat:', chatId);
    setChatHistory(prev => {
      const newHistory = prev.filter(chat => chat.id !== chatId);
      console.log('New chat history:', newHistory);
      return newHistory;
    });
    if (currentChatId === chatId) {
      setMessages([]);
      setCurrentChatId(null);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');

    // Generate bot response
    setTimeout(() => {
      const botMessage = { text: getBotResponse(userInput), sender: 'bot' as const };
      setMessages(prev => [...prev, botMessage]);
    }, 500 + Math.random() * 1000); // Random delay for more natural feel
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">AI Fibro Assistant</h1>
        <div className="flex gap-2">
          {chatHistory.length > 0 && (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm"
            >
              Chat History
            </button>
          )}
          <button
            onClick={saveCurrentChat}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
          >
            Save Chat
          </button>
          <button
            onClick={startNewChat}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
          >
            New Chat
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Chat History Sidebar */}
        {chatHistory.length > 0 && (
          <div className={`w-full md:w-64 flex-shrink-0 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
            <h3 className="font-semibold mb-3 text-gray-800">Saved Chats</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {chatHistory.map((chat) => (
                <div key={chat.id} className="mb-3">
                  <div
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      currentChatId === chat.id
                        ? 'bg-teal-100 border-teal-400 shadow-sm'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                    }`}
                    onClick={() => loadChat(chat.id)}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{chat.title}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(chat.timestamp).toLocaleDateString()} • {chat.messages.length} messages
                      </p>
                      {currentChatId === chat.id && (
                        <span className="text-xs text-teal-600 font-medium">Currently loaded</span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end mt-1">
                    <button
                      onClick={() => {
                        console.log('Delete button clicked for chat:', chat.id);
                        deleteChat(chat.id);
                      }}
                      className="text-xs text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-all duration-200"
                      title="Delete this chat"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="border border-gray-200 flex-1 overflow-y-auto p-2 md:p-4 mb-4 md:mb-6 rounded-lg bg-gray-50 min-h-0">
            {messages.length === 0 && (
              <p className="text-gray-500 italic">Start a conversation by asking a question about fibromyalgia...</p>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-3 rounded-lg max-w-full sm:max-w-xs md:max-w-md ${
                  msg.sender === 'user'
                    ? 'bg-teal-500 !text-black'
                    : 'bg-white !text-black border border-gray-200'
                }`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent !text-black"
              placeholder="Ask about fibromyalgia..."
            />
            <button onClick={handleSend} className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all shadow-md w-full sm:w-auto">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}