import { Schema, model } from "mongoose";

const momStateSchema = new Schema({});

export const MomStateModel = model("mom_state", momStateSchema)