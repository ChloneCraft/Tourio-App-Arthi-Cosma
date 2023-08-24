import Places from "../../../../db/models/Places";
import dbConnect from "../../../../db/connect";
import { useRouter } from "next/router";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const places = await Places.findById(id);
    return response.status(200).json(places);

  } else if (request.method === "PATCH") {
    await Places.findByIdAndUpdate(id, {
      $set: request.body,
    });
    return response.status(200).json("updated successfully");

  }
  if (request.method === "DELETE") {
    const placeToDelete = await Places.findByIdAndDelete(id);

    response.status(200).json(placeToDelete);

  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
