import { Component, ElementRef } from '@angular/core';

let exp: {comp: String, dates: String, resp: String, position: String, url: String, size: String, color: String}[] = [
  {
    comp: 'Union Pacific Railroad',
    dates: 'March 2021 - March 2024',
    resp: 'I worked closely with my team to develop business-wide safety applications using Angular versions 11 – 16. Worked on many business-critical applications. Used project management software like Jira to manage projects. Proficient use of communication tools like Microsoft Teams to meet with team members and business partners. Increased my knowledge of Angular, HTML, CSS, Typescript, Java, and SQL',
    position: 'IT Intern',
    url: '../../../assets/images/union\ pacific\ logo.png',
    size: '90%',
    color: 'white'
  },
  {
    comp: 'Code Ninjas',
    dates: 'March 2019 - August 2020',
    resp: 'Taught kids how to code games using JavaScript. Developed curriculum for summer camps which involved different types of coding and robotics. Was the lead instructor at many summer camps.',
    position: 'Code Teacher',
    url: '../../../assets/images/code\ ninjas\ logo.png',
    size: '90%',
    color: 'white'
  },
  {
    comp: 'Certified Transmissions',
    dates: 'May 2020 - August 2020',
    resp: 'Worked 45 hours a week at the transmission factory managing parts. Washed and distributed parts to builders. Painted cases of the transmissions. Worked with large machinery.',
    position: 'Parts Handler',
    url: '../../../assets/images/certified\ transmissions\ logo.jpg',
    size: '100%',
    color: 'black'
  },
  {
    comp: 'Amazon',
    dates: 'October 2023 - December 2023',
    resp: 'Sorted and handle packages for delivery. Trained new employees. Worked overnight shift 25 hours per week. Used Zebra device with finger scanner.',
    position: 'Warehouse Seasonal Temp',
    url: '../../../assets/images/amazon\ logo.png',
    size: '90%',
    color: 'white'
  }
];
let pages = 1;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  
  expList = exp;
  arrowSize = 60;
  shifted = 0;
  pages = pages;
  cardNum = 4;

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
    } else if (this.shifted == pages - 2) {
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
    } else if (this.shifted == 1) {
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
