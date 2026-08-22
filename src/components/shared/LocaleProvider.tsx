import { ReactNode } from "react";
import { I18nProvider } from "@/components/shared/I18nProvider";
import enMessages from "@/messages/en.json";

interface Props {
  locale: string;
  children: ReactNode;
}

const messages: Record<string, typeof enMessages> = {
  en: enMessages,
};

export function LocaleProvider({ locale, children }: Props) {
  return (
    <I18nProvider messages={messages[locale] || messages.en} locale={locale}>
      {children}
    </I18nProvider>
  );
}
