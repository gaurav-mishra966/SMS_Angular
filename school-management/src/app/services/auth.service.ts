import { Injectable, Inject, PLATFORM_ID, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // A BehaviorSubject to track the logged-in state
  private loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  loggedIn$ = this.loggedInSubject.asObservable();

  private router = inject(Router);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Function to check if the user is logged in (only works in the browser)
  private isLoggedIn(): boolean {
    // Check if the code is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('isLoggedIn') === 'true';
    }
    return false; // On the server, return false
  }

  // Log in the user (set the state to logged in)
  // Log in the user
  login(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isLoggedIn', 'true');
      this.loggedInSubject.next(true);
      //dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  isloggedin(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('isLoggedIn') === 'true';
    }
    return false; // On the server, return false
  }

  // Log out the user (set the state to logged out)
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isLoggedIn');
      this.loggedInSubject.next(false);
    }
  }
}

// import { Injectable, Inject, PLATFORM_ID, signal, effect } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   // Using a signal instead of BehaviorSubject
//   private loggedInSignal = signal<boolean>(this.isLoggedIn()); // Initial value based on localStorage
//   loggedIn$ = this.loggedInSignal; // Directly use the signal

//   constructor(
//     @Inject(PLATFORM_ID) private platformId: Object,
//     private router: Router
//   ) {
//     // Optionally set up an effect to listen for changes
//     effect(() => {
//       // You could react to the signal change if necessary (e.g. logging state)
//       const isLoggedIn = this.loggedInSignal();
//       console.log(`Login state changed: ${isLoggedIn}`);
//     });
//   }

//   // Function to check if the user is logged in (only works in the browser)
//   private isLoggedIn(): boolean {
//     // Check if the code is running in the browser
//     if (isPlatformBrowser(this.platformId)) {
//       return localStorage.getItem('isLoggedIn') === 'true';
//     }
//     return false; // On the server, return false
//   }

//   // Log in the user (set the state to logged in)
//   login(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.setItem('isLoggedIn', 'true');
//       this.loggedInSignal.set(true); // Update the signal value
//       // Navigate to the students page
//       this.router.navigate(['/students']);
//     }
//   }

//   // Log out the user (set the state to logged out)
//   logout(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.removeItem('isLoggedIn');
//       this.loggedInSignal.set(false); // Update the signal value
//     }
//   }
// }
