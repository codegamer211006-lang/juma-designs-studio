import { createFileRoute } from '@tanstack/react-router'
import { pageHead } from '@/lib/metadata'
import { PricingTabs } from '@/components/studio/pricing'
import { FAQ } from '@/components/studio/process'
import { FinalCTA } from '@/components/studio/sections'
export const Route=createFileRoute('/pricing')({head:()=>pageHead('Website, Logo & Flyer Starting Prices','Websites starting from GH₵1,500, logos from GH₵300 and flyers from GH₵150. Compare deliverables and find a starting point for your project.'),component:PricingPage})
function PricingPage(){return <><PricingTabs/><FAQ/><FinalCTA/></>}
