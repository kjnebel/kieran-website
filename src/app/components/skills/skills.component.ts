import { Component, ElementRef, HostListener } from '@angular/core';
import {
  jobs,
  projects,
  jobsArrayExport,
  Experience,
  Project,
  goToProjPage,
  showSkillModal,
  openModal,
  globalCloseModal,
} from '../../public/publicVariables';
interface Skill {
  title: string;
  years?: string;
  description: string;
  url: string;
  size: string;
  color: string;
  jobs: Experience[];
  projects: Project[];
}

let skills: Skill[] = [
  {
    title: 'React / React Native',
    years: '2',
    description:
      'I have used React and React Native to develop the frontend of applications at Guardify, W. N. Morehouse Truck Line Co., and academic projects.',
    url: '../../../assets/images/react logo.png',
    size: '95%',
    color: 'white',
    jobs: [jobs['Guardify'], jobs['W. N. Morehouse Truck Line Co.']],
    projects: [projects['chartApp']],
  },
  {
    title: 'Angular',
    years: '3',
    description:
      'I used Angular to develop the frontend of business applications during my internship at Union Pacific Railroad. I also have experience with AngularJs and upgrading AngularJs applications to newer versions of Angular. This website was created with Angular 17.',
    url: '../../../assets/images/angular logo.png',
    size: '100%',
    color: 'white',
    jobs: [jobs['Union Pacific Railroad']],
    projects: [projects['aiChatbot'], projects['upProjects']],
  },
  {
    title: 'HTML',
    years: '6',
    description:
      'I am an expert in HTML as it is one of the languages I have used the most. I used HTML at my internship at Union Pacific and throughout my college studies.',
    url: '../../../assets/images/html logo.png',
    size: '90%',
    color: 'white',
    jobs: [
      jobs['Guardify'],
      jobs['W. N. Morehouse Truck Line Co.'],
      jobs['Union Pacific Railroad'],
      jobs['Code Ninjas'],
    ],
    projects: [
      projects['aiChatbot'],
      projects['upProjects'],
      projects['chartApp'],
      projects['toyStore'],
      projects['codeAcademy'],
      projects['restaurant'],
      projects['codePen'],
    ],
  },
  {
    title: 'CSS/SCSS',
    years: '6',
    description:
      'I am an expert in CSS and placed in the top 3% of all users who have taken the LinkedIn CSS skill assessment. I am confident I can complete any design needed using CSS and JavaScript / TypeScript.',
    url: '../../../assets/images/css logo.png',
    size: '145%',
    color: 'white',
    jobs: [
      jobs['Guardify'],
      jobs['W. N. Morehouse Truck Line Co.'],
      jobs['Union Pacific Railroad'],
      jobs['Code Ninjas'],
    ],
    projects: [
      projects['aiChatbot'],
      projects['upProjects'],
      projects['chartApp'],
      projects['toyStore'],
      projects['codeAcademy'],
      projects['restaurant'],
      projects['codePen'],
    ],
  },
  {
    title: 'JavaScript',
    years: '6',
    description:
      'JavaScript was the first programming language I ever learned. I started programming at my job at Code Ninjas where I taught kids how to program games using JavaScript.',
    url: '../../../assets/images/js logo.png',
    size: '100%',
    color: 'white',
    jobs: [
      jobs['Guardify'],
      jobs['W. N. Morehouse Truck Line Co.'],
      jobs['Union Pacific Railroad'],
      jobs['Code Ninjas'],
    ],
    projects: [
      projects['aiChatbot'],
      projects['upProjects'],
      projects['chartApp'],
      projects['codeAcademy'],
      projects['codePen'],
    ],
  },
  {
    title: 'TypeScript',
    years: '4',
    description:
      'When I moved to Union Pacific Railroad I switched from JavaScript to TypeScript while programming with Angular. My JavaScript skills have transferred over to TypeScript and I now prefer using TypeScript over JavaScript.',
    url: '../../../assets/images/ts logo.png',
    size: '105%',
    color: 'white',
    jobs: [
      jobs['Guardify'],
      jobs['Union Pacific Railroad'],
      jobs['W. N. Morehouse Truck Line Co.'],
    ],
    projects: [
      projects['aiChatbot'],
      projects['upProjects'],
      projects['chartApp'],
    ],
  },
  {
    title: 'AWS',
    years: '2',
    description:
      'While I was a freelance developer I used a variety of AWS services to host the mobile application for W. N. Morehouse Truck Line Co. Now I use even more AWS services for my projects at Guardify.',
    url: '../../../assets/images/aws logo.png',
    size: '90%',
    color: 'white',
    jobs: [jobs['W. N. Morehouse Truck Line Co.'], jobs['Guardify']],
    projects: [projects['toyStore'], projects['restaurant']],
  },
  {
    title: 'Redux Toolkit',
    years: '2',
    description:
      'I use Redux Toolkit (RTK) at Guardify to manage state in React and React Native applications. I have experience with RTK modularization to reduce code complexity.',
    url: '../../../assets/images/redux.png',
    size: '80%',
    color: 'white',
    jobs: [jobs['Guardify'], jobs['W. N. Morehouse Truck Line Co.']],
    projects: [],
  },
  {
    title: 'Linear & Jira',
    years: '4',
    description:
      'I used Jira at my internship at Union Pacific Railroad. I use Linear at Guardify. I also used other forms of agile development software for different group projects throughout college.',
    url: '../../../assets/images/linear.png',
    size: '90%',
    color: 'white',
    jobs: [jobs['Union Pacific Railroad']],
    projects: [projects['upProjects']],
  },
  {
    title: 'SQL',
    years: '3',
    description:
      'I used SQL during college for a few different projects. I became very comfortable with it after taking a Database Management class in my last semester. And now I use it for my projects at Guardify.',
    url: '../../../assets/images/sql.png',
    size: '100%',
    color: 'white',
    jobs: [jobs['Guardify'], jobs['Union Pacific Railroad']],
    projects: [
      projects['upProjects'],
      projects['toyStore'],
      projects['restaurant'],
      projects['codeAcademy'],
    ],
  },
  {
    title: 'PostgreSQL',
    years: '2',
    description:
      'I use PostgreSQL at Guardify to build and maintain full-stack applications for Child Advocacy Centers.',
    url: '../../../assets/images/postgresql.png',
    size: '80%',
    color: 'white',
    jobs: [jobs['Guardify']],
    projects: [],
  },
  {
    title: 'Cursor',
    years: '1',
    description:
      'I have been using Cursor to greatly improve my efficiency and coding quality.',
    url: '../../../assets/images/cursor.png',
    size: '100%',
    color: '#000',
    jobs: [jobs['Guardify'], jobs['W. N. Morehouse Truck Line Co.']],
    projects: [],
  },
  {
    title: 'Node.js',
    years: '2',
    description:
      'I used NodeJs during my internship at Union Pacific Railroad.',
    url: '../../../assets/images/node logo.png',
    size: '90%',
    color:
      'linear-gradient(127deg, rgba(244,255,239,1) 0%, rgba(209,255,188,1) 100%)',
    jobs: [jobs['Union Pacific Railroad']],
    projects: [
      projects['aiChatbot'],
      projects['upProjects'],
      projects['chartApp'],
    ],
  },
  {
    title: 'Accessibility',
    years: '3',
    description:
      'I learned proper website accessibility standards while at my internship at Union Pacific. I was in charge of implementing accessibility features to a few applications during my time there. Now I use those same practices in my work at Guardify.',
    url: '../../../assets/images/web access icon.png',
    size: '100%',
    color: 'white',
    jobs: [jobs['Union Pacific Railroad'], jobs['Guardify']],
    projects: [
      projects['aiChatbot'],
      projects['upProjects'],
      projects['codeAcademy'],
    ],
  },
  {
    title: 'GitHub',
    years: '6',
    description:
      'I have used GitHub for almost every project I have ever worked on. I have used it at every job I have had and while in college.',
    url: '../../../assets/images/github logo.png',
    size: '95%',
    color: 'white',
    jobs: [
      jobs['Guardify'],
      jobs['W. N. Morehouse Truck Line Co.'],
      jobs['Union Pacific Railroad'],
      jobs['Code Ninjas'],
    ],
    projects: [
      projects['aiChatbot'],
      projects['upProjects'],
      projects['chartApp'],
      projects['toyStore'],
      projects['codeAcademy'],
      projects['restaurant'],
    ],
  },
  {
    title: 'UI/UX Design',
    years: '3',
    description:
      'I gained UI/UX design skills during my internship at Union Pacific where I was able to work with a design team to implement good UX practices for the applications. Now I use those same skills in my work at Guardify.',
    url: '../../../assets/images/UIdesign.png',
    size: '85%',
    color: 'white',
    jobs: [
      jobs['Guardify'],
      jobs['Union Pacific Railroad'],
      jobs['W. N. Morehouse Truck Line Co.'],
    ],
    projects: [
      projects['aiChatbot'],
      projects['upProjects'],
      projects['codeAcademy'],
      projects['restaurant'],
      projects['codePen'],
    ],
  },
  {
    title: 'Docker',
    years: '1',
    description: 'I use Docker at Guardify to containerize my projects.',
    url: '../../../assets/images/dockerLogo.png',
    size: '90%',
    color: 'white',
    jobs: [jobs['Guardify']],
    projects: [projects['chartApp']],
  },
  {
    title: 'ASP.Net',
    years: '1',
    description:
      'I gained experience with ASP.Net at the University of Nebraska at Omaha while completing my B.S. in Computer Science.',
    url: '../../../assets/images/asp.net.logo.png',
    size: '110%',
    color: 'white',
    jobs: [],
    projects: [],
  },
  {
    title: 'Java',
    years: '2',
    description:
      'Java was the language all my Computer Science major classes were taught in so I have experience applying it to different projects and concepts. I also worked on a Java backend in my first year at my internship at Union Pacific Railroad.',
    url: '../../../assets/images/java logo.png',
    size: '100%',
    color: 'white',
    jobs: [jobs['Union Pacific Railroad']],
    projects: [
      projects['upProjects'],
      projects['toyStore'],
      projects['restaurant'],
    ],
  },
  {
    title: 'Fastify',
    years: '2',
    description:
      'I use Fastify at Guardify to build and maintain backend APIs for full-stack applications.',
    url: '../../../assets/images/Fastify.png',
    size: '90%',
    color: 'white',
    jobs: [jobs['Guardify']],
    projects: [],
  },
  {
    title: 'Prisma ORM',
    years: '2',
    description:
      'I use Prisma ORM at Guardify to interact with PostgreSQL databases in full-stack applications.',
    url: '../../../assets/images/prisma.png',
    size: '70%',
    color: 'white',
    jobs: [jobs['Guardify']],
    projects: [],
  },
  {
    title: 'Firebase',
    years: '1',
    description:
      'I used Firebase while working as a freelance developer for W. N. Morehouse Truck Line Co. to develop a mobile application.',
    url: '../../../assets/images/firebase.png',
    size: '60%',
    color: 'white',
    jobs: [jobs['W. N. Morehouse Truck Line Co.']],
    projects: [],
  },
  {
    title: 'C#',
    years: '2',
    description:
      "I have taken game development classes while working towards my Bachelor's and I learned C# in them. I also used C# for the backend of my capstone project.",
    url: '../../../assets/images/c logo.png',
    size: '80%',
    color:
      'linear-gradient(127deg, rgba(240,230,255,1) 0%, rgba(182,147,233,1) 100%)',
    jobs: [],
    projects: [],
  },
  {
    title: 'Spring',
    years: '2',
    description:
      'I used Spring while working on the backend of some projects at Union Pacific Railroad.',
    url: '../../../assets/images/spring.png',
    size: '80%',
    color: 'white',
    jobs: [jobs['Union Pacific Railroad']],
    projects: [projects['upProjects']],
  },
];
let cardNum: number = 5;
let pages: any = Math.ceil(skills.length / cardNum);
let arrowSize: number = 50;
let downArrowSize: number = 20;
let shiftRate: number = 90;
let totalShift: number = 0;
let shifted: number = 0;
let job: HTMLElement | null;
let project: HTMLElement | null;
let jobActive: boolean = false;
let projectActive: boolean = false;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillList = skills;
  arrowSize = arrowSize;
  downArrowSize = downArrowSize;
  cardNum = cardNum;
  pages = pages;
  skillTitle = '';
  skillYears: string | undefined = '';
  skillDesc = '';
  skillColor = '';
  skillUrl = '';
  skillSize = '';
  skillJobList: Experience[] = [];
  skillProjectList: Project[] = [];

  get cardNumber() {
    return cardNum;
  }

  get showSkillModal() {
    return showSkillModal;
  }

  constructor(public element: ElementRef) {}

  ngOnInit() {
    let cardCarousel =
      this.element.nativeElement.querySelector('.cardCarouselCont');
    let carouselCont =
      this.element.nativeElement.querySelector('.carouselCont');
    let rightArrow =
      this.element.nativeElement.querySelector('.rightArrowButton');
    let leftArrow =
      this.element.nativeElement.querySelector('.leftArrowButton');

    try {
      window.addEventListener('load', function () {
        if (window.innerWidth > 900) {
          cardNum = 5;
          arrowSize = 60;
          shiftRate = 90;
          totalShift = shiftRate * shifted;
        } else if (window.innerWidth > 600) {
          cardNum = 4;
          arrowSize = 40;
          shiftRate = 90;
          totalShift = shiftRate * shifted;
        } else {
          cardNum = 3.8;
          shiftRate = 0.8;
          totalShift = shiftRate * shifted;
        }
        pages = Math.ceil(skills.length / cardNum);
        if (this.window.innerWidth <= 500) {
          pages = 6.5;
        }
        if (cardCarousel) {
          (cardCarousel as HTMLElement).style.width = `${
            window.innerWidth * pages
          }px`;
          (
            cardCarousel as HTMLElement
          ).style.transform = `translateX(-${totalShift}vw)`;
        }
        carouselCont?.setAttribute('style', `display: block;`);
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
          cardNum = 5;
          arrowSize = 60;
          shiftRate = 90;
        } else if (window.innerWidth > 500) {
          cardNum = 4;
          arrowSize = 40;
          shiftRate = 90;
        } else {
          cardNum = 3.8;
          arrowSize = 30;
          shiftRate = 0.8;
        }
        pages = Math.ceil(skills.length / cardNum);
        if (this.window.innerWidth <= 500) {
          pages = 6.5;
        }
        // Reset to first page on resize
        shifted = 0;
        totalShift = 0;
        if (cardCarousel) {
          (cardCarousel as HTMLElement).style.width = `${
            window.innerWidth * pages
          }px`;
          (cardCarousel as HTMLElement).style.transform = 'translateX(0vw)';
        }
        carouselCont?.setAttribute('style', `display: block;`);
        if (this.window.innerWidth > 500) {
          rightArrow.setAttribute('style', 'display: block;');
          leftArrow.setAttribute('style', 'opacity: 0;');
        } else {
          rightArrow.setAttribute('style', 'display: none;');
          leftArrow.setAttribute('style', 'display: none;');
        }
      });
      this.arrowSize = arrowSize;
    } catch (err) {}
  }

  shiftRight() {
    let cardCarousel = this.element.nativeElement.querySelector(
      '.cardCarouselCont'
    ) as HTMLElement;

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
        .querySelector('.rightArrowButton')
        ?.setAttribute('style', 'display: none;');
    }

    if (shifted > 0) {
      this.element.nativeElement
        .querySelector('.leftArrowButton')
        ?.setAttribute('style', 'opacity: 1;');
    }
  }

  shiftLeft() {
    let cardCarousel = this.element.nativeElement.querySelector(
      '.cardCarouselCont'
    ) as HTMLElement;

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
        .querySelector('.leftArrowButton')
        ?.setAttribute('style', 'opacity: 0;');
    }

    if (shifted < pages - 1) {
      this.element.nativeElement
        .querySelector('.rightArrowButton')
        ?.setAttribute('style', 'display: block;');
    }
  }

  goToPage(page: number) {
    let cardCarousel = document.querySelector(
      '#skillsCardCarousel'
    ) as HTMLElement;
    let cardCont = document.querySelector('#skillsCarouselCont') as HTMLElement;
    shifted = page - 1;
    totalShift = shiftRate * shifted;
    if (innerWidth > 500) {
      if (cardCarousel) {
        cardCarousel.style.width = `${window.innerWidth * pages}px`;
        cardCarousel.style.transform = `translateX(-${totalShift}vw)`;

        if (shifted < pages - 1 && window.innerWidth > 500) {
          document
            .querySelector('#skillsRightArrow')
            ?.setAttribute('style', 'display: block;');
        } else if (window.innerWidth > 500) {
          document
            .querySelector('#skillsRightArrow')
            ?.setAttribute('style', 'display: none;');
        }
        if (shifted === 0 && window.innerWidth > 500) {
          document
            .querySelector('#skillsLeftArrow')
            ?.setAttribute('style', 'opacity: 0;');
        } else if (window.innerWidth > 500) {
          document
            .querySelector('#skillsLeftArrow')
            ?.setAttribute('style', 'opacity: 1;');
        }
      }
    } else {
      if (cardCont) {
        cardCont.scrollLeft = totalShift * window.innerWidth;
      }
    }
  }

  showMore(index: number) {
    let skill = this.skillList[index];
    this.skillTitle = skill.title;
    this.skillYears = skill.years;
    this.skillDesc = skill.description;
    this.skillColor = skill.color;
    this.skillUrl = skill.url;
    this.skillSize = skill.size;
    this.skillJobList = skill.jobs;
    this.skillProjectList = skill.projects;
    openModal('skill');

    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  }

  closeModal() {
    globalCloseModal();
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  }

  goToJob(jobId: number) {
    this.closeModal();
    if (jobActive) {
      removeJobClass();
    }
    job = document.getElementById(jobsArrayExport[jobId].comp);
    if (!job?.classList.contains('focusedCard')) {
      job?.classList.toggle('focusedCard', true);
      jobActive = true;
    }
    setTimeout(() => {
      job?.addEventListener('mouseover', removeJobClass);
      window.addEventListener('click', removeJobClass);
    }, 10);
  }

  goToProject(projId: number) {
    this.closeModal();
    let page = projId + 1;
    goToProjPage(page);
  }
}

const removeJobClass = function () {
  if (job?.classList.contains('focusedCard')) {
    job?.classList.toggle('focusedCard', false);
  }
  job?.removeEventListener('mouseover', removeJobClass);
  window.removeEventListener('click', removeJobClass);
  jobActive = false;
};
