import { Hono } from 'hono';
import { Env, Careers, Faculties } from './types'

const careers = new Hono<{ Bindings: Env }>()

careers.get('/all-careers', async (c) => {
    const res = await c.env.FILES.get('allCareers');
    const allCareers = JSON.parse(res!) as Careers;
    return c.json({ 'content': allCareers })
})

careers.get('/by-faculty', async (c) => {
    const res = await c.env.FILES.get('allCareersByF');
    const allCareers = JSON.parse(res!) as Faculties;
    return c.json({ 'content': allCareers })
})

careers.get('/by-faculty/:faculty-code', async (c) => {
    const code = c.req.param('facultyCode');
    const res = await c.env.FILES.get('allCareersByF');
    const allCareers = JSON.parse(res!) as Faculties;
    return c.json({ 'content': allCareers[code] })
})

careers.get('/:career-code', async (c) => {
    const code = c.req.param('careerCode');
    const res = await c.env.FILES.get('allCareers');
    const allCareers = JSON.parse(res!) as Careers;
    return c.json({ 'content': allCareers[code] })

})

export default careers;