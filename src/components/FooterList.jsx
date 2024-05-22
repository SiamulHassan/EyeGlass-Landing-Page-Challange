import { Link } from "react-router-dom";

const FooterList = ({ listData }) => {
  return (
    <ul>
      {listData.map((list, i) => (
        <li className="mb-2" key={i}>
          <Link to={list.path} className="hover:underline">
            {list.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
