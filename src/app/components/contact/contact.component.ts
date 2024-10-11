import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  show: boolean = false;
  submitPressed: boolean = false;
  sent: boolean = false;
  emailForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", [Validators.required])
  });

  constructor() {}

  sendEmail() {
    this.submitPressed = true;
    if (this.emailForm.valid) {
      fetch('https://formspree.io/f/mzzbpole', {
        method: 'POST',
        body: JSON.stringify(this.emailForm.value),
        headers: {
            'Accept': 'application/json'
        }
      });

      this.emailForm = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        message: new FormControl("", [Validators.required])
      });

      this.sent = true;
      setTimeout(() => {
        this.sent = false;
      }, 5000);
    } else {
      if (this.emailForm.controls.email.invalid) {
        this.show = true;
        document.getElementById('email')!.style.border = '2px solid red';
      }
      if (this.emailForm.controls.message.invalid) {
        document.getElementById('message')!.style.border = '2px solid red';
      }
    }
  }

  copyEmail() {
    navigator.clipboard.writeText('kierannebel@gmail.com');
    const image = document.getElementById('copyIcon') as HTMLImageElement;
    image.src = '../../../assets/images/check.png';

    setTimeout(() => {
      image.src = '../../../assets/images/copyIcon.png';
    }, 1000);
  }

  emailChange() {
    let elem = document.getElementById('email');
    if (this.submitPressed) {
      if (this.emailForm.controls.email.valid) {
        elem!.style.border = 'none';
        this.show = false
      } else {
        elem!.style.border = '2px solid red';
        this.show = true;
      }
    }
  }

  messageChange() {
    let elem = document.getElementById('message');
    if (this.submitPressed) {
      if (this.emailForm.controls.message.valid) {
        elem!.style.border = 'none';
      } else {
        elem!.style.border = '2px solid red';
      }
    }
  }
}
