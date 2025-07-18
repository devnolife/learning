// Dashboard Design System Types
export interface DashboardColors {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  background: string;
  cardBackground: string;
  text: string;
  textSecondary: string;
  border: string;
  hover: string;
}

export interface DashboardTypography {
  fontFamily: string;
  headingXL: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  headingLarge: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  headingMedium: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  body: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  caption: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  small: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
}

export interface DashboardSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

export interface DashboardAnimations {
  hover: {
    duration: string;
    easing: string;
  };
  progress: {
    duration: string;
    easing: string;
  };
  fade: {
    duration: string;
    easing: string;
  };
}

// Default Dashboard Theme based on design.json
export const dashboardTheme = {
  colors: {
    primary: "#ff6b9d",
    secondary: "#4a9b8e",
    accent: "#007bff",
    success: "#28a745",
    warning: "#ffc107",
    background: "#f8f6f0",
    cardBackground: "#ffffff",
    text: "#2c3e50",
    textSecondary: "#666666",
    border: "#f0f0f0",
    hover: "#f8f9fa"
  },
  typography: {
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    headingXL: {
      fontSize: "32px",
      fontWeight: "700",
      lineHeight: "1.2"
    },
    headingLarge: {
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "1.3"
    },
    headingMedium: {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "1.4"
    },
    body: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.5"
    },
    caption: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "1.4"
    },
    small: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "1.3"
    }
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px"
  },
  borderRadius: {
    small: "8px",
    medium: "12px",
    large: "16px",
    xl: "20px",
    xxl: "24px",
    pill: "25px",
    circle: "50%"
  },
  shadows: {
    small: "0 2px 4px rgba(0,0,0,0.1)",
    medium: "0 4px 15px rgba(0,0,0,0.1)",
    large: "0 8px 25px rgba(0,0,0,0.1)",
    xl: "0 10px 40px rgba(0,0,0,0.1)"
  },
  animations: {
    hover: {
      duration: "0.3s",
      easing: "ease"
    },
    progress: {
      duration: "0.5s",
      easing: "ease"
    },
    fade: {
      duration: "0.2s",
      easing: "ease-in-out"
    }
  }
} as const;

// CSS Variable Utilities
export const setDashboardCSSVariables = () => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;

    // Set color variables
    Object.entries(dashboardTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--dashboard-${key}`, value);
    });

    // Set spacing variables  
    Object.entries(dashboardTheme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--dashboard-spacing-${key}`, value);
    });

    // Set border radius variables
    Object.entries(dashboardTheme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--dashboard-radius-${key}`, value);
    });

    // Set shadow variables
    Object.entries(dashboardTheme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--dashboard-shadow-${key}`, value);
    });
  }
};

// Animation Utilities
export const animateProgressBar = (element: HTMLElement, targetWidth: number) => {
  if (element) {
    element.style.setProperty('--progress-width', `${targetWidth}%`);
    element.classList.add('animated-progress');
  }
};

export const animateMiniBar = (element: HTMLElement, targetHeight: number, delay: number = 0) => {
  if (element) {
    element.style.setProperty('--bar-height', `${targetHeight}%`);
    element.style.setProperty('--bar-delay', `${delay}s`);
    element.classList.add('animated-bar');
  }
};

// Responsive Breakpoints
export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1400px'
} as const;
