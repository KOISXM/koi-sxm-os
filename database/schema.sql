create table profiles(id uuid primary key,email text);
create table fish(id uuid primary key default gen_random_uuid(),fish_code text unique,name text,variety text,size_cm int,price numeric,status text default 'available');
create table customers(id uuid primary key default gen_random_uuid(),name text,email text);
create table events(id uuid primary key default gen_random_uuid(),event_type text,payload jsonb,created_at timestamptz default now());