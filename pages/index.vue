<script setup>
import Main from '../components/Main.vue'
import Items from '../components/Items.vue'
import Footers from '../components/Footers.vue'
</script>
<template>
  <div>
    <Main/>
    <Items/>
    <Footers/>
  </div>
</template>

<style>
@import "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap";
@import "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css";
body{
  font-family: 'Quicksand', sans-serif;
}
a{
    text-decoration: none;
    color: #000;
}
</style>