import { Hono } from 'hono';
import { z } from 'zod'
import { cors } from 'hono/cors';
import keys from '../../keys'
import { Env, CoursesByFaculty, CareerReferences, CoursesByCareer, Course } from './types'

const courses = new Hono<{ Bindings: Env }>()

courses.get('/all-courses', async (c) => {
    let allCourses = await c.env.FILES.get("allCourses");
    console.log(allCourses)
    allCourses = JSON.parse(allCourses!);
    return c.json({ 'courses': allCourses });
})

courses.get('/by-faculty', async (c) => {
    let allCourses = await c.env.FILES.get("allCoursesByF");
    allCourses = JSON.parse(allCourses!);
    return c.json({ 'courses': allCourses });
})

courses.get('/by-faculty/:faculty-code', async (c) => {
    const code = c.req.param('facultyCode');
    const res = await c.env.FILES.get("allCoursesByF");
    const allCourses = JSON.parse(res!) as CoursesByFaculty;
    return c.json({ 'content': allCourses[code] })

})
courses.get('/by-career/:career-code', async (c) => {
    const code = c.req.param('careerCode');
    const res1 = await c.env.FILES.get("careersReference");
    const careerReference = JSON.parse(res1!) as CareerReferences;
    const res2 = await c.env.FILES.get("allCoursesByC");
    const allCourses = JSON.parse(res2!) as CoursesByCareer;

    const faculty = careerReference[code]['facultyId']
    const courses = allCourses[faculty]['careers'][code]['courses']
    console.log(faculty)
    console.log(courses)
    return c.json({ 'content': courses })
})


courses.get('/by-career', async (c) => {
    let allCourses = await c.env.FILES.get("allCoursesByC");
    allCourses = JSON.parse(allCourses!);

    return c.json({ 'courses': allCourses })
})


courses.get('/:course-code', async (c) => {
    const code = c.req.param('courseCode')
    const res = await c.env.FILES.get("allCoursesByF");
    const allCourses = JSON.parse(res!) as Course;
    return c.json({ 'content': allCourses[code] })
})


export default courses;
