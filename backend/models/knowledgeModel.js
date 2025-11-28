import mongoose from "mongoose";

const knowledgeSchema = new mongoose.Schema({
  categories: [
    {
      name: { type: String, required: true },
      links: [
        {
          url: { type: String, required: true },
          description: { type: String, default: "A tailored solution showcasing our expertise in this category." },
          previewImage: { type: String } // URL to the preview image
        }
      ]
    }
  ]
}, { timestamps: true });

const Knowledge = mongoose.model("Knowledge", knowledgeSchema);

export default Knowledge;