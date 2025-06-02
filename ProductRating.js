const ratings = [
  { productId: 1, user: "Lana", score: 4, comment: "جميل جداً!" },
  { productId: 1, user: "Rami", score: 5, comment: "روعة!" },
  { productId: 2, user: "Nour", score: 3, comment: "منيح بس مو كتير مريح" }
];

function getAverageRating(productId) {
  const productRatings = ratings.filter(r => r.productId === productId);
  const total = productRatings.reduce((acc, curr) => acc + curr.score, 0);
  return (total / productRatings.length).toFixed(1);
}

export { ratings, getAverageRating };