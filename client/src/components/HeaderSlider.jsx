import { Carousel, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";

function formatDate(dateString) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options).toUpperCase();
}

export default function HeaderSlider() {
  const { data } = useFetch(
    "/articles?_sort=createdAt:DESC&_limit=3&populate=content_creators,image,categories&fields=title,createdAt,content_creators,image,categories"
  );
  if (!data) {
    return null;
  }
  const recentArticles = data.slice(0, 3);

  return (
    <div className="h-screen">
      <Carousel
        className="absolute top-0"
        nextArrow={false}
        prevArrow={false}
        autoplay={true}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}>
        {recentArticles?.map((article) => (
          <div className="relative h-screen w-full" key={article.id}>
            <img
              src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="px-8 md:w-[37rem] md:pl-12 lg:pl-12">
                <Link to={`/articles/${article.attributes.slug}`}>
                  <h1 className="text-3xl text-white lg:text-5xl md:text-4x hero-title font-bold font-hanuman mb-8">
                    {article.attributes.title}
                  </h1>
                  <p className="text-white font-hanuman uppercase">
                    <span>{article.attributes.content_creators.data[0].attributes.name}</span> •{" "}
                    <span>{article.attributes.categories.data[0].attributes.name}</span> •{" "}
                    <span>{formatDate(article.attributes.createdAt)}</span>
                  </p>
                </Link>
                <div className="flex gap-2 mt-6">
                  <Button size="lg" color="white" className="text-base font-normal font-hanuman">
                    បន្តការអាន
                  </Button>
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="text-base font-normal font-hanuman">
                    អំពីអ្នកនិពន្ធ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
