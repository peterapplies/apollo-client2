import { useQuery } from "@apollo/client";
import LINK_QUERY from "../graphql/queries/GetAllLinks";

function MakeSlug(length) {
  let slug = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    slug += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return CheckSlug(slug);
}

function CheckSlug(slug) {
  const { loading, error, data } = useQuery(LINK_QUERY);

  if (loading) return "Loading";
  if (error) return `Error! ${error.message}`;

  return data.allLinks.map((link) => {
    if (link.slug === slug) {
      return MakeSlug(4);
    } else {
      return slug;
    }
  });
}

module.exports = MakeSlug;
