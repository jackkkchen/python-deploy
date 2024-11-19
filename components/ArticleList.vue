<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article._path">
        <NuxtLink :to="`/python-basic/${article._file.split('/').pop().replace('.md', '')}`">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { queryContent } from '@nuxt/content' // 导入 queryContent
import { ref, onMounted } from 'vue'

const articles = ref([]) // 用于存储文章
const error = ref(null) // 用于存储错误信息

// 使用 async 函数获取文章
const fetchArticles = async () => {
  try {
    const { data } = await queryContent('/python-basic').find() // 查询内容
    articles.value = data // 将获取到的文章赋值给 articles
  } catch (err) {
    error.value = err // 捕获错误
    console.error("Error fetching articles:", err)
  }
}

// 在组件挂载时调用 fetchArticles 函数
onMounted(fetchArticles)
</script>