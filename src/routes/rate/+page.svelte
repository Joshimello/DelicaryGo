<script>
  let selectedFile;

  function handleFileInput(event) {
    selectedFile = event.target.files[0];
    // You can now do something with the selected file
  }

  import { FlagIcon, CheckSquareIcon, CameraIcon, CornerRightUpIcon } from 'svelte-feather-icons'
</script>



{#if selectedFile}


<div class="h-100vh w-full p-4 flex flex-col">
   <span class="text-4xl">打卡成功!</span>
   <span class="text-gray-500">大鼓涼皮肉夾饃</span>
   <img src="{URL.createObjectURL(selectedFile)}" alt="Selected Image" class="py-8 h-80 object-cover">
      <div class="flex flex-col gap-6">

        <div class="flex items-center gap-2 px-4">
          <FlagIcon/>
          <span>打卡分 +100 XP</span>
        </div>
        <div class="flex items-center gap-2 px-4">
          <CheckSquareIcon/>
          <span>第一次打卡 +100 XP</span>
        </div>
        <div class="flex items-center gap-2 px-4">
          <CameraIcon/>
          <span>圖片美分 +50 XP</span>
        </div>
      </div>

   <div class="w-full h-2 rounded-full bg-gray-300 mt-8">
      <div class="w-1/4 h-2 rounded-full bg-orange-500"></div>
   </div>
   <div class="flex justify-between items-start">
   <span class="text-2xl pt">Level 10</span>
   <span class="text-gray-500">+250 XP</span>      
   </div>
</div>

<div class="absolute bottom-26 flex w-full justify-end px-8 z-10">
  <a class="px-6 py-2 bg-white text-2xl font-600 flex items-center gap-4 border-1 border-black rounded-xl" href="/food">
    <span>回主頁</span>
    <CornerRightUpIcon/>
  </a>
</div>


{:else}
<input type="file" on:change="{handleFileInput}" accept="image/*">
{/if}


