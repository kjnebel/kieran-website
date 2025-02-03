import { Component, ElementRef, HostListener } from '@angular/core';
import { toggleExpModalOpen } from '../../public/publicVariables';
import { SkillsComponent } from '../skills/skills.component';
import { skills, Skill } from '../../public/publicVariables';

interface Experience {comp: string, dates: string, resp: string, position: string, reasonForLeaving?: string, url: string, size: string, color: string, skills: Skill[]}

let exp: Experience[] = [
  {
    comp: 'Union Pacific Railroad',
    dates: 'Mar 2021 - Mar 2024',
    resp: 'I worked closely with my team to develop business-wide safety applications using Angular versions 11 – 16. Worked on many business-critical applications. Used project management software like Jira to manage projects. Proficient use of communication tools like Microsoft Teams to meet with team members and business partners. Increased my knowledge of Angular, HTML, CSS, Typescript, Java, and SQL',
    position: 'IT Intern',
    url: '../../../assets/images/union\ pacific\ logo.png',
    size: '90%',
    color: 'white',
    skills: [
      skills[0],
      skills[1],
      skills[2],
      skills[3],
      skills[4],
      skills[5],
      skills[6],
      skills[8],
      skills[9],
      skills[10],
      skills[11],
      skills[12],
      skills[14],
      skills[15],
      skills[16],
      skills[22]
    ]
  },
  {
    comp: 'Code Ninjas',
    dates: 'Mar 2019 - Aug 2020',
    resp: 'Taught kids how to code games using JavaScript. Developed curriculum for summer camps which involved different types of coding and robotics. Was the lead instructor at many summer camps.',
    position: 'Code Instructor',
    url: '../../../assets/images/code\ ninjas\ logo.png',
    size: '90%',
    color: 'white',
    skills: [
      skills[2],
      skills[4],
      skills[15],
      skills[16],
      skills[22]
    ]
  },
];
let pages = 1;
let cardNum: number = 4;
let arrowSize: number = 50;
let downArrowSize: number = 20;
let skill: HTMLElement | null;
let active: boolean = false;
let shiftRate: number = 90;
let totalShift: number = 0;
let shifted: number = 0;

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
  expSkillList: Skill[] = [];
  innerWidth = 0;

  get cardNumber() {
    return cardNum;
  }

  constructor(public element: ElementRef, private skillsComp: SkillsComponent) {}

  ngOnInit() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    let carouselCont = this.element.nativeElement.querySelector('.carouselCont');
    
    try {
      this.innerWidth = window.innerWidth;
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

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
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
    if(!this.showModal) {
      this.showModal = toggleExpModalOpen();
    } else {
      toggleExpModalOpen();
      this.showModal = toggleExpModalOpen();
    }
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  }

  goToPage(page: number) {
    let cardCarousel = document.querySelector('#skillsCardCarousel');
    shifted = page - 1;
    totalShift = shiftRate * shifted;
    // if (cardCarousel) {
    //   cardCarousel.setAttribute('style', `transform: translateX(-${totalShift}vw); width: ${window.innerWidth * pages}px;`);

    //   if (shifted < pages - 1) {
    //     document.querySelector('#skillsRightArrow')?.setAttribute('style', 'display: block;');
    //   }
    //   if (shifted === 0) {
    //     document.querySelector('#skillsLeftArrow')?.setAttribute('style', 'opacity: 0;');
    //   }
    //   if (shifted === pages - 1) {
    //     document.querySelector('#skillsRightArrow')?.setAttribute('style', 'display: none;');
    //   }
    //   if (shifted > 0) {
    //     document.querySelector('#skillsLeftArrow')?.setAttribute('style', 'opacity: 1;');
    //   }
    // }
  }

  closeModal() {
    this.showModal = toggleExpModalOpen();
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  }

  goToSkill(skillId: number) {
    this.closeModal();
    if (active) {
      removeClass();
    }
    skill = document.getElementById(skills[skillId].name);
    if (!skill?.classList.contains('focusedCard')) {
      skill?.classList.toggle('focusedCard', true);
      active = true;
    }
    setTimeout(() => {
      skill?.addEventListener('mouseover', removeClass);
      window.addEventListener('click', removeClass);
    }, 10);
    let page;
    if (innerWidth > 500) {
      page = Math.ceil((skillId + 1) / this.skillsComp.cardNumber);
    } else {
      page = Math.ceil((skillId + 1) / 3);
    }
    this.skillsComp.goToPage(page);
  }
}

const removeClass = function() {
  if (skill?.classList.contains('focusedCard')) {
    skill?.classList.toggle('focusedCard', false);
  }
  skill?.removeEventListener('mouseover', removeClass);
  window.removeEventListener('click', removeClass);
  active = false;
}