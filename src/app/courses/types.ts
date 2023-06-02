export interface Env {
    FILES: KVNamespace;
}

export interface Course {
    [key: string]: string
}

export interface FacultyCourses {
    name: string,
    courses: Course
}
export interface CoursesByFaculty {
    [key: string]: FacultyCourses
}

export interface CareerReference {
    name: string,
    facultyName: string,
    facultyId: string
}

export interface CareerReferences {
    [key: string]: CareerReference
}

export interface Career {
    name: string,
    courses: Course
}
export interface Careers {
    [key: string]: Career
}
export interface FacultyCareers {
    name: string,
    careers: Careers
}
export interface CoursesByCareer {
    [key:string]: FacultyCareers
}
