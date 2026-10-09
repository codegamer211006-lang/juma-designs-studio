import interior from '@/assets/curtain1.png.asset.json'
import interiors from '@/assets/cutains5.png.asset.json'
import gym from '@/assets/gym2.png.asset.json'
import gymGallery from '@/assets/gym3.png.asset.json'
import decor from '@/assets/bartey2.png.asset.json'
import bank from '@/assets/bank1.png.asset.json'
import bankHome from '@/assets/bank3.png.asset.json'
import pizza from '@/assets/WhatsApp_Image_2026-10-07_at_11.05.14_PM_1.jpeg.asset.json'
import wrap from '@/assets/WhatsApp_Image_2026-10-07_at_11.05.15_PM.jpeg.asset.json'
import bird from '@/assets/h.png.asset.json'
export const navigation = [['Home','/'],['Services','/services'],['Work','/work'],['Pricing','/pricing'],['Process','/process'],['Contact','/contact']] as const
export type Category = 'Websites' | 'Logo Design' | 'Flyer Design'
export const packages: Record<Category, {name:string; price:number; plus?:boolean; audience?:string; features:string[]}[]> = {
 Websites: [
 {name:'Starter Website',price:1500,audience:'Small businesses, personal brands, startups & professionals',features:['1–3 pages','Responsive design & mobile optimization','Business information','Contact / WhatsApp integration','Basic animations','Deployment']},
 {name:'Business Website',price:2500,audience:'Growing businesses, companies, schools, restaurants & services',features:['4–7 pages','Custom UI design','Responsive development','WhatsApp / contact integration','Gallery / portfolio','Animations','SEO-ready structure','Deployment','Basic maintenance period']},
 {name:'Premium Website',price:4000,plus:true,audience:'Established businesses, premium brands & organizations',features:['Custom design & multiple pages','Advanced interactions & custom sections','CMS / content capabilities where required','Forms & integrations','Advanced responsive behavior','Deployment','Performance optimization']}
 ],
 'Logo Design':[
 {name:'Basic Logo',price:300,features:['1 initial concept','2 revisions','PNG / JPG files','Transparent background']},
 {name:'Professional Logo',price:500,features:['2–3 concepts','Multiple revisions','PNG / JPG files','Transparent files','Black / white variations','High-resolution export']},
 {name:'Brand Starter Pack',price:1000,plus:true,features:['Professional logo','Color palette','Typography selection','Business card design','Social media profile assets','Basic brand guide']}
 ],
 'Flyer Design':[
 {name:'Single Flyer',price:150,features:['1 custom flyer','2 revisions','Social-media-ready export']},
 {name:'Premium Flyer',price:250,features:['Custom creative direction','Advanced composition','2–3 revisions','Multiple export formats']},
 {name:'Flyer Bundle',price:600,plus:true,features:['5 custom flyers','Consistent visual style','Social media optimized','For campaigns & promotions']}
 ]
}
export const payment = {deposit:70,balance:30,balanceDue:'upon completion before final handover/live deployment'}
export const formatPrice=(price:number)=>`GH₵${price.toLocaleString('en-GH')}`
export type Project = {id:string;name:string;category:'Websites'|'Branding'|'Flyers'|'UI/UX';description:string;image:string;images?:string[];services:string[];link?:string}
export const projects: Project[] = [
 {id:'saf',name:'SAF Interior',category:'Websites',description:'An interior design website preview with immersive room photography and a clean, considered layout.',image:interior.url,images:[interior.url,interiors.url],services:['Web design','Responsive development','Portfolio layout']},
 {id:'pro',name:'Pro Fitness',category:'Websites',description:'A bold fitness website preview built around strong typography and energetic imagery.',image:gym.url,images:[gym.url,gymGallery.url],services:['Web design','Responsive development']},
 {id:'bartey',name:'Bartey Decor',category:'Websites',description:'A refined product-focused website preview for interiors and decorative pieces.',image:decor.url,services:['Web design','Product presentation']},
 {id:'pizza',name:'Friday Special',category:'Flyers',description:'A promotional pizza design featuring vibrant food imagery and a clear offer.',image:pizza.url,services:['Flyer design','Social media graphics']},
 {id:'wrap',name:'Extra Spicy',category:'Flyers',description:'A punchy food promotion with expressive typography and a product-led composition.',image:wrap.url,services:['Creative direction','Flyer design']},
 {id:'bank',name:'Golden Ore — Banking UI',category:'UI/UX',description:'Mobile banking interface previews exploring onboarding and everyday account management.',image:bankHome.url,images:[bankHome.url,bank.url],services:['UI design','Mobile interface']},
 {id:'mark',name:'Geometric Bird',category:'Branding',description:'An uploaded geometric mark study. Brand name and project details are pending.',image:bird.url,services:['Logo design','Visual identity']}
]
export const stages=[
 {title:'Contact Us',lead:'Tell us what you need.',text:'Contact us through WhatsApp, phone, email or the website. We discuss your business, what you want, your goals, budget, timeline and required deliverables.'},
 {title:'We Build a Demo',lead:'An idea becomes something you can see.',text:'For suitable projects, we create an initial demo or concept using your specifications, business information, publicly available information and preferred style. Review a tangible direction before committing to the full project.'},
 {title:'Review & Discuss',lead:'We show you the direction.',text:'We arrange a call or discussion to walk through the demo. Share feedback, request changes and clarify the final scope. If you decide to proceed, we move into production.'},
 {title:'Deposit & Production',lead:'70% to bring your project to life.',text:'A 70% project deposit is required before full production. We finalize the design, develop the website or product, complete requested revisions, prepare final assets and test everything. The remaining 30% is due upon completion before final handover/live deployment, unless another arrangement is agreed.'},
 {title:'Launch & Handover',lead:'Your project goes live.',text:'We present the finished product, complete final checks and collect the remaining balance before deployment and handover. We deploy the website where applicable, deliver final design files and provide relevant access and details.'}
]
export const faqs=[
 ['How much does a website cost?','Our websites start from GH₵1,500, but final pricing depends on scope and functionality.'],
 ['Do you work with businesses outside Ghana?','Yes. We work with businesses outside Ghana too.'],
 ['Do you redesign existing websites?','Yes. We can refresh your existing website around your current business needs.'],
 ['Can I request a custom package?','Yes. Tell us what you need and we’ll shape a package around your project.'],
 ['Do you provide maintenance?','Yes, maintenance and ongoing support can be arranged depending on the project.'],
 ['Do I have to pay everything upfront?','No. Our standard process is a 70% deposit to begin full production and 30% upon completion before final handover/live deployment.'],
 ['How long does a website take?','It depends on the size and complexity of the project. The timeline will be discussed before production begins.'],
 ['Can you design only a logo or flyer?','Yes. You can hire us for individual design services.']
]
export const contactDetails={email:null as string|null, whatsapp:null as string|null, instagram:null as string|null,linkedin:null as string|null}
