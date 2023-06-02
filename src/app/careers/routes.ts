import { Hono } from 'hono';
import { Env, Careers, Faculties } from './types'

const careers = new Hono<{ Bindings: Env }>()

careers.get('/allCareers', async (c) => {
    const res = await c.env.FILES.get('allCareers');
    const allCareers = JSON.parse(res!) as Careers;
    return c.json({'content': allCareers})
})

careers.get('/byFaculty', async (c) => {
    const res = await c.env.FILES.get('allCareersByF');
    const allCareers = JSON.parse(res!) as Faculties;
    return c.json({'content': allCareers})
})

careers.get('/byFaculty/:facultyCode', async (c) => {
    const code = c.req.param('facultyCode');
    const res = await c.env.FILES.get('allCareersByF');
    const allCareers = JSON.parse(res!) as Faculties;
    return c.json({'content': allCareers[code]})
})

careers.get('/:careerCode', async (c) => {
    const code = c.req.param('careerCode');
    const res = await c.env.FILES.get('allCareers');
    const allCareers = JSON.parse(res!) as Careers;
    return c.json({'content': allCareers[code]})

})

export default careers;