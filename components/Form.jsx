import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-x-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} post</span>
      </h1>

      <p className="desc text-left max-x-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powerd platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mt-10 flex gap-7 glassmorphism flex-col"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 ">
            Your AI Prompt
          </span>
          <textarea
            className="form_textarea"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here"
            required
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 ">
            Tag{" "}
            <span className="font-normal">(#product,#webdevement,#idea)</span>
          </span>
          <input
            className="form_input"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
          ></input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            {" "}
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full  text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
