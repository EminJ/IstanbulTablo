<script setup>
    const route = useRoute()
    console.log(route.params.category)
const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Vue POST Request Example" })
  };
  fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    .then(response => response.json())
    .then(data => (this.postId = data.id));
</script>

<template>
    <div>
        asd
    </div>
</template>