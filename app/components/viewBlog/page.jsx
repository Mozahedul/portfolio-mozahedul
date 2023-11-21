import Link from "next/link";

const BlogButton = () => {
  return (
    <div className="mb-4 mt-4 md:mb-0 md:ml-4 md:mt-0">
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://procodelearn.blogspot.com/"
      >
        <button type="button" className="btn tracking-wide">
          View blog
        </button>
      </Link>
    </div>
  );
};

export default BlogButton;
