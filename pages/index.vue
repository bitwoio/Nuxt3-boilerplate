<template>
  <div>
    <h1 class="text-blue-500">{{ $t("welcome") }}</h1>
    <nuxt-link to="/about">About</nuxt-link>
    <div>
      <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => { return (locales.value).filter(i => i.code !== locale.value) })
</script>
