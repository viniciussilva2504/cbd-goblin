<div align="center">

# 🍃 CBD Goblin

**E-commerce fullstack de produtos CBD/HHC — Vila Nova de Gaia, Portugal**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)
[![Stripe](https://img.shields.io/badge/Stripe-Checkout-635bff?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com)
[![Zustand](https://img.shields.io/badge/Zustand-5-orange?style=flat-square)](https://zustand-demo.pmnd.rs)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://cbd-goblin-git-main-vinicius-silvas-projects-6f23ba6d.vercel.app)

[🛍️ Demo ao vivo](https://cbd-goblin-git-main-vinicius-silvas-projects-6f23ba6d.vercel.app) · [📖 Supabase](#supabase-integration) · [🖼 Screenshots](#screenshots)

</div>

---

## Sobre o Projeto

**CBD Goblin** é o e-commerce oficial de uma loja física especializada em produtos CBD, sediada em **Vila d'Este, Vila Nova de Gaia**. O projeto cobre o fluxo completo — catálogo com filtros, carrinho persistente, checkout via Stripe Checkout Session e confirmação de pagamento — implementado com **Next.js 16 App Router**, priorizando Server Components, SEO técnico e performance.

Projeto de portfólio fullstack com integração real de Supabase (schema + RLS), Stripe (server-side pricing, sem preços vindos do cliente) e deploy contínuo no Vercel via GitHub.

### Abordagem Editorial

O conteúdo do site trata o CBD de forma informativa e responsável: referências bibliográficas científicas, testemunhos com contexto terapêutico e uma página de **Redução de Danos** com tabela comparativa de riscos por método de consumo — posicionando acessórios seguros (vaporizadores, filtros, piteiras de vidro) como alternativas ao consumo sem proteção.

---

## Screenshots

> Gerados automaticamente com Playwright via `npm run screenshots` — ver [Script de Screenshots](#script-de-screenshots)

| Homepage (Desktop) | Redução de Danos |
|---|---|
| ![Home](public/screenshots/home-desktop.png) | ![Harm Reduction](public/screenshots/reducao-de-danos-desktop.png) |

| Produtos (Mobile) | Carrinho |
|---|---|
| ![Produtos mobile](public/screenshots/produtos-mobile.png) | ![Carrinho](public/screenshots/carrinho-desktop.png) |

---

## Funcionalidades

- **Catálogo completo** — óleos CBD, cosméticos, pomadas, suplementos, flores CBD e hash CBD/HHC
- **Página Redução de Danos** — tabela comparativa de risco por método, acessórios com descrição educativa
- **Carrinho persistente** — Zustand + `localStorage`, mantém estado entre sessões
- **Checkout Stripe** — sessão criada no servidor (preços nunca vindos do cliente)
- **Testemunhos verificados** — avaliações com foco em uso terapêutico e acompanhamento médico
- **Mascote animado (SVG)** — gnomo azul com parallax 3D ao movimento do rato + float CSS
- **Ticker de marca** — banda animada com palavras-chave da identidade
- **Secção de livros** — referências bibliográficas científicas sobre CBD e cannabis medicinal
- **Newsletter** — captação de email com validação server-side
- **SEO completo** — metadata, Open Graph, Twitter Card, canonical URLs
- **Responsive** — mobile-first, testado em 390px, 768px e 1440px

---

## Stack Técnica

| Camada | Tecnologia | Porquê |
|--------|-----------|--------|
| Framework | **Next.js 16.2 App Router** | RSC, file-based routing, API routes, `next/image` optimization |
| UI | **React 19 + TypeScript 5** | Componentes fortemente tipados |
| Estilo | **Tailwind CSS v4** | Design system com tokens custom via `@theme` |
| Estado | **Zustand 5** | Carrinho client-side com middleware `persist` |
| Pagamentos | **Stripe** | Checkout Session, preços validados no servidor |
| Base de dados | **Supabase** (PostgreSQL) | Produtos, pedidos, newsletter, testemunhos |
| Fonte | **Space Grotesk** | Clean, moderno, identidade alternativa da marca |
| Ícones | **Lucide React** | Consistente, tree-shakeable |
| Deploy | **Vercel** | CI/CD automático via GitHub |

---

## Arquitetura

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage (Server Component)
│   ├── layout.tsx                # Root layout com Navbar + Footer
│   ├── produtos/
│   │   ├── page.tsx              # Catálogo com filtros por categoria
│   │   └── [slug]/page.tsx       # Detalhe do produto
│   ├── carrinho/page.tsx         # Carrinho de compras
│   ├── checkout/
│   │   ├── CheckoutClient.tsx    # Client Component (Stripe)
│   │   └── sucesso/page.tsx      # Pós-pagamento + clear cart
│   ├── reducao-de-danos/         # ✨ Harm reduction + acessórios
│   │   └── page.tsx
│   ├── sobre/page.tsx
│   └── api/checkout/route.ts     # POST — cria sessão Stripe (server-side)
│
├── components/
│   ├── layout/ Navbar.tsx · Footer.tsx
│   └── ui/
│       ├── GoblinMascot.tsx      # ✨ SVG animado com parallax JS
│       ├── ProductCard.tsx       # Card reutilizável para produtos
│       ├── AddToCartButton.tsx
│       ├── Button.tsx
│       └── NewsletterForm.tsx
│
├── data/
│   ├── products.ts               # Catálogo mock → Supabase em produção
│   └── accessories.ts            # ✨ Acessórios harm reduction
│
├── lib/
│   ├── stripe.ts
│   └── supabase/ client.ts · server.ts
│
├── store/cart.ts                 # Zustand store — carrinho persistente
├── types/index.ts                # Product, Accessory, Testimonial, CartItem
└── supabase/schema.sql           # ✨ Schema PostgreSQL completo
```

---

## Supabase Integration

O schema está em `supabase/schema.sql`. Inclui RLS, indexes e triggers de `updated_at`.

| Tabela | Descrição | RLS |
|--------|-----------|-----|
| `products` | Catálogo de produtos | Leitura pública, escrita service role |
| `accessories` | Acessórios harm reduction | Leitura pública, escrita service role |
| `orders` | Pedidos pós-Stripe webhook | Apenas service role |
| `newsletter_subscribers` | Emails da newsletter | Insert público, leitura service role |
| `testimonials` | Testemunhos de clientes | Leitura pública (`approved = true`) |

### Aplicar schema

```bash
# Via Supabase CLI
supabase db push

# Via Dashboard
# Project → SQL Editor → New query → colar supabase/schema.sql
```

### Storage bucket para imagens

```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true);
```

---

## Script de Screenshots

Captura screenshots de todas as páginas em desktop (1440px) e mobile (390px) com Playwright.

```bash
# 1. Instalar Playwright (uma vez)
npm install -D playwright
npx playwright install chromium

# 2. Correr a app
npm run dev

# 3. Capturar (outra terminal)
npm run screenshots

# Para produção:
SCREENSHOT_URL=https://cbd-goblin-git-main-vinicius-silvas-projects-6f23ba6d.vercel.app npm run screenshots
```

Os prints são gravados em `public/screenshots/` + `manifest.json` com timestamp.

---

## Começar

### Pré-requisitos

- Node.js ≥ 20
- Conta Stripe (modo teste para desenvolvimento)
- Projeto Supabase (opcional em dev — dados mock disponíveis)

### Setup local

```bash
# Clonar
git clone https://github.com/viniciussilva2504/cbd-goblin.git
cd cbd-goblin

# Instalar
npm install

# Variáveis de ambiente
cp .env.example .env.local
# Editar .env.local

# Correr
npm run dev
```

### Variáveis de Ambiente

```env
# App
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

> ⚠️ `SUPABASE_SERVICE_ROLE_KEY` é apenas server-side. Nunca expor no cliente.

---

## Scripts

```bash
npm run dev           # Desenvolvimento
npm run build         # Build de produção
npm run start         # Iniciar build de produção
npm run lint          # ESLint
npm run screenshots   # Capturar screenshots automáticos
```

---

## Deploy

Push para `main` → deploy automático no Vercel via integração GitHub.

**Passos pós-deploy:**

1. Adicionar todas as variáveis de ambiente no dashboard do Vercel (ver secção [Variáveis de Ambiente](#variáveis-de-ambiente))
2. Configurar o webhook Stripe apontando para:
   ```
   https://cbd-goblin-git-main-vinicius-silvas-projects-6f23ba6d.vercel.app/api/stripe/webhook
   ```
3. No Stripe Dashboard → Webhooks → selecionar evento `checkout.session.completed`

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/viniciussilva2504/cbd-goblin)

---

## Roadmap

- [x] Scaffold base + pages principais
- [x] Catálogo com filtros por categoria
- [x] Carrinho persistente (Zustand)
- [x] Checkout Stripe (server-side pricing)
- [x] Mascote SVG animado (parallax JS + float CSS)
- [x] Flores CBD e Hash CBD/HHC no catálogo
- [x] Página Redução de Danos com tabela comparativa
- [x] Testemunhos de clientes com rating
- [x] Script de screenshots automático (Playwright)
- [x] Supabase schema documentado com RLS
- [ ] Integrar Supabase em produção (Julho 2026)
- [ ] Webhook Stripe → tabela `orders`
- [ ] Domínio personalizado + lançamento (Julho 2026)
- [ ] Testes E2E com Playwright

---

## Desenvolvido por

**Vinicius Silva** — Desenvolvedor Fullstack  
[Portfolio](https://portfolio-ebon-nine-95.vercel.app) · [GitHub](https://github.com/viniciussilva2504) · [LinkedIn](https://linkedin.com/in/vjsilva2504)

---

> Todos os produtos CBD e HHC cumprem a legislação portuguesa vigente (THC ≤ 0.2%, Decreto-Lei n.º 8/2019).  
> O catálogo atual utiliza dados mock para efeitos de demonstração — integração real com Supabase prevista para Julho 2026.
