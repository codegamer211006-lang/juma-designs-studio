import { createFileRoute } from '@tanstack/react-router'
import { pageHead } from '@/lib/metadata'
import { ProcessTimeline, Expectations, FAQ } from '@/components/studio/process'
import { FinalCTA } from '@/components/studio/sections'
export const Route=createFileRoute('/process')({head:()=>pageHead('How We Work & Project Onboarding','Understand the Juma Designs project process, demos for suitable projects, scope review, 70% production deposit and final handover.'),component:ProcessPage})
function ProcessPage(){return <><ProcessTimeline/><Expectations/><FAQ/><FinalCTA/></>}
