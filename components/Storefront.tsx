"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { formatPrice, products } from "@/lib/products";
import { BRAND_NAME, makeWhatsAppOrderUrl } from "@/lib/store-config";

export default function Storefront() {
  function orderMessage(productName: string, size: string, weight: string, price: number) {
    return `Olá! Vim pelo site ${BRAND_NAME} e gostaria de pedir a vela ${productName}, tamanho ${size} (${weight}), no valor de ${formatPrice(price)}. Pode confirmar disponibilidade, frete e formas de pagamento?`;
  }

  const generalMessage = `Olá! Vim pelo site ${BRAND_NAME} e gostaria de conhecer as velas aromáticas disponíveis.`;

  return (
    <>
      <header className="site-header">
        <a className="brand-logo-link" href="#inicio" aria-label={`${BRAND_NAME} — início`}><img className="brand-logo" src="/images/aromar-logo.png" alt="Aromar Velas Aromáticas" /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#conceito">Manifesto</a><a href="#colecao">Coleção</a><a href="#ritual">O ritual</a>
        </nav>
        <a className="header-whatsapp" href={makeWhatsAppOrderUrl(generalMessage)} target="_blank" rel="noreferrer">
          <MessageCircle size={16} strokeWidth={1.7} /><span>Fale conosco</span><ArrowUpRight size={14}/>
        </a>
      </header>

      <section className="collection" id="colecao">
        <div className="section-topline" data-reveal><p className="eyebrow">A COLEÇÃO INICIAL</p><span>01 — 03 / FRAGRÂNCIAS</span></div>
        <div className="collection-heading" data-reveal><h2>Encontre seu<br /><em>ritual.</em></h2><p>Pequenos objetos. Grandes mudanças de atmosfera.</p></div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.id} data-reveal>
              <div className={`product-art product-art-${product.color}`}>
                {product.image ? <img className="product-photo" src={product.image} alt={`Velas artesanais Aromar — referência visual para ${product.name}`} /> : null}
                <span className="product-tag">{product.scent.toUpperCase()}</span>
                {!product.image && <div className={`candle candle-card candle-${product.color}`} aria-hidden="true">
                  <div className="candle-wax"><span className="wick" /><span className="flame" /></div>
                  <div className="candle-label"><span>{BRAND_NAME.toUpperCase()}</span><strong>{index === 0 ? "01 / ÂMBAR" : "02 / NÉVOA"}</strong><small>AROMATIC CANDLE</small></div>
                  <div className="glass-glint" />
                </div>}
                <span className="art-caption">{`AROMAR / 0${index + 1}`}</span>
              </div>
              <div className="product-info">
                <div><p className="product-kicker">{product.scent}</p><h3>{product.name}</h3><p className="product-subtitle">{product.subtitle}</p></div>
                <span className="product-price">A partir de {formatPrice(Math.min(...product.sizes.map((size) => size.price)))}</span>
              </div>
              <div className="product-sizes">{product.sizes.map((size) => (
                <a className="order-button" key={size.size} href={makeWhatsAppOrderUrl(orderMessage(product.name, size.size, size.weight, size.price))} target="_blank" rel="noreferrer">
                  <span>{size.size} · {size.weight} — {formatPrice(size.price)}</span>
                  <MessageCircle size={15} />
                </a>
              ))}</div>
            </article>
          ))}
        </div>
        <p className="provisional-note">Escolha o tamanho para enviar seu pedido pelo WhatsApp. Frete, disponibilidade e pagamento são confirmados diretamente com a Aromar.</p>
      </section>

      <section className="ritual" id="ritual">
        <div className="ritual-copy" data-reveal><p className="eyebrow">UM GESTO SIMPLES</p><h2>Acenda.<br />Respire.<br /><em>Permaneça.</em></h2><p>Reserve alguns minutos. Diminua as luzes e deixe o ambiente mudar no seu próprio ritmo.</p><a href={makeWhatsAppOrderUrl(generalMessage)} className="text-link" target="_blank" rel="noreferrer">Tire suas dúvidas <span aria-hidden="true">→</span></a></div>
        <div className="ritual-light" aria-hidden="true"><div className="ritual-flame" /><div className="ritual-candle" /></div>
      </section>

      <footer className="site-footer">
        <a className="brand-logo-link footer-logo-link" href="#inicio" aria-label={`${BRAND_NAME} — início`}><img className="brand-logo" src="/images/aromar-logo.png" alt="Aromar Velas Aromáticas" /></a><p>Objetos para sentir. Momentos para guardar.</p>
        <div><a href="#colecao">Coleção</a><a href={makeWhatsAppOrderUrl(generalMessage)} target="_blank" rel="noreferrer">WhatsApp</a><a href="#inicio">Voltar ao topo ↑</a></div>
        <small>© {new Date().getFullYear()} {BRAND_NAME}. Velas aromáticas para transformar pequenos momentos em rituais.</small>
      </footer>
    </>
  );
}
