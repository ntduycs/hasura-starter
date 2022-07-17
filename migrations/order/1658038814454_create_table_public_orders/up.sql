CREATE TABLE "public"."orders" ("id" serial NOT NULL, "user_id" integer NOT NULL, "total_price" float8 NOT NULL, "status" integer NOT NULL DEFAULT 0, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , CONSTRAINT "total_price_gt_zero" CHECK (total_price > 0));
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
CREATE TRIGGER "set_public_orders_updated_at"
BEFORE UPDATE ON "public"."orders"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_orders_updated_at" ON "public"."orders" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
