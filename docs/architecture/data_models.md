# Data Models (SQL) – Neon

## users
- id uuid primary key default gen_random_uuid()
- email text unique not null
- password_hash text not null
- username text unique not null
- bio text default ''
- avatar_url text
- created_at timestamptz default now()

## chats
- id uuid primary key
- created_at timestamptz default now()
- is_group boolean default false

## chat_members
- chat_id uuid references chats(id) on delete cascade
- user_id uuid references users(id) on delete cascade
- primary key (chat_id, user_id)

## messages
- id uuid primary key
- chat_id uuid references chats(id) on delete cascade
- sender_id uuid references users(id)
- body text not null
- created_at timestamptz default now()

## calls
- id uuid primary key
- caller_id uuid references users(id)
- callee_id uuid references users(id)
- type text not null
- status text not null
- duration_seconds integer default 0
- started_at timestamptz default now()
- ended_at timestamptz

## subscriptions
- id uuid primary key
- user_id uuid references users(id) unique
- plan text not null
- status text not null
- current_period_end timestamptz
- created_at timestamptz default now()

## analytics_events
- id uuid primary key
- user_id uuid references users(id)
- type text not null
- payload jsonb
- created_at timestamptz default now()