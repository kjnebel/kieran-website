import { Component } from '@angular/core';
import { key, skey } from '../../public/publicVariables';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  emailForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", [Validators.required])
  });

  constructor() {}

  sendEmail() {
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
    } else {
      console.log('Invalid')
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
}
