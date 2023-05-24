<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
const p=ref(null);
const video=document.querySelector('video');
onMounted(() => {
  gsap.from(p.value, { opacity: 0, duration: 1, y: 50 });
  video.removeAttribute('controls');
});
</script>

<template>
  <div id="wrap" class="w-full h-full">
    <div id="container" class="container w-full h-full relative">
      <header id="header" class="w-full h-24 flex justify-end fixed items-center z-10">
        <nav id="nav">
          <ul class="flex">
            <li class="pr-5 group font-semibold"><a class="text-slate-200 group-hover:text-main-blue group-hover:border-main-blue group-hover:border-b-2
              duration-100
              " href="#">
              HOME
            </a></li>
            <li class="pr-5 group  font-semibold"><a class="text-slate-200 group-hover:text-main-blue group-hover:border-main-blue group-hover:border-b-2 duration-100" href="#">
              ABOUT
            </a></li>
            <li class="pr-5 group  font-semibold"><a class="text-slate-200 group-hover:text-main-blue group-hover:border-main-blue group-hover:border-b-2 duration-100" href="#">
              EXPLORE
            </a></li>
            <li class="pr-5 group  font-semibold"><a class="text-slate-200 group-hover:text-main-blue group-hover:border-main-blue group-hover:border-b-2 duration-100" href="#">
              CONTACT US
            </a></li>
          </ul>
        </nav>
        <div class="searchbox text-slate-200 mr-10">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
      </header>
      <aside id="leftMenu" class="w-24 h-full flex flex-col justify-between bg-transparent fixed z-10">
        <h1 class="logobox w-full h-24 flex items-center justify-center bg-main-blue">
          <a href="#" class="text-slate-200 group-hover:text-main-blue">
            <font-awesome-icon icon="fa-brands fa-pied-piper-alt" class="h-9 translate-x--px"/>
          </a>
        </h1>
        <div class="snslist w-full h-24 flex items-center justify-center mb-10">
          <ul class="flex flex-col">
            <li class="p-2 active group w-8 h-8 flex justify-center items-center border-main-blue
            hover:border-2
            rounded-full
             pt-1.5 duration-100
             ">
              <a href="#" class="text-slate-200 group-hover:text-main-blue">
              <font-awesome-icon :icon="['fab', 'square-instagram']" />
              </a>
            </li>
            <li class="p-2 group w-8 h-8 flex justify-center items-center border-main-blue rounded-full pt-1.5 hover:border-2 duration-100">
              <a href="#" class="text-slate-200 group-hover:text-main-blue">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li class="p-2 group w-8 h-8 flex justify-center items-center border-main-blue rounded-full pt-1.5 hover:border-2 duration-100">
              <a href="#" class="text-slate-200 group-hover:text-main-blue">
              <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div class="videobox w-screen h-auto overflow-hidden">
        <video loop muted autoplay controls class="object-fill w-screen h-screen">
          <source src="./assets/pexels-maxi-leiva-13147618-1080x1920-24fps.mp4">
        </video>
      </div>
      <div class="textbox absolute top-1/4 left-24">
        <div class="title text-slate-200 font-bold text-5xl uppercase">
          <h1>Revo<br>lution</h1>
        </div>
        <div class="bluebox text-slate-200 bg-main-blue w-44 h-40 p-9 mt-7 flex flex-col justify-center">
          <span class="bg-slate-200 text-main-blue text-center w-7 h-7 text-xs rounded-full">03</span>
          <span class="text-2xl mb-1">Uprising.</span>
          <div class="imgbox text-xs tracking-wider">
            Scroll
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*-- width: 32px; height: 32px; display: flex; justify-content: center; align-items: center; border: 2px solid #e2e8f0; border-radius: 50%; padding-top: 7px; transition: all .6s; --*/
</style>
