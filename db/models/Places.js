import mongoose from "mongoose";
// import "./Review";
const { Schema } = mongoose;

const placesSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: URL, required: true },
  mapURL: { type: URL, required: true },
  description: { type: String, required: true },
});

const Places = mongoose.models.Places || mongoose.model("Place", placesSchema);

export default Places;
