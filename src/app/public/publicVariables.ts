let experienceModalOpen = false;
let skillsModalOpen = false;

export let tempShifted = 0;
export let tempTotalShift = 0;

export function toggleExpModalOpen() {
    if (experienceModalOpen) {
        experienceModalOpen = false;
        return false;
    } else {
        experienceModalOpen = true;
        return true;
    }
}

export function toggleSkillModalOpen() {
    if (skillsModalOpen) {
        skillsModalOpen = false;
        return false;
    } else {
        skillsModalOpen = true;
        return true;
    }
}


export interface Skill {id: number, name: string, color: string};
export interface Experience {id: number, comp: string, color: string};
export interface Project {id: number, title: string, image: string, element: string};

export var skills: Skill[] = [
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
  /*13*/  {id: 13, name: 'AWS', color: 'white'}, 
  /*14*/  {id: 14, name: 'GitHub', color: '#ffffff'}, 
  /*15*/  {id: 15, name: 'Communication', color: '#ffffff'}, 
  /*16*/  {id: 16, name: 'UI/UX Design', color: '#69b0ee'},
  /*17*/  {id: 17, name: 'ASP.Net', color: '#06a2e6'},
  /*18*/  {id: 18, name: 'Microsoft Azure', color: '#3bc8f3'},
  /*19*/  {id: 19, name: 'Django', color: 'white'},
  /*20*/  {id: 20, name: 'Docker', color: '#0092e6'},
  /*21*/  {id: 21, name: 'Python', color: '#ffe15c'},
];

export var jobs: Experience[] = [
    /*0*/ {id: 0, comp:'Union Pacific Railroad', color: '#ef3c40'},
    /*1*/ {id: 1, comp:'Code Ninjas', color: '#3090c0'},
    /*2*/ {id: 2, comp:'Certified Transmission', color: '#fef104'},
    /*3*/ {id: 3, comp:'Amazon', color: '#ff9b05'}
]

export var projects: Project[] = [
    /*0*/ {id: 0, title:'AI Chatbot App', image: '../../../assets/images/AI\ Chatbot.png', element: 'aiChatbot'},
    /*1*/ {id: 1, title:'UP Projects', image: '../../../assets/images/upProjects.png', element: 'upProjects'},
    /*2*/ {id: 2, title:'Fullstack Chart App', image: '../../../assets/images/chartapp.png', element: 'chartApp'},
    /*3*/ {id: 3, title:'Toy Store Website', image: '../../../assets/images/ToyStore.png', element: 'toyStore'},
    /*4*/ {id: 4, title:'CodeAcademy Projects', image: '../../../assets/images/codecademy.png', element: 'codeAcademy'},
    /*5*/ {id: 5, title:'Restaurant Reservation App', image: '../../../assets/images/restaurant.png', element: 'restaurant'},
    /*6*/ {id: 6, title:'CodePen Challenges', image: '../../../assets/images/codePen.png', element: 'codePen'}
]

export function goToProjPage(page: number) {
    let cardCarousel = document.querySelector('#projectsCardCarousel');
    tempShifted = page - 1;
    tempTotalShift = 100 * tempShifted;
    if (cardCarousel) {
      cardCarousel.setAttribute('style', `transform: translateX(-${tempTotalShift}vw); width: ${window.innerWidth * projects.length}px;`);

      if (tempShifted < projects.length - 1) {
        document.querySelector('#projectsRightArrow')?.setAttribute('style', 'display: block;');
      } else if (tempShifted === 5) {
        document.querySelector('#projectsRightArrow')?.setAttribute('style', 'display: none;');
      }
      if (tempShifted === 0) {
        document.querySelector('#projectsLeftArrow')?.setAttribute('style', 'display: none;');
      } else if (tempShifted > 0) {
        document.querySelector('#projectsLeftArrow')?.setAttribute('style', 'display: block;');
      }
    }
}

export function resetVar() {
    tempShifted = 0;
    tempTotalShift = 0;
}
