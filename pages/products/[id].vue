<template>
  <div>
    <p>Product Detail For {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur numquam aspernatur dolorum ex quo ipsum ab quas reiciendis aut alias cupiditate nam ut incidunt blanditiis, fugiat, unde repudiandae neque? Dolore.</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({ layout: "products" });
</script>

<style scoped></style>
