CREATE TABLE "public"."users" ("id" serial NOT NULL, "name" bpchar NOT NULL, "email" bpchar NOT NULL, PRIMARY KEY ("id") , UNIQUE ("email"));
