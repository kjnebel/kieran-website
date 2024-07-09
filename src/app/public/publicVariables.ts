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