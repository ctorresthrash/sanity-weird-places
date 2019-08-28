export default {
  name: "moment",
  title: "Moment",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100
      }
    },
    {
      name: "media",
      title: "Media",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "location",
      title: "Location",
      type: "string"
    }
  ]
};
