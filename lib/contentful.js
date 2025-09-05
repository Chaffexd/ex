import { createClient } from "contentful";

const space = "89jhv7mre7bq";
const accessToken = "2VNdSctY8JI8QnCd7cvftwEI_B8Pu4_awCMF97IbGho";
const environment = "master";

export const client = createClient({
  space,
  accessToken,
  environment,
  host: "preview.contentful.com",
});

export const getEntry = async (slug, contentType) => {
  try {
    const entry = await client.getEntries({
      "fields.slug[match]": slug,
      content_type: contentType,
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
