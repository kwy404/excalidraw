import { MIME_TYPES } from "@excalidraw/common";

import { normalizeFile } from "./blob";

describe("normalizeFile", () => {
  it("should keep the file handle of a re-created file", async () => {
    const handle = { name: "scene.excalidraw" } as FileSystemFileHandle;
    const file = new File(["{}"], "scene.excalidraw");
    file.handle = handle;

    const normalized = await normalizeFile(file);

    expect(normalized.type).toBe(MIME_TYPES.excalidraw);
    expect(normalized.handle).toBe(handle);
  });
});
