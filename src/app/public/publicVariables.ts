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

export interface Skill {
  id: number;
  name: string;
  color: string;
}
export interface Experience {
  id: number;
  comp: string;
  color: string;
}
export interface Project {
  id: number;
  title: string;
  image: string;
  element: string;
}

const skillsArray: Skill[] = [
  /*0*/ { id: 0, name: 'React', color: '#61dafb' },
  /*0*/ { id: 0, name: 'React Native', color: '#61dafb' },
  /*1*/ { id: 1, name: 'Angular', color: '#dd0031' },
  /*2*/ { id: 2, name: 'HTML', color: '#f16529' },
  /*3*/ { id: 3, name: 'CSS/SCSS', color: '#6993f5' },
  /*4*/ { id: 4, name: 'JavaScript', color: '#f0db4f' },
  /*5*/ { id: 5, name: 'TypeScript', color: '#2d79c7' },
  /*6*/ { id: 6, name: 'AWS', color: 'white' },
  /*7*/ { id: 7, name: 'Redux Toolkit', color: '#F8D9FD' },
  /*8*/ { id: 8, name: 'Linear', color: '#36c7e4' },
  /*8*/ { id: 8, name: 'Jira', color: '#2d8dff' },
  /*9*/ { id: 9, name: 'SQL', color: '#db7533' },
  /*10*/ { id: 10, name: 'PostgreSQL', color: '#fff' },
  /*11*/ { id: 11, name: 'Cursor', color: '#fff' },
  /*12*/ { id: 12, name: 'Node.js', color: '#68a063' },
  /*13*/ { id: 13, name: 'Accessibility', color: '#0082b3' },
  /*14*/ { id: 14, name: 'GitHub', color: '#ffffff' },
  /*15*/ { id: 15, name: 'UI/UX Design', color: '#69b0ee' },
  /*16*/ { id: 16, name: 'Docker', color: '#0092e6' },
  /*17*/ { id: 17, name: 'ASP.Net', color: '#06a2e6' },
  /*18*/ { id: 18, name: 'Java', color: '#cb2d2e' },
  /*19*/ { id: 19, name: 'Fastify', color: '#fff' },
  /*20*/ { id: 20, name: 'Prisma ORM', color: '#2bbd99' },
  /*21*/ { id: 21, name: 'Firebase', color: '#dd2c00' },
  /*22*/ { id: 22, name: 'C#', color: '#a27add' },
  /*23*/ { id: 23, name: 'Spring', color: '#76bc1e' },
];

// Create hashmap keyed by skill name
export const skills: { [key: string]: Skill } = {};
skillsArray.forEach((skill) => {
  skills[skill.name] = skill;
});

// Export array for iteration purposes (for components that need to iterate)
export const skillsArrayExport = skillsArray;

const jobsArray: Experience[] = [
  /*0*/ { id: 0, comp: 'Guardify', color: '#61bade' },
  /*1*/ { id: 1, comp: 'W. N. Morehouse Truck Line Co.', color: '#FFF' },
  /*2*/ { id: 2, comp: 'Union Pacific Railroad', color: '#ef3c40' },
  /*3*/ { id: 3, comp: 'Code Ninjas', color: '#3090c0' },
];

// Create hashmap keyed by company name
export const jobs: { [key: string]: Experience } = {};
jobsArray.forEach((job) => {
  jobs[job.comp] = job;
});

// Export array for iteration purposes (for components that need to iterate)
export const jobsArrayExport = jobsArray;

const projectsArray: Project[] = [
  /*0*/ {
    id: 0,
    title: 'AI Chatbot App',
    image: '../../../assets/images/AI Chatbot.png',
    element: 'aiChatbot',
  },
  /*1*/ {
    id: 1,
    title: 'CodePen Challenges',
    image: '../../../assets/images/codePen.png',
    element: 'codePen',
  },
  /*2*/ {
    id: 2,
    title: 'UP Projects',
    image: '../../../assets/images/upProjects.png',
    element: 'upProjects',
  },
  /*3*/ {
    id: 3,
    title: 'Fullstack Chart App',
    image: '../../../assets/images/chartapp.png',
    element: 'chartApp',
  },
  /*4*/ {
    id: 4,
    title: 'Toy Store Website',
    image: '../../../assets/images/ToyStore.png',
    element: 'toyStore',
  },
  /*5*/ {
    id: 5,
    title: 'CodeAcademy Projects',
    image: '../../../assets/images/codecademy.png',
    element: 'codeAcademy',
  },
  /*6*/ {
    id: 6,
    title: 'Restaurant Reservation App',
    image: '../../../assets/images/restaurant.png',
    element: 'restaurant',
  },
];

// Create hashmap keyed by element
export const projects: { [key: string]: Project } = {};
projectsArray.forEach((project) => {
  projects[project.element] = project;
});

// Export array for iteration purposes (for components that need to iterate)
export const projectsArrayExport = projectsArray;

export function goToProjPage(page: number) {
  let cardCarousel = document.querySelector(
    '#projectsCardCarousel'
  ) as HTMLElement;
  tempShifted = page - 1;
  tempTotalShift = 100 * tempShifted;
  if (cardCarousel) {
    cardCarousel.style.width = `${
      window.innerWidth * projectsArrayExport.length
    }px`;
    cardCarousel.style.transform = `translateX(-${tempTotalShift}vw)`;

    if (tempShifted < projectsArrayExport.length - 1) {
      document
        .querySelector('#projectsRightArrow')
        ?.setAttribute('style', 'display: block;');
    } else if (tempShifted === 6) {
      document
        .querySelector('#projectsRightArrow')
        ?.setAttribute('style', 'display: none;');
    }
    if (tempShifted === 0) {
      document
        .querySelector('#projectsLeftArrow')
        ?.setAttribute('style', 'display: none;');
    } else if (tempShifted > 0) {
      document
        .querySelector('#projectsLeftArrow')
        ?.setAttribute('style', 'display: block;');
    }
  }
}

export function resetVar() {
  tempShifted = 0;
  tempTotalShift = 0;
}

export var showExperienceModal = false;
export var showSkillModal = false;
export var showProjectModal = false;
export var showEducationModal = false;

export function openModal(modal: string) {
  globalCloseModal();
  switch (modal) {
    case 'experience':
      showExperienceModal = true;
      break;
    case 'skill':
      showSkillModal = true;
      break;
    case 'project':
      showProjectModal = true;
      break;
    default:
      showEducationModal = true;
      break;
  }
}

export function globalCloseModal() {
  document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  showExperienceModal = false;
  showSkillModal = false;
  showProjectModal = false;
  showEducationModal = false;
}
