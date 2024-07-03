import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ReviewsCard = ({ product }) => {
  const { image_url} = product;
  return (
    <div>
      <AwesomeSlider>
        <div>
          <img
            className="mask mask-squircle"
            src={image_url}
          />
          <h3>user</h3>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </AwesomeSlider>
    </div>
  );
};

export default ReviewsCard;
