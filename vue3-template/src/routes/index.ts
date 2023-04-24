import { createRouter, createWebHistory} from "vue-router";

// 获取pages下的所有页面
const pages = import.meta.glob('../pages/**/*.vue')
const pagePaths = Object.keys(pages)

// 循环pagePaths，将每个元素中的字符串“.”替换为“@/pages”
const routes = pagePaths.map(path => {
  // @ts-ignore
  const name = path.match(/\.\/pages\/(.*)\.vue$/)[1].toLowerCase()
  const component = () => import(`${path}`)

  return {
    path: `/${name ?? 'home'}`,
    name: name, // 将页面名称添加到路由名称中
    component // 动态导入页面组件
  }
})

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
