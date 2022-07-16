CREATE TABLE "public"."balance" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" uuid NOT NULL, "balance" float8 NOT NULL, "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , CONSTRAINT "balance_gt_zero" CHECK (balance >= 0));
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
CREATE TRIGGER "set_public_balance_updated_at"
BEFORE UPDATE ON "public"."balance"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_balance_updated_at" ON "public"."balance" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
