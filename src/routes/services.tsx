import { createFileRoute } from '@tanstack/react-router'
import { pageHead } from '@/lib/metadata'
import { Services, WebIntro, FinalCTA } from '@/components/studio/sections'
import { Portfolio } from '@/components/studio/portfolio'
export const Route=createFileRoute('/services')({head:()=>pageHead('Creative & Web Design Services','Explore web development, logo and brand identity, flyers and UI/UX design from Juma Designs in Ghana.'),component:ServicesPage})
function ServicesPage(){return <><div className="page-heading"><span className="eyebrow">CREATIVE THINKING. PRACTICAL SOLUTIONS.</span><h1>Good Ideas Deserve<br/>Great Design.</h1><p>From your first logo to your next website, we bring your business into focus.</p></div><Services/><WebIntro/><Portfolio webOnly/><FinalCTA/></>}
