<script setup>
import AboutUs from "~/components/section/aboutUs/AboutUs.vue";
import AppContacts from "~/components/section/contacts/AppContacts.vue";
import AppJsonLd from "@components/seo/AppJsonLd.vue";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Графские кухни",
  "image": "https://grafckie.ru/og-image.webp",
  "@id": "https://grafckie.ru/about",
  "url": "https://grafckie.ru",
  "telephone": "79952510712",
  "email": "graf.kukh@bk.ru",
  "priceRange": "₽₽",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Московский проспект, 90/1",
    "addressLocality": "Воронеж",
    "postalCode": "394005",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.7176,
    "longitude": 39.1819
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://vk.com/kitchen_kupit",
  ]
};

definePageMeta({
  title: "О компании | Графские кухни – изготовление кухонь на заказ в Воронеже",
  meta: [
    {
      name: "description",
      content:
          "Узнайте больше о компании «Графские кухни» – производителе кухонь на заказ в Воронеже. Высокое качество, доступные цены, собственное производство и индивидуальный подход.",
    },
    {
      name: "keywords",
      content:
          "о компании Графские кухни, производитель кухонь Воронеж, кухни на заказ история, фабрика кухонь Воронеж, качественные кухни недорого",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Графские кухни" },
    {
      property: "og:title",
      content: "О компании | Графские кухни – кухни на заказ в Воронеже",
    },
    {
      property: "og:description",
      content:
          "Информация о компании «Графские кухни». Собственное производство кухонь, гарантия качества и индивидуальный подход.",
    },
    { property: "og:image", content: "https://grafckie.ru/og-image.webp" },
    { property: "og:url", content: "https://grafckie.ru/about" },
  ],
  link: [
    { rel: "canonical", href: "https://grafckie.ru/about" },
  ],
});
</script>

<template>
  <div class="app-about">
    <about-us />
    <app-contacts />

    <!-- подключаем JSON-LD -->
    <app-json-ld :schema="schema" />
  </div>
</template>

<style scoped lang="scss">
.app-about {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding: 0 10px;
}
</style>
