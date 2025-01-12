import Title from "../../Shared/Title";
import useReview from "../Hook/useReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Review = () => {
  const [review] = useReview();
  console.log(review);

  return (
    <div className="bg-gray-100 py-12 my-10 px-4">
      <div className="max-w-6xl mx-auto">
        <Title head={"Reviews"} sub={"What our customers are saying"}></Title>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {review &&
            review.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="flex flex-col gap-5 my-10 items-center justify-center bg-white p-8 px-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-lg text-gray-700">
                      Rating:
                    </span>
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={item.rating}
                      readOnly
                    />
                  </p>
                  <p className="text-gray-600 italic text-center">
                    {item.details}
                  </p>
                  <h2 className="text-xl font-semibold text-gray-800">
                    — {item.name}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
