import { Component, ElementRef } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';

interface Skill {id: number, name: string, color: string};

let skills: Skill[] = [
  /*0*/  {id: 0, name: 'Angular', color: '#dd0031'}, 
  /*1*/  {id: 1, name: 'React', color: '#61dafb'}, 
  /*2*/  {id: 2, name: 'HTML', color: '#f16529'}, 
  /*3*/  {id: 3, name: 'CSS/SCSS', color: '#6993f5'}, 
  /*4*/  {id: 4, name: 'JavaScript', color: '#f0db4f'}, 
  /*5*/  {id: 5, name: 'TypeScript', color: '#2d79c7'}, 
  /*6*/  {id: 6, name: 'Java', color: '#cb2d2e'}, 
  /*7*/  {id: 7, name: 'C#', color: '#a27add'}, 
  /*8*/  {id: 8, name: 'Microsoft Office', color: '#d83c03'}, 
  /*9*/  {id: 9, name: 'JIRA', color: '#1772ed'}, 
  /*10*/  {id: 10, name: 'SQL', color: '#db7533'}, 
  /*11*/  {id: 11, name: 'NodeJs', color: '#68a063'}, 
  /*12*/  {id: 12, name: 'Accessible Website Design', color: '#0383b4'},
  /*14*/  {id: 13, name: 'AWS', color: 'white'}, 
  /*15*/  {id: 14, name: 'GitHub', color: '#ffffff'}, 
  /*16*/  {id: 15, name: 'Communication', color: '#ffffff'}, 
  /*17*/  {id: 16, name: 'UI/UX Design', color: '#69b0ee'}
];
let projects: {title: string, desc: string, url: string, picture: string, skills: Skill[], icon: string, color: string}[] = [
  {
    title: 'AI Chatbot App',
    desc: 'This is an AI chatbot that utilizes OpenAI\'s Api to generate a text response to a users prompt. The AI is trained to speak as if it were me and it has been trained using my resume to know certain details about me. The application runs using Angular 16.',
    url: 'https://github.com/kjnebel/AI-ChatBot-App',
    picture: '../../../assets/images/AI\ Chatbot.png',
    skills: [
      skills[0],
      skills[2],
      skills[3],
      skills[4],
      skills[5],
      skills[14],
      skills[16]
    ],
    icon: '../../../assets/images/github\ logo.png',
    color: '#0e0f0a'
  },
  {
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
    icon: '../../../assets/images/openNew.png',
    color: 'white'
  },
  {
    title: 'Fullstack Chart App',
    desc: 'This application is a basic fullstack project designed to take data from the back end and display it as charts in the front end. It was developed using a Django back end, Next.js Frontend, Docker to package the back end, and ApexCharts.js for the charts in the frontend. For the Next.js I used React with Typescript. The Django back end was implemented using Python.',
    url: 'https://github.com/kjnebel/ChartApp',
    picture: '',
    skills: [],
    icon: '../../../assets/images/github\ logo.png',
    color: ''
  },
  {
    title: 'Toy Store Website',
    desc: 'I developed this application by myself as part of an assignment for my Software Engineering Class. It was developed with java, html, SQL with some css styling thrown in there too. I also connected this application to an AWS E2E server and had it running successfully on it, but do not currently have it up and running.',
    url: 'https://github.com/kjnebel/TechExerciseNebel',
    picture: '',
    skills: [],
    icon: '../../../assets/images/github\ logo.png',
    color: ''
  },
  {
    title: 'CodeAcademy Projects',
    desc: 'I completed these projects while working through CodeAcademy\'s Full-stack Engineer Career path.',
    url: 'https://github.com/kjnebel/CodeAcademyProjects',
    picture: '',
    skills: [],
    icon: '../../../assets/images/github\ logo.png',
    color: ''
  },
  {
    title: 'Restaurant Reservation App',
    desc: 'This application is a restaraunt reservation application that allows users to login and reserve tables or reserve a table as a guest, and allows the managers to cancel reservations. I completed this project with two other team members for a Software Engineering class.',
    url: 'https://github.com/Zeerror/CSCI4830-Fall23-WebProj',
    picture: '',
    skills: [],
    icon: '../../../assets/images/github\ logo.png',
    color: ''
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
  
  constructor(public element: ElementRef, private skillsComp: SkillsComponent) {}
  
  ngOnInit() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    let carouselCont = this.element.nativeElement.querySelector('.carouselCont');
    
    try {
      window.addEventListener('load', function () {
        if (window.innerWidth > 900 ) {
          arrowSize = 60;
          totalShift = shiftRate * shifted;
        } else if (window.innerWidth > 600) {
          arrowSize = 40;
          totalShift = shiftRate * shifted;
        } else {
          arrowSize = 30;
          totalShift = shiftRate * shifted;
        }
        pages = projects.length;
        cardCarousel?.setAttribute('style', `width: ${window.innerWidth * pages}px; transform: translateX(-${totalShift}vw);`);
        carouselCont?.setAttribute('style', `display: block;`);
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900 ) {
          arrowSize = 60;
          totalShift = shiftRate * shifted;
        } else if (window.innerWidth > 600) {
          arrowSize = 40;
          totalShift = shiftRate * shifted;
        } else {
          arrowSize = 30;
          totalShift = shiftRate * shifted;
        }
        pages = projects.length;
        cardCarousel?.setAttribute('style', `width: ${window.innerWidth * pages}px; transform: translateX(-${totalShift}vw);`);
        carouselCont?.setAttribute('style', `display: block;`);
      });
      this.arrowSize = arrowSize;
    } catch(err) {}
  }

  shiftRight() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    
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

  goToPage(page: number) {
    let cardCarousel = document.querySelector('#projectsCardCarousel');
    shifted = page - 1;
    totalShift = shiftRate * shifted;
    if (cardCarousel) {
      cardCarousel.setAttribute('style', `transform: translateX(-${totalShift}vw); width: ${window.innerWidth * pages}px;`);

      if (shifted < pages - 1) {
        document.querySelector('#projectsRightArrow')?.setAttribute('style', 'display: block;');
      }
      if (shifted === 0) {
        document.querySelector('#projectsLeftArrow')?.setAttribute('style', 'display: none;');
      }
      if (shifted === pages - 1) {
        document.querySelector('#projectsRightArrow')?.setAttribute('style', 'display: none;');
      }
      if (shifted > 0) {
        document.querySelector('#projectsLeftArrow')?.setAttribute('style', 'display: block;');
      }
    }
  }

  showMore(index: number) {
    let project = this.projectList[index];
    this.projectTitle = project.title;
    this.projectDesc = project.desc;
    this.projectPicture = project.picture;
    this.projectUrl = project.url;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  
  goToSkill(skillId: number) {
    this.closeModal();
    skill = document.getElementById(skills[skillId].name);
    if (!skill?.classList.contains('focusedCard')) {
      skill?.classList.toggle('focusedCard', true);
    }
    setTimeout(() => {
      skill?.addEventListener('mouseover', removeClass);
      window.addEventListener('click', removeClass);
    }, 10);
    let page = Math.floor(skillId / cardNum);
    this.skillsComp.goToPage(page);
  }
}

const removeClass = function() {
  if (skill?.classList.contains('focusedCard')) {
    skill?.classList.toggle('focusedCard', false);
  }
  skill?.removeEventListener('mouseover', removeClass);
  window.removeEventListener('click', removeClass);
}