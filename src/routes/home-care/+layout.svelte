<script lang="ts">
  import { page } from '$app/stores';

  const pageTitles: Record<string, string> = {
    '/home-care/reports': 'レポート一覧',
  };

  let pageTitle = 'untitled';
  $: console.log($page.data);
  $: {
    const paths = Object.keys(pageTitles);
    paths.forEach((path) => {
      if ($page.url.pathname.startsWith(path)) {
        pageTitle = pageTitles[path];
      }
    });
  }
</script>

<header class="navbar bg-base-100 border-b-1 shadow">
  <h1 class="text-2xl text-base-content font-bold">{pageTitle}</h1>
</header>
<main class="w-full sm:max-w-[640px] md:max-w-[768px] mx-auto pt-2">
  <slot />
</main>
