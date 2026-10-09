import { describe,it,expect } from 'vitest'
import { packages,payment,projects } from '@/data/studio'
describe('Juma commercial rules',()=>{
 it('uses the supplied website starting prices',()=>expect(packages.Websites.map(p=>p.price)).toEqual([1500,2500,4000]))
 it('uses the supplied logo starting prices',()=>expect(packages['Logo Design'].map(p=>p.price)).toEqual([300,500,1000]))
 it('uses the supplied flyer starting prices',()=>expect(packages['Flyer Design'].map(p=>p.price)).toEqual([150,250,600]))
 it('requires a 70% production deposit',()=>expect(payment.deposit).toBe(70))
 it('requires the 30% balance before final handover or deployment',()=>{expect(payment.balance).toBe(30);expect(payment.balanceDue).toBe('upon completion before final handover/live deployment')})
 it('limits starter pages to 1–3',()=>expect(packages.Websites[0]?.features).toContain('1–3 pages'))
 it('limits business pages to 4–7',()=>expect(packages.Websites[1]?.features).toContain('4–7 pages'))
 it('includes five flyers in the bundle',()=>expect(packages['Flyer Design'][2]?.features).toContain('5 custom flyers'))
 it('includes one concept and two revisions for a basic logo',()=>{expect(packages['Logo Design'][0]?.features).toContain('1 initial concept');expect(packages['Logo Design'][0]?.features).toContain('2 revisions')})
 it('keeps the project gallery aligned to websites, UI/UX and design work',()=>{expect(projects.some(p=>p.category==='Websites')).toBe(true);expect(projects.some(p=>p.category==='UI/UX')).toBe(true);expect(projects.some(p=>p.category==='Designs')).toBe(true)})
})
