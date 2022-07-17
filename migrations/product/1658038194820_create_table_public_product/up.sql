CREATE TABLE "public"."product" ("id" serial NOT NULL, "name" bpchar NOT NULL, "quantity" integer NOT NULL, "price" float8 NOT NULL, "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("name"), CONSTRAINT "quantity_ge_zero" CHECK (quantity >= 0), CONSTRAINT "price_ge_zero" CHECK (price >= 0));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_product_updated_at"
BEFORE UPDATE ON "public"."product"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_product_updated_at" ON "public"."product" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
