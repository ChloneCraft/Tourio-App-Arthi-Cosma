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
}
