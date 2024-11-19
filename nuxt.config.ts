import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devServer: {
    port: 3001,
    host: '0.0.0.0'
  },
  
  ssr: true,
  
  modules: [
    '@nuxt/content'
  ],
  
  css: [
    './assets/css/main.css'
  ],
  
  app: {
    // 替换为您的 GitHub 仓库名称
    baseURL: '/python-deploy/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Python学习平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  
  // 添加以下配置来生成静态文件
  nitro: {
    preset: 'github-pages',
    output: {
      dir: './docs', // 输出到 docs 目录
      publicDir: './docs'
    }
  }
})
