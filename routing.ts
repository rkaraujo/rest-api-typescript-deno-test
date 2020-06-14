import { Router } from "https://deno.land/x/oak/mod.ts";

import getPlaylistDetails from './handlers/getPlaylistDetails.ts';
import createPlaylist from "./handlers/createPlaylist.ts";
import deletePlaylist from "./handlers/deletePlaylist.ts";
import addUrlToPlaylist from "./handlers/addUrlToPlaylist.ts";
import removeUrlFromPlaylist from "./handlers/removeUrlFromPlaylist.ts";

const router = new Router();

router
  .get("/v1/playlists/:id", getPlaylistDetails)
  .post("/v1/playlists", createPlaylist)
  .delete("/v1/playlists/:id", deletePlaylist)
  .post("/v1/playlists/:id/url", addUrlToPlaylist)
  .delete("/v1/playlists/:id/url", removeUrlFromPlaylist);

export default router;
