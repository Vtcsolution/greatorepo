import Knowledge from "../models/knowledgeModel.js";

// 🟢 Get all categories
export const getKnowledge = async (req, res) => {
  try {
    let knowledge = await Knowledge.findOne();

    if (!knowledge) {
      knowledge = new Knowledge({ categories: [] });
      await knowledge.save();
    }

    res.json({ success: true, knowledge });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟢 Add or update a category with links and optional image URLs
export const addOrUpdateCategory = async (req, res) => {
  try {
    const { categoryName, links } = req.body;

    if (!categoryName) {
      return res
        .status(400)
        .json({ success: false, message: "Category name is required" });
    }

    let knowledge = await Knowledge.findOne();
    if (!knowledge) {
      knowledge = new Knowledge({ categories: [] });
      await knowledge.save();
    }

    let category = knowledge.categories.find(
      cat => cat.name.toLowerCase() === categoryName.toLowerCase()
    );

    // 🧩 Handle incoming links with url, description, image
    const processedLinks = Array.isArray(links)
      ? links.map(link => ({
          url: link.url,
          description:
            link.description ||
            "A tailored solution showcasing our expertise in this category.",
          previewImage: link.previewImage || link.imageUrl || null
        }))
      : [];

    if (category) {
      // 🧩 Add new links if not already in the list
      processedLinks.forEach(newLink => {
        const exists = category.links.some(l => l.url === newLink.url);
        if (!exists) category.links.push(newLink);
      });
    } else {
      // 🧩 Create a new category
      category = {
        name: categoryName,
        links: processedLinks
      };
      knowledge.categories.push(category);
    }

    await knowledge.save();

    res.json({ success: true, knowledge });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// 🟢 Optional: Get links by category name
export const getCategoryLinks = async (req, res) => {
  try {
    const { categoryName } = req.params;
    const knowledge = await Knowledge.findOne();

    if (!knowledge) {
      return res.status(404).json({ success: false, message: "Knowledge base not found" });
    }

    const category = knowledge.categories.find(
      cat => cat.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    res.json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
