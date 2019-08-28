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
