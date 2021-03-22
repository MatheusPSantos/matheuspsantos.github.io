export default {
  cms_manual_init: true,
  backend: {
    name: 'git-gateway',
    repo: 'matheuspsantos/matheuspsantos.github.io',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'blog',
      label: 'Blog',
      folder: '_posts/blog',
      files: [
        {
          label: 'Blog',
          name: 'blog',
          file: 'content/pages/home.md',
          fields: [
            {
              label: "Layout", name: "layout",
              widget: "hidden",
              default: "blog"
            },
            {
              label: "Title",
              name: "title",
              widget: "string"
            },
            {
              label: "Publish Date",
              name: "date",
              widget: "datetime"
            },
            {
              label: "Featured Image",
              name: "thumbnail",
              widget: "image"
            },
            {
              label: "Rating (scale of 1-5)",
              name: "rating",
              widget: "number"
            },
            {
              label: "Body",
              name: "body",
              widget: "markdown"
            }
          ],
        },
      ],
    },
  ],
};