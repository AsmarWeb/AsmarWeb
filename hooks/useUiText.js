import { useRouter } from "next/router";
import dictionary from "../locales/ui-extra.json";

export default function useUiText() {
  const { locale } = useRouter();
  return (value) => {
    if (typeof value !== "string") return value;
    return dictionary[value]?.[locale === "ar" ? "ar" : "en"] ?? value;
  };
}
