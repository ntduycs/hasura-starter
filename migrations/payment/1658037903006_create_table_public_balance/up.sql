CREATE TABLE "public"."balance" ("id" serial NOT NULL, "user_id" integer NOT NULL, "balance" float8 NOT NULL DEFAULT 0, "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("user_id"), CONSTRAINT "balance_ge_zero" CHECK (balance >= 0));
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
