CREATE TABLE "public"."product_category" ("product_id" integer NOT NULL, "category_id" integer NOT NULL, PRIMARY KEY ("category_id","product_id") , FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON UPDATE cascade ON DELETE cascade);
