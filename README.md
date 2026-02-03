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
**Current Status**: **COMPLETED** - Website is complete and ready for use
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
- **Interactive Components**: 2 (Community Forum, Feedback Form)
- **Database Tables**: 6 (Users, Sessions, Accounts, etc.)
- **External Links**: 15+ resource links

## 🛠️ Technical Stack Details

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite + Prisma ORM
- **State Management**: React hooks + localStorage
- **Email Service**: FormSubmit.co for feedback submissions

## 📝 Recent Updates

### 2026-02-03 - Final Polish & Completion
- **Navigation Updates**:
  - Updated navbar to match wellbeing corner style
  - Logo centered above navigation menu
  - Hamburger menu appears below logo on smaller screens (laptop breakpoint)
  - Switched hamburger icon from emoji to SVG for cleaner appearance
  - Changed breakpoint from md to lg for better laptop compatibility

- **Global Footer**:
  - Added consistent footer across all pages
  - Disclaimer: "Remember: This site provides information and tools but is not a substitute for professional medical advice."
  - Copyright: "© 2026 Jen's Space. All rights reserved."
  - Swapped text order and styling (disclaimer darker, copyright lighter)

- **Feedback Form Enhancement**:
  - Added feedback type dropdown with options: General Feedback, Bug Report, Feature Request, Other
  - Added website identification in email submissions
  - Updated email subject to "New Feedback from Chronic Haven Website" for easy identification
  - Helps distinguish feedback from wellbeing corner website

- **About Page Cleanup**:
  - Removed hover effects from conditions cards (no longer look like buttons)
  - Removed duplicate footer section (now using global footer)
  - Conditions cards appear as static informational elements

### 2026-02-02 - Navigation & Design Updates
- Changed navigation buttons to white background with black text for better readability
- Added purple border to navigation buttons for visibility
- Replaced logo with transparent background version
- Resized logo to 300px width
- Removed link from logo (no longer clickable)
- Centered navigation with logo and buttons together
- Reduced button sizes for more compact appearance

### 2026-02-02 - Button Styling
- Made buttons more purple with `bg-purple-600` and `hover:bg-purple-700`
- Added `!important` to button text color to override globals.css link color
- All buttons now display white text correctly

### 2026-02-03 - Feedback & Navigation
- Added Feedback page and friendly feedback form
- Form submissions email via FormSubmit (no account required)
- Logo is clickable and acts as Home
- Added Feedback to the main navigation menu
- Fixed Back to Home button text visibility

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

## 🌐 Deployment

The website is deployed on GitHub Pages and accessible at:
**https://jens-space.github.io/chronic-haven/**

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
