
import Image from "next/image";
import Link from "next/link";

const classes = [
  {
    title: "The Perfect Pasta",
    category: "Pasta Workshop",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    description: "Discover the joy of fresh pasta and flavorful sauces.",
  },
  {
    title: "Something Sweet",
    category: "Dessert Workshop",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
    description: "Explore baking, desserts, and creative finishing touches.",
  },
  {
    title: "Pizza From Scratch",
    category: "Kitchen Favorites",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
    description: "Make your own pizza, from the dough to the toppings.",
  },
];

const categories = [
  { icon: "♨", name: "Pasta Nights" },
  { icon: "♧", name: "Baking Workshops" },
  { icon: "✳", name: "Sweet Treats" },
  { icon: "◇", name: "Kitchen Favorites" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-espresso">
      {/* Header */}
      <header className="relative z-20 bg-cream">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 md:px-10">
          <Link href="/" className="shrink-0 leading-tight">
            <span className="block text-lg font-black tracking-[-0.055em] md:text-xl">
              THE FLAVOR<span className="text-tomato">.</span>STUDIO
            </span>
            <span className="block text-center text-[8px] font-bold uppercase tracking-[0.35em]">
              Cooking Classes
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-xs font-bold md:flex">
            <Link href="/" className="text-tomato">
              Home
            </Link>
            <Link href="#classes" className="hover:text-tomato">
              Explore Classes
            </Link>
            <Link href="#experience" className="hover:text-tomato">
              The Experience
            </Link>
          </div>

          <Link
            href="#classes"
            className="shrink-0 rounded-full bg-tomato px-5 py-3 text-xs font-bold text-white transition hover:bg-espresso"
          >
            Find Your Class <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </header>

      {/* Cinematic kitchen hero */}
      <section className="flavor-hero relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#38291e] text-white md:min-h-[570px] lg:min-h-[650px]">
        <Image
          src="/images/heroChef.png"
          alt="Danii in a chef outfit standing in a warmly lit cooking studio"
          fill
          priority
          sizes="100vw"
          className="flavor-hero-image object-cover object-center"
        />

        {/* Darkens the text area without hiding the kitchen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/60" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] justify-center px-6 pb-10 pt-80 md:justify-end md:px-12 md:py-20">
          <div className="w-full max-w-[590px] md:w-[53%]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-butter">
              Learn · Cook · Enjoy
            </p>

            <h1 className="text-[clamp(2.6rem,4.1vw,4.5rem)] font-black leading-[1.03] tracking-[-0.065em]">
              GOOD FOOD.
              <br />
              <span className="text-[#F0644C]">GREAT COMPANY.</span>
            </h1>

            <p className="mt-5 max-w-[390px] text-sm leading-relaxed text-white/90 md:text-base">
              From savory favorites to sweet creations, discover
              cooking classes made for learning, creating,
              and enjoying every bite.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href="#classes"
                className="rounded-full bg-tomato px-6 py-3 text-xs font-bold text-white transition hover:bg-[#b82f22]"
              >
                Explore Classes <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#experience"
                className="border-b border-white/70 pb-1 text-xs font-semibold transition hover:text-butter"
              >
                The Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow cooking category strip */}
      <section
        aria-label="Cooking categories"
        className="bg-butter"
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#classes"
              className="flex min-h-20 items-center justify-center gap-3 border-b border-espresso/15 px-3 transition-colors hover:bg-white/25 md:border-b-0 md:border-r"
            >
              <span
                aria-hidden="true"
                className="text-3xl font-light"
              >
                {category.icon}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.08em] sm:text-xs">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Upcoming class previews */}
      <section
        id="classes"
        className="mx-auto max-w-[1440px] scroll-mt-20 px-6 py-16 md:px-12 md:py-20"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-tomato">
              Cooking class previews
            </p>
            <h2 className="text-4xl font-black tracking-[-0.055em] md:text-5xl">
              Find Your Flavor
            </h2>
          </div>

          <span className="rounded-full border border-espresso/30 px-5 py-3 text-xs font-semibold">
            More classes coming soon
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {classes.map((c) => (
            <article
              key={c.title}
              className="food-card overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e6d5c2]">
                <div
                  role="img"
                  aria-label={c.title}
                  className="food-card-image absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${c.image}")`,
                  }}
                />

                <span className="absolute left-4 top-4 rounded-full bg-cream px-4 py-2 text-[10px] font-black uppercase tracking-wide">
                  {c.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black tracking-tight">
                  {c.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-espresso/70">
                  {c.description}
                </p>

                <p className="mt-5 border-t border-espresso/10 pt-4 text-xs font-semibold text-espresso/60">
                  Sample class · Bookings not yet available
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience — no numbered steps */}
      <section
        id="experience"
        className="scroll-mt-20 bg-espresso px-6 py-20 text-cream md:px-12"
      >
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-butter">
            The Experience
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Come Curious. Leave Inspired.
          </h2>

          <div className="mt-12 grid gap-8 border-t border-white/20 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold">Explore Classes</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Discover savory favorites and sweet creations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Reserve Your Seat</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Choose an available class when booking opens.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Get Cooking</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Get ready to learn, experiment, and enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-4 bg-cream px-6 py-8 text-xs md:px-12">
        <span className="font-black">THE FLAVOR.STUDIO</span>
        <span className="text-espresso/60">
          Cooking Class Booking App · Demo Project
        </span>
      </footer>
    </main>
  );
}
