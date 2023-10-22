<script>
  import 'virtual:windi.css'
  import '$lib/app.css'
  import { MapIcon, ThumbsUpIcon, UsersIcon, NavigationIcon } from 'svelte-feather-icons'
</script>

<slot/>
<div class="absolute flex gap-2 bottom-0 w-full bg-white p-4 z-10">
  <button class="w-full border-1 border-black rounded-lg flex items-center justify-center gap-2 py-4">
    <MapIcon size="24"/>
    <span class="text-xl font-600">地圖</span>
  </button>
  <button class="w-full border-1 border-black rounded-lg flex items-center justify-center gap-2 py-4">
    <ThumbsUpIcon size="24"/>
    <span class="text-xl font-600">推薦</span>
  </button>
  <button class="w-full border-1 border-black rounded-lg flex items-center justify-center gap-2 py-4">
    <UsersIcon size="24"/>
    <span class="text-xl font-600">社交</span>
  </button>
</div>