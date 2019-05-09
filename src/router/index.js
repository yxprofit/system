import Vue from "vue";
import Router from "vue-router";
// 引入需要去的页面
Vue.use(Router);
// 这里是路由 定位到具体的页面
let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "Index",
      redirect: "/student/course/mycourse",
      components: {
        default: resolve => require(["@/page/index/index.vue"], resolve)
      },
      meta: {
        title: "优想教育"
      }
    },
    {
      path: "/courseware",
      name: "courseware",
      components: {
        default: resolve => require(["@/page/courseware/index.vue"], resolve)
      }
    },
    {
      path: "/student",
      name: "Student",
      components: {
        default: resolve => require(["@/page/student/student.vue"], resolve)
      },
      redirect: "/student/course/mycourse",
      children: [
        {
          path: "course",
          redirect: "/student/course/mycourse",
          components: {
            default: resolve =>
              require(["@/page/student/course/course.vue"], resolve)
          },
          children: [
            {
              path: "mycourse",
              components: {
                default: resolve =>
                  require([
                    "@/page/student/course/mycourse/mycourse.vue"
                  ], resolve)
              }
            },
            {
              path: "mycourse/view",
              components: {
                default: resolve =>
                  require([
                    "@/page/student/course/mycourse/mycourseview.vue"
                  ], resolve)
              }
            },
            {
              path: "mycourse/material",
              components: {
                default: resolve =>
                  require([
                    "@/page/student/course/mycourse/material.vue"
                  ], resolve)
              }
            },
            {
              path: "mycourse/team",
              components: {
                default: resolve =>
                  require(["@/page/student/course/mycourse/team.vue"], resolve)
              }
            },
            {
              path: "mytest",
              components: {
                default: resolve =>
                  require(["@/page/student/course/mytest/mytest.vue"], resolve)
              }
            },
            {
              path: "works",
              components: {
                default: resolve =>
                  require(["@/page/student/course/works/index.vue"], resolve)
              }
            }
            // {
            //   path: 'task',
            //   components: {
            //     default: resolve => require(['@/page/student/task/task.vue'], resolve)
            //   }
            // }
          ]
        },
        {
          path: "/student/task",
          redirect: "/student/task/received",
          components: {
            default: resolve =>
              require(["@/page/teachers/course/task/main.vue"], resolve)
          },
          children: [
            {
              path: "received",
              components: {
                default: resolve =>
                  require(["@/page/teachers/course/task/received.vue"], resolve)
              }
            },
            {
              path: "sponsor",
              components: {
                default: resolve =>
                  require(["@/page/teachers/course/task/sponsor.vue"], resolve)
              }
            }
          ]
        },
        {
          path: "/student/task/sponsor/detail",
          components: {
            default: resolve =>
              require(["@/page/teachers/course/task/main2.vue"], resolve)
          },
          children: [
            {
              path: "2",
              components: {
                default: resolve =>
                  require([
                    "@/page/teachers/course/task/task_detail.vue"
                  ], resolve)
              }
            }
          ]
        }
      ],
      meta: {
        title: "优想教育|学生端"
      }
    },
    // teaccher
    {
      path: "/teachers",
      name: "teachers",
      components: {
        default: resolve => require(["@/page/teachers/index.vue"], resolve)
      },
      redirect: "/teachers/course/mycourse",
      children: [
        {
          path: "course",
          redirect: "/teachers/course/mycourse",
          components: {
            default: resolve =>
              require(["@/page/teachers/course/course.vue"], resolve)
          },
          children: [
            {
              path: "mycourse",
              components: {
                default: resolve =>
                  require([
                    "@/page/teachers/course/mycourse/index.vue"
                  ], resolve)
              }
            },
            {
              path: "mycourse/view",
              components: {
                default: resolve =>
                  require(["@/page/teachers/course/mycourse/view.vue"], resolve)
              }
            },
            // {
            //   path: 'task',
            //   components: {
            //     default: resolve => require(['@/page/teachers/course/task/index.vue'], resolve)
            //   }
            // },
            {
              path: "works",
              components: {
                default: resolve =>
                  require(["@/page/teachers/course/works/index.vue"], resolve)
              }
            }
          ]
        },
        {
          path: "/teacher/task",
          redirect: "/teacher/task/received",
          components: {
            default: resolve =>
              require(["@/page/teachers/course/task/index.vue"], resolve)
          },
          children: [
            {
              path: "received",
              components: {
                default: resolve =>
                  require(["@/page/teachers/course/task/received.vue"], resolve)
              }
            },
            {
              path: "sponsor",
              components: {
                default: resolve =>
                  require(["@/page/teachers/course/task/sponsor.vue"], resolve)
              }
            }
          ]
        },
        {
          path: "/teacher/task/sponsor/detail",
          components: {
            default: resolve =>
              require(["@/page/teachers/course/task/main2.vue"], resolve)
          },
          children: [
            {
              path: "2",
              components: {
                default: resolve =>
                  require([
                    "@/page/teachers/course/task/task_detail.vue"
                  ], resolve)
              }
            }
          ]
        }
      ],
      meta: {
        title: "优想教育教师端"
      }
    },
    // dome
    {
      path: "/waterfall",
      name: "Waterfall",
      components: {
        default: resolve => require(["@/page/waterfall/waterfall.vue"], resolve)
      },
      meta: {
        title: "优想教育"
      }
    },
    {
      path: "/ueditor",
      name: "ueditor",
      components: {
        default: resolve => require(["@/page/ueditor/ueditor.vue"], resolve)
      },
      meta: {
        title: "富文本"
      }
    },
    {
      path: "/questionnaire",
      components: {
        default: resolve => require(["@/page/questionnaire/index.vue"], resolve)
      },
      meta: {
        title: "问卷任务"
      }
    },
    {
      path: "/test_dialog",
      components: {
        default: resolve =>
          require(["@/components/empty/index.vue"], resolve)
      },
      meta: {
        title: "测试弹窗"
      }
    },
    {
      path: "/superiority-clockin",
      redirect: "/superiority-clockin/empty",
      components: {
        default: resolve =>
          require(["@/page/superiority-clockin/index.vue"], resolve)
      },
      meta: {
        title: "优势打卡"
      },
      children: [
        {
          path: "empty",
          components: {
            default: resolve =>
              require(["@/page/superiority-clockin/src/empty.vue"], resolve)
          }
        },
        {
          path: "question",
          components: {
            default: resolve =>
              require(["@/page/superiority-clockin/src/question.vue"], resolve)
          }
        }
      ]
    },
    // 找不到路由的错误页面
    {
      path: "/*",
      name: "Error",
      components: {
        default: resolve => require(["@/page/error/error"], resolve)
      },
      meta: {
        title: "404"
      }
    }
  ]
});
// 路由钩子函数 用来渲染网页的title
router.afterEach(route => {
  if (route.meta.title) {
    document.title = route.meta.title;
  }
  window.scrollTo(0, 0);
});

export default router;
