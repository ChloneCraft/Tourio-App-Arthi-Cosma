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
    const places = await Places.findById(id);
    return response.status(200).json(places);
  }
  if (request.method === "DELETE") {
    const placeToDelete = await Places.findByIdAndDelete(id);

    response.status(200).json(placeToDelete);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
