<script setup>
import TheLink from "~/components/shared/link/the-link/TheLink.vue";
</script>

<template>
  <section class="app-contact">
    <div>
      <h2 class="app-contact__map-header">Как нас найти:</h2>
      <div class="map">
        <div style="position: relative; overflow: hidden">
          <a
            href="https://yandex.ru/maps/org/grafskaya_kukhnya/128905039745/?utm_medium=mapframe&amp;utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Графская кухня</a
          ><a
            href="https://yandex.ru/maps/193/voronezh/category/kitchen_furniture/184107873/?utm_medium=mapframe&amp;utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Мебель для кухни в Воронеже</a
          ><a
            href="https://yandex.ru/maps/193/voronezh/category/furniture_store/184107871/?utm_medium=mapframe&amp;utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 28px"
            >Магазин мебели в Воронеже</a
          ><iframe
            src="https://yandex.ru/map-widget/v1/?indoorLevel=4&amp;ll=39.181862%2C51.717624&amp;mode=poi&amp;poi%5Bpoint%5D=39.182106%2C51.717992&amp;poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D128905039745&amp;z=17.03"
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
            class="app-contact__iframe-map"
          ></iframe>
        </div>
      </div>
    </div>

    <div>
      <div class="app-contact__contacts-container">
        <div class="app-contact__contacts-container-block">
          <h2 class="app-contact__contacts-header">График работы:</h2>
          <p>
            ТРЦ Сити-парк Град:
            <span class="app-contact__contacts--bold">ежедневно</span> с 10:00 -
            22:00 без выходных
          </p>

          <p>
            ТЦ Воронежский Рынок:
            <span class="app-contact__contacts--bold">ежедневно</span> с 10:00 -
            20:00 без выходных
          </p>
        </div>

        <div class="app-contact__contacts-container-block">
          <h2 class="app-contact__contacts-header">Мы находимся по адресу:</h2>
          <p>Воронеж, Московский проспект, 90/1 ТЦ Воронежский рынок 4 этаж</p>
          <p>Воронеж, Парковая 3, ТРЦ Сити-парк Град, цокальный этаж</p>
        </div>

        <div class="app-contact__contacts-container-block">
          <h2 class="app-contact__contacts-header">Связаться с нами:</h2>
          <div class="app-contact__contacts-block">
            <p>По телефону:</p>
            <the-link
              class="app-contact__meta"
              text="+7 (995) 251-07-12"
              href="tel:+79952510712"
            />
          </div>
          <div class="app-contact__contacts-block">
            <p>По Телеграму:</p>
            <the-link
              class="app-contact__meta"
              text="https://t.me/GrafKukh"
              href="https://t.me/GrafKukh"
              target="_blank"
            />
          </div>
          <div class="app-contact__contacts-block">
            <p>По Whats Up:</p>
            <the-link
              class="app-contact__meta"
              text="https://wa.me/79952510712"
              href="https://wa.me/79952510712"
              target="_blank"
            />
          </div>
          <div class="app-contact__contacts-block">
            <p>Вконтакте:</p>
            <the-link
              class="app-contact__meta"
              text="https://vk.com/kitchen_kupit"
              href="https://vk.com/kitchen_kupit"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./AppContacts.scss"></style>
