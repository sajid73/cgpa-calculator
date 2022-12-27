const gpaTable: any = {
    "A+": 4,
    "A": 3.75,
    "A-": 3.5,
    "B+": 3.25,
    "B": 3.00,
    "B-": 2.75,
    "C+": 2.5,
    "C": 2.25,
    "D": 2,
    "F": 0
}

export const gpa = (semesters: any) => {
    let totalCredits = 0;
    let totalC_G = 0;
    semesters?.map((semester: any) => {
        semester.courses?.map((course: any) => {
            // console.log(course.courseCode);
            totalCredits += course.credit;
            totalC_G += (course.credit * gpaTable[course.grade])
        })
    })
    return totalC_G/totalCredits;
}