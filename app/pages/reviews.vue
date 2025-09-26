<script setup>
import TheOrder from "@components/widget/order/TheOrder.vue";
import { useHead } from "#imports";
import OurReviews from "@components/section/ourReviews/OurReviews.vue";
import TheContainer from "@components/shared/container/TheContainer.vue";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Графские кухни",
  image: "https://grafckie.ru/og-image.webp",
  "@id": "https://grafckie.ru",
  url: "https://grafckie.ru",
  telephone: "+79000000000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Московский проспект, 90/1, ТЦ Воронежский рынок, 4 этаж",
    addressLocality: "Воронеж",
    postalCode: "394000",
    addressCountry: "RU",
  },
  review: [
    {
      "@type": "Review",
      author: "Иван Иванов",
      datePublished: "2025-01-15",
      reviewBody:
        "Кухня получилась просто шикарная, все сделано качественно и в срок!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
};

useHead({
  title: "Отзывы о «Графские кухни» – реальные впечатления клиентов Воронеж",
  meta: [
    {
      name: "description",
      content:
        "Ознакомьтесь с отзывами наших клиентов о кухнях «Графские кухни» в Воронеже. Реальные впечатления, качественные кухни и индивидуальный подход.",
    },
    {
      name: "keywords",
      content:
        "отзывы кухонь Воронеж, клиенты Графские кухни, впечатления о кухнях",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Графские кухни" },
    {
      property: "og:title",
      content: "Отзывы о «Графские кухни» – реальные впечатления клиентов",
    },
    {
      property: "og:description",
      content:
        "Отзывы клиентов о кухнях «Графские кухни» в Воронеже. Качество, сроки, дизайн.",
    },
    { property: "og:image", content: "https://grafckie.ru/og-image.webp" },
    { property: "og:url", content: "https://grafckie.ru/reviews" },
  ],
  link: [{ rel: "canonical", href: "https://grafckie.ru/reviews" }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(schema),
    },
  ],
});
</script>

<template>
  <main class="app-reviews">
    <h1 class="visually-hidden">Ознакомиться с нашими отзывами можно здесь!</h1>
    <the-container title="Наши отзывы">
      <h2 class="app-reviews__title">
        Отзывы наших клиентов о кухнях «Графские кухни»
      </h2>
      <p class="app-reviews__text">
        Наши клиенты оставляют свои впечатления о качестве кухонь, обслуживании
        и дизайне. Вы можете ознакомиться с отзывами и убедиться в нашем
        профессионализме.
      </p>
      <our-reviews />
    </the-container>
    <div class="app-reviews__post-container">
      <h4 class="app-reviews__post-title">
        Мы благодарим Вас за то, что ознакомились с нашими отзывами и если Вы
        решились сделать заказ, то ждем Вашу заявку
      </h4>
      <the-order />
    </div>
  </main>
</template>

<style scoped lang="scss">
.app-reviews {
  &__title {
    font-size: 18px;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 16px;
    padding: 0 10px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  &__text {
    font-size: 14px;
    color: var(--dark-gray);
    font-weight: 300;
    margin-bottom: 10px;
    padding: 0 10px;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  &__post-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px 10px 10px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__post-title {
    margin: 20px 0;

    max-width: 400px;
    font-size: 18px;
    letter-spacing: 1.1px;
    color: var(--dark-gray);
  }
}
</style>
