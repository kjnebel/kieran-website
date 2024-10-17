import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kieran-website';

  ngOnInit() {
    try {
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
    } catch (err) {
      console.log(err);
    }
  }
}
