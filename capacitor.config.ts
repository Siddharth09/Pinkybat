import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pinkbat.game',
  appName: 'Pinky Bat',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 650,
      backgroundColor: '#17152a',
      showSpinner: false
    }
  }
};

export default config;
