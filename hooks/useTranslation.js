import { useRouter } from "next/router";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

const messages = { en, ar };

export default function useTranslation() {
  const router = useRouter();
  const locale = router.locale === "ar" ? "ar" : "en";

  const t = (key) =>
    key.split(".").reduce(
      (value, part) => value?.[part],
      messages[locale]
    ) ?? key;

  return { t, locale, isArabic: locale === "ar" };
}
