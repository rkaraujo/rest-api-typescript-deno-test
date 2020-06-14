import { deletePlaylist } from "../services/playlists.ts";

export default async (
  { params, response }: { params: { id: string }; response: any },
) => {
  if (!params.id) {
    response.status = 400;
    response.body = { msg: "Id is required" };
    return;
  }

  await deletePlaylist(params.id);

  response.status = 200;
};
