<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Python 学习平台</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in navItems" :key="item.path" 
             class="p-6 border rounded-lg hover:shadow-lg">
          <NuxtLink :to="item.path">
            <h2 class="text-2xl font-bold mb-2">{{ item.title }}</h2>
            <p class="text-gray-600">{{ item.description }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const navItems = [
    { 
      title: 'Python基础', 
      path: '/python-basic',
      description: '学习 Python 的基础语法和概念'
    }
  ]
  </script>