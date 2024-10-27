import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookMarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleMarkAsRead = (id,time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    // console.log('remove',id);
    //remove bookmarks
    const remainingBookMarks = bookMarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainingBookMarks)
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
