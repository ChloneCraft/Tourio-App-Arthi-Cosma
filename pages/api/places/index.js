import Places from "../../../db/models/Places";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Places.find();
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
//   await dbConnect();
//   if (request.method === "GET") {
//     console.log("Places in index", Places);
//     const places = await Places.find();
//     return response.status(200).json(places);
//   } else {
//     console.error("error:", error);
//     return response.status(400).json({ error: error.message });
//   }
// }
//   if (request.method === "POST") {
//     try {
//       const placeData = request.body;
//       const place = new Places(placeData);
//       await place.save();
//       return response.status(201).json({ status: "Place created." });
//     } catch (error) {
//       console.error(error);
//       return response.status(400).json({ error: error.message });
//     }
//   }
// }
