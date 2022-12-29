<script setup>
import { ref } from 'vue';

let classObject = ref('border-radius: 56% 44% 70% 30% / 44% 42% 58% 56%');
let arr = ref(0);
let primepics = ref([
    {
        resim:"/images/content_pictures/table3.png",
        baslik:"Sokakların Madonnası",
        aciklama: "Sokakların Madonnası adlı tablo, İtalyan ressam Amedeo Modigliani tarafından yapılmış bir tablo olup, 20. yüzyılın başlarında yapılmıştır. Tablo, bir kadının portresini gösterir ve kadının yüzünde ağır bir ifade vardır. Kadının elinde bir çocuk vardır ve kadın, çocuğu kucaklamaktadır. Tablonun hikâyesi, bir kadının çocuğunu kucaklamasını ve onunla birlikte yaşamasını gösterir. Tablo, 20. yüzyılın başlarında yapılmış olmasına rağmen, hâlâ günümüzde de çok sevilen ve beğenilen bir eserdir. Tablonun ağır ifadesi ve çocuğu kucaklayan kadın görüntüsü, izleyiciyi düşündürür ve tablo, izleyicinin iç dünyasında düşünceler uyandırmaktadır. Bu tablo, bir kadının çocuğunu kucaklamasını ve onunla birlikte yaşamasını gösterir ve izleyicinin iç dünyasında düşünceler uyandırmaktadır.",
        detay: "Tablonun hikâyesi, bir kadının çocuğunu kucaklamasını ve onunla birlikte yaşamasını gösterir."
    },
    {
        resim:"/images/content_pictures/table1.png",
        baslik:"Çığlık",
        aciklama: "Çığlık tablosu, Edgar Allan Poe'nun 1843 yılında yazdığı 'The Tell-Tale Heart' (Çığlık Tablosu) adlı hikâyesinde kullanılan bir terimdir. Bu hikâyede, anlatıcı bir adamın cinayet işlediğini ve cinayetin ardından ruhunun onu suçlu hissettiğini anlatır. Anlatıcı, cinayetin ardından ruhunun çığlıklar atmasından dolayı delirir ve bu çığlıkların sesini duyar. Bu çığlıklar, anlatıcının suçluluğunu ve kaygısını ifade eder ve hikâyenin temel unsurlarından biridir. Çığlık tablosu, genellikle suçluluk ve kaygı gibi duyguları ifade etmek için kullanılır. Bu terim, genellikle hikâyeler veya öykülerde kullanılır ve insan ruhunun sesini ve duygularını ifade etmek için kullanılır. Çığlık tablosu, aynı zamanda bir kişinin içsel dünyasındaki duygularını ve kaygılarını ifade etmek için de kullanılabilir. ",
        detay: "Ana karakter olarak anlatıcının suçluluğunu ve kaygısını anlatan bir ruh görünümü vardır."
    },
    {
        resim:"/images/content_pictures/table2.png",
        baslik:"İnci Küpeli Kız",
        aciklama: "İnci Küpeli Kız adlı tablo, Fransız ressam Pierre-Auguste Renoir tarafından yapılmış bir tablo olup, 19. yüzyılın sonlarında yapılmıştır. Tablo, bir kızın güzel yüzünü ve parlak inci küpelerini göstermektedir. Kızın güzel yüzü, aydınlık bir gülümsemeyle doludur ve parlak inci küpeleri gözlerinin altında parlıyor. Tablonun hikâyesi, kızın inci küpelerini taktıktan sonra güzel bir şekilde gülümsediğini gösterir. Tablo, 19. yüzyılın sonlarında yapılmış olmasına rağmen, hâlâ günümüzde de çok sevilen ve beğenilen bir eserdir. Tablonun güzel gülümsemesi ve parlak inci küpeleri, izleyiciyi mutlu etmektedir ve tablo, izleyicinin iç dünyasında pozitif duygular uyandırmaktadır. Bu tablo, güzel gülümsemelerin ve parlak inci küpelerin güzelliğini ve çekiciliğini gösterir ve izleyicinin iç dünyasında pozitif duygular uyandırmaktadır.",
        detay: "Tablonun güzel gülümsemesi ve parlak inci küpeleri, izleyiciyi mutlu etmektedir ve tablo, izleyicinin iç dünyasında pozitif duygular uyandırmaktadır."
    }
])
const chance = () => {
    let rand = Math.floor(Math.random() * 60) + 20
    let kala = 100 - rand
    let rand2 = Math.floor(Math.random() * 60) + 20
    let kala2 = 100 - rand
    classObject.value = 'border-radius: ' + kala + '% ' + rand + '% 70% 30% / 44% ' + rand2 + '% ' + kala2 + '% 56%'
    if (primepics.value[arr.value + 1]) arr.value++
    else arr.value = 0
}
</script>

<template>
    <div class="w-full h-auto pt-20">
        <div class="flex justify-around">
            <div class="mt-20 w-650 h-auto bg-gray-600 radiusoval transition-all overflow-hidden max-xl:max-w-sm max-md:hidden" :style="classObject">
                <div
                    class="m-96 max-xl:mt-80 max-xl:ml-64 absolute w-5 h-5 border-solid border-2 border-green-200 rounded-full flex justify-center items-center">
                    <div class="dotted-info w-2 h-2 bg-green-100 rounded-full">
                        <div class="p-2 altmenu-info w-48 h-auto bg-stone-200 relative m-3 rounded-md hidden">
                            <p class="text-stone-600">{{ primepics[arr].detay }}</p>
                        </div>
                    </div>
                </div>
                <img class="ml-24 mt-10 max-xl:ml-5" :src="primepics[arr].resim">
            </div>
            <img class="ml-24 mt-10 max-xl:ml-5 absolute opacity-30 w-auto md:hidden" :src="primepics[arr].resim">
            <div class="max-w-lg xl:min-w-lg max-h-2xl min-h-2xl leading-9 mt-10 break-words max-xl:w-96 max-xl:leading-7 max-md:leading-9 max-md:w-11/12 max-md:z-10">
                <h1 class="text-3xl border-b-2 font-medium pb-2 mb-1">{{ primepics[arr].baslik }}</h1>
                <p class="h-480">{{ primepics[arr].aciklama }}<a href="/" class="text-green-300 font-bold text-sm">Devam Et</a>
                </p>
                <a href="/"
                    class="w-auto h-auto bg-green-500 text-white inline-block p-1 pr-6 pl-6 mt-5 rounded-sm hover:bg-green-400 mr-5">Satın Al</a>
                <a href="/"
                    class="w-auto h-auto bg-slate-500 text-white inline-block p-1 pr-6 pl-6 mt-5 rounded-sm hover:bg-slate-400">Sepete
                    Ekle</a>
            </div>
        </div>
        <a @click="chance" class="bx bx-right-arrow-alt text-4xl float-right mr-10 mt-5 text-gray-800 hover:text-black"></a>
        <div class="mouse_scroll">
            <div class="hidden">
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
            </div>
        </div>
    </div>
</template>
<style>
.w-650 {
    width: 650px;
}
.h-480{
    height: 480px;
}
.radiusoval {
    background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.dotted-info:hover .altmenu-info {
    display: block;
}

.min-w-lg {
    min-width: 512px;
}
.min-h-2xl{
    height: 600px;
}
.mouse_scroll, .mouse_scroll:before, .mouse_scroll:after {
  -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;
 }


.mouse_scroll {
	display: block;
	margin: 0 auto;
	width: 24px;
	height: 100px;
	margin-top: 125px;
}


.m_scroll_arrows
{
  display: block;
  width: 5px;
  height: 5px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
   
  border-right: 2px solid rgb(0, 0, 0);
  border-bottom: 2px solid rgb(0, 0, 0);
  margin: 0 0 3px 4px;
  
  width: 16px;
  height: 16px;
}


.unu
{
  margin-top: 1px;
}

.unu, .doi, .trei
{
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
  
}

.unu
{
  -webkit-animation-delay: .1s;
  -moz-animation-delay: .1s;
  -webkit-animation-direction: alternate;
  
  animation-direction: alternate;
  animation-delay: alternate;
}

.doi
{
  -webkit-animation-delay: .2s;
  -moz-animation-delay: .2s;
  -webkit-animation-direction: alternate;
  
  animation-delay: .2s;
  animation-direction: alternate;
  
  margin-top: -6px;
}

.trei
{
  -webkit-animation-delay: .3s;
  -moz-animation-delay: .3s;
  -webkit-animation-direction: alternate;
  
  animation-delay: .3s;
  animation-direction: alternate;
  
  
  margin-top: -6px;
}

@-webkit-keyframes mouse-scroll {

  0%   { opacity: 0;}
  50%  { opacity: .5;}
  100% { opacity: 1;}
}
@-moz-keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}
@-o-keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}
@keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}

</style>