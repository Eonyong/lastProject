import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Login from "@/views/accounts/Login";
import Signup from "@/views/accounts/Signup";
import MovieList from "@/views/movie/MovieList";
import MovieDetail from "@/views/movie/MovieDetail";
import ReviewList from "@/views/community/ReviewList";
import ReviewDetail from "@/views/community/ReviewDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/accounts/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/accounts/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/movie/movielist",
    name: "MovieList",
    component: MovieList,
  },
  {
    path: "/movie/:movie_id",
    name: "MovieDetail",
    component: MovieDetail,
    props: true,
  },
  {
    path: "/community/reviewlist",
    name: "ReviewList",
    component: ReviewList,
  },
  {
    path: "/community/:review_id",
    name: "ReviewDetail",
    component: ReviewDetail,
    props: true,
  }
  // },
  // 향후 작성할 라우터
  // 리뷰 리스트
  // 리뷰 디테일
  // 추천영화 페이지
  // 개인설정페이지(가능하다면 : 좋아요 한 영화, 작성 글, 프사 변경)
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
