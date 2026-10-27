import { useRouter } from "next/router";
import dictionary from "../locales/ui-extra.json";

export default function LocalizedText({ id }) {
  const { locale } = useRouter();
  const item = dictionary[id];
  if (!item) return id;
  return locale === "ar" ? item.ar : item.en;
}
