'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { fanWall, galleryImages, highlights, storyPhases } from '@/data/content';

export default function TributePage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      void audioRef.current.play().catch(() => setMusicOn(false));
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const heroParticles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, idx) => ({
        id: idx,
        left: `${Math.random() * 100}%`,
        duration: 7 + Math.random() * 8,
        delay: Math.random() * 3
      })),
    []
  );

  return (
    <main className="bg-background text-white">
      <motion.div className="fixed left-0 top-0 z-50 h-1 bg-gold" style={{ scaleX: scrollYProgress, transformOrigin: '0%' }} />
      <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <p className="text-xs tracking-[0.35em] text-gold">VICTOR BONIFACE</p>
          <button onClick={() => setMusicOn((v) => !v)} className="rounded-full border border-gold/60 px-4 py-2 text-xs font-semibold text-gold transition hover:shadow-glow">
            {musicOn ? 'Music: ON' : 'Music: OFF'}
          </button>
        </div>
      </nav>

      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/audio/2022/02/07/audio_57b26545b5.mp3"
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
        >
          <Image
            src="https://source.unsplash.com/2200x1400/?football,athlete,stadium,portrait&sig=77"
            alt="Victor Boniface Hero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-background" />
        <div className="absolute inset-0">
          {heroParticles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute h-1 w-1 rounded-full bg-gold/70"
              style={{ left: p.left, top: '100%' }}
              animate={{ y: ['0vh', '-120vh'], opacity: [0, 0.9, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
            />
          ))}
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-5 pt-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-gold">A Cinematic Tribute</p>
          <h1 className="text-5xl font-black leading-tight md:text-7xl">FROM PAIN TO PURPOSE</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80 md:text-2xl">The story of Victor Boniface</p>
          <a href="#journey" className="mt-10 inline-block rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition hover:scale-105">
            Explore His Journey
          </a>
        </div>
      </section>

      <section id="journey" className="mx-auto max-w-6xl space-y-10 px-5 py-20">
        {storyPhases.map((phase, i) => (
          <motion.article
            key={phase.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glass grid gap-6 rounded-3xl p-5 md:grid-cols-2 md:p-8"
          >
            <div className="relative h-72 overflow-hidden rounded-2xl">
              <Image src={phase.image} alt={phase.title} fill className="object-cover" loading="lazy" />
            </div>
            <div className="my-auto">
              <h2 className="text-3xl font-extrabold text-gold md:text-4xl">{phase.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">{phase.description}</p>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h3 className="mb-8 text-center text-4xl font-black md:text-5xl">Image Gallery</h3>
        <div className="columns-2 gap-4 space-y-4 md:columns-4">
          {galleryImages.map((item) => (
            <button key={item.id} onClick={() => setLightboxImage(item.src)} className="group relative block w-full overflow-hidden rounded-2xl">
              <Image src={item.src} alt={item.alt} width={600} height={800} className="h-auto w-full transition duration-500 group-hover:scale-110" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      <section className="section-bg relative py-20" style={{ backgroundImage: "url('https://source.unsplash.com/2200x1200/?stadium,crowd,night&sig=90')" }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div key={h.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass rounded-2xl p-6 text-center">
              <p className="text-4xl">{h.icon}</p>
              <h4 className="mt-4 text-xl font-bold">{h.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-2">
        <div className="relative h-96 overflow-hidden rounded-3xl">
          <Image src="https://source.unsplash.com/1600x1200/?smile,football,portrait&sig=130" alt="Human side" fill className="object-cover" loading="lazy" />
        </div>
        <div className="my-auto">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Human Side</p>
          <h3 className="mt-3 text-4xl font-black md:text-5xl">More than football</h3>
          <p className="mt-4 text-white/80">Behind the goals is a personality full of laughter, memes, brotherhood, and ordinary moments that make him extraordinary.</p>
        </div>
      </section>

      <section className="section-bg relative py-28" style={{ backgroundImage: "url('https://source.unsplash.com/2200x1200/?community,children,soccer&sig=131')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gold">WHY HE GIVES</p>
          <h3 className="mt-3 text-5xl font-black">Purpose Beyond The Pitch</h3>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/85">He understands struggle because he lived it. Every act of giving is a promise: that no child should carry pain alone, and no dream should die in silence.</p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="text-3xl font-semibold italic text-white/90 md:text-5xl">“Count your blessings, name them one by one...”</p>
        <p className="mt-8 text-2xl font-extrabold text-gold md:text-4xl">He lost so much...<br />But never lost his heart.</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h3 className="mb-8 text-center text-4xl font-black">Fan Wall</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {fanWall.map((message, i) => (
            <motion.div key={message} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-5 text-white/90">
              {message}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-center">
        <Image src="https://source.unsplash.com/2200x1000/?football,lights,night&sig=155" alt="Final section background" fill className="object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-5">
          <h3 className="text-5xl font-black md:text-7xl">WE STAND WITH YOU</h3>
          <p className="mt-4 text-xl text-gold">Come sunshine or rain</p>
        </div>
      </section>

      <AnimatePresence>
        {lightboxImage && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
          >
            <Image src={lightboxImage} alt="Preview" width={1400} height={900} className="max-h-[90vh] w-auto rounded-2xl object-contain" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
