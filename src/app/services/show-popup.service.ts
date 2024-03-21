import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private showPopupTimeout: any; // Store the timeout ID
  private isPopupShown: boolean = false; // Flag to track if the popup is shown

  constructor(private router: Router) { }

  public showPopupAfterDelay(delay: number): void {
    // Set a timeout to show the popup after the specified delay
    this.showPopupTimeout = setTimeout(() => {
      if (!this.isPopupShown) { // Check if the popup is not already shown
        this.showPopup();
      }
    }, delay);
  }

  // Method to cancel the popup if the user navigates away
  private cancelPopup(): void {
    if (this.showPopupTimeout) {
      clearTimeout(this.showPopupTimeout); // Cancel the timeout
      this.showPopupTimeout = null; // Reset the timeout ID
    }
  }

  private showPopup(): void {
    console.log('Popup shown');
    this.isPopupShown = true; // Set the flag to true
  }

  // Method to initialize popup functionality
  public initializePopup(delay: number): void {
    this.showPopupAfterDelay(delay); // Show the popup after delay

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.cancelPopup();
      }
    });
  }
}
