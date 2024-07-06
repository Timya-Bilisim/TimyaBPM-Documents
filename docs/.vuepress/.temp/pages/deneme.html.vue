<template><div><template>
  <img :src="withBase(logoPath)" />
</template>
</div></template>


<script setup>
import { ref } from 'vue'
import { withBase } from 'vuepress/client'

const logoPath = ref('/images/iss.png')
</script>