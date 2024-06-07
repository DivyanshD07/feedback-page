"use client";
import { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            type="button"
            className={index <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.98a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.458a1 1 0 00-.364 1.118l1.287 3.981c.3.922-.755 1.688-1.54 1.118l-3.388-2.457a1 1 0 00-1.175 0l-3.388 2.457c-.784.57-1.839-.196-1.539-1.118l1.287-3.98a1 1 0 00-.364-1.118L2.246 9.406c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.98z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
