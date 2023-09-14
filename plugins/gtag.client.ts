// @ts-nocheck

export default defineNuxtPlugin((nuxtApp) => {
  const { googleAnalyticsId } = useRuntimeConfig().public;

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.dataLayer = window.dataLayer || [];

  gtag("js", new Date());
  gtag("config", googleAnalyticsId);

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
        async: true,
      },
    ],
  });
});
