<script setup>
const navItems = [
  { 
    title: 'Python基础', 
    path: '/python-basic',
  },
  { 
    title: 'Web开发', 
    path: '/web-dev',
  },
  { 
    title: '数据分析', 
    path: '/data-analysis',
  },
  { 
    title: '机器学习', 
    path: '/machine-learning',
  }
]
</script>

<template>
  <nav class="bg-gray-800 text-white py-4">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <NuxtLink to="/" class="text-2xl font-bold hover:text-gray-300">
        Python学习
      </NuxtLink>
      
      <div class="flex items-center space-x-8">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path"
          class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          :class="{'bg-gray-900': $route.path === item.path}"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>