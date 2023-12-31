import { useLoaderData } from "react-router-dom";

import { fetchEachPost } from "../../services/apiPost";

const IndividualPost = () => {
  const post = useLoaderData();

  return (
    <div>
      <h1>Individual Post</h1>
      <h3>Title: {post.title}</h3>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default IndividualPost;

export async function loader({ params }) {
  const post = fetchEachPost(params.id);
  return post;
}
