import Places from "../../../../db/models/Places";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const places = await Places.findById(id);
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
