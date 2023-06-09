<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
const p=ref(null);
const video=document.querySelector('video');
onMounted(() => {
  gsap.from(p.value, { opacity: 0, duration: 1, y: 50 });
  video.removeAttribute('controls');
  gsap.from('#leftmenu', {
    delay: 0.5,
    opacity: 0,
    x: -5000,
    ease: Expo.easeInOut
  });
});
</script>

<template>
  <!-- background:linear-gradient(90deg,#eeb486 50%,#073776 50%,#204b85 100%): -->
  <div class="overlay
  hidden
  absolute 
  w-full 
  h-screen
  z-20
  flex
  flex-col
  justify-center
  items-center
  ">
    <a href="#" class=" translate-x-m10">
      <font-awesome-icon icon="fa-brands fa-pied-piper-alt" class="
      h-48
      text-white
      hover:text-yellow-200 
      "/>
    </a>
  </div>
  <div id="wrap" class="w-full h-full">
    <header id="header" class="w-full h-24 flex justify-between fixed items-center z-20">
      <h1 class="logobox w-48 h-24 flex items-center justify-start ">
        <a href="#" class="
        text-slate-200 
        w-24
        h-24
        bg-main-blue
        flex
        items-center
        justify-center
        ">
          <font-awesome-icon icon="fa-brands fa-pied-piper-alt" class="h-9 translate-x-m5 translate-y-m5"/>
        </a>
        <a href="#" class=" hover:text-white">
          <font-awesome-icon icon="fa-brands fa-github"
          class="ml-7 h-9
          "/>
        </a>
      </h1>
      
      <div class="flex">
        <!-- .nav_links_content: -->
        <nav id="nav">
          <!-- .nav_link_list: -->
          <ul class="flex">
            <!-- .nav_link: -->
            <li class="pr-5 group font-semibold"><a class="text-slate-200  group-hover:border-main-blue group-hover:border-b-2
              duration-100
              " href="#">
              HOME
            </a></li>
            <li class="pr-5 group  font-semibold"><a class="text-slate-200  group-hover:border-main-blue group-hover:border-b-2 duration-100" href="#">
              ABOUT
            </a></li>
            <li class="pr-5 group  font-semibold"><a class="text-slate-200  group-hover:border-main-blue group-hover:border-b-2 duration-100" href="#">
              EXPLORE
            </a></li>
            <li class="pr-5 group  font-semibold"><a class="text-slate-200  group-hover:border-main-blue group-hover:border-b-2 duration-100" href="#">
              CONTACT US
            </a></li>
          </ul>
        </nav>
        <div class="searchbox text-slate-200 mr-10">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      
    </header>
    <div id="container" class="container flex w-full h-full ">
      <aside id="leftMenu" class="min-w-24 w-4/12 h-full flex bg-transparent z-10 absolute">
        <div class="left1 w-24 h-full flex flex-col justify-end">
          <div class="snslist w-24 h-24 flex items-center justify-center mb-10">
            <ul class="flex flex-col">
              <li class="p-2 active group w-8 h-8 flex justify-center items-center border-main-blue
              hover:border-2
              rounded-full
               pt-1.5 duration-100
               ">
                <a href="#" class="text-slate-200 ">
                <font-awesome-icon :icon="['fab', 'square-instagram']" />
                </a>
              </li>
              <li class="p-2 group w-8 h-8 flex justify-center items-center border-main-blue rounded-full pt-1.5 hover:border-2 duration-100">
                <a href="#" class="text-slate-200 ">
                  <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li class="p-2 group w-8 h-8 flex justify-center items-center border-main-blue rounded-full pt-1.5 hover:border-2 duration-100">
                <a href="#" class="text-slate-200 ">
                <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="left2 h-full translate-y-1/4">
          <div class="txtbox0 top-1/4 left-24">
            <div class="title text-slate-200 font-bold text-5xl uppercase">
              <h1>Revol<br>ution</h1>
            </div>
            <div class="bluebox text-slate-200 bg-main-blue w-44 h-40 p-9 mt-7 flex flex-col justify-center">
              <span class="bg-slate-200 text-main-blue text-center w-7 h-7 text-xs rounded-full
              leading-7
              ">03</span>
              <span class="text-2xl mb-1">Uprising.</span>
              <!-- .see_photos: -->
              <div class="imgbox text-xs tracking-wider
              before:inline-block
              before:content-['']
              before:w-6
              before:mr-2.5
              before:border-slate-200
              before:border-2
    
              ">
                Scroll
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div class="videobox relative w-screen h-auto overflow-hidden">
        <video loop muted autoplay controls class="object-fill w-screen h-screen">
          <source src="./assets/pexels-maxi-leiva-13147618-1080x1920-24fps.mp4">
        </video>
      </div>
      <!-- .desc_content: -->
      <aside class="
      w-80 h-96 
      absolute 
      top-32 right-12 flex flex-col justify-between text-sm text-slate-200
      font-semibold 
      p-5
      ">
        <p class="leading-6 mb-3"><span class="text-main-blue block text-4xl mb-6">REVOLUTIONER</span>
        is all of us. We live our lives free nowadays because some people sacrifice themselves for free their sons in future-that is for us. We should thanks to them then must inherit only one thing-their strong sprit even sacrifice our lives to revolution </p>
        <!-- .fashion: -->
        <div class="txtbox1">
          <span class="block mb-2 text-main-blue">01.</span>
          <span class="font-semibold text-base tracking-tighter">Revolution</span>
        </div>
        <!-- .fashion: -->
        <div class="txtbox1">
          <span class="block mb-2 text-main-blue">02.</span>
          <span class="font-semibold text-base tracking-tighter">Uprising</span>
        </div>
        <!-- .fashion_text: -->
        <div class="text-xl font-semibold tracking-tight before:content-['']
        before:inline-block
        before:w-8
        before:border-y-2
        before:border-main-blue
        before:mb-1.5
        before:translate-x-m10
        ">Revolution.</div>
        <div class="tracking-widest">
          <span class="text-orange-400">03</span>
          <span class="text-xs text-main-blue">/03</span>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.overlay{background:linear-gradient(90deg,#eeb486 50%,#073776 50%,#204b85 100%);}
</style>
