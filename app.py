from flask import Flask, render_template, request, session, redirect, url_for, jsonify
import random
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'fibro_secret_key_123'  # Change this in production

def get_bot_response(user_input):
    input_text = user_input.lower()

    # Greetings
    if any(word in input_text for word in ['hello', 'hi', 'hey', 'good morning', 'good afternoon']):
        return "Hello! I'm here to provide information and support about fibromyalgia. I can help answer questions about symptoms, treatments, management strategies, and resources. What would you like to know?"

    # Gratitude
    if any(word in input_text for word in ['thank', 'thanks', 'appreciate']):
        return "You're welcome! Remember, I'm here to provide general information, but for personalized medical advice, please consult with your healthcare provider. Take care!"

    # Pain-related questions
    if any(word in input_text for word in ['pain', 'hurt', 'aching', 'sore']):
        return "I'm sorry you're experiencing pain. Fibromyalgia pain can be managed through various approaches including medication, physical therapy, acupuncture, or relaxation techniques. Consider discussing these options with your healthcare provider. Would you like information about specific pain management strategies?"

    # Fatigue-related questions
    if any(word in input_text for word in ['fatigue', 'tired', 'energy', 'exhausted']):
        return "Fatigue is a common fibromyalgia symptom. Try maintaining a consistent sleep schedule, gentle exercise, and pacing your activities. Some people find that certain medications or supplements help with energy levels. Consider consulting your doctor about sleep hygiene and possible treatments."

    # Sleep-related questions
    if any(word in input_text for word in ['sleep', 'insomnia', 'rest', 'bed']):
        return "Sleep disturbances are very common with fibromyalgia. Establishing a bedtime routine, creating a comfortable sleep environment, and avoiding screens before bed can help. Some medications are specifically designed to improve sleep quality. Consider discussing sleep hygiene with your healthcare provider."

    # Treatment and medication questions
    if any(word in input_text for word in ['treatment', 'medication', 'therapy', 'medicine']):
        return "Treatment for fibromyalgia often involves a combination of approaches: medications (like antidepressants, anti-seizure meds), physical therapy, cognitive behavioral therapy, and lifestyle modifications. What specific aspect of treatment are you curious about?"

    # Exercise and activity questions
    if any(word in input_text for word in ['exercise', 'activity', 'workout', 'physical']):
        return "Gentle, consistent exercise can be very beneficial for fibromyalgia. Try low-impact activities like walking, swimming, or yoga. Start slowly and gradually increase intensity. Listen to your body and stop if you experience increased pain. A physical therapist can help design a suitable program."

    # Diet and nutrition questions
    if any(word in input_text for word in ['diet', 'food', 'nutrition', 'eat', 'meal']):
        return "While no specific diet cures fibromyalgia, some people find that certain foods help manage symptoms. Consider eating anti-inflammatory foods, staying hydrated, and maintaining stable blood sugar. Some find relief from avoiding trigger foods. A registered dietitian can provide personalized guidance."

    # Doctor and specialist questions
    if any(word in input_text for word in ['doctor', 'specialist', 'rheumatologist', 'physician']):
        return "A rheumatologist specializes in fibromyalgia and related conditions. They can provide comprehensive evaluation and treatment. Other specialists like pain management doctors or physical therapists may also be helpful. Don't hesitate to seek a second opinion if needed."

    # Flare-up questions
    if any(word in input_text for word in ['flare', 'flare-up', 'worse', 'bad day']):
        return "Flare-ups can be triggered by stress, overexertion, weather changes, or other factors. During a flare, focus on rest, gentle stretching, heat/cold therapy, and your prescribed medications. Keeping a symptom diary can help identify your personal triggers."

    # Support and community questions
    if any(word in input_text for word in ['support', 'help', 'alone', 'community']):
        return "You're not alone in this journey. Many people with fibromyalgia find great support through online communities, support groups, and connecting with others who understand. Consider joining fibromyalgia support organizations or online forums. Professional counseling can also be very helpful."

    # Symptom tracking questions
    if any(word in input_text for word in ['track', 'symptom', 'diary', 'log']):
        return "Tracking your symptoms can be very helpful for managing fibromyalgia. Our symptom tracker allows you to log pain, fatigue, sleep quality, mood, and concentration levels. Over time, this can help you identify patterns and triggers. Would you like to try the symptom tracker?"

    # Diagnosis questions
    if any(word in input_text for word in ['diagnos', 'test', 'confirm']):
        return "Fibromyalgia diagnosis typically involves ruling out other conditions and using established criteria. A healthcare provider will consider your symptoms, medical history, and may perform tests to exclude other conditions. Early diagnosis and treatment can make a significant difference."

    # Mental health questions
    if any(word in input_text for word in ['depress', 'anxiety', 'mental', 'mood', 'stress']):
        return "Mental health is an important aspect of fibromyalgia management. Many people experience depression or anxiety alongside physical symptoms. Cognitive behavioral therapy, support groups, and sometimes medication can be helpful. Consider discussing these concerns with your healthcare provider."

    # Work and daily life questions
    if any(word in input_text for word in ['work', 'job', 'disability', 'employ']):
        return "Many people with fibromyalgia continue working with appropriate accommodations. This might include flexible hours, ergonomic adjustments, or modified duties. Consider discussing workplace accommodations with your employer or HR department. Some people may qualify for disability benefits if symptoms significantly impact work ability."

    # Weather and environmental questions
    if any(word in input_text for word in ['weather', 'cold', 'humidity', 'temperature']):
        return "Many people with fibromyalgia notice that weather changes affect their symptoms. Cold, damp weather often triggers increased pain and fatigue. Some find relief by staying warm, using humidifiers, or planning activities around weather patterns."

    # Questions about the condition itself
    if any(word in input_text for word in ['what is', 'explain', 'fibromyalgia']):
        return "Fibromyalgia is a long-term condition characterized by widespread pain, fatigue, and other symptoms. It's believed to involve how the brain processes pain signals. While there's no cure, many people manage well with appropriate treatment and lifestyle adjustments. Would you like information about symptoms, treatments, or management strategies?"

    # Coping strategies
    if any(word in input_text for word in ['cope', 'manage', 'deal', 'handle']):
        return "Coping with fibromyalgia involves finding what works for you. Common strategies include pacing activities, stress management, maintaining social connections, and using relaxation techniques. Building a support network and working with healthcare providers are also important. What specific challenges are you facing?"

    # Default response
    return "I understand you're dealing with fibromyalgia, which can be challenging. While I can provide general information about symptoms and management strategies, I'm not a substitute for professional medical advice. For personalized guidance, please consult with your healthcare provider. What specific aspect would you like information about?"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/chatbot', methods=['GET', 'POST'])
def chatbot():
    if 'messages' not in session:
        session['messages'] = []
    if 'chat_history' not in session:
        session['chat_history'] = []

    if request.method == 'POST':
        data = request.get_json()
        user_input = data.get('message', '').strip()
        if user_input:
            user_message = {'text': user_input, 'sender': 'user'}
            session['messages'].append(user_message)
            # Generate bot response
            import time
            time.sleep(0.5 + random.random())  # Simulate delay
            bot_response = get_bot_response(user_input)
            bot_message = {'text': bot_response, 'sender': 'bot'}
            session['messages'].append(bot_message)
            session.modified = True
        return jsonify({'success': True})

    return render_template('chatbot.html')

@app.route('/chatbot/save', methods=['POST'])
def save_chat():
    if 'messages' in session and session['messages']:
        title = request.form.get('title', f"Chat {len(session['chat_history']) + 1}")
        chat = {
            'id': str(len(session['chat_history']) + 1),
            'title': title,
            'messages': session['messages'].copy(),
            'timestamp': datetime.now().isoformat()
        }
        session['chat_history'].append(chat)
        session['messages'] = []
        session.modified = True
    return redirect(url_for('chatbot'))

@app.route('/chatbot/new')
def new_chat():
    session['messages'] = []
    return redirect(url_for('chatbot'))

@app.route('/chatbot/load/<chat_id>')
def load_chat(chat_id):
    for chat in session['chat_history']:
        if chat['id'] == chat_id:
            session['messages'] = chat['messages'].copy()
            break
    return redirect(url_for('chatbot'))

@app.route('/chatbot/delete/<chat_id>')
def delete_chat(chat_id):
    session['chat_history'] = [chat for chat in session['chat_history'] if chat['id'] != chat_id]
    if session['messages'] and any(msg.get('chat_id') == chat_id for msg in session['messages']):
        session['messages'] = []
    return redirect(url_for('chatbot'))

@app.route('/community')
def community():
    return render_template('community.html')

@app.route('/resources')
def resources():
    return render_template('resources.html')

@app.route('/symptoms')
def symptoms():
    return render_template('symptoms.html')

@app.route('/treatments')
def treatments():
    return render_template('treatments.html')

@app.route('/tracker')
def tracker():
    return render_template('tracker.html')

if __name__ == '__main__':
    app.run(debug=True)