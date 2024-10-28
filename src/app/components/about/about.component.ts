import { Component, ElementRef } from '@angular/core';

let details: {heading: string, title: string, desc: string, additional: string, picture: string, size: string, color: string}[] = [
  {
    heading: 'B.S. in Computer Science',
    title: 'Cum Laude',
    desc: 'Attended the University of Nebraska at Omaha from Aug 2020 - Aug 2024. During my studies at UNO I learned many useful skills that have helped me in my professional career.',
    additional: 'GPA: 3.567',
    picture: '../../../assets/images/unoLogo.png',
    size: '90%',
    color: 'black'
  },
  {
    heading: 'Semester Abroad',
    title: 'Seoul, South Korea',
    desc: 'Studied abroad in Seoul, South Korea for the Spring 2024 semester at EWHA University. While abroad I was lucky enough to have many valuable experiences and learn a lot about another culture.',
    additional: 'At EWHA I participated in the PEACE Buddy club for international students. I also was a member of the Pickelball club and got the chance to play at Seoul\'s Olympic Park.',
    picture: '../../../assets/images/ewhaLogo.png',
    size: '90%',
    color: 'white'
  },
  // {
  //   heading: 'Located in Omaha, NE',
  //   title: 'In-person, Hybrid, or Remote',
  //   desc: 'I am based in Omaha, NE but am comfortable working in a remote and hybrid setting.',
  //   additional: '',
  //   picture: '../../../assets/images/location.png',
  //   size: '90%',
  //   color: 'white'
  // },
];

let cardNum: number = 4;
let pages = Math.ceil(details.length / cardNum);
let arrowSize: number = 50;
let downArrowSize: number = 20;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutList = details;
  arrowSize = 60;
  pages = pages;
  downArrowSize = downArrowSize;
  cardNum = 4;
  showModal = false;
  aboutTitle = '';
  aboutHeading = '';
  aboutDesc = '';
  aboutAdd = '';
  aboutPic = '';
  aboutSize = '';
  aboutColor = '';

  constructor(public element: ElementRef) {}

  ngOnInit() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    let carouselCont = this.element.nativeElement.querySelector('.carouselCont');
    
    try {
      window.addEventListener('load', function () {
        if (window.innerWidth > 900 ) {
          cardNum = 5;
          arrowSize = 60;
        } else if (window.innerWidth > 600) {
          cardNum = 4;
          arrowSize = 40;
        } else {
          cardNum = 3;
          arrowSize = 30;
        }
        pages = Math.ceil(details.length / cardNum);
        cardCarousel?.setAttribute('style', `width: ${window.innerWidth * pages}px;`);
        carouselCont?.setAttribute('style', `display: block;`);
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900 ) {
          cardNum = 5;
          arrowSize = 60;
        } else if (window.innerWidth > 600) {
          cardNum = 4;
          arrowSize = 40;
        } else {
          cardNum = 3;
          arrowSize = 30;
        }
        pages = Math.ceil(details.length / cardNum);
        cardCarousel?.setAttribute('style', `width: ${window.innerWidth * pages}px;`);
        carouselCont?.setAttribute('style', `display: block;`);
      });
      this.arrowSize = arrowSize;
    } catch(err) {}
  }

  showMore(index: number) {
    let exp = this.aboutList[index];
    this.aboutTitle = exp.title;
    this.aboutHeading = exp.heading;
    this.aboutDesc = exp.desc;
    this.aboutAdd = exp.additional;
    this.aboutColor = exp.color;
    this.aboutPic = exp.picture;
    this.aboutSize = exp.size;
    this.showModal = true;
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  }
}
