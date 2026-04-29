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
import founderImg from "../../public/maestro.png";

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
        className="object-cover opacity-60 object-[70%_50%]"
      />

      {/* Light control overlays (gradient + vignette) */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 md:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right,
              rgba(0,0,0,0.00),
              rgba(0,0,0,0.40),
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
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs uppercase tracking-widest text-zinc-200/90">
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
            <span className="hidden sm:inline text-white/15">|</span>
            <span>
              <a
                href="https://www.instagram.com/101maestro/"
                target="_blank"
                rel="noopener noreferrer"
                className="  hover:text-white transition hover:cursor-pointer text-xs uppercase tracking-widest text-zinc-200/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram inline mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                101maestro
              </a>
            </span>
            <span className=" inline text-white/15">|</span>
            <span>
              <a
                href="tel:+17145612961"
                className="text-xs uppercase tracking-widest text-zinc-200/90 hover:text-white transition"
              >
                Call: (714) 561-2961
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-[#141414] font-body text-zinc-300 overflow-hidden"
    >
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
              <Link
                href="https://www.google.com/maps?q=119+Bradford+Ave+%23C,+Placentia,+CA+92870"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-100 backdrop-blur transition hover:bg-white/15 hover:border-white/30"
              >
                Get Directions
              </Link>

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
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] py-24 font-body"
    >
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
              <BookNowCTA
                className="
              inline-flex items-center justify-center
                  rounded-md border border-white/20
                  bg-white/10 px-6 py-3
                  text-xs font-semibold uppercase tracking-widest text-zinc-100
                  backdrop-blur
                  transition hover:bg-white/15 hover:border-white/30 hober:cursor-pointer
            "
                text="Book with the Owner"
              />

              {/* <a
                href="/contact"
                className="text-xs uppercase tracking-widest text-zinc-200 hover:text-white transition"
              >
                Visit the Shop →
              </a> */}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <Image
                src={founderImg}
                alt="Founder of Park Side Barbershop"
                fill
                className="object-cover opacity-90 object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

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
