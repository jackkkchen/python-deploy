<template>
  <main class="min-h-[calc(100vh-var(--header-height))]">
    <ContentDoc v-slot="{ doc }">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <!-- 添加调试信息 -->
        <pre>{{ route.params }}</pre>
        <pre>{{ doc }}</pre>
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <!-- 左侧导航 -->
          <div class="lg:col-span-2">
            <aside class="hidden lg:block lg:sticky lg:top-[--header-height] py-8 lg:px-4">
              <ContentNavigation v-slot="{ navigation }" :query="queryContent('/python-basic')">
                <TutNav :nav="navigation[0].children" />
              </ContentNavigation>
            </aside>
          </div>
          
          <!-- 中间内容区 -->
          <div class="lg:col-span-8">
            <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
              <div class="lg:col-span-8">
                <article>
                  <div class="border-b border-gray-200 py-8">
                    <h1 class="text-3xl font-bold">{{ doc.title }}</h1>
                    <p class="mt-4 text-gray-600">{{ doc.description }}</p>
                  </div>
                  <div class="mt-8 prose max-w-none">
                    <ContentRenderer :value="doc" />
                  </div>
                </article>
              </div>
              
              <!-- 右侧目录 -->
              <div class="lg:col-span-2">
                <BodyNav :toc="doc.body.toc" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentDoc>
  </main>
</template>

<script setup>
const route = useRoute()
console.log('Route params:', route.params)
console.log('Current path:', route.path)
</script>