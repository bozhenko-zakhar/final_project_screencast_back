import { Schema, model } from "mongoose";

const babyStateSchema = new Schema({});

export const BabyStateModel = model("baby_state", babyStateSchema)