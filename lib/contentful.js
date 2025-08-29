import { createClient } from "contentful";

const space = "";
const accessToken = "";
const environment = "";

export const client = createClient({
  space,
  accessToken,
  environment,
  host: "cdn.contentful.com",
});

export const getEntry = async (slug, contentType) => {
  try {
    const entry = await client.getEntries({
      "fields.slug[match]": slug,
      include: 8,
    });
    return entry;
  } catch (error) {
    console.error("Error fetching entry:", error);
    throw error;
  }
};

export const getEntries = async (contentType) => {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      include: 8,
    });
    return entries;
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
};
