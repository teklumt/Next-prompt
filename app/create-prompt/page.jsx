export const dynamic = "force-dynamic";
("use client");
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const createPost = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session.user.id,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Failed to create post", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePrompt;
