import React from "react";
import Search from "./Search";
import PopularPost from "./PopularPosts";
import LatestPosts from "./LatestPosts";
import HeaderSlider from "../components/HeaderSlider";
import Advertisement from "./Advertisement";
import MonthlyPopularPost from "./MonthlyPopularPost";
import Category from "./Category";
import useFetch from "../hook/useFetch";
import CatPost from "../components/Articles";
import Categories from "../components/Categories";

const Home = () => {
  const { data } = useFetch("/articles?populate=*");
  const topCat = data?.slice(0, 1);

  // console.log(topCat.map((post) => post.attributes.title));

  return (
    <section>
      <HeaderSlider />

      <Advertisement />
      <PopularPost />
      {/* <LatestPosts /> */}
      {topCat?.map((post) => (
        <Categories catName="អត្ថបទពេញនិយមប្រចាំខែ" path="/popular/monthly" />
      ))}
      <Categories />
    </section>
  );
};

export default Home;
