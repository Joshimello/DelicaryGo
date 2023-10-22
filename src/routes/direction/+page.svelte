<script>
  import { CameraIcon, CornerLeftUpIcon } from 'svelte-feather-icons'
  import { DiscIcon, NavigationIcon, StarIcon, CheckIcon, ClockIcon, PhoneCallIcon, GlobeIcon } from 'svelte-feather-icons'
  let id=0
  export let data
  const { shops } = data
</script>

<div class="absolute bottom-26 flex w-full justify-between px-8 z-10">
  <a class="px-6 py-2 bg-white text-2xl font-600 flex items-center gap-4 border-1 border-black rounded-xl" href="/food">
    <CornerLeftUpIcon/>
    <span>返回</span>
  </a>
  <a class="px-6 py-2 bg-white text-2xl font-600 flex items-center gap-4 border-1 border-black rounded-xl" href="/rate">
    <span>打卡</span>
    <CameraIcon/>
  </a>
</div>

<div class="h-65vh overflow-hidden">
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1gXCxCdQRPf87KhUTujG6QZSt7cl-1zo&ehbc=2E312F&noprof=1" class="w-full h-75vh"></iframe>
</div>

<div class="p-4">
    <div class="flex flex-col">
      <span class="text-4xl">{shops[id].name}</span>
      <span class="text-gray-500">{shops[id].addr}</span>
    </div>
    <div class="flex gap-4">
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
</div>