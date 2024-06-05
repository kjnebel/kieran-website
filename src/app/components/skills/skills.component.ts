import { Component, ElementRef } from '@angular/core';

let skills: {title: String, description: String, url: String, size: String, color: String}[] = [
  {
    title: 'Angular', 
    description: 'I have over 3 years of experience in Angular. This entire website was created with Angular 17. I also have experience with AngularJs and upgrading AngularJs application to newer versions of Angular.',
    url: '../../../assets/images/angular\ logo.png',
    size: 'cover',
    color: 'white'
  },
  {
    title: 'React',
    description: '',
    url: '../../../assets/images/react\ logo.png',
    size: '100%',
    color: 'white'
  },
  { 
    title: 'HTML',
    description: '',
    url: '../../../assets/images/html\ logo.png',
    size: '90%',
    color: 'white'
  },
  { 
    title: 'CSS/SCSS',
    description: '',
    url: '../../../assets/images/css\ logo.png',
    size: '145%',
    color: 'white'
  },
  { 
    title: 'TypeScript',
    description: '',
    url: '../../../assets/images/ts\ logo.png',
    size: '105%',
    color: 'white'
  },
  { 
    title: 'JavaScript',
    description: '',
    url: '../../../assets/images/js\ logo.png',
    size: 'cover',
    color: 'white'
  },
  { 
    title: 'Java',
    description: '',
    url: '../../../assets/images/java\ logo.png',
    size: '170%',
    color: 'white'
  },
  { 
    title: 'SQL',
    description: '',
    url: '../../../assets/images/sql\ logo.png',
    size: '100%',
    color: 'white'
  },
  { 
    title: 'C#',
    description: '',
    url: '../../../assets/images/c\ logo.png',
    size: '80%',
    color: 'white'
  },
  { 
    title: 'Microsoft Office',
    description: '',
    url: '../../../assets/images/microsoft\ office\ logo.jpg',
    size: '160%',
    color: 'white'
  },
  { 
    title: 'JIRA/Agile Development',
    description: '',
    url: '../../../assets/images/jira\ logo.jpg',
    size: 'cover',
    color: 'white'
  },
  { 
    title: 'GitHub',
    description: '',
    url: '../../../assets/images/github\ logo.png',
    size: '95%',
    color: 'white'
  },
  { 
    title: 'Accessible Website Design',
    description: '',
    url: '../../../assets/images/web\ access\ icon.png',
    size: 'cover',
    color: 'white'
  },
  { 
    title: 'Mobile Application Development',
    description: '',
    url: '../../../assets/images/mobileDev.png',
    size: '90%',
    color: 'white'
  },
  { 
    title: 'AWS',
    description: '',
    url: '../../../assets/images/aws\ logo.png',
    size: '90%',
    color: 'white'
  },
  { 
    title: 'Fast Learner',
    description: '',
    url: '../../../assets/images/fast\ learn\ icon.jpg',
    size: '120%',
    color: 'white'
  },
  { 
    title: 'Communication',
    description: '',
    url: '../../../assets/images/communication.jpg',
    size: '120%',
    color: 'white'
  },
  { 
    title: 'UI/UX Design',
    description: '',
    url: '../../../assets/images/UIdesign.png',
    size: '85%',
    color: 'white'
  }
];
let pages: any = Math.ceil(skills.length / 5);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  
  shifted = 0;
  skillList = skills;
  
  constructor(public element: ElementRef) {}
  
  ngOnInit() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    let carouselCont = this.element.nativeElement.querySelector('.carouselCont');
    
    try {
      window.addEventListener('load', function () {
        cardCarousel?.setAttribute('style', `width: ${window.innerWidth * pages}px;`);
        carouselCont?.setAttribute('style', `display: block;`);
      });
    } catch(err) {}
  }

  shiftRight() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    
    if (this.shifted < pages - 2) {
      this.shifted++;
      cardCarousel.setAttribute('style', `transform: translateX(-${90 * this.shifted}vw); width: ${window.innerWidth * pages}px;`);
    } else {
      this.shifted++;
      cardCarousel.setAttribute('style', `transform: translateX(-${90 * this.shifted}vw); width: ${window.innerWidth * pages}px;`);
      setTimeout(() => {
        this.element.nativeElement.querySelector('.rightArrowButton').setAttribute('style', 'display: none;');
      }, 1000);
    }

    if (this.shifted > 0) {
      this.element.nativeElement.querySelector('.leftArrowButton').setAttribute('style', 'display: block;');
    }
  }

  shiftLeft() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    
    if (this.shifted > 1) {
      this.shifted--;
      cardCarousel.setAttribute('style', `transform: translateX(-${90 * this.shifted}vw); width: ${window.innerWidth * pages}px;`);
    } else {
      this.shifted--;
      cardCarousel.setAttribute('style', `transform: translateX(-${90 * this.shifted}vw); width: ${window.innerWidth * pages}px;`);
      setTimeout(() => {
        this.element.nativeElement.querySelector('.leftArrowButton').setAttribute('style', 'display: none;');
      }, 1000);
    }

    if (this.shifted < pages - 1) {
      this.element.nativeElement.querySelector('.rightArrowButton').setAttribute('style', 'display: block;');
    }
  }

  log(text: string) {
    console.log(text);
  }
}
