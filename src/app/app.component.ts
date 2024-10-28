import { Component } from '@angular/core';
import { Router } from '@angular/router';

let isLoading = true;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kieran-website';

  get isLoading() {
    return isLoading;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    try {
      this.router.navigateByUrl('/', { replaceUrl: true });
      window.addEventListener('scroll', function() {
        let nav = document.getElementById("nav");
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          nav!.style.background = "var(--background-grey)";
          nav!.style.boxShadow = "var(--box-shadow)";
        } else {
          nav!.style.background = "var(--top-gradient)";
          nav!.style.boxShadow = "none";
        }
      });
      window.addEventListener('load', function () {
        document.getElementsByTagName('html')[0].style.overflowY = 'auto';
        isLoading = false;
      });
    } catch (err) {}
  }
}
