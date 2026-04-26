<div align="center">

# 🍃 CBD Goblin

**E-commerce fullstack de produtos CBD/HHC — loja física em Vila Nova de Gaia, Portugal**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635bff?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com)
[![Zustand](https://img.shields.io/badge/Zustand-5-orange?style=flat-square)](https://zustand-demo.pmnd.rs)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[🛍️ Demo (em breve)](#) · [📖 Supabase](#supabase-integration) · [🖼 Screenshots](#screenshots)

</div>

---

## Sobre o Projeto

**CBD Goblin** é uma loja especializada em produtos CBD sediada em **Vila d'Este, Vila Nova de Gaia**. Este repositório contém o e-commerce completo — desde a landing page ao checkout com Stripe — desenvolvido com Next.js 16 App Router com foco em SEO, performance e experiência do utilizador.

> Desenvolvido como parte do portfólio técnico de um desenvolvedor fullstack, demonstrando integração end-to-end com Next.js App Router, Supabase, Stripe e deploy no Vercel.

### Posicionamento Editorial

O site aborda o CBD de forma educativa e responsável: secção de livros científicos, testemunhos de utilizadores com acompanhamento médico e uma página de **Redução de Danos** para consumidores que optam por inalação — promovendo acessórios seguros (vaporizadores, bongs, piteiras de vidro) sobre o consumo sem filtro.

---

## Screenshots

> Gerados com `npm run screenshots` — ver [Script de Screenshots](#script-de-screenshots)

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
| Framework | **Next.js 16 App Router** | RSC, file-based routing, API routes, Image optimization |
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

# Para produção/staging:
SCREENSHOT_URL=https://cbd-goblin.vercel.app npm run screenshots
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

Push para `main` → deploy automático no Vercel.

1. Adicionar variáveis de ambiente no dashboard Vercel
2. Configurar webhook Stripe:
   ```
   https://cbd-goblin.vercel.app/api/stripe/webhook
   ```

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

> Todos os produtos CBD e HHC comercializados cumprem a legislação portuguesa vigente (THC ≤ 0.2%).  
> Este e-commerce é um projeto de portfólio — os produtos são ficcionais durante a fase de desenvolvimento.
