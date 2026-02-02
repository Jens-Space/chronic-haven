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

## 📅 Project Timeline

**Started**: January 23, 2026  
**Current Status**: Fully functional website with calming, supportive design  
**Project Status**: **PRODUCTION READY**

## ✅ Completed Features

### Phase 1: Project Setup & Foundation
- [x] Initialize Next.js 15 project with TypeScript
- [x] Set up Tailwind CSS for styling
- [x] Configure project structure with App Router
- [x] Install and configure development dependencies
- [x] Set up version control and documentation

### Phase 2: Core Website Structure
- [x] Create responsive navigation component
- [x] Build home page with feature overview
- [x] Implement routing for all main pages
- [x] Design calming, accessible color scheme (purple/lavender)
- [x] Add footer with links and disclaimers

### Phase 3: Information Pages
- [x] **About Page**: Comprehensive fibromyalgia overview
- [x] **Symptoms Page**: Detailed symptom breakdown
- [x] **Treatments Page**: Complete treatment guide
- [x] **Resources Page**: Extensive support directory

### Phase 4: Interactive Tools
- [x] **AI Chatbot**: Intelligent assistant with contextual responses
- [x] **Community Forum**: Local storage-based community

### Phase 5: Design & UX Updates
- [x] Updated home page with wellbeing-corner inspired layout
- [x] Added colorful gradient sections for each category
- [x] Centered section titles with emoji accents
- [x] Made navigation centered with logo
- [x] Added custom purple heart logo
- [x] Updated all text to be bold and friendly
- [x] Made text larger and easier to read
- [x] Added diverse emojis for each section
- [x] Made encouraging message section match welcome section style

### Phase 6: Symptom Tracker Update
- [x] Replaced interactive tracker with free Android app recommendations
- [x] Added 6 free symptom tracker apps from Play Store
- [x] Created clickable Play Store search links
- [x] Added tips section for effective symptom tracking
- [x] Maintained consistent design with rest of site

## 📊 Project Metrics

- **Total Pages**: 8 (Home + 6 content pages + 1 community)
- **Interactive Components**: 2 (Chatbot, Forum)
- **Database Tables**: 6 (Users, Sessions, Accounts, etc.)
- **External Links**: 15+ resource links
- **App Recommendations**: 6 free Android symptom trackers

## 🔄 Currently In Development

### Design Refinements
- Fine-tuning color schemes
- Accessibility improvements
- Mobile responsiveness optimization

### Planned Features
- User authentication system
- Full community forum functionality
- Database persistence for all user data

### Future Enhancements
- Real-time AI integration (OpenAI API)
- Mobile app companion
- Advanced analytics and reporting
- Multi-language support
- Integration with wearable devices

## 🛠️ Technical Stack Details

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite + Prisma ORM
- **Authentication**: NextAuth.js (framework ready)
- **State Management**: React hooks + localStorage

## 📝 Recent Updates

### 2026-02-02 - Navigation & Design Updates
- Changed navigation buttons to white background with black text for better readability
- Added purple border to navigation buttons for visibility
- Replaced logo with transparent background version
- Resized logo to 300px width
- Removed link from logo (no longer clickable)
- Centered navigation with logo and buttons together
- Reduced button sizes for more compact appearance
- Updated footer: removed purple heart, added copyright notice "© 2026 Jen's Space. All rights reserved."

### 2026-02-02 - Button Styling
- Made buttons more purple with `bg-purple-600` and `hover:bg-purple-700`
- Added `!important` to button text color to override globals.css link color
- All buttons now display white text correctly

### 2026-02-02 - Navigation Updates
- Removed home link from logo
- Added "Home" button to navigation menu (first item above "About")
- Made menu bar more friendly with:
  - Soft purple gradient background
  - Rounded bottom corners
  - Pill-shaped navigation links with purple background on hover
  - White text on purple when hovering over links
  - Improved mobile menu with rounded corners and better styling

### 2026-02-02 - Button Visibility
- Updated all pages to have visible "Back to Top" buttons next to "Back to Home" buttons
- Removed scroll-based floating back to top button
- Now buttons are always visible and accessible at the bottom of each page

### 2026-02-01 - Rebranding
- Updated project name from "Fibro Support Hub" to "Chronic Haven"
- Updated all references throughout documentation to reflect new branding
- Maintained all features and functionality while updating project identity

### 2026-02-01 - GitHub Pages Deployment
- Added `trailingSlash: true` to next.config.ts for GitHub Pages compatibility
- Added `basePath: '/chronic-haven'` to serve site at https://jens-space.github.io/chronic-haven/
- Added `.nojekyll` file to prevent GitHub Pages from processing site with Jekyll
- CSS files now load correctly through GitHub Pages
- Site successfully deployed and accessible at https://jens-space.github.io/chronic-haven/

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
