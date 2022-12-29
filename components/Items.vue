<script setup>
import { ref } from 'vue';

let menuitems=ref([
    {
        link:'#',
        img:'/images/menu/kanvas-tablo-kategori-2.jpg',
        title:'KANVAS TABLOLAR'
    },
    {
        link:'#',
        img:'/images/menu/saat-kategori-2.jpg',
        title:'DUVAR SAATLERİ'
    },
    {
        link:'#',
        img:'/images/menu/tasarim-masa-saati-modelleri-kategori.jpg',
        title:'MASA SAATLERİ'
    },
    {
        link:'#',
        img:'/images/menu/metal-ahsap-harita-kategori-2.jpg',
        title:'HARİTALAR'
    },
    ]);
let social=ref([
    {
        ico:'bx bxl-instagram hover:text-purple-600',
        link:'/',
    },
    {
        ico:'bx bxl-twitter hover:text-blue-600',
        link:'/',
    },
    {
        ico:'bx bxl-pinterest hover:text-red-600',
        link:'/',
    },
    {
        ico:'bx bxl-linkedin hover:text-blue-600',
        link:'/',
    },
    {
        ico:'bx bxl-whatsapp hover:text-green-600',
        link:'/',
    },
]);
</script>
<template>
    <div class="w-full m-auto top-0 h-auto flex flex-col items-center content-center">
        <p class="text-3xl p-5">ÖNE ÇIKAN KATEGORİLER</p>
        <span>Istanbul Tablo ev dekorasyon ürünleri kaliteyi sizlerle buluşturur.</span>
        <div class="w-auto h-auto flex mt-5">
            <template v-for="item in menuitems">
                <a :href=item.link class="w-56 h-72 bg-slate-300 m-10 transition-all hover:scale-105 hover:text-green-600">
                    <img :src=item.img class="w-full">
                    <p class="text-xl text-center">{{ item.title }}</p>
                </a>
            </template>
        </div>
        <div class="w-auto h-auto m-24">
            <div class="w-auto info-table p-10 rounded-md">
                <p class="font-bold text-xl mb-5">ISTANBUL TABLO TASARIM'I TANIYOR MUSUN?</p>
                <p class="max-w-6xl font-light">
                    İstanbul Tablo, 1994 yılında kurulmuş bir firmadır ve sanatseverler için mükemmel bir seçenektir. Bizler, kaliteli tablolar sunmak için çalışıyor ve müşterilerimize en iyi hizmeti vermeyi hedefliyoruz.
                    <br/>
                    <br/>
                    Tablolarımız, profesyonel ressamlar tarafından yapılmış ve farklı stil ve tasarımları barındırır. Özel siparişlerde de bulunabilir ve müşterilerimizin istediği her türlü tablo üretebiliriz.
                    <br/>
                    <br/>
                    Bizlere ulaşarak, sanatın güzelliğine dalıp, evinizi dekore etmek için mükemmel tablolar keşfedebilirsiniz. İstanbul Tablo olarak, müşterilerimizin mutlu olmasını ve memnun kalmalarını sağlamayı hedefliyoruz. Bizi tercih ederek, kaliteli bir hizmet ve güzel tablolar elde edebilirsiniz.
                </p>
                <div class="flex items-center mt-5">
                    <button class="pt-2 pb-2 pr-5 pl-5 text-xs font-bold bg-green-500 text-white hover:bg-green-400 rounded-sm">DEVAMINI OKU</button>
                    <button class="pt-2 pb-2 pr-5 pl-5 text-xs font-bold hover:bg-slate-100 rounded-sm border border-slate-400 ml-5 mr-5">BİZE SORUN</button>
                    <template v-for="social in social">
                        <a class="text-2xl mr-3" :href=social.link>
                        <i :class=social.ico></i>
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.info-table{
    box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.03),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.04),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.06);
}
</style>