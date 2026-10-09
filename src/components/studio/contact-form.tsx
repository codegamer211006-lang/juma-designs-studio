import { type FormEvent } from 'react'
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactDetails } from '@/data/studio'

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fields = Array.from(formData.entries(), ([key, value]) => `${key}: ${value}`).join('\n')
    const message = `New project request for Juma Designs\n\n${fields}`
    window.location.assign(`https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(message)}`)
  }

  return (
    <section className="section contact-section" id="project">
      <div className="contact-copy">
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>Let’s Build<br/><em>Something.</em></h2>
        <p>Have a business, idea or project in mind? Tell us what you’re working on and let’s figure out how we can bring it to life.</p>
        <div className="contact-methods">
          <Button variant="outline" asChild>
            <a href={`tel:+${contactDetails.whatsapp}`}><Phone/>Call {contactDetails.phoneDisplay}<ArrowUpRight/></a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`https://wa.me/${contactDetails.whatsapp}`}><MessageCircle/>WhatsApp<ArrowUpRight/></a>
          </Button>
          {contactDetails.email && <Button variant="outline" asChild><a href={`mailto:${contactDetails.email}`}><Mail/>Email Us<ArrowUpRight/></a></Button>}
        </div>
        <p className="small-note">Submitting opens WhatsApp with your project details filled in. Press Send in WhatsApp to deliver your request.</p>
        <span className="location">ACCRA, GHANA · {contactDetails.phoneDisplay} · OPEN TO IDEAS EVERYWHERE</span>
      </div>
      <form className="inquiry-form glass" onSubmit={handleSubmit}>
        <span className="eyebrow">TELL US A LITTLE ABOUT YOUR PROJECT</span>
        <div className="form-grid">
          <label>Name<input name="Name" autoComplete="name" placeholder="Your name" required/></label>
          <label>Business / Company<input name="Business" autoComplete="organization" placeholder="Your business name"/></label>
          <label>Email<input name="Email" type="email" autoComplete="email" placeholder="you@example.com" required/></label>
          <label>Phone / WhatsApp<input name="Phone" type="tel" autoComplete="tel" placeholder="Your contact number" required/></label>
          <label htmlFor="inquiry-service">Service<select id="inquiry-service" name="Service" required defaultValue=""><option value="" disabled>Select a service</option>{['Website','Logo','Flyer','UI/UX','Branding','Other'].map(service=><option key={service}>{service}</option>)}</select></label>
          <label htmlFor="inquiry-budget">Budget<select id="inquiry-budget" name="Budget" required defaultValue=""><option value="" disabled>Your budget range</option>{['Under GH₵500','GH₵500–1,500','GH₵1,500–3,000','GH₵3,000–5,000','GH₵5,000+','Not sure'].map(budget=><option key={budget}>{budget}</option>)}</select></label>
        </div>
        <label>Project description<textarea name="Project description" rows={4} placeholder="What do you have in mind?" required/></label>
        <Button size="lg" type="submit">Send Project Request<MessageCircle/></Button>
      </form>
    </section>
  )
}