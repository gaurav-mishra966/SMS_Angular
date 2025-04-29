import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Access localStorage only in the browser
      this.currentTheme = localStorage.getItem('theme') || 'light';
      this.applyTheme();
    } else {
      // Default theme for SSR (e.g., light theme)
      this.currentTheme = 'light';
    }
  }

  toggleTheme(): void {
    // Access localStorage only in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.currentTheme);
      this.applyTheme();
    }
  }

  private applyTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
    }
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
