"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((Posts) => (
        <PromptCard
          key={Posts._id}
          post={Posts}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearchChange = (e, taged = false) => {
    if (taged) {
      setSearchText(e);
      setFilteredPosts(
        posts?.filter((post) => {
          return post.tag.includes(e);
        })
      );
    } else {
      setSearchText(e.target.value);

      setFilteredPosts(
        posts.filter((post) => {
          return post?.prompt.includes(e.target.value);
        })
      );
    }
  };
  const handleTagClick = (tag) => {
    handleSearchChange(tag, true);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center ">
        <input
          type="text"
          placeholder="search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={filteredPosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
