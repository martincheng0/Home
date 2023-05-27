import React from "react";
import { Link } from "gatsby";

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`;

  return (
    <Link to={`/blog${url}`}>
      <div className="relative bg-white rounded-xl border border-black m-6 flex flex-col lg:flex-row">
        <figure className="lg:max-w-lg">
          <img
            className="rounded-t-xl lg:rounded-tr-none lg:rounded-bl-xl self-center oject-fill"
            src={post.coverImage}
            alt="Album"
          />
        </figure>
        <div className="p-6 flex flex-col">
          <header>
            {post.coverImage && (
              <div
                style={{
                  backgroundImage: `url(${post.coverImage})`,
                }}
              ></div>
            )}
            <h2 className="text-lg font-bold my-2">{post.title}</h2>
          </header>
          <section className="flex-grow">{post.brief}</section>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
