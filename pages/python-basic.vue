<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Python基础教程</h1>
    
    <div class="grid gap-4">
      <ContentList path="/python-basic" v-slot="{ list }">
        <div v-if="list && list.length > 0" v-for="article in list" :key="article._path" 
             class="p-4 border rounded hover:shadow-lg">
          <!-- 修改链接生成方式 -->
          <NuxtLink :to="`/python-basic/${article._file.split('/').pop().replace('.md', '')}`">
            <h2 class="text-xl font-bold">{{ article.title }}</h2>
            <p class="text-gray-600">{{ article.description }}</p>
          </NuxtLink>
          <!-- 添加调试信息 -->
          <pre class="text-sm mt-2">Debug: {{ article._path }}</pre>
        </div>
        <div v-else>
          <p class="text-gray-600">没有找到相关文章。</p>
        </div>
      </ContentList>
    </div>
  </div>
</template>

<script setup>
// 添加调试日志
const { data: articles, error } = await useAsyncData('articles', () => 
  queryContent('/python-basic').find()
)

// 错误处理
if (error.value) {
  console.error('Error fetching articles:', error.value)
  // 可以在这里显示一个用户友好的错误消息
}
console.log('Available articles:', articles.value)
</script>