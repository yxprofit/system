import Vue from 'vue'
import Router from 'vue-router'
// 引入需要去的页面
Vue.use(Router)
// 这里是路由 定位到具体的页面
let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/student/course/mycourse',
      components: {
        default: resolve => require(['@/page/index/index.vue'], resolve)
      },
      meta: {
        title: '优想教育'
      }
    },
    {
      path: '/student',
      name: 'Student',
      components: {
        default: resolve => require(['@/page/student/student.vue'], resolve)
      },
      redirect: '/student/course/mycourse',
      children: [
        {
          path: 'course',
          redirect: '/student/course/mycourse',
          components: {
            default: resolve => require(['@/page/student/course/course.vue'], resolve)
          },
          children: [
            {
              path: 'mycourse',
              components: {
                default: resolve => require(['@/page/student/course/mycourse/mycourse.vue'], resolve)
              }
            },
            {
              path: 'mycourse/view',
              components: {
                default: resolve => require(['@/page/student/course/mycourse/mycourseview.vue'], resolve)
              }
            },
            {
              path: 'mycourse/material',
              components: {
                default: resolve => require(['@/page/student/course/mycourse/material.vue'], resolve)
              }
            },
            {
              path: 'mytest',
              components: {
                default: resolve => require(['@/page/student/course/mytest/mytest.vue'], resolve)
              }
            },
            {
              path: 'works',
              components: {
                default: resolve => require(['@/page/student/course/works/works.vue'], resolve)
              }
            },            
          ]
        },
        {
          path: 'task',
          components: {
            default: resolve => require(['@/page/student/task/task.vue'], resolve)
          }
        }
      ],
      meta: {
        title: '优想教育|学生端'
      }
    },
    // teaccher
    {
      path: '/teachers',
      name: 'teachers',
      components: {
        default: resolve => require(['@/page/teachers/index.vue'], resolve)
      },
      redirect: '/teachers/course/mycourse',
      children: [
        {
          path: 'course',
          redirect: '/teachers/course/mycourse',
          components: {
            default: resolve => require(['@/page/teachers/course/course.vue'], resolve)
          },
          children: [
            {
              path: 'mycourse',
              components: {
                default: resolve => require(['@/page/teachers/course/mycourse/index.vue'], resolve)
              }
            },
            {
              path: 'mycourse/view',
              components: {
                default: resolve => require(['@/page/teachers/course/mycourse/view.vue'], resolve)
              }
            },
            {
              path: 'trends',
              components: {
                default: resolve => require(['@/page/teachers/course/trends/index.vue'], resolve)
              }
            },
            {
              path: 'works',
              components: {
                default: resolve => require(['@/page/teachers/course/works/index.vue'], resolve)
              }
            }
          ]
        }
      ],
      meta: {
        title: '优想教育教师端'
      }
    },
    // dome
    {
      path: '/waterfall',
      name: 'Waterfall',
      components: {
        default: resolve => require(['@/page/waterfall/waterfall.vue'], resolve)
      },
      meta: {
        title: '优想教育'
      }
    },
    {
      path: '/ueditor',
      name: 'ueditor',
      components: {
        default: resolve => require(['@/page/ueditor/ueditor.vue'], resolve)
      },
      meta: {
        title: '富文本'
      }
    },
    // 找不到路由的错误页面
    {
      path: '/*',
      name: 'Error',
      components: {
        default: resolve => require(['@/page/error/error'], resolve)
      },
      meta: {
        title: '404'
      }
    }
  ]
})
// 路由钩子函数 用来渲染网页的title
router.afterEach((route) => {
  if (route.meta.title) {
    document.title = route.meta.title
  }
  window.scrollTo(0, 0)
})

export default router
