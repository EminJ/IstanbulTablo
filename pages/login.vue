<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footers.vue'
import { ref } from 'vue';
let close=ref(true);
let comments=ref([
    {
        img:'/images/comments/mehmet_guleryuz.jpg',        
        name:'Mehmet Güleryüz',        
        comment:'Merhaba, ben Istanbul Tablo sistemini kullandım ve gerçekten memnun kaldım. Öncelikle, kaliteli tabloların çeşitliliği beni çok etkiledi. İstediğim her türlü tablo bulabildim ve sipariş vermek de çok kolaydı.',        
        stars:'5',        
        date:'11/22/2020'    
    },
    {
        img:'/images/comments/22012021224710-523cbbcc-da74-430a-b3cb-51fb468b00c2-cs.jpg',        
        name:'Muhsin Kut',        
        comment:'Müşteri temsilcileri çok yardımsever ve her zaman sorularıma cevap verdiler. Özel siparişlerim için de hızlı bir şekilde cevap aldım ve tablonun teslimatı da çok hızlı oldu.',        
        stars:'5',        
        date:'6/12/2021'    
    },
    {
        img:'/images/comments/06022021000614-83b3f705-494e-44b6-8082-bb8d701367e4-cs.jpg',        
        name:'Tülay Tura Börteçene',        
        comment:'Genel olarak, Istanbul Tablo sistemini tavsiye ederim. Kaliteli tablolar ve mükemmel hizmet için bu sistemi tercih etmelisiniz.',        
        stars:'4',        
        date:'1/05/2019'    
    },
    {
        img:'/images/comments/adnancoker.jpg',        
        name:'Adnan Çoker',        
        comment:'Ben bir ressam ve İstanbul Tablo sistemine müşteri olarak ulaştım. İstanbul Tablo nun sunmuş olduğu tablolar gerçekten çok güzel ve profesyonelce yapılmış. Sipariş ettiğim tablo, beklentilerimi aştı ve evime mükemmel bir dokunuş oldu.',        
        stars:'5',        
        date:'9/01/2018'    
    },
    ]);
</script>
<template>
    <div>
        <Navbar/>
        <div class="w-full pt-20 m-auto top-0 h-full flex justify-center pb-10">
            <div class="w-2/5 h-auto text-lg mr-10">
                <img src="/images/IST.png" alt="alt logo" width="200" class="mb-6">
                <p>Merhaba! Istanbul Tablo olarak, müşterilerimize en kaliteli tablo çözümlerini sunmayı hedefliyoruz. Özel tasarım tablo çalışmalarımızla müşterilerimizin isteklerini en iyi şekilde karşılıyor ve onların işyerleri veya evleri için en uygun çözümleri sunuyoruz.<br/><br/>Müşteri memnuniyetini ön planda tutan ekibimizle birlikte, profesyonel hizmet anlayışımızla müşterilerimizin beklentilerini karşılamaya çalışıyoruz. İstanbul'da bulunan atölyemizde üretimlerimizi gerçekleştirirken, aynı zamanda tüm Türkiye'ye hizmet vermekteyiz.<br/><br/>Siz değerli müşterilerimiz için en iyi çözümleri sunmayı amaçladığımızdan, lütfen bizimle iletişime geçin ve size en uygun tablo çözümünü bulalım. İstanbul Tablo olarak, sizleri memnun etmeyi hedefliyor ve sizlere en iyi hizmeti sunmayı amaçlıyoruz.</p>
            </div>
            <div v-if="close" class="w-1/4 h-min p-2 items-center flex" id="login">
                <div class="p-7 h-auto rounded-md bg-white border-2 border-slate-600 mx-auto">
                    <p class=" text-slate-500 text-lg font-bold">Istanbul Tablo Giriş</p>
                    <p class="mt-4 font-bold text-slate-600">E-Posta Adresi</p>
                    <input class="w-72 h-8 bg-slate-200 rounded-sm focus:outline-none focus:border-2 transition-all focus:border-b-slate-500 focus:bg-slate-100" type="text" name="e-mail">
                    <p class="mt-4 font-bold text-slate-600">Şifre Girişi</p>
                    <input class="w-72 h-8 bg-slate-200 rounded-sm focus:outline-none focus:border-2 transition-all focus:border-b-slate-500 focus:bg-slate-100" type="text" name="e-mail">
                    <p class="mt-4 w-full">
                        <input type="checkbox" name="beni_unutma"> <span>Beni Unutma <a href="#" class="text-sm text-green-600 ml-3">Şifrenizi mi unuttunuz?</a></span>
                    </p>
                    <p class="mt-4 w-full">
                        <button class="w-full h-8 bg-slate-500 text-white font-bold rounded-sm hover:bg-slate-400">Giriş Yap</button>
                    </p>
                    <p class="text-center py-2">veya</p>
                    <button class="mt-2 w-full bg-blue-500 hover:bg-blue-400 text-white py-2 text-sm font-bold"><i class="bx bxl-google"></i> Google ile Giriş Yap</button>
                    <button @click="close = !close" class="mt-2 w-full bg-slate-400 hover:bg-slate-300 text-white py-2 text-sm font-bold"><i class="bx bx-envelope"></i> E-Posta ile Kayıt Ol</button>
                </div>
            </div>
            <div v-else class="w-1/4 h-min  p-2 items-center" id="register">
                <div class="p-7 h-auto rounded-md bg-white border-2 border-slate-600 m-auto">
                    <p class=" text-slate-500 text-lg font-bold">Istanbul Tablo Kayıt</p>
                    <p class="mt-4 font-bold text-slate-600">Ad, Soyad Girişi</p>
                    <input class="w-full h-8 bg-slate-200 rounded-sm focus:outline-none focus:border-2 transition-all focus:border-b-slate-500 focus:bg-slate-100" type="text" name="e-mail">
                    <p class="mt-4 font-bold text-slate-600">E-Posta Adresi</p>
                    <input class="w-full h-8 bg-slate-200 rounded-sm focus:outline-none focus:border-2 transition-all focus:border-b-slate-500 focus:bg-slate-100" type="text" name="e-mail">
                    <p class="mt-4 font-bold text-slate-600">Şifre Girişi</p>
                        <input class="w-full h-8 bg-slate-200 rounded-sm focus:outline-none focus:border-2 transition-all focus:border-b-slate-500 focus:bg-slate-100" type="text" name="e-mail">
                    <p class="mt-4 w-full">
                        <button class="w-full h-8 bg-slate-500 text-white font-bold rounded-sm hover:bg-slate-400">Kayıt Ol</button>
                    </p>
                    <p class="text-center py-2">veya</p>
                    <button class="mt-2 w-full bg-blue-500 hover:bg-blue-400 text-white py-2 text-sm font-bold"><i class="bx bxl-google"></i> Google ile Kayıt Ol</button>
                    <button @click="close = !close" class="mt-2 w-full bg-slate-400 hover:bg-slate-300 text-white py-2 text-sm font-bold"><i class="bx bx-envelope"></i> E-Posta ile Giriş Yap</button>
                </div>
            </div>
        </div>
        <div class="w-full h-auto flex content-center justify-center flex-nowrap items-start">
            <div class="w-80 h-auto p-3 rounded-xl bg-slate-200 mr-4" v-for="comment in comments">
                <div class="flex items-center w-full h-auto border-b border-b-slate-600 pb-3">
                    <img :src=comment.img class="w-9 h-9 rounded-full bg-slate-500">
                    <p class="ml-3">{{comment.name}}</p>
                </div>
                <div class="text-3xl mt-3">
                    “<span class="font-light italic text-sm">{{comment.comment}}</span>”
                </div>
                <div class="mt-3 flex justify-between">
                    <p >
                        <span class="bx bxs-star text-orange-500" v-for="n in parseInt(comment.stars)"></span>
                        <span v-if="parseInt(comment.stars)<5" class="bx bxs-star" v-for="n in 5-parseInt(comment.stars)"></span>

                    </p>
                    <span class="text-sm">{{ comment.date }}</span>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>