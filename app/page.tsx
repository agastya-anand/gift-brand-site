"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    title: "Quirky Gift Bags",
    image: "/images/Bag1.JPG",
  },
  {
    title: "Luxury Gift Notes",
    image: "/images/card2.PNG",
  },
  {
    title: "Creative Wrapping",
    image: "/images/Wrap4.JPG",
  },
  {
    title: "Premium Packaging",
    image: "/images/Bag3.JPG",
  },
];

const gallery = [
  "/images/Bag4.JPG",
  "/images/Bag5.JPG",
  "/images/Bag6.JPG",
  "/images/card.JPG",
  "/images/Wrap1.JPG",
  "/images/Wrap2.JPG",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="bg-[#F8F5F1] text-[#2A2A2A] relative scroll-smooth">
    <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#E8B8A6] opacity-20 rounded-full blur-3xl"></div>

    <div className="absolute top-[200px] right-[-100px] w-[400px] h-[400px] bg-[#C96C4A] opacity-10 rounded-full blur-3xl"></div>
      {/* NAVBAR */}
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm flex items-center justify-between px-8 md:px-16 pt-4 pb-5 transition-all duration-300">
        <div className="h-[60px] flex items-center">
  <Image
    src="/images/logo Rust orange-01.png"
    alt="Naaranngi Logo"
    width={220}
    height={50}
    className="object-contain"
  />
</div>

        {/* DESKTOP MENU */}
<div className="hidden md:flex gap-10 text-[13px] uppercase tracking-[0.25em] text-neutral-700">

  <a href="#home" className="relative hover:text-[#C96C4A] transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#C96C4A] after:transition-all hover:after:w-full">
    Home
  </a>

  <a href="#collection" className="relative hover:text-[#C96C4A] transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#C96C4A] after:transition-all hover:after:w-full">
    Collection
  </a>

  <a href="#gallery" className="relative hover:text-[#C96C4A] transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#C96C4A] after:transition-all hover:after:w-full">
    Gallery
  </a>

  <a href="#contact" className="relative hover:text-[#C96C4A] transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#C96C4A] after:transition-all hover:after:w-full">
    Contact
  </a>

</div>

{/* MOBILE MENU BUTTON */}
<button
  className="md:hidden flex flex-col gap-1"
  onClick={() => setMenuOpen(!menuOpen)}
>

  <span className="w-6 h-[2px] bg-[#2A2A2A]"></span>
  <span className="w-6 h-[2px] bg-[#2A2A2A]"></span>
  <span className="w-6 h-[2px] bg-[#2A2A2A]"></span>

</button>

      </nav>
    {/* MOBILE DROPDOWN */}
{menuOpen && (
  <div className="md:hidden fixed top-[88px] left-0 w-full bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-8 py-6 flex flex-col gap-6 uppercase tracking-[0.2em] text-sm z-40">

    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#collection" onClick={() => setMenuOpen(false)}>
      Collection
    </a>

    <a href="#gallery" onClick={() => setMenuOpen(false)}>
      Gallery
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

  </div>
)}

      {/* HERO SECTION */}
      <section id="home" className="grid md:grid-cols-2 gap-16 items-start px-8 md:px-16 pt-32 pb-20">

        {/* LEFT CONTENT */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

          <p className="uppercase tracking-[0.35em] text-sm text-[#C96C4A] mb-6">
            Handmade With Love
          </p>

          <h1 className="text-5xl md:text-[7rem] leading-none font-[family:var(--font-cormorant)]">
            Gifting,
            <br />
            But Make It
            <span className="text-[#C96C4A]"> Beautiful.</span>
          </h1>

          <p className="mt-8 text-lg text-neutral-600 leading-relaxed max-w-xl">
            Customized gift wraps, quirky gift bags, wedding invitations,
            and handcrafted gifting experiences designed to make every moment unforgettable.
          </p>

          <div className="group/buttons mt-10 flex flex-col md:flex-row gap-4">

            <button className="bg-[#C96C4A] text-white px-8 py-4 rounded-full transition-all duration-300 border border-[#C96C4A] group-hover/buttons:bg-white group-hover/buttons:text-[#C96C4A] hover:!bg-[#C96C4A] hover:!text-white">
  Explore Collection
</button>

            <a
  href="https://wa.me/919749333358?text=Hi!%20I’d%20love%20to%20place%20a%20customized%20order%20for%20gift%20packaging."
  target="_blank"
  rel="noopener noreferrer"
  className="group border border-[#C96C4A] bg-white text-[#C96C4A] hover:bg-[#C96C4A] hover:text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-block text-center"
>
  Customize Order
</a>

          </div>

        </motion.div>

        {/* RIGHT HERO IMAGE */}
        <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-xl"
>

          <Image
            src="/images/Wrap3.JPG"
            alt="Hero"
            fill
            className="object-cover"
          />

        </motion.div>

      </section>

      {/* FEATURED COLLECTIONS */}
      <motion.section
  id="collection"
  className="px-8 md:px-16 py-24"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  
>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">

  <h2 className="text-4xl md:text-5xl font-[family:var(--font-cormorant)] leading-tight">
    Featured Collections
  </h2>

  <p className="text-[#C96C4A] text-sm md:text-base tracking-wide">
    Crafted for your special occasion
  </p>

</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="group"
            >

              <div className="relative h-[420px] rounded-[2rem] overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                />

              </div>

              <h3 className="mt-5 text-2xl font-[family:var(--font-cormorant)]">
                {product.title}
              </h3>

            </div>
          ))}

        </div>

      </motion.section>

      {/* VIDEO SECTION */}
      <section className="px-8 md:px-16 py-24 bg-[#F3ECE4]">

        <h2 className="text-5xl mb-14 text-center font-[family:var(--font-cormorant)]">
          Wrapping Moments Beautifully
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-[2rem] w-full h-[500px] object-cover"
          >
            <source src="/videos/Wrap1.MP4" type="video/mp4" />
          </video>

          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-[2rem] w-full h-[500px] object-cover"
          >
            <source src="/videos/Wrap2.MP4" type="video/mp4" />
          </video>

        </div>

      </section>

      {/* GALLERY */}
      <motion.section
  id="gallery"
  className="px-8 md:px-16 py-24"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  
>

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.35em] text-sm text-[#C96C4A] mb-4">
            Instagram Aesthetic
          </p>

          <h2 className="text-5xl font-[family:var(--font-cormorant)]">
            A Peek Into Our World
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-[1.5rem] overflow-hidden"
            >

              <Image
                src={image}
                alt="Gallery"
                fill
                className="object-cover hover:scale-110 transition-all duration-700 ease-out"
              />

            </div>
          ))}

        </div>

      </motion.section>

      {/* CTA SECTION */}
      <motion.section
  id="contact"
  className="px-8 md:px-16 pb-24"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  
>

        <div className="bg-[#C96C4A] rounded-[3rem] px-10 py-20 text-center text-white">

          <p className="uppercase tracking-[0.35em] text-sm mb-5">
            Let’s Create Something Beautiful
          </p>

          <h2 className="text-5xl md:text-6xl font-[family:var(--font-cormorant)]">
            Customize Your Gift Experience
          </h2>
         
          <a
  href="https://wa.me/919749333358"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-10 bg-white text-[#C96C4A] px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105"
>
  Contact on WhatsApp
</a>
<p className="mt-6 text-white/80 text-lg">
  Follow our gifting world on Instagram @naaranngi.ndp
</p>
<a

  href="https://instagram.com/naaranngi.ndp"

  target="_blank"

  rel="noopener noreferrer"

  className="inline-flex items-center justify-center mt-6 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-all duration-300"

>

  <svg

    xmlns="http://www.w3.org/2000/svg"

    width="22"

    height="22"

    viewBox="0 0 24 24"

    fill="none"

    stroke="currentColor"

    strokeWidth="2"

    strokeLinecap="round"

    strokeLinejoin="round"

  >

    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>

    <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z"></path>

    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>

  </svg>

</a>

        </div>

      </motion.section>
 {/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/919749333358"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
>
  WhatsApp
</a>
    </main>
  );
}