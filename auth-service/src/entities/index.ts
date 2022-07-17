import Knex from "knex";
import knexInstance from "../config/knex.config";
import { Model } from "objection";

const knexConnection = Knex(knexInstance);

Model.knex(knexConnection);
