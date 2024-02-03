"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import Spin from "@/app/components/animation/spinner/page";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
// import injectMetadata from "@/app/functions/metadata/setMetadata";

function ViewArchive() {
  const [archives, setArchives] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalArchive, setModalArchive] = useState({});
  const modalRef = useRef();
  const router = useRouter();

  console.log(archives);

  /**
   * Set metadata for the page
   * @param {string} pageTitle
   * @param {string} pageDescription
   */
  // useEffect(() => {
  //   router.refresh();
  //   const pageTitle = "Archive view - admin";
  //   const pageDescription = "List of the archive and protected for admin only";

  //   injectMetadata(pageTitle, pageDescription);
  // }, [router]);

  useEffect(() => {
    (async function fetchArchive() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/archive");
        const data = response.ok && (await response.json());
        setArchives(data.archives);
        setIsLoading(false);
        // router.refresh();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setArchives, router]);

  /**
   * Handle a single user delete
   */
  const handleConfirmDelete = async archiveId => {
    try {
      const response = await fetch(`/api/archive?archiveId=${archiveId}`, {
        method: "DELETE",
      });

      const data = response.ok && (await response.json());

      if (data.success) {
        setShowModal(false);
        toastSuccess(data.success);
        const extractedArchive = archives.filter(
          archive => archiveId !== archive._id
        );
        setArchives(extractedArchive);
      }

      if (data.errMsg) {
        toastError(data.errMsg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete modal handler for show / hide the modal dialog
  const openModal = proj => {
    setModalArchive(proj);
    setShowModal(true);
  };

  // Cancel the delete modal handler and hide the modal dialog
  const handleCancelDelete = () => {
    setShowModal(false);
  };

  /**
   * When click outside of the modal box, the modal will disappear
   * @explanation modalRef.current means the modal is open and
   * when click anywhere on the document, the mouse event is grabbed by
   * event.target. Now we can check that click is over the modal or not
   */
  const handleClickOutsideModal = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  return (
    <div className="mt-24 mx-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">Archive List</h2>
        <div>
          <Link
            href="/admin/archive/create"
            aria-label="The page navigates to archive create page"
          >
            <button
              type="button"
              className="rounded-md bg-cyan-600 px-3 py-2 text-sm text-gray-200 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-300"
              aria-label="Create archive button"
            >
              Create Archive
            </button>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <Spin />
      ) : archives?.length > 0 ? (
        <table className="w-full table-auto border-2 border-slate-800">
          <thead>
            <tr className="bg-slate-700 text-gray-400 font-semibold">
              <th className="px-3 py-2 text-left text-gray-200">SL No</th>
              <th className="px-3 py-2 text-left text-gray-200">Title</th>
              <th className="px-3 py-2 text-left text-gray-200">Image</th>
              <th className="px-3 py-2 text-left text-gray-200">Category</th>
              <th className="px-3 py-2 text-left text-gray-200">SubCategory</th>
              <th className="px-3 py-2 text-left text-gray-200">Anchor</th>
              <th className="px-3 py-2 text-left text-gray-200">GitHub</th>
              <th className="px-3 py-2 text-left text-gray-200">Languages</th>
              <th className="px-3 py-2 text-left text-gray-200">Description</th>
              <th className="px-3 py-2 text-left text-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {archives?.map((archive, index) => (
              <tr
                key={archive._id}
                className="text-gray-300 text-sm transition-all duration-500 hover:bg-cyan-900 border-slate-800 border-b-2"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{`${archive.title}`}</td>
                <td className="p-3">
                  <Image
                    loading="lazy"
                    src={archive?.image}
                    width={30}
                    height={30}
                    alt={archive?.image}
                    className="rounded-md"
                  />
                </td>
                <td className="p-3">{`${archive?.category?.name}`}</td>
                <td className="p-3">{`${archive?.subcategory?.name}`}</td>
                <td className="p-3">
                  {`${archive?.anchor.substring(0, 15)}...`}
                </td>
                <td className="p-3">
                  {`${archive?.github.substring(0, 15)}...`}
                </td>
                <td className="flex flex-wrap p-3">
                  {archive?.language?.map(lang => (
                    <span
                      className="m-1 rounded-full bg-slate-700 px-2 py-1 text-xs"
                      key={lang}
                    >
                      {lang}
                    </span>
                  ))}
                </td>
                <td className="p-3">
                  {`${archive?.description?.substring(0, 20)}...`}
                </td>
                <td className="p-3 flex">
                  <Link
                    href={`/admin/archive/edit/${archive?._id}`}
                    aria-label="Button will navigate to single archive edit page"
                  >
                    <button
                      type="button"
                      className="rounded-md bg-yellow-600 p-2 transition-all duration-500 hover:bg-yellow-500 hover:text-gray-200"
                      aria-label="Button will navigate to single archive edit page"
                    >
                      <VscEdit />
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => openModal(archive)}
                    className="ml-2 rounded-md bg-red-700 p-2 transition-all duration-500 hover:bg-red-500 hover:text-gray-300"
                    aria-label="Archive delete button"
                  >
                    <RiDeleteBin5Fill />
                  </button>

                  {/* Hidden dropdown modal */}
                  {showModal && (
                    <div
                      ref={modalRef}
                      className="bg-gray-200 rounded-md w-80 h-auto z-50 p-5 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <h2 className="font-bold text-xl text-red-500 text-center mb-3">
                        Delete Item?
                      </h2>
                      <p className="text-gray-700 text-sm">
                        Are you sure you want to delete the item{" "}
                        <strong className="font-bold text-md">
                          {`"${modalArchive?.title}"`}?
                        </strong>
                      </p>
                      <div className="mt-5 bg-orange-100 p-3">
                        <h3 className="text-red-600 text-md font-bold">
                          Warning!
                        </h3>
                        <p className="text-red-500 text-xs">
                          By deleting this item will be removed from the list
                          permanently.
                        </p>
                      </div>

                      <div className="flex justify-evenly mt-7">
                        <button
                          type="button"
                          onClick={handleCancelDelete}
                          className="rounded-full flex items-center text-sm gap-x-1 bg-slate-500 px-3 py-2 transition-all duration-500 hover:bg-slate-800 hover:text-gray-300"
                          aria-label="Archive cancel button"
                        >
                          <RiDeleteBin5Fill /> Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => handleConfirmDelete(modalArchive?._id)}
                          className="rounded-full flex items-center text-sm gap-x-1 bg-red-700 px-3 py-2 transition-all duration-500 hover:bg-red-500 hover:text-gray-300"
                          aria-label="Archive delete button"
                        >
                          Delete Item <RiDeleteBin5Fill />
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <button
          type="button"
          className="mx-auto mt-6 block w-full rounded-full bg-slate-800 py-2 text-xl font-bold text-gray-300 md:w-1/2"
          aria-label="No archive button"
        >
          No Archive exist to show
        </button>
      )}
    </div>
  );
}

export default ViewArchive;
