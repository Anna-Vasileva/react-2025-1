import defaultImage from "./default.jpg";
import PropTypes from "prop-types";
import s from "./Painting.module.css";
// export default function Painting({ url, title, tag, price }) {
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={url}>tag</a>
//       </p>
//       <p>Цена: price кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

const Painting = ({
  imageUrl = defaultImage,
  title,
  authorName = "Не известно",
  price,
  profileUrl,
}) => (
  <div className={s.container}>
    <img src={imageUrl} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{authorName}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>
);
Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  profileUrl: PropTypes.string.isRequired,
};

export default Painting;
