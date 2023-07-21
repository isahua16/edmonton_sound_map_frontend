import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import ConnectPage from "@/views/ConnectPage.vue";
import UploadPage from "@/views/UploadPage.vue";
import AdminPage from "@/views/AdminPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import SubmissionsPage from "@/views/SubmissionsPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: `/`,
    component: HomePage,
  },
  {
    path: `/signup`,
    component: RegisterPage,
  },
  {
    path: `/login`,
    component: ConnectPage,
  },
  {
    path: `/upload`,
    component: UploadPage,
  },
  {
    path: `/admin`,
    component: AdminPage,
  },
  {
    path: `/profile`,
    component: ProfilePage,
  },
  {
    path: `/submissions`,
    component: SubmissionsPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
// let old_tags = document.querySelectorAll(`meta`);
// for (let i = 0; i < old_tags.length; i++) {
//   old_tags[i].remove();
// }
// let new_tags = to.meta;
// document.querySelector(`title`).innerHTML = new_tags[0].title;
// for (let i = 1; i < new_tags.length; i++) {
//   document
//     .querySelector(`head`)
//     .insertAdjacentHTML(
//       `beforeend`,
//       `<meta name="${new_tags[i].name}" content="${new_tags[i].content}">`
//     );
// }
// document.querySelector(`head`).insertAdjacentHTML(
//   `afterbegin`,
//   `
//   <meta charset="utf-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width,initial-scale=1.0">`
// );
// from;
// next();
// });

export default router;
