import { Component, ElementRef } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import {
  skills,
  Skill,
  tempShifted,
  tempTotalShift,
  resetVar,
  skillsArrayExport,
  showProjectModal,
  openModal,
  globalCloseModal,
} from '../../public/publicVariables';

interface ProjectDetail {
  id: string;
  title: string;
  desc: string;
  url: string;
  picture: string;
  skills: Skill[];
  color: string;
  fontColor: string;
}

const projectsArray: ProjectDetail[] = [
  {
    id: 'aiChatbot',
    title: 'AI Chatbot App',
    desc: "I built an AI chatbot that utilizes OpenAI's Api to generate a text response to a users prompt. The AI is trained to speak as if it were me and it has been trained using my resume to know certain details about me. The application runs using Angular 16.",
    url: 'https://github.com/kjnebel/AI-ChatBot-App',
    picture: '../../../assets/images/AI Chatbot.png',
    skills: [
      skills['Angular'],
      skills['HTML'],
      skills['CSS/SCSS'],
      skills['Redux Toolkit'],
      skills['Jira'],
      skills['SQL'],
      skills['AWS'],
      skills['UI/UX Design'],
    ],
    color: '#0e0f0a',
    fontColor: 'white',
  },
  {
    id: 'codePen',
    title: 'CodePen Designs',
    desc: 'I completed some CodePen design challenges and have had some displayed in the official CodePen Collections.',
    url: 'https://codepen.io/Kieran-Nebel',
    picture: '../../../assets/images/codePen.png',
    skills: [
      skills['HTML'],
      skills['CSS/SCSS'],
      skills['UI/UX Design'],
      skills['JavaScript'],
    ],
    color: '#ddf7e3',
    fontColor: '#253e24',
  },
  {
    id: 'upProjects',
    title: 'UP Projects',
    desc: "I completed many projects while working at Union Pacific. One I'm particularly proud of was an Incident Reporting application I helped develop at a time when derailments were all over the news. A different application I am able to show is a public-facing rail-crossing reporting application. I worked on the frontend of both applications with one other developer and they were developed using Angular. I was also in charge of making sure that the app was accessible to all users.",
    url: 'https://c02.my.uprr.com/ui/rmc_ext/#/',
    picture: '../../../assets/images/upProjects.png',
    skills: [
      skills['Angular'],
      skills['HTML'],
      skills['CSS/SCSS'],
      skills['Redux Toolkit'],
      skills['JavaScript'],
      skills['Fastify'],
      skills['Java'],
      skills['C#'],
      skills['Jira'],
      skills['SQL'],
      skills['AWS'],
      skills['GitHub'],
      skills['UI/UX Design'],
    ],
    color: 'white',
    fontColor: 'black',
  },
  {
    id: 'chartApp',
    title: 'Fullstack Chart App',
    desc: 'This application is a basic fullstack project designed to take data from the back end and display it as charts in the front end. It was developed using a Django back end, Next.js Frontend, Docker to package the back end, and ApexCharts.js for the charts in the frontend. For the Next.js I used React with Typescript. The Django back end was implemented using Python.',
    url: 'https://github.com/kjnebel/ChartApp',
    picture: '../../../assets/images/chartapp.png',
    skills: [
      skills['React'],
      skills['HTML'],
      skills['CSS/SCSS'],
      skills['Redux Toolkit'],
      skills['Jira'],
      skills['AWS'],
      skills['Docker'],
      skills['Prisma ORM'],
      skills['TypeScript'],
    ],
    color: '#2a3133',
    fontColor: 'white',
  },
  {
    id: 'toyStore',
    title: 'Toy Store Website',
    desc: 'I developed this application by myself as part of an assignment for my Software Engineering Class. It was developed with java, html, SQL with some css styling thrown in there too. I also connected this application to an AWS E2E server and had it running successfully on it, but do not currently have it up and running.',
    url: 'https://github.com/kjnebel/TechExerciseNebel',
    picture: '../../../assets/images/ToyStore.png',
    skills: [skills['Java'], skills['HTML'], skills['SQL'], skills['CSS/SCSS']],
    color: 'white',
    fontColor: 'black',
  },
  {
    id: 'codeAcademy',
    title: 'CodeAcademy Projects',
    desc: "I completed these projects while working through CodeAcademy's Full-stack Engineer Career path.",
    url: 'https://github.com/kjnebel/CodeAcademyProjects',
    picture: '../../../assets/images/codecademy.png',
    skills: [
      skills['HTML'],
      skills['CSS/SCSS'],
      skills['JavaScript'],
      skills['SQL'],
      skills['UI/UX Design'],
    ],
    color: '#000000',
    fontColor: 'white',
  },
  {
    id: 'restaurant',
    title: 'Restaurant Reservation App',
    desc: 'This application is a restaraunt reservation application that allows users to login and reserve tables or reserve a table as a guest, and allows the managers to cancel reservations. I completed this project with two other team members for a Software Engineering class.',
    url: 'https://github.com/Zeerror/CSCI4830-Fall23-WebProj',
    picture: '../../../assets/images/restaurantSite.png',
    skills: [
      skills['HTML'],
      skills['JavaScript'],
      skills['Java'],
      skills['GitHub'],
      skills['UI/UX Design'],
    ],
    color: 'black',
    fontColor: 'white',
  },
];

// Create hashmap keyed by id
const projects: { [key: string]: ProjectDetail } = {};
projectsArray.forEach((project) => {
  projects[project.id] = project;
});

// Export array for iteration purposes
const projectsArrayExport = projectsArray;

let cardNum: number = 1;
let pages: any = projectsArrayExport.length;
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
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  skillList = skillsArrayExport;
  projectList = projectsArrayExport;
  arrowSize = arrowSize;
  downArrowSize = downArrowSize;
  cardNum = cardNum;
  pages = pages;
  projectTitle = '';
  projectDesc = '';
  projectPicture = '';
  projectUrl = '';
  projectColor = '';
  projectSkillList: Skill[] = [];
  showClose = showClose;
  skillsArray: Skill[] = skillsArrayExport;

  get showProjectModal() {
    return showProjectModal;
  }

  constructor(
    public element: ElementRef,
    private skillsComp: SkillsComponent
  ) {}

  ngOnInit() {
    let cardCarousel = this.element.nativeElement.querySelector(
      '.cardCarouselCont'
    ) as HTMLElement;
    let carouselCont = this.element.nativeElement.querySelector(
      '.carouselCont'
    ) as HTMLElement;

    try {
      window.addEventListener('load', function () {
        if (window.innerWidth > 900) {
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
        pages = projectsArrayExport.length;
        if (cardCarousel) {
          cardCarousel.style.width = `${window.innerWidth * pages}px`;
          cardCarousel.style.transform = `translateX(-${totalShift}vw)`;
        }
        if (carouselCont) {
          carouselCont.style.display = 'block';
        }
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
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
        // Reset to first page on resize
        shifted = 0;
        totalShift = 0;
        pages = projectsArrayExport.length;
        if (cardCarousel) {
          cardCarousel.style.width = `${window.innerWidth * pages}px`;
          cardCarousel.style.transform = 'translateX(0vw)';
        }
        if (carouselCont) {
          carouselCont.style.display = 'block';
        }
      });
      this.arrowSize = arrowSize;
      this.showClose = showClose;
    } catch (err) {}
  }

  shiftRight() {
    let cardCarousel = this.element.nativeElement.querySelector(
      '.cardCarouselCont'
    ) as HTMLElement;

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
      if (cardCarousel) {
        cardCarousel.style.width = `${window.innerWidth * pages}px`;
        cardCarousel.style.transform = `translateX(-${totalShift}vw)`;
      }
    } else if (shifted == pages - 2) {
      shifted++;
      totalShift = shiftRate * shifted;
      if (cardCarousel) {
        cardCarousel.style.width = `${window.innerWidth * pages}px`;
        cardCarousel.style.transform = `translateX(-${totalShift}vw)`;
      }
      this.element.nativeElement
        .querySelector('#projectsRightArrow')
        ?.setAttribute('style', 'display: none;');
    }

    if (shifted > 0) {
      this.element.nativeElement
        .querySelector('#projectsLeftArrow')
        ?.setAttribute('style', 'display: block;');
    }
  }

  shiftLeft() {
    let cardCarousel = this.element.nativeElement.querySelector(
      '.cardCarouselCont'
    ) as HTMLElement;

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
      if (cardCarousel) {
        cardCarousel.style.width = `${window.innerWidth * pages}px`;
        cardCarousel.style.transform = `translateX(-${totalShift}vw)`;
      }
    } else if (shifted == 1) {
      shifted--;
      totalShift = shiftRate * shifted;
      if (cardCarousel) {
        cardCarousel.style.width = `${window.innerWidth * pages}px`;
        cardCarousel.style.transform = `translateX(-${totalShift}vw)`;
      }
      this.element.nativeElement
        .querySelector('#projectsLeftArrow')
        ?.setAttribute('style', 'display: none;');
    }

    if (shifted < pages - 1) {
      this.element.nativeElement
        .querySelector('#projectsRightArrow')
        ?.setAttribute('style', 'display: block;');
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
      openModal('project');
      document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    }
  }

  closeModal() {
    globalCloseModal();
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  }

  goToSkill(skillId: number, skillName: string) {
    if (skillName == 'Linear' || skillName == 'Jira') {
      skillName = 'Linear & Jira';
    } else if (skillName == 'React' || skillName == 'React Native') {
      skillName = 'React / React Native';
    }
    this.closeModal();
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
