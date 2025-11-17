import { Rating, Typography } from "@mui/material";
const ProductRating = ({ product }) => (
  <>
    <Rating value={product.customer_reviews?.average_rating || 0}
      readOnly size="medium" />
    <Typography variant="body2">
      ({product.customer_reviews?.total_reviews || 0})
    </Typography>
  </>
);
export default ProductRating;
