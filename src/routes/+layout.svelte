<script>
  import 'virtual:windi.css'
  import '$lib/app.css'
  import { MapIcon, ThumbsUpIcon, UsersIcon } from 'svelte-feather-icons'

  import { active } from '$lib/store'
</script>

<slot/>
<div class="absolute flex gap-2 bottom-0 w-full bg-white p-4 z-10">
  <a class="w-full border-1 border-black rounded-lg flex items-center justify-center gap-2 py-4"  class:bg-gray-800={$active == 0} class:text-white={$active == 0}  on:click={() =>$active = 0} href="/map">
    <MapIcon size="24"/>
    <span class="text-xl font-600">地圖</span>
  </a>
  <a class="w-full border-1 border-black rounded-lg flex items-center justify-center gap-2 py-4" class:bg-gray-800={$active == 1} class:text-white={$active == 1} on:click={() =>$active = 1} href="/food">
    <ThumbsUpIcon size="24"/>
    <span class="text-xl font-600">推薦</span>
  </a>
  <a class="w-full border-1 border-black rounded-lg flex items-center justify-center gap-2 py-4"  class:bg-gray-800={$active == 2} class:text-white={$active == 2} on:click={() =>$active = 2} href="/food">
    <UsersIcon size="24"/>
    <span class="text-xl font-600">社交</span>
  </a>
</div>