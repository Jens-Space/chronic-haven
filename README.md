# Chronic Haven Website

A comprehensive, user-friendly website to help people with chronic conditions through information, community support, and AI assistance.

## 🌟 Features

### 📚 Educational Content
- **About Chronic Conditions**: Comprehensive overview with symptoms, diagnosis, and management
- **Symptoms Guide**: Detailed breakdown with visual elements
- **Treatments & Management**: Complete guide to medications, therapies, and lifestyle strategies
- **Resources Directory**: Extensive links to medical organizations, support groups, and research

### 🛠️ Interactive Tools
- **Fibro Support Assistant**: Intelligent chatbot providing contextual information with chat management
- **Basic Community Forum**: Local storage-based forum for sharing experiences

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Calming Aesthetics**: Soft purple/lavender color scheme suitable for health-focused content
- **Accessibility**: Proper contrast, navigation, and semantic HTML
- **Progressive Enhancement**: Works without JavaScript for basic content

## 🛠️ Tech Stack

### Next.js Version
- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: SQLite with Prisma ORM (authentication foundation)
- **State Management**: React hooks with local storage persistence
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

### Flask Version (Legacy)
- **Framework**: Python Flask with Jinja2 templates
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM (shared schema)
- **State Management**: Flask sessions and localStorage
- **Deployment**: Ready for any Python hosting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git (for version control)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chronic-haven
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
chronic-haven/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout with navigation
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── about/page.tsx     # About chronic conditions
│   │   ├── symptoms/page.tsx  # Symptoms information
│   │   ├── treatments/page.tsx# Treatments guide
│   │   ├── resources/page.tsx # Resources directory
│   │   ├── community/page.tsx # Community forum (basic)
│   │   ├── chatbot/page.tsx   # AI assistant
│   │   └── api/               # API routes
│   ├── components/            # Reusable components
│   │   └── Nav.tsx           # Navigation component
│   └── lib/                  # Utility functions
│       └── auth.ts           # Authentication setup
├── prisma/                   # Database schema
│   ├── schema.prisma        # Prisma schema
│   └── config.ts            # Prisma configuration
├── public/                  # Static assets
├── templates/               # Flask templates (legacy)
├── README.md                # This documentation
└── progress.md              # Development progress log
```

## 🎯 Current Status

**Last Updated**: 2026-02-01

### ✅ Completed Features
- Complete website structure and navigation
- Comprehensive chronic condition information pages
- Intelligent AI chatbot with conversation management
- Basic community forum with local storage
- Responsive design with calming aesthetics
- Database foundation for future enhancements

### 🔄 In Development
- User authentication system
- Full community forum functionality
- Database persistence for all user data

### 🚀 Future Enhancements
- Real-time AI integration (OpenAI API)
- Mobile app companion
- Advanced analytics and reporting
- Multi-language support
- Integration with wearable devices

## 🤝 Contributing

This project aims to provide valuable support for people with chronic conditions. Contributions are welcome, especially from:
- Healthcare professionals
- People with chronic conditions
- UX/UI designers
- Accessibility experts

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with care for the chronic condition community
- Special thanks to healthcare professionals and advocates who provided guidance
- Icons and design elements from open source collections

---

**Note**: This website provides general information and tools but is not a substitute for professional medical advice. Always consult with qualified healthcare providers for personalized medical guidance.
