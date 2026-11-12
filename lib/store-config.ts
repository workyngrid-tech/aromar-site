/** Configuração comercial da Aromar. WhatsApp em formato internacional, apenas dígitos. */
export const WHATSAPP_NUMBER = "5511974139861";
export const BRAND_NAME = "Aromar";

export function makeWhatsAppOrderUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
