import Places from "../../../../db/models/Places";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    try {
      const place = await Places.findById(id);
      return response.status(200).json(place);
    } catch (error) {
      console.error("error:", error);
      return response.status(400).json({ error: error.message });
    }
  }
}
