let experienceModalOpen = false;
let skillsModalOpen = false;

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
  /*18*/  {id: 18, name: 'Microsoft Azure', color: '#3bc8f3'}
];