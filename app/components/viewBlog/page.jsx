import Link from "next/link";

const BlogButton = () => {
  return (
    <div className="my-4 md:my-0 md:ml-4">
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.upwork.com/freelancers/~015a5d106c74f13430"
      >
        <button
          type="button"
          className="animate-pulse tracking-wide hire-btn whitespace-nowrap"
        >
          Hire Me
        </button>
      </Link>
    </div>
  );
};

export default BlogButton;
