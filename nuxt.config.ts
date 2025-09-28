import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ssr: true,

  app: {
    head: {
      title:
        "Графские кухни |  Кухни на заказ недорого в Воронеже | Изготовление кухонь под заказ с высоким качеством",
      meta: [
        {
          name: "description",
          content:
            "Изготовим кухню вашей мечты по индивидуальному проекту! Дешевые цены напрямую от производителя, высокое качество материалов и быстрые сроки. Бесплатный замер и дизайн-проект!",
        },
        {
          name: "keywords",
          content:
            "кухни на заказ Воронеж, недорогие кухни, кухни под заказ дешево, изготовление кухонь, кухни от производителя, кухни с высоким качеством, купить кухни Воронеж",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Графские кухни" },
        {
          property: "og:title",
          content: "Графские кухни | Кухни на заказ недорого в Воронеже",
        },
        {
          property: "og:description",
          content:
            "Изготовим кухню вашей мечты по индивидуальному проекту! Высокое качество, быстрые сроки.",
        },
        { property: "og:image", content: "https://grafckie.ru/og-image.webp" },
        { property: "og:url", content: "https://grafckie.ru" },
      ],
      link: [
        { rel: "canonical", href: "https://grafckie.ru" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      htmlAttrs: { lang: "ru" },
    },
  },

  alias: {
    "@": fileURLToPath(new URL("./app", import.meta.url)),
    "@assets": fileURLToPath(new URL("./app/assets", import.meta.url)),
    "@components": fileURLToPath(new URL("./app/components", import.meta.url)),
    "@stores": fileURLToPath(new URL("./app/stores", import.meta.url)),
    "@pages": fileURLToPath(new URL("./app/pages", import.meta.url)),
  },

  css: ["@assets/styles/style.scss"],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://grafckie.ru",
    },
  },

  modules: ["@nuxtjs/robots", "@pinia/nuxt"],
});
