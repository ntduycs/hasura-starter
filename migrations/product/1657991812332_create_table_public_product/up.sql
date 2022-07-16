CREATE TABLE "public"."product" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" bpchar NOT NULL, "quantity" int4 NOT NULL, "price" float8 NOT NULL, PRIMARY KEY ("id") , UNIQUE ("name"), CONSTRAINT "quantity_gt_zero" CHECK (quantity >= 0), CONSTRAINT "price_gt_zero" CHECK (price >= 0));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
