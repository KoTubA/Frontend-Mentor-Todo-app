import bgMobileDark from 'assets/images/bg-mobile-dark.jpg';
import bgDesktopDark from 'assets/images/bg-desktop-dark.jpg';
import bgMobileLight from 'assets/images/bg-mobile-light.jpg';
import bgDesktopLight from 'assets/images/bg-desktop-light.jpg';
import iconMoon from 'assets/icons/icon-moon.svg';
import iconSun from 'assets/icons/icon-sun.svg';

export const theme = {
  dark: {
    white: '#FFFFFF',
    brightBlue: 'hsl(220, 98%, 61%)',
    checkBackground: 'linear-gradient(135deg, #5df, #c058f3)',
    bgMobile: bgMobileDark,
    bgDesktop: bgDesktopDark,
    colorText1: 'hsl(234deg 39% 85%)',
    colorText2: 'hsl(235deg 16% 43%)',
    colorText3: 'hsl(233deg 14% 35%)',
    bgApp: 'hsl(235deg 21% 11%)',
    bgComponent: 'hsl(235deg 24% 19%)',
    colorCircle: 'hsl(237deg 14% 26%)',
    colorTodoBorder: 'hsl(237deg 14% 26%)',
    componentShadow: '0 35px 50px -15px hsl(0deg 0% 0% / 50%)',
    icon: iconSun,
  },
  light: {
    white: '#FFFFFF',
    brightBlue: 'hsl(220, 98%, 61%)',
    checkBackground: 'linear-gradient(135deg, #5df, #c058f3)',
    bgMobile: bgMobileLight,
    bgDesktop: bgDesktopLight,
    colorText1: 'hsl(235deg 19% 35%)',
    colorText2: 'hsl(236deg 9% 61%)',
    colorText3: 'hsl(233deg 11% 84%)',
    bgApp: 'hsl(0deg 0% 98%)',
    bgComponent: 'hsl(0deg 0% 100%)',
    colorCircle: 'hsl(236deg 33% 92%)',
    colorTodoBorder: 'hsl(236deg 33% 92%)',
    componentShadow: '0 35px 50px -15px rgba(194,195,214,0.5)',
    icon: iconMoon,
  },
};
