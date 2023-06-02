export interface Env {
    FILES: KVNamespace;
}


export interface Careers {
    [key:string]: string
}
export interface Faculty { 
    name: string,
    courses: Careers
}

export interface Faculties {
    [key:string]: Faculty
}
