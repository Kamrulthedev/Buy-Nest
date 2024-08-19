import { StarIcon } from "lucide-react";
import { FaStar } from "react-icons/fa";

export const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= rating ? (
        <FaStar key={i} className="text-yellow-500 text-2xl " />
      ) : (
        // <Star />
        <StarIcon key={i} className="text-gray-500" />
      )
    );
  }
  return stars;
};
