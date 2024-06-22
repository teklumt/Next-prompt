import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} profile</span>
      </h1>
      <p className="desc text-left  ">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((Posts) => (
          <PromptCard
            key={Posts._id}
            post={Posts}
            handleEdit={() => handleEdit && handleEdit(Posts)}
            handleDelete={() => handleDelete && handleDelete(Posts)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
