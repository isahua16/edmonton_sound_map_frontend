import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import ConnectPage from "@/views/ConnectPage.vue";
import UploadPage from "@/views/UploadPage.vue";
import AdminPage from "@/views/AdminPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import SubmissionsPage from "@/views/SubmissionsPage.vue";
import VerifyUserPage from "@/views/VerifyUserPage.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import AboutPage from "@/views/AboutPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: `/`,
    component: HomePage,
    meta: [
      {
        title: `Home | Edmonton Sound Map`,
      },
      {
        name: `description`,
        content: ``,
      },
      {
        name: `author`,
        content: ``,
      },
      {
        name: `keywords`,
        content: ``,
      },
      {
        property: `og:url`,
        content: ``,
      },
      {
        property: `og:type`,
        content: ``,
      },
      {
        property: `og:title`,
        content: ``,
      },
      {
        property: `og:description`,
        content: ``,
      },
      {
        property: `og:image`,
        content: ``,
      },
      {
        property: `og:site_name`,
        content: ``,
      },
      {
        property: `twitter:card`,
        content: ``,
      },
      {
        property: `twitter:site`,
        content: ``,
      },
      { property: `twitter:title`, content: `` },
      {
        property: `twitter:description`,
        content: ``,
      },
      {
        property: `twitter:image`,
        content: ``,
      },
    ],
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
  {
    path: `/verify/:token`,
    component: VerifyUserPage,
  },
  {
    path: `/forgot`,
    component: ForgotPassword,
  },
  {
    path: `/reset/:token`,
    component: ResetPassword,
  },
  {
    path: `/about`,
    component: AboutPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let old_tags = document.querySelectorAll(`meta`);
  for (let i = 0; i < old_tags.length; i++) {
    old_tags[i].remove();
  }
  let new_tags = to.meta;
  document.querySelector(`title`).innerHTML = new_tags[0].title;
  for (let i = 1; i < new_tags.length; i++) {
    document
      .querySelector(`head`)
      .insertAdjacentHTML(
        `beforeend`,
        `<meta name="${new_tags[i].name}" content="${new_tags[i].content}">`
      );
  }
  document.querySelector(`head`).insertAdjacentHTML(
    `afterbegin`,
    `
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-00BLJDY7X1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-00BLJDY7X1');
  </script>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">`
  );
  from;
  next();
});

export default router;
