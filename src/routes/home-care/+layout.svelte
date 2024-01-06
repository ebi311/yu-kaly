<script lang="ts">
  import { page } from '$app/stores';

  const pageTitles: Record<string, string> = {
    '/home-care/reports': 'レポート一覧',
  };

  $: console.log($page.data);
  $: pageTitle = pageTitles[$page.url.pathname] ?? '(unknown page)';
</script>

<header class="navbar bg-primary shadow">
  <h1 class="text-2xl text-primary-content font-bold">{pageTitle}</h1>
</header>
<main class="max-w-2xl">
  <slot />
</main>
