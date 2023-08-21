<script setup lang="ts">
import { useMouse } from "@vueuse/core";
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

const { x, y, sourceType } = useMouse();

// TODO: incearca sa chunk 
// ~52% din entry bundle nici macar nu e folosit cand e incarcat
</script>

<template>
  <div>
    <h1>Hello nuxt!</h1>
    <h2>Do you even bundle, bro?</h2>
    <hr />
    <div>
      <h3>i18n</h3>
      {{ t("test") }} <br />
    </div>
    <hr />
    <div>
      <h3>vue use</h3>
      {{ x }}px <br />
      {{ y }}px <br />
      {{ sourceType }}
    </div>
    <hr />
    <div>
      <h3>nuxt-img</h3>
      <nuxt-img src="/imgs/test.jpg" width="500" height="300" />
    </div>
    <hr />
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
      <li>nuxt-img: <strong>328.78</strong> - 100</li>
      <li>add pages + components + composables <strong>504.41</strong> - 79 :((((</li>
      <li>remove components + composables <strong>459.81</strong> - 87 :((((</li>
      <li>remove pages <strong>329.41</strong> - 100</li>
      <li>add components <strong>331.74</strong> - 100</li>
      <li>use components + add css <strong>331.94</strong> - 85 :((((</li>
      <li>lazyload header components? <strong>331.94</strong> - 79 :((((</li>
      <li>remove LangSwitcher, SiteHeaderPhoneNo, SiteLogin & MenuBurger <strong></strong></li>
      <li>remove navigation leave header <strong>332.25</strong> - </li>
    </ol>
  </div>
</template>
