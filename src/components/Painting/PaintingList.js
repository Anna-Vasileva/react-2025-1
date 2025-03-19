import Painting from "./Painting";
import PropTypes from "prop-types";

function PaintingList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Painting
              imageUrl={item.url}
              title={item.title}
              authorName={item.author.url}
              price={item.price}
              profileUrl={item.quantity}
            />
          </li>
        );
      })}
    </ul>
  );
}
PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PaintingList;
