import { createFileRoute } from '@tanstack/react-router'
import { pageHead } from '@/lib/metadata'
import { ContactForm } from '@/components/studio/contact-form'
export const Route=createFileRoute('/contact')({head:()=>pageHead('Start a Project','Tell Juma Designs about your website, logo, flyer, branding or UI/UX project. Creative and digital solutions from Accra, Ghana.'),component:ContactPage})
function ContactPage(){return <ContactForm/>}
