import { Link } from "react-router-dom";

const PostListItem = ({ id, title, body }) => {
  return (
    <li>
      <h3>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p>{body}</p>
    </li>
  );
};

export default PostListItem;
