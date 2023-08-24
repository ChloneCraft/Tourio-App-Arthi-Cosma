import Places from "../../../../db/models/Places";
import dbConnect from "../../../../db/connect";
export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  await dbConnect();

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
