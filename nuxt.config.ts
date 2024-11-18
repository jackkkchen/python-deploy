import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devServer: {
    port: 3001,
    host: '0.0.0.0'
  },
  modules: [
    '@nuxt/content'
  ],
  css: [
    // 使用相对路径
    './assets/css/main.css'
  ],
  app: {
    head: {
      title: 'Python学习平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  content: {
    // 添加 payloadExtraction 配置
    payloadExtraction: false // 根据需要设置为 true 或 false
  }
})