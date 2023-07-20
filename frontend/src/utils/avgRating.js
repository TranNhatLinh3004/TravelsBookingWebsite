// const calculateAvgRating = (reviews) => {
//     const totalRating = reviews ? .reduce((acc, item) => acc + item.rating, 0);

//     const avgRating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : totalRating / reviews ? length;

//     return {
//         totalRating,
//         avgRating,
//     };
// };

// export default calculateAvgRating;

const calculateAvgRating = (reviews) => {
  const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
  const avgRating = reviews.length > 0 ? totalRating / reviews.length : 0;

  return {
    totalRating,
    avgRating,
  };
};

export default calculateAvgRating;
