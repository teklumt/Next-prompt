"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
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
      setFilteredPosts(posts?.filter((post) => post.tag.includes(e)));
    } else {
      setSearchText(e.target.value);
      setFilteredPosts(
        posts.filter((post) => post?.prompt.includes(e.target.value))
      );
    }
  };

  const handleTagClick = (tag) => {
    handleSearchChange(tag, true);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/prompt");
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
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
