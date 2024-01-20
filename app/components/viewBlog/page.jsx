import Link from "next/link";

const BlogButton = () => {
  const hanldeHireMeButton = () => {
    // For listening audio sound when user click on the menu button
    const audio = new Audio("/button-click-sound.mp3");
    audio.play();
  };

  return (
    <div className="my-4 md:my-0 md:ml-4">
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.upwork.com/freelancers/~015a5d106c74f13430"
      >
        <button
          type="button"
          onClick={hanldeHireMeButton}
          className="animate-pulse tracking-wide hire-btn whitespace-nowrap"
        >
          Hire Me
        </button>
      </Link>
    </div>
  );
};

export default BlogButton;
