import { createFileRoute } from '@tanstack/react-router'
import { pageHead } from '@/lib/metadata'
import { Portfolio } from '@/components/studio/portfolio'
import { FinalCTA } from '@/components/studio/sections'
export const Route=createFileRoute('/work')({head:()=>pageHead('Selected Work & Design Portfolio','Browse supplied website, branding, flyer and mobile interface previews in the Juma Designs creative portfolio.'),component:WorkPage})
function WorkPage(){return <><Portfolio/><Portfolio webOnly/><FinalCTA/></>}
