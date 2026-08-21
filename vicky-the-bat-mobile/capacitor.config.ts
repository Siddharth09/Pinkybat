import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.beckythebat.game',
  appName: 'Becky the Bat',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 650,
      backgroundColor: '#182238',
      showSpinner: false
    }
  }
};

export default config;
