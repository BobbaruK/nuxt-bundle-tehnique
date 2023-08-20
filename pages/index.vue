<script setup lang="ts">
useSeoMeta({
  title: "Home Page",
  description:
    "Home Page - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum saepe beatae sequi sed excepturi temporibus reiciendis unde veritatis veniam?",
  ogTitle: "Home Page",
  ogDescription:
    "Home Page - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum saepe beatae sequi sed excepturi temporibus reiciendis unde veritatis veniam?",
  ogUrl: "http://localhost:3000/",
  twitterTitle: "Home Page",
  twitterDescription:
    "Home Page - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum saepe beatae sequi sed excepturi temporibus reiciendis unde veritatis veniam?",
});

const { t } = useI18n({});

const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();
</script>

<template>
  <div>
    <h1>Hello nuxt!</h1>
    <h2>Do you even bundle, bro?</h2>
    {{ t("navigation.home") }} <br />
    <h3>entry.*.js</h3>
    <ol>
      <li>nuxt i18n + 15 langs and text: <strong>219.02 kb</strong></li>
    </ol>
  </div>
</template>
