"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollExperience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = root.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        gsap.set("[data-reveal]", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".hero-copy > *",
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.13, ease: "power3.out", delay: 0.15 }
      );

      gsap.to(".hero-product", {
        yPercent: 18,
        rotate: -5,
        scale: 0.82,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-glow", {
        scale: 1.4,
        opacity: 0.32,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".story-heading",
        { y: 55, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".story", start: "top 72%" },
        }
      );

      gsap.fromTo(
        ".story-visual",
        { scale: 0.82, y: 70, autoAlpha: 0.55 },
        {
          scale: 1,
          y: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".story",
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
        gsap.fromTo(
          item,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 88%", once: true },
          }
        );
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">OBJETOS PARA SENTIR</p>
          <h1 id="hero-title">A luz muda<br />tudo.</h1>
          <p className="hero-description">
            Velas aromáticas feitas para transformar pequenos momentos em rituais.
          </p>
          <a className="button button-dark" href="#colecao">Descobrir a coleção <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-product" aria-label="Fotografia das velas aromáticas Aromar">
          <div className="product-shadow" />
          <img className="hero-photo" src="/images/velas-aromar.png" alt="Velas aromáticas Aromar em recipientes de vidro com acabamento dourado" />
        </div>
        <div className="hero-bottom"><span>DESLIZE PARA EXPLORAR</span><span className="scroll-line" /></div>
        <span className="hero-index">01 — 04</span>
      </section>

      <section className="manifesto" id="conceito">
        <p className="eyebrow" data-reveal>MENOS RUÍDO. MAIS PRESENÇA.</p>
        <h2 data-reveal>Um espaço para<br /><em>voltar a si.</em></h2>
        <p className="manifesto-copy" data-reveal>Acenda a chama. Diminua o ritmo. Deixe o aroma fazer parte do ambiente — sem pressa, sem excesso.</p>
      </section>

      <section className="story" aria-labelledby="story-title">
        <div className="story-visual">
          <div className="story-orb" />
          <img className="story-photo" src="/images/velas-aromar.png" alt="Composição das velas aromáticas Aromar" />
          <div className="story-ring ring-one" /><div className="story-ring ring-two" />
        </div>
        <div className="story-heading">
          <p className="eyebrow">DESIGN QUE SE SENTE</p>
          <h2 id="story-title">Presença<br />em cada<br /><em>detalhe.</em></h2>
          <p>Uma chama delicada. Uma luz acolhedora. Uma peça que encontra seu lugar no espaço — e no seu tempo.</p>
          <a className="text-link" href="#colecao">Conheça as velas <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="notes-section">
        <div className="notes-intro" data-reveal>
          <p className="eyebrow">UMA EXPERIÊNCIA EM CAMADAS</p>
          <h2>O aroma também<br /><em>tem textura.</em></h2>
        </div>
        <div className="notes-grid">
          <article data-reveal><span className="note-number">01</span><div className="note-mark mark-amber" /><h3>Notas quentes</h3><p>Profundidade e conforto para desacelerar o ambiente.</p></article>
          <article data-reveal><span className="note-number">02</span><div className="note-mark mark-air" /><h3>Notas suaves</h3><p>Uma sensação limpa, leve e equilibrada no espaço.</p></article>
          <article data-reveal><span className="note-number">03</span><div className="note-mark mark-wood" /><h3>Notas amadeiradas</h3><p>Presença sutil, com uma assinatura sensorial marcante.</p></article>
        </div>
        <p className="fine-print">Descrições conceituais. Ajustar às fragrâncias e aos ingredientes reais dos produtos.</p>
      </section>
    </main>
  );
}
