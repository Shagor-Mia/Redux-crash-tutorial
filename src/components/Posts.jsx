import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./features/posts/postSlice";

function Posts() {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  console.log(posts, "sagor");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <h1>content is loading</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>content got an {error}</h1>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>content not get any post:{error}</h1>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post) => (
          <li className="mt-3 text-1xl" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    );
  }
  return <div>{content}</div>;
}

export default Posts;
