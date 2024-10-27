import PropTypes from "prop-types";
import { BsBookmarkCheckFill } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover pic for title ${title}`}
      />
      <div className="flex justify-between mb-4 ">
        <div className="flex ">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="">
          <span className="text-2xl">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="ml-4 text-red-500 text-2xl"
          >
            <BsBookmarkCheckFill />
          </button>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-6"> {title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span className="text-xl" key={idx}>
            {" "}
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button className="font-bold text-blue-600 underline" onClick={() => handleMarkAsRead(id,reading_time)}> Mark as read </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
