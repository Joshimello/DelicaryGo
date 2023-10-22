<script>
  import { swipe } from 'svelte-gestures';
  import { blur, fly } from 'svelte/transition'
  import { quintOut } from 'svelte/easing';
  import { DiscIcon, NavigationIcon, StarIcon, CheckIcon, ClockIcon, PhoneCallIcon, GlobeIcon } from 'svelte-feather-icons'

  export let data
  const { shops } = data

  let id = 0
  let tab = 0
  const swipeHandler = e => {
    if(e.detail.direction == 'left') {
      if(id+1 == shops.length) id = 0
      else id++
    }
  }

</script>

<div 
  class="h-100vh p-4 w-full flex flex-col gap-2"
  on:swipe={swipeHandler}
  use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
>
  <span class="text-xl text-gray-500">推薦你</span>
  {#key id}
    <div class="flex flex-col" out:fly={{ x: -200, opacity: 0, easing: quintOut }} in:fly={{ x: 200, opacity: 0, easing: quintOut, delay: 500 }}>
      <span class="text-4xl">{shops[id].name}</span>
      <span class="text-gray-500">{shops[id].addr}</span>
    </div>
    <div class="flex gap-4" out:fly={{ x: -200, opacity: 0, easing: quintOut }} in:fly={{ x: 200, opacity: 0, easing: quintOut, delay: 500 }}>
      <div class="flex items-center gap-1">
        <DiscIcon size="20" class="text-orange-500"/>
        <span class="text-sm text-gray-500 truncate">{shops[id].busy}</span> 
      </div>
      <div class="flex items-center gap-1">
        <NavigationIcon size="20" class="text-blue-500"/>
        <span class="text-sm text-gray-500 truncate">{shops[id].time}</span> 
      </div>
      <div class="flex items-center gap-1">
        <StarIcon size="20" class="text-pink-500"/>
        <span class="text-sm text-gray-500 truncate">{shops[id].likes}</span> 
      </div>
    </div>
    <div class="flex gap-2 py-2" out:fly={{ x: -200, opacity: 0, easing: quintOut }} in:fly={{ x: 200, opacity: 0, easing: quintOut, delay: 500 }}>
      <button class="w-full py-1 rounded-lg" class:border-1={tab == 0} class:border-gray-500={tab == 0} class:text-gray-500={tab != 0} on:click={() => tab = 0}>總覽</button>
      <button class="w-full py-1 rounded-lg" class:border-1={tab == 1} class:border-gray-500={tab == 1} class:text-gray-500={tab != 1} on:click={() => tab = 1}>評價</button>
      <button class="w-full py-1 rounded-lg" class:border-1={tab == 2} class:border-gray-500={tab == 2} class:text-gray-500={tab != 2} on:click={() => tab = 2}>關於</button>
    </div>
    <div class="h-full overflow-auto" out:fly={{ x: -200, opacity: 0, easing: quintOut }} in:fly={{ x: 200, opacity: 0, easing: quintOut, delay: 500 }}>
    {#if tab == 0}
      <div class="h-fullrounded-2xl">
        <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/Ct1EeH8Nlu2/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>
        <div class="pb-100vh"></div>
      </div>
    {:else if tab == 1}
      <div class="h-full flex flex-col gap-4 pb-100vh">
        {#each shops[id].comments as { img, text, tags, rating }}
          <div class="flex flex-col">
            <div class="h-30 w-full overflow-hidden relative">
              <img class="object-cover object-center w-full h-full rounded-2xl" src={img} alt=""/>
              {#each tags as tag}
              <div class="absolute bottom-2 left-2 px-2 bg-white rounded-xl border-1 border-gray-500">{tag}</div>
              {/each}
            </div>
            <div class="flex justify-between">              
              <span class="text-sm">{text}</span>
              <div class="flex items-center gap-1">
                <StarIcon size="15"/>
                <span class="text-sm">{rating}</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else if tab == 2}
      <div class="flex flex-col gap-6">
        <hr class="border-t-1 border-gray-500"/>
        <div class="flex gap-4 px-4">
          {#each shops[id].services as service}
          <div class="flex items-center gap-2">
            <CheckIcon/>
            <span class="">{service}</span>
          </div>
          {/each}
        </div>
        <div class="flex items-center gap-2 px-4">
          <ClockIcon/>
          <span class="text-red-400">{shops[id].status}</span> ⋅ 
          <span>{shops[id].open}</span>
        </div>
        <div class="flex items-center gap-2 px-4">
          <GlobeIcon/>
          <span>{shops[id].website}</span>
        </div>
        <div class="flex items-center gap-2 px-4">
          <PhoneCallIcon/>
          <span>{shops[id].phone}</span>
        </div>
      </div>
    {/if}
    </div>
  {/key}
</div>
<div class="absolute bottom-26 right-8">
  <a class="px-6 py-2 bg-white text-2xl font-600 flex items-center gap-4 border-1 border-black rounded-xl" href="/direction">
    <span>導航</span>
    <NavigationIcon/>
  </a>
</div>
<!-- <div class="h-100vh w-full">
    {#each shops as { name, addr, busy, time, likes, desc, comments }}
        <img src={}>
    {/each}
</div> -->
