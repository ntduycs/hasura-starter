CREATE TABLE "public"."category" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" bpchar NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
