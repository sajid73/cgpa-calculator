export const storeSemester = (semesters: any) => {
    localStorage.setItem('semesters', JSON.stringify(semesters))
}

export const getSemester = () => {
    const semest = localStorage.getItem('semesters');
    if (semest){
        return JSON.parse(semest);
    }
}