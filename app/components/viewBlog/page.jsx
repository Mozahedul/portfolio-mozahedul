import Link from "next/link";

const BlogButton = () => {
  return (
    <div className="my-4 md:my-0 md:ml-4">
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://procodelearn.blogspot.com/"
      >
        <button type="button" className="btn-blog tracking-wide">
          View blog
        </button>
      </Link>
    </div>
  );
};

export default BlogButton;
