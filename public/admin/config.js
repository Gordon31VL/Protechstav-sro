import "decap-cms-app";
import { init } from "decap-cms-core";

const config = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  media_folder: "public/uploads",
  public_folder: "/uploads",
  collections: [
    {
      name: "header",
      label: "Header",
      files: [
        {
          file: "src/content/header.json",
          label: "Header Content",
          name: "header",
          fields: [
            {
              label: "Main Page Link Text",
              name: "mainPageLinkText",
              widget: "string",
            },
          ],
        },
      ],
    },
  ],
};

init({ config });
