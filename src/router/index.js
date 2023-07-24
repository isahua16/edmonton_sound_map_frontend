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
        name: `og:url`,
        content: `https://edmontonsoundmap.com`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Edmonton Sound Map: Preserving the City's Sonic Heritage`,
      },
      {
        name: `og:description`,
        content: `Discover Edmonton's soundscape with our community-driven sound map. Listen to the evolving sounds of Edmonton and be part of preserving its auditory heritage.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Edmonton Sound Map: Preserving the City's Sonic Heritage`,
      },
      {
        name: `twitter:description`,
        content: `Discover Edmonton's soundscape with our community-driven sound map. Listen to the evolving sounds of Edmonton and be part of preserving its auditory heritage.`,
      },
      {
        name: `twitter:image`,
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
        name: `og:url`,
        content: `https://edmontonsoundmap.com/signup`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Sign Up for Edmonton Sound Map | Join Our Community`,
      },
      {
        name: `og:description`,
        content: `Join the Edmonton Sound Map community and be a part of preserving the city's sonic heritage. Sign up now to contribute your audio recordings, explore the diverse soundscape of Edmonton, and connect with fellow sound enthusiasts.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Sign Up for Edmonton Sound Map | Join Our Community`,
      },
      {
        name: `twitter:description`,
        content: `Join the Edmonton Sound Map community and be a part of preserving the city's sonic heritage. Sign up now to contribute your audio recordings, explore the diverse soundscape of Edmonton, and connect with fellow sound enthusiasts.`,
      },
      {
        name: `twitter:image`,
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
        name: `og:url`,
        content: `https://edmontonsoundmap.com/login`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Login to Edmonton Sound Map | Access Your Account`,
      },
      {
        name: `og:description`,
        content: `Log in to your Edmonton Sound Map account and access your personalized dashboard. Join the community, contribute audio recordings, and explore the sonic heritage of Edmonton.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Login to Edmonton Sound Map | Access Your Account`,
      },
      {
        name: `twitter:description`,
        content: `Log in to your Edmonton Sound Map account and access your personalized dashboard. Join the community, contribute audio recordings, and explore the sonic heritage of Edmonton.`,
      },
      {
        name: `twitter:image`,
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
        content: `Learn about the Edmonton Sound Map initiative, a community-driven project dedicated to documenting and preserving the diverse soundscape of Edmonton. Discover the urban symphony that defines our city, contributed by residents and visitors alike.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `about page, Isael Huard, Chris Szott, Edmonton Sound Map, sonic heritage, soundscape, urban symphony, community initiative, audio recordings, city identity, preserve heritage`,
      },
      {
        name: `og:url`,
        content: `https://edmontonsoundmap.com/about`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `About Edmonton Sound Map | Preserving the City's Sonic Heritage`,
      },
      {
        name: `og:description`,
        content: `Learn about the Edmonton Sound Map initiative, a community-driven project dedicated to documenting and preserving the diverse soundscape of Edmonton. Discover the urban symphony that defines our city, contributed by residents and visitors alike.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `About Edmonton Sound Map | Preserving the City's Sonic Heritage`,
      },
      {
        name: `twitter:description`,
        content: `Learn about the Edmonton Sound Map initiative, a community-driven project dedicated to documenting and preserving the diverse soundscape of Edmonton. Discover the urban symphony that defines our city, contributed by residents and visitors alike.`,
      },
      {
        name: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
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
        name: `robots`,
        content: ``,
      },
      {
        name: `description`,
        content: `Contribute your audio recordings to the Edmonton Sound Map and be part of preserving the city's sonic heritage. Share the sounds that define Edmonton's unique soundscape and connect with fellow sound enthusiasts.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `upload page, field recordings, landmarks, Edmonton Sound Map, contribute audio recordings, sonic heritage, soundscape, sound enthusiasts, urban symphony, community initiative`,
      },
      {
        name: `og:url`,
        content: `https://edmontonsoundmap.com/upload`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Upload to Edmonton Sound Map | Contribute Your Audio Recordings`,
      },
      {
        name: `og:description`,
        content: `Contribute your audio recordings to the Edmonton Sound Map and be part of preserving the city's sonic heritage. Share the sounds that define Edmonton's unique soundscape and connect with fellow sound enthusiasts.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Upload to Edmonton Sound Map | Contribute Your Audio Recordings`,
      },
      {
        name: `twitter:description`,
        content: `Contribute your audio recordings to the Edmonton Sound Map and be part of preserving the city's sonic heritage. Share the sounds that define Edmonton's unique soundscape and connect with fellow sound enthusiasts.`,
      },
      {
        name: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
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
        name: `robots`,
        content: ``,
      },
      {
        name: `description`,
        content: `Access the admin dashboard of the Edmonton Sound Map. Review audio submissions and oversee community contributions to preserve the city's sonic heritage.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `admin dashboard, Edmonton Sound Map, user management, audio submissions, community contributions, sonic heritage, urban soundscape`,
      },
      {
        name: `og:url`,
        content: `https://edmontonsoundmap.com/admin`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Admin Dashboard | Edmonton Sound Map`,
      },
      {
        name: `og:description`,
        content: `Access the admin dashboard of the Edmonton Sound Map. Review audio submissions and oversee community contributions to preserve the city's sonic heritage.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Admin Dashboard | Edmonton Sound Map`,
      },
      {
        name: `twitter:description`,
        content: `Access the admin dashboard of the Edmonton Sound Map. Review audio submissions and oversee community contributions to preserve the city's sonic heritage.`,
      },
      {
        name: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
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
        name: `robots`,
        content: ``,
      },
      {
        name: `description`,
        content: `View and manage your profile on the Edmonton Sound Map. Connect with other members, showcase your audio contributions, and explore the sounds that define Edmonton's rich sonic heritage.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `profile page, Edmonton Sound Map, manage profile, audio contributions, sound enthusiasts, sonic heritage, urban soundscape`,
      },
      {
        name: `og:url`,
        content: `https://edmontonsoundmap.com/profile`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Your Edmonton Sound Map Profile | View and Manage Your Public Profile`,
      },
      {
        name: `og:description`,
        content: `View and manage your profile on the Edmonton Sound Map. Connect with other members, showcase your audio contributions, and explore the sounds that define Edmonton's rich sonic heritage.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Your Edmonton Sound Map Profile | View and Manage Your Public Profile`,
      },
      {
        name: `twitter:description`,
        content: `View and manage your profile on the Edmonton Sound Map. Connect with other members, showcase your audio contributions, and explore the sounds that define Edmonton's rich sonic heritage.`,
      },
      {
        name: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
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
        content: `Explore all the sounds you have contributed to Edmonton Sound Map. Immerse yourself in the diverse soundscape of Edmonton, contributed by the community of sound enthusiasts and residents.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `recordings, submissions, locations, landmarks, Edmonton Sound Map, sonic heritage, soundscape, audio contributions, sound enthusiasts, urban symphony`,
      },
      {
        name: `og:url`,
        content: `https://edmontonsoundmap.com/submissions`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Your Edmonton Sound Map Submissions | Access All of Your Recordings`,
      },
      {
        name: `og:description`,
        content: `Explore all the sounds you have contributed to Edmonton Sound Map. Immerse yourself in the diverse soundscape of Edmonton, contributed by the community of sound enthusiasts and residents.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Your Edmonton Sound Map Submissions | Access All of Your Recordings`,
      },
      {
        name: `twitter:description`,
        content: `Explore all the sounds you have contributed to Edmonton Sound Map. Immerse yourself in the diverse soundscape of Edmonton, contributed by the community of sound enthusiasts and residents.`,
      },
      {
        name: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
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
        name: `robots`,
        content: ``,
      },
      {
        name: `description`,
        content: `Verify your email address to join the Edmonton Sound Map community. Confirm your registration and gain access to contribute audio recordings, explore the city's sonic heritage, and connect with other sound enthusiasts.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `email verification, Edmonton Sound Map, community registration, sonic heritage, audio contributions, sound enthusiasts, urban soundscape`,
      },
      {
        name: `og:url`,
        content: `https://edmontonsoundmap.com/verify`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Verify Your Email | Edmonton Sound Map`,
      },
      {
        name: `og:description`,
        content: `Verify your email address to join the Edmonton Sound Map community. Confirm your registration and gain access to contribute audio recordings, explore the city's sonic heritage, and connect with other sound enthusiasts.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Verify Your Email | Edmonton Sound Map`,
      },
      {
        name: `twitter:description`,
        content: `Verify your email address to join the Edmonton Sound Map community. Confirm your registration and gain access to contribute audio recordings, explore the city's sonic heritage, and connect with other sound enthusiasts.`,
      },
      {
        name: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
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
        name: `robots`,
        content: ``,
      },
      {
        name: `description`,
        content: `Recover your password for the Edmonton Sound Map account. Enter your email address, and we'll send you instructions to reset your password and regain access to your profile and contributions.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `forgot password, password recovery, Edmonton Sound Map, password reset, user account, profile access`,
      },
      {
        name: `og:url`,
        content: `https://edmontonsoundmap.com/forgot`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Forgot My Password | Edmonton Sound Map`,
      },
      {
        name: `og:description`,
        content: `Recover your password for the Edmonton Sound Map account. Enter your email address, and we'll send you instructions to reset your password and regain access to your profile and contributions.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Forgot My Password | Edmonton Sound Map`,
      },
      {
        name: `twitter:description`,
        content: `Recover your password for the Edmonton Sound Map account. Enter your email address, and we'll send you instructions to reset your password and regain access to your profile and contributions.`,
      },
      {
        name: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
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
        name: `robots`,
        content: ``,
      },
      {
        name: `description`,
        content: `Reset your password for the Edmonton Sound Map account. Create a new password to secure your profile and regain access to your contributions and community activities.`,
      },
      {
        name: `author`,
        content: `Isael Huard`,
      },
      {
        name: `keywords`,
        content: `reset password, password reset, Edmonton Sound Map, new password, secure profile, access contributions`,
      },
      {
        name: `og:url`,
        content: `https://edmontonsoundmap.com/reset`,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `Reset My Password | Edmonton Sound Map`,
      },
      {
        name: `og:description`,
        content: `Reset your password for the Edmonton Sound Map account. Create a new password to secure your profile and regain access to your contributions and community activities.`,
      },
      {
        name: `og:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
      },
      {
        name: `og:site_name`,
        content: `Edmonton Sound Map`,
      },
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `https://twitter.com/YEGsoundmap`,
      },
      {
        name: `twitter:title`,
        content: `Reset My Password | Edmonton Sound Map`,
      },
      {
        name: `twitter:description`,
        content: `Reset your password for the Edmonton Sound Map account. Create a new password to secure your profile and regain access to your contributions and community activities.`,
      },
      {
        name: `twitter:image`,
        content: `https://edmontonsoundmap.com/edmonton.jpg`,
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
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">`
  );
  from;
  next();
});

export default router;
