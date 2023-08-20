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

const { t } = useI18n({
  useScope: "global",
  messages: {
    en: { test: "test123" },
  },
});

import { useMouse } from "@vueuse/core";

const { x, y, sourceType } = useMouse();
</script>

<template>
  <div>
    <h1>Hello nuxt!</h1>
    <h2>Do you even bundle, bro?</h2>
    {{ t("test") }} <br /> <br />

    {{ x }}px <br />
    {{ y }}px <br />
    {{ sourceType }}
    <h3>entry.*.js</h3>
    <ol>
      <li>
        nuxt i18n + 15 langs and content(lang dir): <strong>219.02 kb</strong> -
        81
      </li>
      <li>
        nuxt i18n + 15 langs no content(exclude lang dir):
        <strong>215.02 kb</strong> - 99
      </li>
      <li>nuxt supabase: <strong>328.62</strong> - 100</li>
      <li>vueuse: <strong>328.75</strong> - 100</li>
    </ol>
  </div>
</template>
