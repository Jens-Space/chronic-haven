# Chronic Haven Website

A comprehensive, user-friendly website to help people with chronic invisible illnesses through information, community support, and resources.

## 🌟 Features

### 📚 Educational Content
- **About Page**: Comprehensive overview of chronic invisible illnesses with supportive information
- **Conditions Page**: Detailed list of supported conditions (Fibromyalgia, Lupus, ME/CFS, etc.)
- **Symptoms Guide**: Detailed breakdown of common symptoms with visual elements
- **Treatments & Management**: Complete guide to medications, therapies, and lifestyle strategies
- **Resources Directory**: Extensive links to medical organizations, support groups, and research
- **Community Page**: Space for sharing experiences and connecting with others

### 🛠️ Interactive Tools
- **Community Forum**: Local storage-based forum for sharing experiences
- **Feedback Form**: Friendly feedback page with type categorization (Bug Report, Feature Request, General Feedback, Other) that emails submissions via FormSubmit
- **Scroll Buttons**: Convenient scroll-to-top and scroll-to-bottom buttons for easy navigation on long pages

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Calming Aesthetics**: Soft purple/lavender color scheme suitable for health-focused content
- **Accessibility**: Proper contrast, navigation, and semantic HTML
- **Wellbeing Corner Inspired Design**: Clean, centered navigation with hamburger menu on smaller screens
- **Global Footer**: Consistent footer with copyright and medical disclaimer across all pages

## 🛠️ Tech Stack

### Next.js Version
- **Framework**: Next.js 16.1.4 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: SQLite with Prisma ORM (authentication foundation)
- **State Management**: React hooks with local storage persistence
- **Deployment**: GitHub Pages static export (docs/) or any Node.js hosting

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
│   │   ├── layout.tsx         # Root layout with navigation and global footer
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── about/page.tsx     # About chronic invisible illnesses
│   │   ├── conditions/page.tsx# List of supported conditions
│   │   ├── symptoms/page.tsx  # Symptoms information
│   │   ├── treatments/page.tsx# Treatments guide
│   │   ├── resources/page.tsx # Resources directory
│   │   ├── community/page.tsx # Community forum
│   │   ├── feedback/page.tsx  # Feedback form
│   │   └── api/               # API routes
│   ├── components/            # Reusable components
│   │   ├── Nav.tsx          # Navigation component
│   │   ├── FeedbackForm.tsx  # Feedback form component
│   │   └── ScrollButtons.tsx # Scroll buttons component
│   └── generated/            # Generated Prisma client
├── prisma/                   # Database schema
│   ├── schema.prisma        # Prisma schema
│   └── migrations/          # Database migrations
├── public/                  # Static assets
├── .github/workflows/      # GitHub Actions
├── README.md              # This documentation
└── progress.md             # Development progress log
```

## 📅 Project Timeline

**Started**: January 23, 2026
**Current Status**: **100% COMPLETE** - All features implemented and browser icons fixed
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
- [x] Add global footer with copyright and disclaimer

### Phase 3: Information Pages
- [x] **About Page**: Comprehensive chronic invisible illness overview
- [x] **Conditions Page**: Detailed list of supported conditions
- [x] **Symptoms Page**: Detailed symptom breakdown
- [x] **Treatments Page**: Complete treatment guide
- [x] **Resources Page**: Extensive support directory
- [x] **Community Page**: Community forum
- [x] **Feedback Page**: Feedback form with type categorization

### Phase 4: Interactive Tools
- [x] **Community Forum**: Local storage-based community
- [x] **Feedback Form**: Friendly feedback page with type dropdown and website identification

### Phase 5: Design & UX Updates
- [x] Updated home page with wellbeing-corner inspired layout
- [x] Added colorful gradient sections for each category
- [x] Centered section titles with emoji accents
- [x] Made navigation centered with logo above menu
- [x] Added hamburger menu for smaller screens (laptop breakpoint)
- [x] Added custom purple heart logo
- [x] Updated all text to be bold and friendly
- [x] Made text larger and easier to read
- [x] Added diverse emojis for each section

### Phase 6: Final Polish
- [x] Added global footer with copyright and medical disclaimer
- [x] Swapped footer text order and styling for better readability
- [x] Added feedback type dropdown (Bug Report, Feature Request, General Feedback, Other)
- [x] Added website identification to feedback emails to distinguish from wellbeing corner
- [x] Removed duplicate footers from individual pages

## 📊 Project Metrics

- **Total Pages**: 9 (Home + 6 content pages + community + feedback)
- **Interactive Components**: 3 (Community Forum, Feedback Form, Scroll Buttons)
- **Database Tables**: 6 (Users, Sessions, Accounts, etc.)
- **External Links**: 15+ resource links

## 🛠️ Technical Stack Details

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite + Prisma ORM
- **State Management**: React hooks + localStorage
- **Email Service**: FormSubmit.co for feedback submissions

## 📝 Recent Updates

### 2026-02-09 - Icon & Browser Fixes (100% Complete)
- **Firefox Icon Fixes**:
  - Added explicit PNG type declarations in metadata
  - Added missing icon sizes (150x150, 310x310)
  - Created favicons.html for Firefox-specific icon declarations
  - Updated service worker to v6 for cache refresh
  - Removed "maskable" purpose from icons

- **Microsoft Edge Icon Fixes**:
  - Created edge-specific icons with proper padding (70% logo size)
  - Added edge-150x150.png and edge-310x310.png with 22-46px padding
  - Updated browserconfig.xml to use padded icons

- **Samsung Internet Fixes**:
  - Changed theme_color from purple (#8b5cf6) to black (#000000)
  - Regenerated favicon.ico with correct logo

- **Result**: All browser icons now consistent and displaying correctly across Firefox, Edge, and Samsung Internet

### 2026-02-04 - Scroll Buttons & Final Touches
- **Scroll Buttons Component**:
  - Added scroll-to-top and scroll-to-bottom buttons
  - Buttons appear on the right side of the page
  - Smooth scrolling animation
  - Appears on pages with substantial content
  - Added to: About, Conditions, Symptoms, Treatments, and Resources pages

- **Python Server Support**:
  - Added `app.py` for Python-based server deployment
  - Added `server.js` for Node.js server option
  - Alternative deployment options for production

## 🌐 Deployment

The website is deployed on GitHub Pages and accessible at:
**https://jens-space.github.io/chronic-haven/**

### Deployment Options

1. **GitHub Pages** (current)
   - Run `npm run build` to generate static files in `docs/`
   - Push to GitHub to deploy automatically

2. **Python Server**
   ```bash
   python app.py
   ```

3. **Node.js Server**
   ```bash
   node server.js
   ```

## 🤝 Contributing

This project aims to provide valuable support for people with chronic invisible illnesses. Contributions are welcome, especially from:
- Healthcare professionals
- People with chronic conditions
- UX/UI designers
- Accessibility experts

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with care for the chronic illness community
- Special thanks to healthcare professionals and advocates who provided guidance
- Design inspired by The Wellbeing Corner
- Icons and design elements from open source collections

---

**Note**: This website provides general information and tools but is not a substitute for professional medical advice. Always consult with qualified healthcare providers for personalized medical guidance.
