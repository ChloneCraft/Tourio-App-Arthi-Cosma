import Places from "../../../db/models/Places";

export default async function handler(request, response) {
  if (request.method === "GET") {
    try {
      const places = await Places.find();
      return response.status(200).json(places);
    } catch (error) {
      console.error("error:", error);
      return response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "POST") {
    try {
      const placeData = request.body;
      const place = new Places(placeData);
      await place.save();
      return response.status(201).json({ status: "Place created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
