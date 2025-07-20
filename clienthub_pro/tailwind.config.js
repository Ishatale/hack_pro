module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js", "./components/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue-600
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
        },
        secondary: {
          DEFAULT: "#64748B", // slate-500
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
        },
        accent: {
          DEFAULT: "#0EA5E9", // sky-500
          100: "#E0F2FE", // sky-100
          500: "#0EA5E9", // sky-500
        },
        background: "#FAFAFA", // neutral-50
        surface: "#FFFFFF", // white
        text: {
          primary: "#1E293B", // slate-800
          secondary: "#64748B", // slate-500
        },
        success: {
          DEFAULT: "#059669", // emerald-600
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#D97706", // amber-600
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#DC2626", // red-600
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          light: "#F1F5F9", // slate-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'responsive': 'clamp(0.875rem, 2.5vw, 1rem)',
        'heading-responsive': 'clamp(1.5rem, 4vw, 2.25rem)',
      },
      boxShadow: {
        'elevation-1': '0px 1px 3px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0px 4px 12px rgba(0, 0, 0, 0.12)',
        'elevation-3': '0px 8px 24px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        loading: {
          '0%': {
            'background-position': '200% 0',
          },
          '100%': {
            'background-position': '-200% 0',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}