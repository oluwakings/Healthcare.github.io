import { useState, type FormEvent } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Heart, Menu, X, Check, Clock3, Sparkles, Phone, Mail, ChevronRight } from 'lucide-react';

const serviceItems = [
  { name: 'Dementia care', desc: 'Patient, reassuring support designed to promote comfort, familiarity, dignity and meaningful daily routines.', number: '01', icon: Heart },
  { name: 'Domiciliary care', desc: 'Practical help and personal care in your own home, supporting independence and everyday wellbeing.', number: '02', icon: Sparkles },
  { name: 'Private care', desc: 'One-to-one support tailored to your circumstances, preferences and the level of help you need.', number: '03', icon: Check },
  { name: '24-hour care', desc: 'Care and support arranged around the clock, including day and night support according to assessed needs.', number: '04', icon: Clock3 },
];
const principles = [
  ['Qualified and well-trained carers', 'Support delivered with kindness, professionalism and respect.'],
  ['Care built around the individual', 'We listen to clients and families to understand what matters most.'],
  ['Dignity and independence', 'Encouraging people to do as much as they comfortably can for themselves.'],
  ['Flexible support', 'Discuss short visits, ongoing help or round-the-clock arrangements with our team.'],
];
const steps = [
  ['STEP 01', 'Tell us what you need', 'Share your circumstances, routines and the type of support you are looking for.'],
  ['STEP 02', 'Plan care together', 'We discuss suitable options, preferences and the practical details of a care plan.'],
  ['STEP 03', 'Begin with confidence', 'We agree the next steps and keep communication open as needs or routines change.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Care enquiry from ${form.get('name')}`;
    const body = [
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Email: ${form.get('email')}`,
      `Care interest: ${form.get('care')}`,
      '',
      'How can we help?',
      form.get('message'),
    ].join('\n');
    window.location.href = `mailto:business-email@replace-before-publishing.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site">
      <a className="skip-link" href="#main" data-testid="link-skip-content">Skip to content</a>
      <div className="utility"><div className="wrap utility-inner"><span>Compassionate care, built around you</span><span><i /> Support available 24 hours a day</span></div></div>
      <header className="header">
        <div className="wrap nav-row">
          <a className="brand" href="#home" aria-label="HBJD LTD home" data-testid="link-home"><span className="brand-mark">H</span><span><b>HBJD LTD</b><small>CARE &amp; SUPPORT</small></span></a>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu} data-testid="link-services">Our services</a><a href="#about" onClick={closeMenu} data-testid="link-about">About us</a><a href="#process" onClick={closeMenu} data-testid="link-process">How it works</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu} data-testid="link-contact">Talk to our team <ArrowUpRight size={15} /></a>
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="A care worker sharing a warm moment with an older woman at home" />
          <div className="hero-shade" />
          <div className="wrap hero-content">
            <div className="hero-copy reveal"><span className="eyebrow light">Care with compassion</span><h1 data-testid="text-hero-heading">Helping you live<br />well, <em>your way.</em></h1><p>At HBJD Ltd, we provide thoughtful, personalised care that helps people feel safe, respected and supported in the place they call home.</p><div className="hero-actions"><a className="button button-rose" href="#contact" data-testid="link-discuss-care">Discuss your care needs <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#services" data-testid="link-explore-services">Explore our services <ArrowDown size={16} /></a></div></div>
            <div className="hero-note"><div className="note-icon"><Heart size={19} /></div><b>Care that feels personal</b><p>Kindness, dignity and independence at the heart of every visit.</p></div>
            <div className="day-badge"><span className="pulse" /> Here for you day and night</div>
          </div>
          <div className="hero-bottom"><span>Individual support. A familiar place.</span><span>01 — 04</span></div>
        </section>
        <section id="services" className="section services-section">
          <div className="wrap"><div className="section-heading centered"><span className="eyebrow">What we offer</span><h2 className="section-title">Care that fits your life</h2><p>Every person is different. We take time to understand individual routines, preferences and goals, then tailor support around them.</p></div>
            <div className="service-grid">{serviceItems.map(({ name, desc, number, icon: Icon }) => <article className="service-card" key={name} data-testid={`card-service-${number}`}><div className="service-top"><span className="service-icon"><Icon size={21} strokeWidth={1.7} /></span><span className="service-number">{number}</span></div><h3>{name}</h3><p>{desc}</p><a href="#contact" aria-label={`Discuss ${name}`} className="card-link" data-testid={`link-service-contact-${number}`}>Talk to us <ArrowRight size={16} /></a></article>)}</div>
          </div>
        </section>
        <section id="about" className="difference section">
          <div className="wrap difference-grid">
            <div className="quote-panel"><div className="quote-orbit orbit-one" /><div className="quote-orbit orbit-two" /><div className="quote-mark">“</div><p>Every person deserves to feel heard, valued and cared for.</p><span className="quote-caption">THE HBJD DIFFERENCE</span></div>
            <div className="difference-copy"><span className="eyebrow">The HBJD difference</span><h2 className="section-title">Professional care.<br />A human touch.</h2><p className="lead">Choosing care for yourself or someone close to you is an important decision. Our aim is to make that journey clearer, calmer and more reassuring.</p><div className="principles">{principles.map(([title, text]) => <div className="principle" key={title}><span className="check-icon"><Check size={14} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div>
          </div>
        </section>
        <section id="process" className="section process-section">
          <div className="wrap"><div className="section-heading centered"><span className="eyebrow">Getting started</span><h2 className="section-title">A simple, supportive process</h2><p>We work with you and, where appropriate, your family to explore the right care arrangement.</p></div>
            <div className="steps">{steps.map(([num, title, text], index) => <article className="step" key={num}><div className="step-head"><span>{num}</span><span className="step-track">{index < 2 && <i />}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>
        <section className="cta-band"><div className="wrap cta-inner"><div><span className="eyebrow light">We’re here to help</span><h2>Looking for care for yourself<br className="desktop-break" /> or someone you love?</h2><p>Talk to HBJD Ltd about your situation. We’ll help you explore the support that may be right for you.</p></div><a className="button button-rose" href="#contact" data-testid="link-make-enquiry">Make an enquiry <ArrowUpRight size={17} /></a><div className="cta-ring" /></div></section>
        <section id="contact" className="section contact-section">
          <div className="wrap contact-grid"><div className="contact-copy"><span className="eyebrow">Get in touch</span><h2 className="section-title">Let’s talk about<br />the care you need.</h2><p className="lead">Contact us to discuss dementia care, domiciliary care, private care or 24-hour support. Please avoid including sensitive medical details in this initial enquiry.</p>
              <div className="contact-details"><div className="contact-detail"><span className="detail-icon"><Phone size={18} /></span><div><b>Phone</b><p>Please add your business telephone number</p><span className="replace">Replace before publishing</span></div></div><div className="contact-detail"><span className="detail-icon"><Mail size={18} /></span><div><b>Email</b><p>Please add your business email address</p><span className="replace">Replace before publishing</span></div></div><div className="contact-detail"><span className="detail-icon"><Clock3 size={18} /></span><div><b>Availability</b><p>Care services available 24 hours a day, subject to assessment and arrangement.</p></div></div></div>
            </div>
            <form className="enquiry-form" onSubmit={prepareEmail} data-testid="form-enquiry"><h3>Send an enquiry</h3><div className="field-row"><label>Your name<input name="name" type="text" placeholder="Full name" required autoComplete="name" data-testid="input-name" /></label><label>Phone number<input name="phone" type="tel" placeholder="Best number to reach you" autoComplete="tel" data-testid="input-phone" /></label></div><label>Email address<input name="email" type="email" placeholder="you@example.com" required autoComplete="email" data-testid="input-email" /></label><label>What care are you interested in?<select name="care" defaultValue="" required data-testid="select-care"><option value="" disabled>Please select</option><option>Dementia care</option><option>Domiciliary care</option><option>Private care</option><option>24-hour care</option><option>Not sure yet</option></select></label><label>How can we help?<textarea name="message" rows={4} placeholder="Briefly tell us what support you are looking for" required data-testid="input-message" /></label><button className="button button-teal form-submit" type="submit" data-testid="button-prepare-enquiry">Prepare enquiry email <ArrowUpRight size={17} /></button><p className="form-note" data-testid="text-form-note">{sent ? 'Your email app should open with your enquiry prepared. No information has been sent or stored on this website.' : 'This demo form opens your email app and does not send or store information on this website. Add your real business email address in the website code before publishing.'}</p><p className="email-placeholder" data-testid="text-email-placeholder">Email recipient currently set to a replacement placeholder — update before publishing.</p></form>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="wrap footer-top"><a className="brand footer-brand" href="#home" data-testid="link-footer-home"><span className="brand-mark">H</span><span><b>HBJD LTD</b><small>CARE &amp; SUPPORT</small></span></a><p>Compassionate care, built around you</p><a className="footer-link" href="#contact" data-testid="link-footer-contact">Talk to our team <ChevronRight size={15} /></a></div><div className="wrap footer-bottom"><span>HBJD LTD · Care &amp; Support</span><a href="#home" data-testid="link-back-to-top">Back to top ↑</a><span>Support available 24 hours a day</span></div></footer>
    </div>
  );
}

export default App;
