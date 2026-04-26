-- =============================================================
--  CBD Goblin — Supabase Schema
--  Run this in Supabase SQL Editor (project > SQL Editor > New query)
--  Docs: https://supabase.com/docs
-- =============================================================

-- Enable UUID extension (available by default on Supabase)
create extension if not exists "uuid-ossp";

-- =============================================================
-- 1. PRODUCTS
--    Central catalog — will replace src/data/products.ts
-- =============================================================
create table if not exists products (
  id              uuid primary key default uuid_generate_v4(),
  slug            text not null unique,
  name            text not null,
  short_desc      text,
  description     text,
  price           numeric(8, 2) not null,
  image_url       text,
  category        text not null,          -- 'oleos' | 'cosmeticos' | 'pomadas' | 'suplementos' | 'flores' | 'hash'
  concentration   text,
  volume          text,
  weight          text,
  cbd_content     text,
  thc_content     text,
  origin          text,
  is_hhc          boolean default false,
  featured        boolean default false,
  stock           integer not null default 0,
  tags            text[] default '{}',
  active          boolean default true,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger products_updated_at
  before update on products
  for each row execute procedure update_updated_at();

-- =============================================================
-- 2. ACCESSORIES
--    Harm-reduction accessories — will replace src/data/accessories.ts
-- =============================================================
create table if not exists accessories (
  id          uuid primary key default uuid_generate_v4(),
  slug        text not null unique,
  name        text not null,
  short_desc  text,
  description text,
  price       numeric(8, 2) not null,
  image_url   text,
  type        text not null,    -- 'bong' | 'vaporizer' | 'pipe' | 'tip' | 'grinder' | 'rolling'
  material    text,
  featured    boolean default false,
  tags        text[] default '{}',
  active      boolean default true,
  created_at  timestamptz default now()
);

-- =============================================================
-- 3. ORDERS
--    Created after successful Stripe payment (via webhook)
-- =============================================================
create table if not exists orders (
  id                  uuid primary key default uuid_generate_v4(),
  stripe_session_id   text unique not null,
  stripe_payment_id   text,
  customer_email      text,
  customer_name       text,
  shipping_address    jsonb,
  line_items          jsonb not null,        -- [{ product_id, name, qty, unit_price }]
  subtotal            numeric(8, 2),
  shipping            numeric(8, 2) default 0,
  total               numeric(8, 2) not null,
  currency            char(3) default 'EUR',
  status              text default 'pending',   -- 'pending' | 'paid' | 'shipped' | 'delivered' | 'refunded'
  notes               text,
  created_at          timestamptz default now(),
  updated_at          timestamptz default now()
);

create trigger orders_updated_at
  before update on orders
  for each row execute procedure update_updated_at();

-- =============================================================
-- 4. NEWSLETTER SUBSCRIBERS
--    Collected via newsletter form on homepage
-- =============================================================
create table if not exists newsletter_subscribers (
  id              uuid primary key default uuid_generate_v4(),
  email           text unique not null,
  confirmed       boolean default false,
  confirm_token   text,
  subscribed_at   timestamptz default now(),
  unsubscribed_at timestamptz,
  source          text default 'homepage'   -- 'homepage' | 'checkout' | 'modal'
);

-- =============================================================
-- 5. TESTIMONIALS
--    Managed via Supabase dashboard — rendered on homepage
-- =============================================================
create table if not exists testimonials (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null,
  location    text,
  product     text,
  rating      smallint not null check (rating between 1 and 5),
  condition   text,
  body        text not null,
  avatar_url  text,
  approved    boolean default false,   -- only show approved testimonials
  created_at  timestamptz default now()
);

-- =============================================================
-- 6. ROW LEVEL SECURITY (RLS)
-- =============================================================

-- Products: public read, only authenticated service role can write
alter table products enable row level security;
create policy "Anyone can view active products"
  on products for select
  using (active = true);

-- Accessories: same
alter table accessories enable row level security;
create policy "Anyone can view active accessories"
  on accessories for select
  using (active = true);

-- Orders: only service role (server-side) can read/write
alter table orders enable row level security;
-- No public policy — only accessible via service_role key (server-side)

-- Newsletter: insert from client, read only from service role
alter table newsletter_subscribers enable row level security;
create policy "Anyone can subscribe"
  on newsletter_subscribers for insert
  with check (true);

-- Testimonials: public read of approved only
alter table testimonials enable row level security;
create policy "Anyone can view approved testimonials"
  on testimonials for select
  using (approved = true);

-- =============================================================
-- 7. INDEXES
-- =============================================================
create index if not exists idx_products_category on products (category);
create index if not exists idx_products_featured  on products (featured) where featured = true;
create index if not exists idx_products_slug      on products (slug);
create index if not exists idx_orders_email       on orders (customer_email);
create index if not exists idx_orders_status      on orders (status);
create index if not exists idx_subscribers_email  on newsletter_subscribers (email);

-- =============================================================
-- 8. STORAGE BUCKET (run via Supabase dashboard or API)
-- =============================================================
-- Create bucket: product-images (public)
-- insert into storage.buckets (id, name, public) values ('product-images', 'product-images', true);
