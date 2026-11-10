'use client'

import { useState } from "react";


const brain = [
  "Brain MAX", "Notetaker", "Talk to Brain", "Artifacts²",
  "Skills", "AI Projects", "Enterprise Search", "Creative Studio",
];
const agents = ["Super Agents", "Ambient Agents", "AI Workflows"];
const product = [
  "Projects", "Chat", "Docs & Wikis", "Sheets", "Notepad", "Whiteboards",
  "Mind Maps", "Views", "Calendar", "Dashboards", "Gantt Charts",
  "Time Tracking", "Automations", "Integrations",
];
const compare = [
  "vs Atlassian", "vs Microsoft Teams", "vs Asana", "vs ServiceNow", "vs Monday",
  "vs Slack", "vs Smartsheet", "vs Wrike", "vs Salesforce", "vs Notion",
  "vs Airtable", "Brain² vs ChatGPT",
];
const company = [
  "About Us", "Careers", "customers", "Partners", "Affiliates",
  "Events", "Reviews", "Press", "Brand", "Research",
];
const download = ["iOS & Android", "Mac & Windows", "Brain MAX"];
const help = [
  "Help Center", "Contact Sales", "Get a Demo", "Import", "Templates",
  "Community", "ClickUp University", "Webinars", "Blog", "What's New", "Developer API",
];

/* mobile accordion order */
const accordion = [
  { title: "Brain²", items: brain },
  { title: "Agents", items: agents },
  { title: "Product", items: product },
  { title: "Compare", items: compare },
  { title: "Company", items: company },
  { title: "Download", items: download },
  { title: "Help", items: help },
];


const Links = ({ items }) => (
  <ul className="cuf-list">
    {items.map((t) => (
      <li key={t}><a href="#" className="cuf-link ">{t}</a></li>
    ))}
  </ul>
);

const Group = ({ title, items }) => (
  <div className="cuf-group">
    <h3 className="cuf-head">{title}</h3>
    <Links items={items} />
  </div>
);
const Groups = ({ title, items }) => (
  <div className="">
    <h3 className="cuf-head">{title}</h3>
    <Links items={items} />
  </div>
);

const Chevron = () => (
  <svg className="cuf-acc-chev" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.5 6l4.5 4.5L12.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const Logo = () => (
  <img src="/icons/clickup-logo.png" className="cuf-logo" aria-label="ClickUp">
    
  </img>
);


const Social = ({ label, children }) => (
  <a href="#" aria-label={label}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{children}</svg>
  </a>
);

const socials = (
  <div className="cuf-social">
    <Social label="LinkedIn">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8.3 17H6V9.8h2.3V17zM7.150 8.8a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6zM18 17h-2.3v-3.5c0-.9-.3-1.5-1.1-1.5-.6 0-1 .4-1.2.8-.1.1-.1.4-.1.6V17H11V9.8h2.3v1c.3-.5.9-1.2 2.1-1.2 1.5 0 2.6 1 2.6 3.1V17z" />
    </Social>
    <Social label="Facebook">
      <path d="M12 2a10 10 0 00-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0012 2z" />
    </Social>
    <Social label="Instagram">
      <path fillRule="evenodd" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 1.8A3.2 3.2 0 003.8 7v10A3.2 3.2 0 007 20.2h10a3.2 3.2 0 003.2-3.2V7A3.2 3.2 0 0017 3.8H7zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zM17.3 5.7a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </Social>
    <Social label="X">
      <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5z" />
    </Social>
  </div>
);


const ring = "#9a9ca2";
const badges = [
  {
    l1: "SOC 2", l2: "Certified",
    icon: (
    <img src="/icons/footer/cert-soc2-badge.svg" alt="" className="h-[26px] w-[26px]"/>
    ),
  },
  {
    l1: "ISO 27001", l2: "Certified",
    icon: (
    <img src="/icons/footer/schellman_iso27001.png" alt="" className="h-[26px] w-[45px]"/>
    ),
  },
  {
    l1: "GDPR", l2: "Compliant",
    icon: (
    <img src="/icons/footer/cert-gdpr-badge.svg" alt="" className="h-[26px] w-[26px]"/>
    ),
  },
  {
    l1: "HIPAA", l2: "Compliant",
    icon: (
    <img src="/icons/footer/cert-hipaa-badge.svg" alt="" className="h-[26px] w-[26px]"/>
    ),
  },
];

export default function Footer() {
  const [open, setOpen] = useState(null);

  return (
    <footer className="cuf-footer">
      <div className="cuf-wrap">
        <div className="cuff-logos">
        <Logo />
        </div>


        <div className="cuf-cols">
          <div>
            <Group title="Brain²" items={brain} />
            <Group title="Agents" items={agents} />
          </div>
          <Groups title="Product" items={product} />
          <Groups title="Compare" items={compare} />
          <div>
            <Group title="Company" items={company} />
            <Group title="Download" items={download} />
          </div>
          <Group title="Help" items={help} />
        </div>

        <div className="cuf-acc">
          {accordion.map(({ title, items }) => {
            const isOpen = open === title;
            return (
              <div key={title} className="cuf-acc-item" data-open={isOpen}>
                <button
                  type="button"
                  className="cuf-acc-btn"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : title)}
                >
                  {title}
                  <Chevron />
                </button>
                <div className="cuf-acc-panel">
                  <div className="cuf-acc-inner"><Links items={items} /></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cuf-mid">
          {socials}
          <div className="cuf-badges">
            {badges.map((b) => (
              <div key={b.l1} className="cuf-badge">
                {b.icon}
                <span>{b.l1}<br />{b.l2}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cuf-bottom-border">
        <div className="cuf-bottom">
          <span className="cuf-copy">© 2026 ClickUp</span>
          <div className="cuf-legal">
            <a href="#">Status</a>
            <a href="#">Security</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#" className="cuf-cookie">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
