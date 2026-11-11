"use client";


const BADGES = {
  pm: { src: "/images/g2/software.webp", alt: "G2 Best Software 2026 Project Management Products" },
  agentic: { src: "/images/g2/software.webp", alt: "G2 Best Software 2026 Agentic AI Products" },
  ai: { src: "/images/g2/software.webp", alt: "G2 Best Software 2026 AI Products" },
  software: { src: "/images/g2/software.webp", alt: "G2 Best Software 2026 Software" },
  global: { src: "/images/g2/software.webp", alt: "G2 Best Software 2026 Global Software Companies" },
  cms: { src: "/images/g2/cms.webp", alt: "G2 Best Software 2026 Content Management Systems (CMS)" },
  dev: { src: "/images/g2/cms.webp", alt: "G2 Best Software 2026 Development Products" },
  hr: { src: "/images/g2/AiProduct.webp", alt: "G2 Best Software 2026 HR Software Products" },
  it: { src: "/images/g2/AgenticAi.webp", alt: "G2 Best Software 2026 IT Management Products" },
  momentum: { src: "/images/g2/pmp.webp", alt: "G2 Winter 2026 Momentum Leader" },
  leader: { src: "/images/g2/dp.webp", alt: "G2 Winter 2026 Leader" },
  hp: { src: "/images/g2/cms.webp", alt: "G2 Winter 2026 High Performer Enterprise" },
};


const ROWS = [
  { shift: false, desktopOnly: true, items: ["momentum", "leader", "hp", "momentum", "leader", "hp", "momentum", "leader"] },
  { shift: true, items: ["pm", "agentic", "ai", "software", "pm", "agentic", "ai", "software", "pm"] },
  { shift: false, items: ["global", "cms", "dev", "hr", "global", "cms", "dev", "hr"] },
  { shift: true, items: ["leader", "it", "momentum", "leader", "hp", "it", "momentum", "leader", "hp"] },
  { shift: false, desktopOnly: true, items: ["momentum", "leader", "hp", "momentum", "leader", "hp", "momentum", "leader"] },
];

const TOTAL_DOTS = 500; 
const FILLED_DOTS = 426; 

const Node = ({ className = "" }) => <i className={`ck-node ${className}`} />;

export default function G2Stats() {
  return (
    <section className="w-full bg-[var(--ck-white)] px-5 py-16 md:px-10 lg:px-0 lg:py-20">
      <div className="relative mx-auto max-w-[1080px] border border-[var(--ck-line)] lg:border-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="relative order-1 h-[322px] overflow-hidden border-b border-[var(--ck-line)] lg:order-2 lg:h-auto lg:border-0 lg:border-l">
            <div className="ck-fade absolute inset-0 flex flex-col justify-center gap-3">
              {ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`w-max shrink-0 gap-3 ${row.desktopOnly ? "hidden lg:flex" : "flex"} ${
                    row.shift ? "-ml-[47px]" : ""
                  }`}
                >
                  {row.items.map((key, j) => (
                    <img
                      key={`${key}-${j}`}
                      src={BADGES[key].src}
                      alt={BADGES[key].alt}
                      width={82}
                      height={94}
                      draggable={false}
                      className="h-auto w-[82px] shrink-0"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          
          <div className="relative order-2 flex flex-col justify-center border-b border-[var(--ck-line)] px-6 py-10 lg:order-1 lg:min-h-[440px] lg:border-0 lg:py-12 lg:pl-[88px] lg:pr-12 xl:pl-12">
            <p className="ck-eyebrow">Rated 4.7/5 by 10,000+ users on G2</p>
            <h2 className="ck-heading mt-3.5">
              #1 most referenced company on G2 reports
            </h2>
            <div className="mt-7">
              <a href="#" className="ck-btn">
                Read customer stories
              </a>
            </div>

            
            <span className="ck-hair-x pointer-events-none absolute left-0 top-0 hidden h-px w-[200%] lg:block" />
          </div>

          
          <div className="relative order-3 flex flex-col items-center justify-center border-b border-[var(--ck-line)] px-6 py-12 lg:min-h-[605px] lg:border-0">
            <div className="ck-dots" aria-hidden="true">
              {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
                <span key={i} className={`ck-dot ${i < FILLED_DOTS ? "is-on" : ""}`} />
              ))}
            </div>
            <p className="ck-caption mt-6 text-center">
              Fortune 500 companies
              <br />
              that use ClickUp
            </p>

            
            <span className="ck-hair-x pointer-events-none absolute left-0 top-0 hidden h-px w-[200%] lg:block" />
            <span className="ck-hair-x pointer-events-none absolute bottom-0 left-0 hidden h-px w-[200%] lg:block" />
          </div>

          
          <div className="relative order-4 flex min-h-[350px] flex-col justify-between px-6 py-10 lg:min-h-[605px] lg:border-l lg:border-[var(--ck-line)] lg:px-12 lg:py-12">
            <div>
              <p className="ck-eyebrow">Convergence powerhouse</p>
              <h2 className="ck-heading mt-3.5">Powering businesses of all sizes</h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-1 lg:gap-y-4">
              <div>
                <div className="ck-stat-num">85%</div>
                <div className="ck-stat-label mt-1">of Fortune 500 companies</div>
              </div>
              <div>
                <div className="ck-stat-num">3M+</div>
                <div className="ck-stat-label mt-1">tasks automated by Agents</div>
              </div>
            </div>

            
            <Node className="left-0 top-0 hidden lg:block" />
          </div>
        </div>

       
        <Node className="left-0 top-0 lg:hidden" />
        <Node className="left-full top-0 lg:hidden" />
        <Node className="left-0 top-full lg:hidden" />
        <Node className="left-full top-full lg:hidden" />
      </div>
    </section>
  );
}
