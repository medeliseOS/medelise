# Medelise - Medvita Health Solutions

Enterprise-grade Next.js application with TypeScript, Tailwind CSS, and best practices.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
medelise/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   │   ├── ui/          # Base UI components
│   │   ├── features/    # Feature-specific components
│   │   ├── layout/      # Layout components
│   │   └── shared/      # Shared components
│   ├── lib/             # Utilities & helpers
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript types
│   ├── styles/          # Design system & tokens
│   ├── store/           # State management
│   └── config/          # App configuration
└── public/              # Static assets
```

## 🛠️ Development Tools

- **TypeScript** - Type safety
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **Tailwind CSS** - Styling

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # TypeScript type checking
```

## 🎨 Figma Integration

This project is optimized for Figma Dev Mode integration:
- Design tokens in `src/styles/tokens/`
- UI components in `src/components/ui/`
- Consistent naming with Figma Variables

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_APP_NAME="Medelise"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

## 📦 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** React Context / Zustand
- **Code Quality:** ESLint + Prettier

## 🌐 Deployment

Deploy to Vercel:

```bash
vercel deploy
```

Or any other platform that supports Next.js.
