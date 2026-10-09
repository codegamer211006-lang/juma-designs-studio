const assetImages = import.meta.glob<string>('../assets/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' })
const projectImage = (filename:string) => {
 const optimized=`../assets/${filename.replace(/\.([^.]+)$/,(match,ext)=>`-${ext.toLowerCase()}.webp`)}`
 return assetImages[optimized]??assetImages[`../assets/${filename}`]??''
}
const interior=projectImage('website40.png')
const interiors=projectImage('website37.png')
const gym=projectImage('website30.png')
const gymGallery=projectImage('website29.png')
const decor=projectImage('website2.png')
const bank=projectImage('uiux14.png')
const bankHome=projectImage('uiux11.png')
const pizza=projectImage('designs.jpeg')
const wrap=projectImage('designs2.jpeg')
const bird=projectImage('uiux10.png')
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
export type Project = {id:string;name:string;category:'Websites'|'Branding'|'Flyers'|'Designs'|'UI/UX';description:string;caption:string;image:string;images?:string[];services:string[];link?:string}
const featuredProjects: Project[] = [
 {id:'saf',name:'SAF Interior',category:'Websites',description:'An interior design website preview with immersive room photography and a clean, considered layout.',caption:'A calm, image-led showcase of considered interior spaces.',image:interior,images:[interior,interiors],services:['Web design','Responsive development','Portfolio layout']},
 {id:'pro',name:'Pro Fitness',category:'Websites',description:'A bold fitness website preview built around strong typography and energetic imagery.',caption:'Energetic fitness visuals paired with bold, direct messaging.',image:gym,images:[gym,gymGallery],services:['Web design','Responsive development']},
 {id:'bartey',name:'Bartey Decor',category:'Websites',description:'A refined product-focused website preview for interiors and decorative pieces.',caption:'Custom furniture and styled interiors take center stage.',image:decor,services:['Web design','Product presentation']},
 {id:'pizza',name:'Friday Special',category:'Flyers',description:'A promotional pizza design featuring vibrant food imagery and a clear offer.',caption:'A colorful pizza special with an easy-to-spot offer.',image:pizza,services:['Flyer design','Social media graphics']},
 {id:'wrap',name:'Extra Spicy',category:'Flyers',description:'A punchy food promotion with expressive typography and a product-led composition.',caption:'A spicy food promo driven by bold type and product imagery.',image:wrap,services:['Creative direction','Flyer design']},
 {id:'bank',name:'Golden Ore — Banking UI',category:'UI/UX',description:'Mobile banking interface previews exploring onboarding and everyday account management.',caption:'A gold-accented banking interface for everyday money tasks.',image:bankHome,images:[bankHome,bank],services:['UI design','Mobile interface']},
 {id:'mark',name:'Geometric Bird',category:'Branding',description:'An uploaded geometric mark study. Brand name and project details are pending.',caption:'A geometric bird mark in a crisp, minimal style.',image:bird,services:['Logo design','Visual identity']}
]
const assetCaptions:Record<string,string>={
 'website1.png':'A custom-furniture homepage set against a polished showroom interior.',
 'website15.png':'A car-rental landing page with a featured vehicle and booking prompt.',
 'website48.png':'A warm wood walk-in closet with fitted shelves and hanging space.',
 'designs3.jpeg':'An Air Jordan 4 promo pairing a sneaker close-up with product details.',
 'designs7.png':'A dark-and-gold Golden Ore banking identity graphic.'
}
const assetTitles:Record<string,string>={
 'design13.png':'Bowling Night Event Poster','design14.png':'Tropical Fever Party Flyer','design15.png':'Urban Streetwear Campaign','design16.png':'JBL Audio Promotion','design17.png':'Golden Ore Brand Promotion','design18.png':'Event Night Promotion',
 'designs1.jpeg':'Restaurant Menu Promotion','designs2.jpeg':'Extra Spicy Food Promotion','designs3.jpeg':'Air Jordan 4 Sneaker Campaign','designs4.jpeg':'Restaurant Special Flyer','designs5.jpeg':'Food and Drinks Promotion','designs6.jpeg':'Product Launch Graphic','designs7.jpeg':'Golden Ore Brand Artwork','designs7.png':'Golden Ore Brand Artwork','designs8.png':'Business Promotion Graphic','designs9.png':'Social Media Campaign','designs10.png':'Restaurant Food Promotion','designs11.png':'Event Announcement','designs12.png':'Brand Identity Concept',
 'uiuuxdesign.png':'Restaurant Ordering Experience','uiux1 (1).png':'Perfect Touch | Featured Dishes','uiux1 (2).png':'Perfect Touch | Our Story','uiux1 (3).png':'Perfect Touch | Restaurant Homepage','uiux1 (4).png':"The Locher's | Social and Contact","uiux1 (5).png":"The Locher's | Online Menu","uiux1 (6).png":"The Locher's | Dining Experiences","uiux1 (7).png":"The Locher's | Restaurant Homepage","uiux1 (8).png":'ProFitness | Membership Plans','uiux1 (9).png':'ProFitness | Fitness Homepage','uiux1 (10).png':'Paulo Restaurant | Dining Experience','uiux1 (11).png':'Paulo Restaurant | Navigation Concept',
 'uiux8.png':'Restaurant Website Experience','uiux9.png':'Restaurant Website | Menu','uiux12.png':'Restaurant Website | Featured Menu','uiux13.png':'Restaurant Website | Homepage','uiux14.png':'Golden Ore | Mobile Banking Dashboard',
 'website1.png':'Vehicle Rental Booking Website','website4.png':'ShopAllGH | Online Storefront','website5.png':'ShopAllGH | Product Collection','website6.png':'ShopAllGH | Product Details','website7.png':'Wonda Fleet | Rental Homepage','website8.png':'Wonda Fleet | Vehicle Listings','website9.png':'Wonda Fleet | Vehicle Details','website10.png':'Wonda Fleet | Booking Experience','website11.png':'Wonda Fleet | About the Fleet','website12.png':'Wonda Fleet | Rental Services','website13.png':'Wonda Fleet | Contact Page','website14.png':'Wonda Fleet | Vehicle Collection','website15.png':'Car Rental | Fleet and Booking','website16.png':'Car Rental | Vehicle Collection','website17.png':'Car Rental | Featured Vehicle','website18.png':'Car Rental | Booking Details','website19.png':'Car Rental | Rental Services','websitw20.png':'Vehicle Hire | Booking Page',
 'website21.png':'Perfect Touch | Featured Menu','website22.png':'Perfect Touch | Restaurant Story','website23.png':'Perfect Touch | Dining Homepage','website24.png':'Perfect Touch | Food Menu','website25.png':'Perfect Touch | Menu Categories','website26.png':'Perfect Touch | Restaurant Gallery',
 'website27.png':"The Locher's | Restaurant Homepage",'website28.png':"The Locher's | Menu and Ordering",'website31.png':"The Locher's | Dining Experiences",'website32.png':"The Locher's | Restaurant and Grill",'website33.png':"The Locher's | Events and Lounge",'website34.png':"The Locher's | Food and Ambience",
 'website35.png':'Paulo Restaurant | Featured Dishes','website36.png':'Paulo Restaurant | Welcome Page','website38.png':'SAF Interior | Project Gallery','website39.png':'SAF Interior | Room Transformations','website41.png':'SAF Interior | Studio Story','website42.png':'Hearts & Ink | Bookshop Homepage','website43.png':'Hearts & Ink | Curated Book Collection','website44.png':'Hearts & Ink | Bookstore Homepage','website48.png':'Bartey Decor | Walk-In Wardrobes'
}
const featuredAssetNames = new Set(['website40.png','website37.png','website30.png','website29.png','website2.png','uiux14.png','uiux11.png','designs.jpeg','designs2.jpeg','uiux10.png'])
const additionalProjects: Project[] = Object.entries(assetImages)
 .sort(([a],[b])=>a.localeCompare(b,undefined,{numeric:true}))
 .filter(([path])=>{
  const filename=path.split('/').pop()?.toLowerCase()??''
  return /\.(png|jpe?g)$/i.test(filename)&&filename!=='jumalogo.png'&&!featuredAssetNames.has(filename)
 })
 .map(([path,image])=>{
  const filename=path.split('/').pop()??path
  const stem=filename.replace(/\.[^.]+$/,'')
    const category:Project['category']=/^websit[ew]/i.test(stem)?'Websites':/^uiu*x/i.test(stem)?'UI/UX':/^designs/i.test(stem)?'Flyers':'Designs'
  const serviceDetails:Record<Project['category'],string[]>={Websites:['Web design','Responsive development'],Branding:['Logo design','Visual identity'],Flyers:['Flyer design','Social media graphics'],Designs:['Graphic design','Visual design'],'UI/UX':['UI/UX design','Interface design']}
  const title=assetTitles[filename]??(category==='Websites'?'Business Website':category==='UI/UX'?'Digital Interface Concept':category==='Flyers'?'Promotional Campaign':'Visual Identity Concept')
    const captions:Record<Project['category'],string>={Websites:'A full-page business site with a clear, image-led layout.',Branding:'A distinctive identity study shaped by its mark and palette.',Flyers:'A promotional graphic pairing bold type with product imagery.',Designs:'A focused visual study built around color, form and detail.','UI/UX':'A screen concept balancing key details and everyday actions.'}
    return {id:`asset-${filename.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`,name:title,category,description:`Uploaded ${category.toLowerCase()} preview. Project details and credits are pending.`,caption:assetCaptions[filename]??captions[category],image:projectImage(filename),services:serviceDetails[category]}
 })
export const projects: Project[] = [...featuredProjects,...additionalProjects]
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
export const contactDetails={phone:'0202736394',phoneDisplay:'020 273 6394',whatsapp:'233202736394',email:null as string|null,instagram:null as string|null,linkedin:null as string|null}
