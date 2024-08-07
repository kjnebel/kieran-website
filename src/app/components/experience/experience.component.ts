import { Component, ElementRef } from '@angular/core';
import { toggleExpModalOpen } from '../../public/publicVariables';

let skills: {id: number, name: string, color: string}[] = [
/*0*/  {id: 0, name: 'Angular', color: '#dd0031'}, 
/*1*/  {id: 1, name: 'React', color: '#61dafb'}, 
/*2*/  {id: 2, name: 'HTML', color: '#f16529'}, 
/*3*/  {id: 3, name: 'CSS/SCSS', color: '#2965f1'}, 
/*4*/  {id: 4, name: 'JavaScript', color: '#f0db4f'}, 
/*5*/  {id: 5, name: 'TypeScript', color: '#2d79c7'}, 
/*6*/  {id: 6, name: 'Java', color: '#cb2d2e'}, 
/*7*/  {id: 7, name: 'C#', color: '#a27add'}, 
/*8*/  {id: 8, name: 'Microsoft Office', color: '#d83c03'}, 
/*9*/  {id: 9, name: 'JIRA', color: '#1772ed'}, 
/*10*/  {id: 10, name: 'SQL', color: '#db7533'}, 
/*11*/  {id: 11, name: 'NodeJs', color: '#68a063'}, 
/*12*/  {id: 12, name: 'Accessible Website Design', color: '#0383b4'}, 
/*13*/  {id: 13, name: 'Mobile Application Development', color: '#ffffff'}, 
/*14*/  {id: 14, name: 'AWS', color: '#202b3c'}, 
/*15*/  {id: 15, name: 'GitHub', color: '#ffffff'}, 
/*16*/  {id: 16, name: 'Communication', color: '#ffffff'}, 
/*17*/  {id: 17, name: 'UI/UX Design', color: '#69b0ee'}
];
let exp: {comp: string, dates: string, resp: string, position: string, url: string, size: string, color: string, skills: {id: number, name: string, color: string}[]}[] = [
  {
    comp: 'Union Pacific Railroad',
    dates: 'March 2021 - March 2024',
    resp: 'I worked closely with my team to develop business-wide safety applications using Angular versions 11 – 16. Worked on many business-critical applications. Used project management software like Jira to manage projects. Proficient use of communication tools like Microsoft Teams to meet with team members and business partners. Increased my knowledge of Angular, HTML, CSS, Typescript, Java, and SQL',
    position: 'IT Intern',
    url: '../../../assets/images/union\ pacific\ logo.png',
    size: '90%',
    color: 'white',
    skills: [
      skills[0],
      skills[2],
      skills[3],
      skills[4],
      skills[5],
      skills[6],
      skills[8],
      skills[9],
      skills[11],
      skills[12],
      skills[13],
      skills[15],
      skills[16],
      skills[17]
    ]
  },
  {
    comp: 'Code Ninjas',
    dates: 'March 2019 - August 2020',
    resp: 'Taught kids how to code games using JavaScript. Developed curriculum for summer camps which involved different types of coding and robotics. Was the lead instructor at many summer camps.',
    position: 'Code Instructor',
    url: '../../../assets/images/code\ ninjas\ logo.png',
    size: '90%',
    color: 'white',
    skills: [
      skills[4],
      skills[2],
      skills[16],
      skills[17]
    ]
  },
  {
    comp: 'Certified Transmissions',
    dates: 'May 2020 - August 2020',
    resp: 'Worked 45 hours a week at the transmission factory managing parts. Washed and distributed parts to builders. Painted cases of the transmissions. Worked with large machinery.',
    position: 'Parts Handler',
    url: '../../../assets/images/certified\ transmissions\ logo.jpg',
    size: '100%',
    color: 'black',
    skills: [
      skills[16],
      skills[8]
    ]
  },
  {
    comp: 'Amazon',
    dates: 'October 2023 - December 2023',
    resp: 'Sorted and handle packages for delivery. Trained new employees. Worked overnight shift 25 hours per week. Used a Zebra device with finger scanner.',
    position: 'Warehouse Seasonal Temp',
    url: '../../../assets/images/amazon\ logo.png',
    size: '90%',
    color: 'white',
    skills: [
      skills[16],
      skills[8]
    ]
  }
];
let pages = 1;
let cardNum: number = 4;
let arrowSize: number = 50;
let downArrowSize: number = 20;

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
  downArrowSize = downArrowSize;
  cardNum = 4;
  showModal = false;
  expComp = '';
  expPos = '';
  expDates = '';
  expResp = '';
  expColor = '';
  expUrl = '';
  expSize = '';
  expSkillList: {id: number, name: string, color: string}[] = [];

  constructor(public element: ElementRef) {}

  ngOnInit() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    let carouselCont = this.element.nativeElement.querySelector('.carouselCont');
    
    try {
      window.addEventListener('load', function () {
        cardCarousel?.setAttribute('style', `width: ${window.innerWidth * pages}px;`);
        carouselCont?.setAttribute('style', `display: block;`);
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900 ) {
          cardNum = 4;
          arrowSize = 60;
        } else if (window.innerWidth > 600) {
          cardNum = 4;
          arrowSize = 40;
        } else {
          cardNum = 3;
          arrowSize = 30;
        }
        pages = Math.ceil(exp.length / cardNum);
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

  showMore(index: number) {
    let exp = this.expList[index];
    this.expComp = exp.comp;
    this.expPos = exp.position;
    this.expDates = exp.dates;
    this.expResp = exp.resp;
    this.expColor = exp.color;
    this.expUrl = exp.url;
    this.expSize = exp.size;
    this.expSkillList = exp.skills;
    console.log(this.expSkillList);
    if(!this.showModal) {
      this.showModal = toggleExpModalOpen();
    } else {
      toggleExpModalOpen();
      this.showModal = toggleExpModalOpen();
    }

  }

  closeModal() {
    this.showModal = toggleExpModalOpen();
  }

  goToSkill(skillId: number) {
    console.log(skillId);
  }
}
