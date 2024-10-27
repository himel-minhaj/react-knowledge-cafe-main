import PropTypes from "prop-types";
import Bookmark from "./Bookmark/Bookmark";
const Bookmarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
      <div className="">
        <h1 className="text-2xl font-bold text-red-500">
          Reading Time :{readingTime}
        </h1>
      </div>
      <h2 className="text-2xl text-center ">
        BookMarkd Blogs :{bookMarks.length}
      </h2>
      {bookMarks.map((bookmark,idx) => (
        <Bookmark key={bookmark.idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
