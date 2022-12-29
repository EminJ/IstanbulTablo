<script setup>
import { ref } from 'vue'
const search_active = ref(true);
</script>

<template>
    <div class="navbar w-full pr-12 pl-12 h-14 mt-2 flex justify-between items-center flex-nowrap flex-row fixed  shadow-lg shadow-grey-500/50 bg-white z-50">
        <nuxt-link to="/">
            <img src="/images/IST.png" width="96">
        </nuxt-link>
        <ul class="flex">
            <li v-show="search_active" class="transition-colors rounded-xl hover:bg-slate-200">
                <nuxt-link to="/login">Giriş Yap</nuxt-link>
            </li>
            <li v-show="search_active" class="transition-colors rounded-xl hover:bg-slate-200">
                <nuxt-link to="/sepet"><i class="bx bx-basket"></i> Sepetim</nuxt-link>
            </li>
            <li v-show="!search_active" class="transition-colors rounded-xl hover:bg-slate-300">
                <i @click="search_active=!search_active" class="bx bx-arrow-back"></i>
            </li>
            <li v-show="!search_active">
                <div class="searchbox">
                    <input type="text" name="search" id="search" class="font-normal" placeholder="Sayfada Ara..">
                </div>
            </li>
            <li v-show="!search_active" class="transition-colors rounded-xl hover:bg-slate-400"><i
                    class="bx bx-search"></i></li>
            <li v-show="search_active" class="transition-colors rounded-xl hover:bg-slate-400"><i @click="search_active=!search_active"
                    class="bx bx-search"></i></li>
        </ul>
    </div>
</template>

<style>
.navbar ul li {
    margin-left: 10px;
    font-size: 1rem;
    padding: 5px 10px;
    font-weight: 600;
}

.basket {
    border: 1px solid #57370D;
    border-radius: 0.3rem;
    transition: 0.2s;
}

.left-logo {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.7rem;
}

.searchbox {
    width: 235px;
    height: 100%;
    border-radius: 0.3rem;
    display: flex;
    flex-wrap: nowrap;
    padding-left: 5px;
}

#search {
    width: 240px;
    border-radius: 0.3rem 0 0 0.3rem;
    border: 0;
}

#search:focus {
    outline: none;
}
</style>

