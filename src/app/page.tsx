import Image from "next/image";
import watertower from "../../public/placentia_water_tower.png";
import Link from "next/link";
import { ScissorsIcon } from "@/components/icons/Scissors";
import { RazorIcon } from "@/components/icons/Razor";
import { BeardIcon } from "@/components/icons/Beard";
import { KidsIcon } from "@/components/icons/Kids";
import exteriorImg from "../../public/barbershop-outside.jpg";
import { LocationPin } from "@/components/icons/LocationPin";
import BookNowCTA from "@/components/BookNowCTA";

function AboveTheFold() {
  return (
    <section
      className="relative w-full min-h-[80vh] 
    lg:max-h-50
    overflow-hidden"
    >
      {/* Background image */}
      <Image
        src={watertower}
        alt="Water Tower"
        fill
        priority
        className="object-cover opacity-90"
      />

      {/* Light control overlays (gradient + vignette) */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right,
              rgba(0,0,0,0.88),
              rgba(0,0,0,0.60),
              rgba(0,0,0,0.25)
            ),
            radial-gradient(ellipse at center,
              rgba(0,0,0,0) 42%,
              rgba(0,0,0,0.65) 100%
            )
          `,
        }}
      />

      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.06]"
        style={{
          backgroundImage: "url(/grain.png)",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-30 min-h-[90vh] max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="max-w-xl -translate-y-8 lg:-translate-y-28 lg:translate-x-28">
          <h1 className="font-hero text-6xl md:text-8xl mb-2 text-zinc-100 drop-shadow-[0_6px_24px_rgba(0,0,0,0.75)]">
            Park Side
          </h1>
          <h2 className="font-hero text-4xl md:text-6xl mb-10 text-zinc-100 drop-shadow-[0_6px_24px_rgba(0,0,0,0.75)]">
            Barbershop
          </h2>

          <BookNowCTA
            className="
              group relative inline-flex items-center gap-2
              rounded-md border border-white/40
              bg-linear-to-b from-zinc-200 to-zinc-400
              px-8 py-4
              text-sm font-semibold uppercase tracking-widest text-black
              shadow-[0_6px_20px_rgba(0,0,0,0.4)]
              transition-all duration-300
              hover:from-white hover:to-zinc-300
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
              active:translate-y-px
              font-body
              hover:cursor-pointer
            "
            text="Book Now"
          />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-black/80 font-body">
      {/* optional grain (keeps continuity) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(/grain.png)",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-3 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-zinc-200/90">
            <span className="flex items-center gap-2">
              <span className="text-zinc-100">★</span> 4.8 Google Reviews
            </span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span>Walk-ins Welcome</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span>Open Mon-Sun</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span>
              <Link
                href="https://www.google.com/maps?q=119+Bradford+Ave+%23C,+Placentia,+CA+92870"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition gap-1"
              >
                <LocationPin className="h-4 w-4 text-zinc-200/80" />
                <span>119 Bradford Ave #C, Placentia, CA 92870</span>
              </Link>
            </span>
          </div>

          <a
            href="tel:+17145612961"
            className="text-xs uppercase tracking-widest text-zinc-200/90 hover:text-white transition"
          >
            Call: (714) 561-2961
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative py-24 bg-[#141414] font-body text-zinc-300 overflow-hidden">
      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(/grain.png)",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-semibold tracking-wide text-zinc-100">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Haircuts",
              desc: "Classic and modern haircuts tailored to your style.",
              Icon: ScissorsIcon,
            },
            {
              title: "Shaves",
              desc: "Traditional hot towel shaves for a smooth finish.",
              Icon: RazorIcon,
            },
            {
              title: "Beard Trims",
              desc: "Precision beard trims for a clean, polished look.",
              Icon: BeardIcon,
            },
            {
              title: "Kids’ Cuts",
              desc: "Fun, comfortable haircuts for children of all ages.",
              Icon: KidsIcon,
            },
          ].map((service) => {
            const Icon = service.Icon;
            return (
              <div
                key={service.title}
                className="
                  rounded-lg
                  border border-white/10
                  bg-black/60
                  p-6
                  transition
                  hover:border-white/20
                "
              >
                {/* Icon */}
                <Icon className="mb-4 h-6 w-6 text-zinc-200/80" />

                <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {service.desc}
                </p>

                <BookNowCTA
                  className="mt-6 text-xs uppercase tracking-widest text-zinc-200 hover:text-white hover:cursor-pointer"
                  text="Book →"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Exterior() {
  return (
    <section className="relative bg-[#0e0e0e] py-24 overflow-hidden">
      {/* Subtle grain for continuity */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: "url(/grain.png)",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-16/14 overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <Image
                src={exteriorImg}
                alt="Park Side Barbershop exterior in Placentia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Image overlays for brand consistency */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "url(/grain.png)",
                  backgroundRepeat: "repeat",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-zinc-200/80">
              Visit the Shop
            </p>

            <h2 className="mb-2 text-4xl font-semibold tracking-wide text-zinc-100">
              Right here in Placentia
            </h2>
            <Link
              href="https://www.google.com/maps?q=119+Bradford+Ave+%23C,+Placentia,+CA+92870"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-zinc-300 hover:text-white transition mb-6"
            >
              <LocationPin className="h-5 w-5 text-zinc-200/80" />
              <span>119 Bradford Ave #C, Placentia, CA 92870</span>
            </Link>
            <p className="mb-6 text-base leading-relaxed text-zinc-400">
              Park Side Barbershop is proudly located in the heart of Placentia.
              Easy to find, easy to walk into, and built to feel like a true
              neighborhood shop. Whether you’re a regular or stopping in for the
              first time, the door’s always open.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-100 backdrop-blur transition hover:bg-white/15 hover:border-white/30"
              >
                Get Directions
              </a>

              <span className="text-xs uppercase tracking-widest text-zinc-400">
                Walk-ins Welcome
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-24 font-body">
      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(/grain.png)",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-zinc-200/80">
              Our Story
            </p>

            <h2 className="mb-6 text-4xl font-semibold tracking-wide text-zinc-100">
              Built by a local. Cut with purpose.
            </h2>

            <p className="mb-6 text-base leading-relaxed text-zinc-400">
              Park Side Barbershop was founded by a Placentia local with one
              goal: to create a shop where quality, consistency, and community
              come first. After years behind the chair, working with all styles
              and generations, he opened Park Side to bring a no-nonsense
              barbershop back to the neighborhood.
            </p>

            <p className="text-base leading-relaxed text-zinc-400">
              Every cut is personal. From clean fades to classic styles, the
              focus is on precision, respect for the craft, and making sure
              every client leaves feeling confident. No rush, no gimmicks — just
              solid work from someone who takes pride in where they’re from.
            </p>

            {/* Values */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-black/50 p-4">
                <p className="text-sm font-semibold text-zinc-100">Craft</p>
                <p className="mt-1 text-sm text-zinc-400">Detail-driven cuts</p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/50 p-4">
                <p className="text-sm font-semibold text-zinc-100">Community</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Placentia born & raised
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/50 p-4">
                <p className="text-sm font-semibold text-zinc-100">
                  Consistency
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Same standard, every visit
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="/booking"
                className="
                  inline-flex items-center justify-center
                  rounded-md border border-white/20
                  bg-white/10 px-6 py-3
                  text-xs font-semibold uppercase tracking-widest text-zinc-100
                  backdrop-blur
                  transition hover:bg-white/15 hover:border-white/30
                "
              >
                Book with the Owner
              </a>

              <a
                href="/contact"
                className="text-xs uppercase tracking-widest text-zinc-200 hover:text-white transition"
              >
                Visit the Shop →
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
              {/* <Image
                src={founderImg}
                alt="Founder of Park Side Barbershop"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              /> */}

              {/* Image overlays */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "url(/grain.png)",
                  backgroundRepeat: "repeat",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <AboveTheFold />
      <TrustBar />
      <Exterior />
      <Services />
      <AboutUs />
    </>
  );
}
