import { Component, ElementRef } from '@angular/core';

interface Skill {title: string, years?: string, description: string, url: string, size: string, color: string};

let skills: Skill[] = [
  {
    title: 'Angular', 
    years: '3+',
    description: 'I used Angular to develop the frontend of business applications during my internship at Union Pacific Railroad. I also have experience with AngularJs and upgrading AngularJs applications to newer versions of Angular. This website was created with Angular 17.',
    url: '../../../assets/images/angular\ logo.png',
    size: '100%',
    color: 'white'
  },
  {
    title: 'React',
    years: '1+',
    description: 'I learned React in my last year of college and used it to develop the frontend for my capstone project. Since I learned React after knowing Angular I was able to become proficient in React much faster.',
    url: '../../../assets/images/react\ logo.png',
    size: '95%',
    color: 'white'
  },
  { 
    title: 'HTML',
    years: '4+',
    description: 'I am an expert in HTML as it is one of the languages I have used the most. I used HTML at my internship at Union Pacific and throughout my college studies.',
    url: '../../../assets/images/html\ logo.png',
    size: '90%',
    color: 'white'
  },
  { 
    title: 'CSS/SCSS',
    years: '4+',
    description: 'I am an expert in CSS and placed in the top 3% of all users who have taken the LinkedIn CSS skill assessment. I am confident I can complete any design needed using CSS and JavaScript / TypeScript.',
    url: '../../../assets/images/css\ logo.png',
    size: '145%',
    color: 'white'
  },
  { 
    title: 'JavaScript',
    years: '6+',
    description: 'JavaScript was the first programming language I ever learned. I started programming at my job at Code Ninjas where I taught kids how to program games using JavaScript.',
    url: '../../../assets/images/js\ logo.png',
    size: '100%',
    color: 'white'
  },
  { 
    title: 'TypeScript',
    years: '3+',
    description: 'More recently I have switched from JavaScript to TypeScript while programming with Angular. My JavaScript skills have transferred over to TypeScript and I now prefer using TypeScript over JavaScript.',
    url: '../../../assets/images/ts\ logo.png',
    size: '105%',
    color: 'white'
  },
  { 
    title: 'Java',
    years: '4+',
    description: 'Java was the language all my Computer Science major classes were taught in so I have a lot of experience applying it to different projects and concepts. I also worked on a Java backend in my first year at my internship at Union Pacific Railroad.',
    url: '../../../assets/images/java\ logo.png',
    size: '100%',
    color: 'white'
  },
  { 
    title: 'C#',
    years: '2+',
    description: 'I have taken a few game development classes while working towards my Bachelor\'s and I learned C# in them. I also used C# for the backend of my capstone project.',
    url: '../../../assets/images/c\ logo.png',
    size: '80%',
    color: 'linear-gradient(127deg, rgba(240,230,255,1) 0%, rgba(182,147,233,1) 100%)'
  },
  { 
    title: 'Microsoft Office',
    years: '11+',
    description: 'I have been using Microsoft Office products consistently since middle school so I am very familiar with all of their products.',
    url: '../../../assets/images/microsoft\ office\ logo.png',
    size: '160%',
    color: 'linear-gradient(127deg, rgba(255,230,231,1) 0%, rgba(255,219,176,1) 100%)'
  },
  { 
    title: 'JIRA',
    years: '4+',
    description: 'I used JIRA at my internship at Union Pacific Railroad. I also used other forms of agile development software for different group projects throughout college.',
    url: '../../../assets/images/jiraLogo.png',
    size: '100%',
    color: 'linear-gradient(127deg, rgba(252,236,255,1) 0%, rgba(227,235,255,1) 100%)'
  },
  { 
    title: 'SQL',
    years: '2+',
    description: 'I used SQL during college for a few different projects. I became very comfortable with it after taking a Database Management class in my last semester.',
    url: '../../../assets/images/sql.png',
    size: '100%',
    color: 'white'
  },
  { 
    title: 'NodeJs',
    years: '2+',
    description: 'I used NodeJs during my internship at Union Pacific Railroad.',
    url: '../../../assets/images/node\ logo.png',
    size: '90%',
    color: 'linear-gradient(127deg, rgba(244,255,239,1) 0%, rgba(209,255,188,1) 100%)'
  },
  { 
    title: 'Accessible Website Design',
    years: '2+',
    description: 'I learned proper website accessibility standards while at my internship at Union Pacific. I was in charge of implementing accessibility features to a few applications during my time there.',
    url: '../../../assets/images/web\ access\ icon.png',
    size: '100%',
    color: 'white'
  },
  { 
    title: 'AWS',
    years: '1+',
    description: 'I have experience using AWS servers for hosting different applications in a Software Engineering class I took during college.',
    url: '../../../assets/images/aws\ logo.png',
    size: '90%',
    color: 'white'
  },
  { 
    title: 'GitHub',
    years: '4+',
    description: 'I have used GitHub for almost every project I have ever worked on. I used it during my entire internship and throughout college.',
    url: '../../../assets/images/github\ logo.png',
    size: '95%',
    color: 'white'
  },
  { 
    title: 'Communication',
    description: 'I have good verbal and written communication skills. I also thrive in team environments and work well with others.',
    url: '../../../assets/images/communication.png',
    size: '130%',
    color: 'white'
  },
  { 
    title: 'UI/UX Design',
    years: '2+',
    description: 'I gained UI/UX design skills during my internship at Union Pacific where I was able to work with a design team to implement good UX practices for the applications.',
    url: '../../../assets/images/UIdesign.png',
    size: '85%',
    color: 'white'
  },
  { 
    title: 'ASP.Net',
    years: '2+',
    description: 'I gained experience with ASP.Net at the University of Nebraska at Omaha while completing my B.S. in Computer Science.',
    url: '../../../assets/images/asp.net.logo.png',
    size: '110%',
    color: 'white'
  },
  { 
    title: 'Microsoft Azure',
    years: '1+',
    description: 'I am familiar with microsoft azure and have developed a few projects using it.',
    url: '../../../assets/images/azure.png',
    size: '90%',
    color: 'white'
  }
];
let cardNum: number = 5;
let pages: any = Math.ceil(skills.length / cardNum);
let arrowSize: number = 50;
let downArrowSize: number = 20;
let shiftRate: number = 90;
let totalShift: number = 0;
let shifted: number = 0;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  
  skillList = skills;
  arrowSize = arrowSize;
  downArrowSize = downArrowSize;
  cardNum = cardNum;
  pages = pages;
  showModal = false;
  skillTitle = '';
  skillYears: string | undefined = '';
  skillDesc = '';
  skillColor = '';
  skillUrl = '';
  skillSize = '';

  get cardNumber() {
    return cardNum;
  }
  
  constructor(public element: ElementRef) {}
  
  ngOnInit() {
    let cardCarousel = this.element.nativeElement.querySelector('.cardCarouselCont');
    let carouselCont = this.element.nativeElement.querySelector('.carouselCont');
    
    try {
      window.addEventListener('load', function () {
        if (window.innerWidth > 900 ) {
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
          cardNum = 3;
          arrowSize = 30;
          shiftRate = 80;
          totalShift = shiftRate * shifted;
        }
        pages = Math.ceil(skills.length / cardNum);
        cardCarousel?.setAttribute('style', `width: ${window.innerWidth * pages}px; transform: translateX(-${totalShift}vw);`);
        carouselCont?.setAttribute('style', `display: block;`);
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900 ) {
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
          cardNum = 3;
          arrowSize = 30;
          shiftRate = 80;
          totalShift = shiftRate * shifted;
        }
        pages = Math.ceil(skills.length / cardNum);
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
    let cardCarousel = document.querySelector('#skillsCardCarousel');
    shifted = page - 1;
    totalShift = shiftRate * shifted;
    if (cardCarousel) {
      cardCarousel.setAttribute('style', `transform: translateX(-${totalShift}vw); width: ${window.innerWidth * pages}px;`);

      if (shifted < pages - 1) {
        document.querySelector('#skillsRightArrow')?.setAttribute('style', 'display: block;');
      }
      if (shifted === 0) {
        document.querySelector('#skillsLeftArrow')?.setAttribute('style', 'display: none;');
      }
      if (shifted === pages - 1) {
        document.querySelector('#skillsRightArrow')?.setAttribute('style', 'display: none;');
      }
      if (shifted > 0) {
        document.querySelector('#skillsLeftArrow')?.setAttribute('style', 'display: block;');
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
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}