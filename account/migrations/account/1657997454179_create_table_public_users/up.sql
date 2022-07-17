CREATE TABLE "public"."users" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" bpchar NOT NULL, "email" bpchar NOT NULL, PRIMARY KEY ("id") , UNIQUE ("email"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
