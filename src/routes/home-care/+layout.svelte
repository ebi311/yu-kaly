<script lang="ts">
  import { page } from '$app/stores';
  import { pageSubject } from './store';

  const pageTitles: Record<string, string> = {
    '/home-care/reports': '作業レポート一覧',
  };

  const { year, month, id } = $page.params;

  let pageTitle = 'untitled';
  const paths = Object.keys(pageTitles);
  $: {
    paths.forEach((path) => {
      if ($page.url.pathname.startsWith(path)) {
        pageTitle = pageTitles[path];
      }
    });
  }
  const subject = id ? $pageSubject : `${year}年${month}月`;
</script>

<header
  class="navbar bg-base-100 border-b-1 shadow flex flex-col items-baseline"
>
  <span>{pageTitle}</span>
  <h1 class="text-2xl text-base-content font-bold">{subject}</h1>
</header>
<main class="w-full sm:max-w-[640px] md:max-w-[768px] mx-auto pt-2">
  <slot />
</main>
