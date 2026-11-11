
const LOGO = "/images/clickuplogo.png";
const DESKTOP_IMG = "/images/enterp/footerdesk.webp";
const PHONE_IMG = "/images/enterp/footermobile.webp";

export default function FooterBanner() {
  return (
    <section className="w-full bg-page">
      <div className="mx-auto w-full max-w-banner">
        
        <div className="relative isolate overflow-hidden rounded-none sm:rounded-banner">
          
          <div
            aria-hidden="true"
            className="hero-bg pointer-events-none absolute inset-0 -z-10"
          />

          <div className="flex flex-col items-center px-gutter-sm pt-top-sm sm:px-gutter-md md:pt-top-md lg:pt-top-lg">
       
            <img
              src={LOGO}
              alt="ClickUp"
              className="size-logo-sm rounded-logo-sm md:size-logo-md lg:size-logo-lg lg:rounded-logo-lg"
            />


            <h1 className="mt-title-sm max-w-headline-xs text-center text-hero-sm font-bold tracking-hero text-on-brand sm:max-w-headline-sm md:mt-title-md md:max-w-headline-md md:text-hero-md lg:max-w-headline-lg lg:text-hero">
              All your work, all your people, all powered by AI
            </h1>


            <a
              href="#"
              className="ctas-hover mt-ctas-sm inline-flex items-center justify-center rounded-btn bg-on-brand px-btn-x py-btn-y text-ctas font-semibold text-ink transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand lg:mt-ctas-lg"
            >
              Get started FREE
            </a>

            <div className="relative mt-mock-gap-sm flex h-mock-sm w-full justify-center overflow-hidden md:h-mock-md lg:mt-mock-gap-lg lg:h-mock-lg">
              
              <div className="relative hidden w-frame-width max-w-frame lg:block">
                <div className="rounded-t-frame border-2 border-b-0 border-ring-soft bg-glass p-frame-pad pb-0 shadow-frame">
                  <img
                    src={DESKTOP_IMG}
                    alt="ClickUp desktop app"
                    className="block h-auto w-full rounded-t-frame-inner"
                  />
                </div>


                <div className="absolute -right-phone-x top-phone-y w-phone">
                  <PhoneFrame />
                </div>
              </div>

              <div className="w-phone lg:hidden">
                <PhoneFrame />
              </div>


              <div
                aria-hidden="true"
                className="fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-fade"
              />
            </div>
          </div>
        </div>


        <p className="px-gutter-sm py-note-y text-left text-note-sm text-footnote md:text-note lg:px-note-x">
          1. Our agreements ensure zero data training &amp; retention on all
          third-party model providers
        </p>
      </div>
    </section>
  );
}


function PhoneFrame() {
  return (
    <div className="rounded-t-phone border-3 border-b-0 border-ring-phone bg-glass-phone p-phone-pad pb-0 shadow-phone">
      <img
        src={PHONE_IMG}
        alt="ClickUp mobile app"
        className="block h-auto w-full rounded-t-phone-inner"
      />
    </div>
  );
}
