"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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

        <div className="hidden md:flex gap-10 text-[13px] uppercase tracking-[0.25em] text-neutral-700">
          <a href="#">Home</a>
          <a href="#">Collection</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>

      </nav>

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

          <h1 className="text-6xl md:text-[7rem] leading-none font-[family:var(--font-cormorant)]">
            Gifting,
            <br />
            But Make It
            <span className="text-[#C96C4A]"> Beautiful.</span>
          </h1>

          <p className="mt-8 text-lg text-neutral-600 leading-relaxed max-w-xl">
            Customized gift wraps, quirky gift bags, wedding invitations,
            and handcrafted gifting experiences designed to make every moment unforgettable.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4">

            <button className="bg-[#C96C4A] hover:bg-[#B85C38] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              Explore Collection
            </button>

            <button className="border border-[#C96C4A] text-[#C96C4A] hover:bg-[#C96C4A] hover:text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              Customize Order
            </button>

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
      <section id="collection" className="px-8 md:px-16 py-24">

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

      </section>

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
      <section id="gallery" className="px-8 md:px-16 py-24">

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

      </section>

      {/* CTA SECTION */}
      <section id="contact" className="px-8 md:px-16 pb-24">

        <div className="bg-[#C96C4A] rounded-[3rem] px-10 py-20 text-center text-white">

          <p className="uppercase tracking-[0.35em] text-sm mb-5">
            Let’s Create Something Beautiful
          </p>

          <h2 className="text-5xl md:text-6xl font-[family:var(--font-cormorant)]">
            Customize Your Gift Experience
          </h2>

          <button className="mt-10 bg-white text-[#C96C4A] px-8 py-4 rounded-full hover:opacity-90 transition">
            Contact on WhatsApp
          </button>

        </div>

      </section>

    </main>
  );
}