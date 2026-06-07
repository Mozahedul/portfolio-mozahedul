"use client";

import Link from "next/link";
import { MdDownload } from "react-icons/md";

const DownloadPDFBtn = () => {
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
        href="/resume.pdf"
        download
        aria-label="PDF resume download link"
      >
        <button
          type="button"
          onClick={hanldeHireMeButton}
          className="tracking-wide hire-btn whitespace-nowrap py-2 px-4 flex items-center"
        >
          <MdDownload className="inline mr-[6px]" />
          <span>Resume</span>
        </button>
      </Link>
    </div>
  );
};

export default DownloadPDFBtn;
