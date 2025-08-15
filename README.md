# React Kit Core 🚀

A comprehensive collection of reusable React components built with TypeScript, TailwindCSS, and modern design patterns. Create stunning, accessible, and performant user interfaces with ease.

![React Kit Core](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-blue?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple?style=for-the-badge&logo=vite)

## ✨ Features

- **🎨 Modern Design System**: Built with TailwindCSS and CSS variables for easy theming
- **🔧 TypeScript First**: Comprehensive TypeScript support for better developer experience
- **♿ Accessible by Default**: Components follow WCAG guidelines with proper ARIA attributes
- **📱 Responsive**: Mobile-first design with responsive breakpoints
- **🎭 Smooth Animations**: Framer Motion powered animations and transitions
- **🎯 Component Library**: 50+ reusable UI components
- **🚀 Performance Optimized**: Built with Vite for fast development and builds
- **📖 Storybook Support**: Component documentation and development environment

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-kit-core.git
   cd react-kit-core
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:8083](http://localhost:8083) (or the port shown in your terminal)

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run storybook` | Start Storybook development server |

## 🏗️ Project Structure

```
react-kit-core/
├── public/                 # Static assets
│   ├── favicon.svg        # Custom favicon
│   └── robots.txt         # SEO configuration
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (shadcn/ui)
│   │   ├── AnimatedNav.tsx
│   │   ├── DataTable.tsx
│   │   └── InputField.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .storybook/           # Storybook configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # TailwindCSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Key Components

### Core Components
- **AnimatedNav**: Responsive navigation with smooth animations
- **InputField**: Flexible input component with validation states
- **DataTable**: Advanced data table with sorting and selection
- **Button**: Multiple variants and sizes
- **Card**: Content containers with various styles

### UI Components (shadcn/ui)
- **Accordion**: Collapsible content sections
- **Dialog**: Modal dialogs and overlays
- **Form**: Form components with validation
- **Tabs**: Tabbed content organization
- **Toast**: Notification system
- **And 40+ more components...**

## 🎯 Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.8.3
- **Styling**: TailwindCSS 3.4.17
- **Build Tool**: Vite 5.4.19
- **Animation**: Framer Motion 12.23.12
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Development**: Storybook 8.6.14

## 🔧 Configuration

### TailwindCSS
The project uses TailwindCSS with a custom design system including:
- CSS custom properties for theming
- Extended color palette
- Custom animations and transitions
- Responsive utilities

### TypeScript
- Strict type checking enabled
- Path aliases configured (`@/` points to `src/`)
- Modern ES2022 target

### Vite
- Fast HMR (Hot Module Replacement)
- Optimized builds
- Plugin support for React and Storybook

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

If you have any questions or need help:

- 🐛 **Bug Reports**: [Create an issue](https://github.com/yourusername/react-kit-core/issues)
- 💡 **Feature Requests**: [Create an issue](https://github.com/yourusername/react-kit-core/issues)
- 📧 **Email**: your.email@example.com
- 💬 **Discord**: [Join our community](https://discord.gg/your-server)

---

**Made with ❤️ by the React Kit Core Team**

*Build beautiful, accessible, and performant user interfaces with ease!*
