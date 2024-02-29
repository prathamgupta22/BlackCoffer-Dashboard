import mongoose, { Schema } from "mongoose";

const dummyData = new mongoose.Schema({
  end_year: { type: String },
  intensity: { type: Number, required: true },
  sector: { type: String, required: true },
  topic: { type: String, required: true },
  insight: { type: String, required: true },
  url: { type: String },
  region: { type: String },
  start_year: { type: String },
  impact: { type: String },
  added: { type: Date, default: Date.now },
  published: { type: Date, required: true },
  country: { type: String },
  relevance: { type: Number, required: true },
  pestle: { type: String, required: true },
  source: { type: String, required: true },
  title: { type: String, required: true },
  likelihood: { type: Number, required: true },
});

export const Data = new mongoose.model("Data", dummyData);
