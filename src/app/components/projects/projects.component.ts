import { Component, ElementRef } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { skills, Skill, tempShifted, tempTotalShift, resetVar } from '../../public/publicVariables';

let projects: {id: string, title: string, desc: string, url: string, picture: string, skills: Skill[], color: string, fontColor: string}[] = [
  {
    id: 'aiChatbot',
    title: 'AI Chatbot App',
    desc: 'I built an AI chatbot that utilizes OpenAI\'s Api to generate a text response to a users prompt. The AI is trained to speak as if it were me and it has been trained using my resume to know certain details about me. The application runs using Angular 16.',
    url: 'https://github.com/kjnebel/AI-ChatBot-App',
    picture: '../../../assets/images/AI\ Chatbot.png',
    skills: [
      skills[0],
      skills[2],
      skills[3],
      skills[4],
      skills[5],
      skills[11],
      skills[12],
      skills[14],
      skills[16]
    ],
    color: '#0e0f0a',
    fontColor: 'white'
  },
  {
    id: 'upProjects',
    title: 'UP Projects',
    desc: 'I completed many projects while working at Union Pacific. One I\'m particularly proud of was an Incident Reporting application I helped develop at a time when derailments were all over the news. A different application I am able to show is a public-facing rail-crossing reporting application. I worked on the frontend of both applications with one other developer and they were developed using Angular. I was also in charge of making sure that the app was accessible to all users.',
    url: 'https://c02.my.uprr.com/ui/rmc_ext/#/',
    picture: '../../../assets/images/upProjects.png',
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
      skills[16]
    ],
    color: 'white',
    fontColor: 'black'
  },
  {
    id: 'chartApp',
    title: 'Fullstack Chart App',
    desc: 'This application is a basic fullstack project designed to take data from the back end and display it as charts in the front end. It was developed using a Django back end, Next.js Frontend, Docker to package the back end, and ApexCharts.js for the charts in the frontend. For the Next.js I used React with Typescript. The Django back end was implemented using Python.',
    url: 'https://github.com/kjnebel/ChartApp',
    picture: '../../../assets/images/chartapp.png',
    skills: [
      skills[1],
      skills[2],
      skills[3],
      skills[4],
      skills[5],
      skills[11],
      skills[14],
      skills[19],
      skills[20],
      skills[21]
    ],
    color: '#2a3133',
    fontColor: 'white'
  },
  {
    id: 'toyStore',
    title: 'Toy Store Website',
    desc: 'I developed this application by myself as part of an assignment for my Software Engineering Class. It was developed with java, html, SQL with some css styling thrown in there too. I also connected this application to an AWS E2E server and had it running successfully on it, but do not currently have it up and running.',
    url: 'https://github.com/kjnebel/TechExerciseNebel',
    picture: '../../../assets/images/ToyStore.png',
    skills: [
      skills[2],
      skills[3],
      skills[6],
      skills[10],
      skills[13],
      skills[14]
    ],
    color: 'white',
    fontColor: 'black'
  },
  {
    id: 'codeAcademy',
    title: 'CodeAcademy Projects',
    desc: 'I completed these projects while working through CodeAcademy\'s Full-stack Engineer Career path.',
    url: 'https://github.com/kjnebel/CodeAcademyProjects',
    picture: '../../../assets/images/codecademy.png',
    skills: [
      skills[2],
      skills[3],
      skills[4],
      skills[9],
      skills[12],
      skills[14],
      skills[16]
    ],
    color: '#000000',
    fontColor: 'white'
  },
  {
    id: 'restaurant',
    title: 'Restaurant Reservation App',
    desc: 'This application is a restaraunt reservation application that allows users to login and reserve tables or reserve a table as a guest, and allows the managers to cancel reservations. I completed this project with two other team members for a Software Engineering class.',
    url: 'https://github.com/Zeerror/CSCI4830-Fall23-WebProj',
    picture: '../../../assets/images/restaurantSite.png',
    skills: [
      skills[2],
      skills[3],
      skills[6],
      skills[10],
      skills[13],
      skills[14],
      skills[15],
      skills[16]
    ],
    color: 'black',
    fontColor: 'white'
  },
  {
    id: 'codePen',
    title: 'CodePen Designs',
    desc: 'I completed some CodePen design challenges and have had some displayed in the official CodePen Collections.',
    url: 'https://codepen.io/Kieran-Nebel',
    picture: '../../../assets/images/codePen.png',
    skills: [
      skills[2],
      skills[3],
      skills[4],
      skills[16]
    ],
    color: '#ddf7e3',
    fontColor: '#253e24'
  },
];
let cardNum: number = 1;
let pages: any = projects.length;
let arrowSize: number = 50;
let downArrowSize: number = 20;
let shiftRate: number = 100;
let totalShift: number = 0;
let shifted: number = 0;
let skill: HTMLElement | null;
let projectElem: HTMLElement | null;
let active: boolean = false;
let showClose: boolean = false;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  
  skillList = skills;
  projectList = projects;
  arrowSize = arrowSize;
  downArrowSize = downArrowSize;
  cardNum = cardNum;
  pages = pages;
  showModal = false;
  projectTitle = '';
  projectDesc = '';
  projectPicture = '';
  projectUrl = '';
  projectColor = '';
  projectSkillList: Skill[] = [];
  showClose = showClose;
  
  constructor(public element: ElementRef, private skillsComp: SkillsComponent) {}
  
  ngOnInit() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    let carouselCont = this.element.nativeElement.querySelector('.carouselCont');
    
    try {
      window.addEventListener('load', function () {
        if (window.innerWidth > 900 ) {
          arrowSize = 60;
          showClose = false;
          totalShift = shiftRate * shifted;
        } else if (window.innerWidth > 600) {
          arrowSize = 40;
          showClose = false;
          totalShift = shiftRate * shifted;
        } else if (window.innerWidth <= 500) {
          arrowSize = 35;
          showClose = true;
        } else {
          arrowSize = 30;
          showClose = false;
          totalShift = shiftRate * shifted;
        }
        pages = projects.length;
        cardCarousel?.setAttribute('style', `width: ${window.innerWidth * pages}px; transform: translateX(-${totalShift}vw);`);
        carouselCont?.setAttribute('style', `display: block;`);
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900 ) {
          arrowSize = 60;
          showClose = false;
        } else if (window.innerWidth > 600) {
          arrowSize = 40;
          showClose = false;
        } else if (window.innerWidth <= 500) {
          arrowSize = 35;
          showClose = true;
        } else {
          arrowSize = 30;
          showClose = false;
        }
        totalShift = shiftRate * shifted;
        pages = projects.length;
        cardCarousel?.setAttribute('style', `width: ${window.innerWidth * pages}px; transform: translateX(-${totalShift}vw);`);
        carouselCont?.setAttribute('style', `display: block;`);
      });
      this.arrowSize = arrowSize;
      this.showClose = showClose;
    } catch(err) {}
  }

  shiftRight() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');

    if (tempShifted != 0) {
      shifted = tempShifted;
      if (tempTotalShift != 0) {
        totalShift = tempTotalShift;
      }
      resetVar();
    }
    
    if (shifted < pages - 2) {
      shifted++;
      totalShift = shiftRate * shifted;
      cardCarousel.setAttribute('style', `transform: translateX(-${totalShift}vw); width: ${window.innerWidth * pages}px;`);
    } else if (shifted == pages - 2) {
      shifted++;
      totalShift = shiftRate * shifted;
      cardCarousel.setAttribute('style', `transform: translateX(-${totalShift}vw); width: ${window.innerWidth * pages}px;`);
      setTimeout(() => {
        this.element.nativeElement.querySelector('.rightArrowButton').setAttribute('style', 'display: none;');
      }, 1000);
    }

    if (shifted > 0) {
      this.element.nativeElement.querySelector('.leftArrowButton').setAttribute('style', 'display: block;');
    }
  }

  shiftLeft() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');

    if (tempShifted != 0) {
      shifted = tempShifted;
      if (tempTotalShift != 0) {
        totalShift = tempTotalShift;
      }
      resetVar();
    }
    
    if (shifted > 1) {
      shifted--;
      totalShift = shiftRate * shifted;
      cardCarousel.setAttribute('style', `transform: translateX(-${totalShift}vw); width: ${window.innerWidth * pages}px;`);
    } else if (shifted == 1) {
      shifted--;
      totalShift = shiftRate * shifted;
      cardCarousel.setAttribute('style', `transform: translateX(-${totalShift}vw); width: ${window.innerWidth * pages}px;`);
      setTimeout(() => {
        this.element.nativeElement.querySelector('.leftArrowButton').setAttribute('style', 'display: none;');
      }, 1000);
    }

    if (shifted < pages - 1) {
      this.element.nativeElement.querySelector('.rightArrowButton').setAttribute('style', 'display: block;');
    }
  }

  showMore(index: number) {
    if (window.innerWidth <= 500) {
      let project = this.projectList[index];
      this.projectTitle = project.title;
      this.projectDesc = project.desc;
      this.projectPicture = project.picture;
      this.projectUrl = project.url;
      this.projectColor = project.color;
      this.projectSkillList = project.skills;
      this.showModal = true;
      this.showModal = true;
      document.getElementsByTagName('html')[0].classList.add('hide');
    }
  }

  closeModal() {
    this.showModal = false;
    document.getElementsByTagName('html')[0].classList.remove('hide');
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
    let page = Math.ceil((skillId + 1) / this.skillsComp.cardNumber);
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