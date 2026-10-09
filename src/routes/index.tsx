import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { pageHead } from '@/lib/metadata'
import { Hero, Services, WhyUs, Testimonials, FinalCTA } from '@/components/studio/sections'
import { Portfolio } from '@/components/studio/portfolio'
import { PricingTabs } from '@/components/studio/pricing'
import { ProcessTimeline, FAQ } from '@/components/studio/process'
export const Route=createFileRoute('/')({head:()=>pageHead('Creative & Digital Studio in Accra','Juma Designs helps businesses grow with professional branding, graphic design and modern websites. Explore our work, starting prices and straightforward project process.'),component:Home})
function Home(){useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('main > div > .section').forEach(el=>{el.classList.add('reveal');observer.observe(el)});return()=>{observer.disconnect();document.querySelectorAll('.reveal').forEach(el=>el.classList.remove('reveal'))}},[]);return <div><Hero/><Portfolio compact/><Services/><PricingTabs/><WhyUs/><ProcessTimeline/><Testimonials/><FAQ/><FinalCTA/></div>}
