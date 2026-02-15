/**
 * Design system for Backend/Data Platform Engineer portfolio
 * Dark, technical, professional aesthetic
 */

export const themeConfig = {
  colors: {
    background: {
      primary: '#0a0e1a', // Deep slate
      secondary: '#151b2e', // Card backgrounds
      tertiary: '#1e2738', // Hover states
    },
    text: {
      primary: '#e5e7eb', // Light gray
      secondary: '#9ca3af', // Muted gray
      accent: '#60a5fa', // Highlighted text
      muted: '#6b7280', // Subtle text
    },
    accent: {
      primary: '#3b82f6', // Blue
      secondary: '#06b6d4', // Teal/Cyan
      success: '#10b981', // Green
      warning: '#f59e0b', // Amber
    },
    border: {
      default: '#2d3748',
      light: '#374151',
      accent: '#3b82f6',
    },
  },

  typography: {
    fonts: {
      mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      display: "'Space Grotesk', 'Inter', sans-serif",
    },
    sizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  spacing: {
    section: '6rem', // 96px
    container: '80rem', // 1280px
  },

  borderRadius: {
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
  },

  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
