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
        name: `robots`,
        content: ``,
      },
      {
        name: `description`,
        content: `Discover Edmonton's soundscape with our community-driven sound map. Listen to the evolving sounds of Edmonton and be part of preserving its auditory heritage.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `Edmonton Sound Map, sonic heritage, soundscape, community, auditory archive, urban experiences, audio recordings, Edmonton sounds, city identity, preserving heritage, acoustic environment, urban symphony, sound map`,
      },
      {
        property: `og:url`,
        content: `https://edmontonsoundmap.com`,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: `og:title`,
        content: `Edmonton Sound Map: Preserving the City's Sonic Heritage`,
      },
      {
        property: `og:description`,
        content: `Discover Edmonton's soundscape with our community-driven sound map. Listen to the evolving sounds of Edmonton and be part of preserving its auditory heritage.`,
      },
      {
        property: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        property: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        property: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        property: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        property: `twitter:title`,
        content: `Edmonton Sound Map: Preserving the City's Sonic Heritage`,
      },
      {
        property: `twitter:description`,
        content: `Discover Edmonton's soundscape with our community-driven sound map. Listen to the evolving sounds of Edmonton and be part of preserving its auditory heritage.`,
      },
      {
        property: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
    ],
  },
  {
    path: `/signup`,
    component: RegisterPage,
    meta: [
      {
        title: `Sign Up | Edmonton Sound Map`,
      },
      {
        name: `robots`,
        content: ``,
      },
      {
        name: `description`,
        content: `Join the Edmonton Sound Map community and be a part of preserving the city's sonic heritage. Sign up now to contribute your audio recordings, explore the diverse soundscape of Edmonton, and connect with fellow sound enthusiasts.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `sign up, join community, Edmonton Sound Map, sonic heritage, soundscape, audio recordings, sound enthusiasts, urban experiences, preserve heritage, field recording`,
      },
      {
        property: `og:url`,
        content: `https://edmontonsoundmap.com/signup`,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: `og:title`,
        content: `Sign Up for Edmonton Sound Map | Join Our Community`,
      },
      {
        property: `og:description`,
        content: `Join the Edmonton Sound Map community and be a part of preserving the city's sonic heritage. Sign up now to contribute your audio recordings, explore the diverse soundscape of Edmonton, and connect with fellow sound enthusiasts.`,
      },
      {
        property: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        property: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        property: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        property: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        property: `twitter:title`,
        content: `Sign Up for Edmonton Sound Map | Join Our Community`,
      },
      {
        property: `twitter:description`,
        content: `Join the Edmonton Sound Map community and be a part of preserving the city's sonic heritage. Sign up now to contribute your audio recordings, explore the diverse soundscape of Edmonton, and connect with fellow sound enthusiasts.`,
      },
      {
        property: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
    ],
  },
  {
    path: `/login`,
    component: ConnectPage,
    meta: [
      {
        title: `Log In | Edmonton Sound Map`,
      },
      {
        name: `robots`,
        content: ``,
      },
      {
        name: `description`,
        content: `Log in to your Edmonton Sound Map account and access your personalized dashboard. Join the community, contribute audio recordings, and explore the sonic heritage of Edmonton.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `login, access account, Edmonton Sound Map, sonic heritage, sound community, audio recordings, urban soundscape`,
      },
      {
        property: `og:url`,
        content: `https://edmontonsoundmap.com/login`,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: `og:title`,
        content: `Login to Edmonton Sound Map | Access Your Account`,
      },
      {
        property: `og:description`,
        content: `Log in to your Edmonton Sound Map account and access your personalized dashboard. Join the community, contribute audio recordings, and explore the sonic heritage of Edmonton.`,
      },
      {
        property: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        property: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        property: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        property: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        property: `twitter:title`,
        content: `Login to Edmonton Sound Map | Access Your Account`,
      },
      {
        property: `twitter:description`,
        content: `Log in to your Edmonton Sound Map account and access your personalized dashboard. Join the community, contribute audio recordings, and explore the sonic heritage of Edmonton.`,
      },
      {
        property: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
    ],
  },
  {
    path: `/about`,
    component: AboutPage,
    meta: [
      {
        title: `About | Edmonton Sound Map`,
      },
      {
        name: `robots`,
        content: ``,
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
    path: `/upload`,
    component: UploadPage,
    meta: [
      {
        title: `Upload | Edmonton Sound Map`,
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
    path: `/admin`,
    component: AdminPage,
    meta: [
      {
        title: `Admin | Edmonton Sound Map`,
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
    path: `/profile`,
    component: ProfilePage,
    meta: [
      {
        title: `Profile | Edmonton Sound Map`,
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
    path: `/submissions`,
    component: SubmissionsPage,
    meta: [
      {
        title: `Submissions | Edmonton Sound Map`,
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
    path: `/verify/:token`,
    component: VerifyUserPage,
    meta: [
      {
        title: `Verify Email | Edmonton Sound Map`,
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
    path: `/forgot`,
    component: ForgotPassword,
    meta: [
      {
        title: `Forgot Password | Edmonton Sound Map`,
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
    path: `/reset/:token`,
    component: ResetPassword,
    meta: [
      {
        title: `Reset Password | Edmonton Sound Map`,
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
