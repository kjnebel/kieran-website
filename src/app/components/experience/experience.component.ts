import { Component, ElementRef, HostListener } from '@angular/core';
import { toggleExpModalOpen } from '../../public/publicVariables';
import { SkillsComponent } from '../skills/skills.component';
import {
  skills,
  Skill,
  skillsArrayExport,
  showExperienceModal,
  openModal,
  globalCloseModal,
} from '../../public/publicVariables';

interface Experience {
  comp: string;
  dates: string;
  resp: string[];
  position: string;
  url: string;
  size: string;
  color: string;
  skills: Skill[];
}

const expArray: Experience[] = [
  {
    comp: 'Guardify',
    dates: 'May 2025 - Present',
    resp: [
      'Used React, React Native, Redux Toolkit (RTK), Fastify, Prisma ORM and PostgreSQL to build and maintain full-stack and mobile applications for Child Advocacy Centers.',
      'Reduced code complexity through RTK modularization.',
      'Developed and optimized significant key features for the new app release.',
      'Completed 100+ tickets for bugs and features in the existing web and mobile app.',
      'Communicated project timelines and technical details to non-technical stakeholders.',
    ],
    position: 'Software Engineer',
    url: '../../../assets/images/Guardify_Icon.webp',
    size: '100%',
    color: 'white',
    skills: [
      skills['React'],
      skills['React Native'],
      skills['HTML'],
      skills['CSS/SCSS'],
      skills['Redux Toolkit'],
      skills['Cursor'],
      skills['Fastify'],
      skills['Prisma ORM'],
      skills['Linear'],
      skills['PostgreSQL'],
      skills['Node.js'],
      skills['AWS'],
      skills['GitHub'],
      skills['UI/UX Design'],
    ],
  },
  {
    comp: 'W. N. Morehouse Truck Line Co.',
    dates: 'Jan 2025 - Apr 2025',
    resp: [
      "Hired to automate route finding to find the cheapest fuel along the truck's route.",
      'Developed using React Native, TypeScript, Firebase, Node.js, and AWS.',
    ],
    position: 'Freelance Mobile App Developer',
    url: '../../../assets/images/Morehouse.png',
    size: '190%',
    color: 'white',
    skills: [
      skills['React Native'],
      skills['TypeScript'],
      skills['Cursor'],
      skills['Firebase'],
      skills['Node.js'],
      skills['AWS'],
      skills['GitHub'],
      skills['UI/UX Design'],
    ],
  },
  {
    comp: 'Union Pacific Railroad',
    dates: 'Mar 2021 - Mar 2024',
    resp: [
      'Developed the frontend for business-wide safety web and mobile applications using Angular (v11–16), AngularJs, and Node.js.',
      'Contributed to backend development of enterprise web apps using Java (Spring) and Selenium for automated testing.',
      'Worked in an Agile environment using Jira for project management.',
    ],
    position: 'IT Intern',
    url: '../../../assets/images/union pacific logo.png',
    size: '90%',
    color: 'white',
    skills: [
      skills['Angular'],
      skills['HTML'],
      skills['CSS/SCSS'],
      skills['JavaScript'],
      skills['Java'],
      skills['Jira'],
      skills['SQL'],
      skills['AWS'],
      skills['GitHub'],
      skills['UI/UX Design'],
      skills['Spring'],
    ],
  },
  {
    comp: 'Code Ninjas',
    dates: 'Mar 2019 - Aug 2020',
    resp: [
      'Taught kids how to code games using JavaScript and HTML.',
      'Developed and led summer camp curricula in robotics, programming, and game development.',
      "Assessed students' knowledge through various assessments.",
    ],
    position: 'Code Instructor',
    url: '../../../assets/images/code ninjas logo.png',
    size: '90%',
    color: 'white',
    skills: [
      skills['JavaScript'],
      skills['HTML'],
      skills['CSS/SCSS'],
      skills['GitHub'],
      skills['UI/UX Design'],
    ],
  },
];

// Create hashmap keyed by company name
const exp: { [key: string]: Experience } = {};
expArray.forEach((experience) => {
  exp[experience.comp] = experience;
});

// Export array for iteration purposes
const expArrayExport = expArray;
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
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  expList = expArrayExport;
  arrowSize = 60;
  shifted = 0;
  pages = pages;
  downArrowSize = downArrowSize;
  cardNum = 4;
  expComp = '';
  expPos = '';
  expDates = '';
  expResp = [''];
  expColor = '';
  expUrl = '';
  expSize = '';
  expSkillList: Skill[] = [];
  innerWidth = 0;
  skillsArray: Skill[] = skillsArrayExport;

  get cardNumber() {
    return cardNum;
  }

  get showExperienceModal() {
    return showExperienceModal;
  }

  constructor(
    public element: ElementRef,
    private skillsComp: SkillsComponent
  ) {}

  ngOnInit() {
    let cardCarousel =
      this.element.nativeElement.querySelector('.cardCarouselCont');
    let carouselCont =
      this.element.nativeElement.querySelector('.carouselCont');

    try {
      this.innerWidth = window.innerWidth;
      window.addEventListener('load', function () {
        carouselCont?.setAttribute('style', `display: block;`);
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
          cardNum = 4;
          arrowSize = 60;
        } else if (window.innerWidth > 600) {
          cardNum = 3;
          arrowSize = 40;
        } else {
          cardNum = 2;
          arrowSize = 30;
        }
        pages = Math.ceil(expArrayExport.length / cardNum);
        carouselCont?.setAttribute('style', `display: block;`);
      });
    } catch (err) {}
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  shiftRight() {
    let cardCarousel =
      this.element.nativeElement.querySelector('.cardCarouselCont');

    if (this.shifted < pages - 2) {
      this.shifted++;
      cardCarousel.setAttribute(
        'style',
        `transform: translateX(-${90 * this.shifted}vw); width: ${
          window.innerWidth * pages
        }px;`
      );
    } else if (this.shifted == pages - 2) {
      this.shifted++;
      cardCarousel.setAttribute(
        'style',
        `transform: translateX(-${90 * this.shifted}vw); width: ${
          window.innerWidth * pages
        }px;`
      );
      setTimeout(() => {
        this.element.nativeElement
          .querySelector('.rightArrowButton')
          .setAttribute('style', 'display: none;');
      }, 1000);
    }

    if (this.shifted > 0) {
      this.element.nativeElement
        .querySelector('.leftArrowButton')
        .setAttribute('style', 'display: block;');
    }
  }

  shiftLeft() {
    let cardCarousel =
      this.element.nativeElement.querySelector('.cardCarouselCont');

    if (this.shifted > 1) {
      this.shifted--;
      cardCarousel.setAttribute(
        'style',
        `transform: translateX(-${90 * this.shifted}vw); width: ${
          window.innerWidth * pages
        }px;`
      );
    } else if (this.shifted == 1) {
      this.shifted--;
      cardCarousel.setAttribute(
        'style',
        `transform: translateX(-${90 * this.shifted}vw); width: ${
          window.innerWidth * pages
        }px;`
      );
      setTimeout(() => {
        this.element.nativeElement
          .querySelector('.leftArrowButton')
          .setAttribute('style', 'display: none;');
      }, 1000);
    }

    if (this.shifted < pages - 1) {
      this.element.nativeElement
        .querySelector('.rightArrowButton')
        .setAttribute('style', 'display: block;');
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
    openModal('experience');
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  }

  goToPage(page: number) {
    shifted = page - 1;
    totalShift = shiftRate * shifted;
  }

  closeModal() {
    globalCloseModal();
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  }

  goToSkill(skillId: number, skillName: string) {
    this.closeModal();
    if (skillName == 'Linear' || skillName == 'Jira') {
      skillName = 'Linear & Jira';
    } else if (skillName == 'React' || skillName == 'React Native') {
      skillName = 'React / React Native';
    }
    if (active) {
      removeClass();
    }
    skill = document.getElementById(skillName);
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

const removeClass = function () {
  if (skill?.classList.contains('focusedCard')) {
    skill?.classList.toggle('focusedCard', false);
  }
  skill?.removeEventListener('mouseover', removeClass);
  window.removeEventListener('click', removeClass);
  active = false;
};
