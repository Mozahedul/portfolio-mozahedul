"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import Spin from "@/app/components/animation/spinner/page";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import injectMetadata from "@/app/functions/metadata/setMetadata";

function ViewProjects() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalCat, setModalCat] = useState({});
  const modalRef = useRef();
  const router = useRouter();

  /**
   * Set metadata for the page
   * @param {string} pageTitle
   * @param {string} pageDescription
   */
  useEffect(() => {
    router.refresh();
    const pageTitle = "Projects view - admin";
    const pageDescription = "List of the projects and protected for admin only";

    injectMetadata(pageTitle, pageDescription);
  }, [router]);

  useEffect(() => {
    (async function fetchCategories() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/categories");
        const data = response.ok && (await response.json());
        setCategories(data.categories);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setCategories, router]);

  // two functions are used for closing / showing modal
  const openModal = category => {
    setModalCat(category);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  /**
   * @description: The function that is responsible to delete a single category
   * by using the fetch api with the help of the api endpoint
   * @endpoint /api/categories?categoryId=${categoryId}
   * @method: DELETE
   * @return success or error message according to the category update
   */
  const handleConfirmDelete = async categoryId => {
    try {
      const response = await fetch(`/api/categories?categoryId=${categoryId}`, {
        method: "DELETE",
      });

      const data = response.ok && (await response.json());

      if (data.success) {
        closeModal();
        toastSuccess(data.success);
        const extractedCategories = categories.filter(
          category => category._id !== categoryId
        );
        setCategories(extractedCategories);
      }

      if (data.errMsg) {
        setShowModal(false);
        toastError(data.errMsg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-24 mx-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">Category List</h2>
        <div>
          <Link
            href="/admin/categories/create"
            aria-label="Button for category creation"
          >
            <button
              type="button"
              className="rounded-md bg-cyan-600 px-3 py-2 text-sm text-gray-200 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-300"
              aria-label="Category create button"
            >
              Create Category
            </button>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <Spin />
      ) : categories?.length > 0 ? (
        <table className="w-full table-auto border-2 border-slate-800">
          <thead>
            <tr className="bg-slate-700 text-gray-400">
              <th className="px-3 py-2 text-left text-gray-200">SL No</th>
              <th className="px-3 py-2 text-left text-gray-200">Name</th>
              <th className="px-3 py-2 text-left text-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category, index) => (
              <tr
                key={category._id}
                className="text-gray-300 transition-all duration-500 hover:bg-cyan-900"
              >
                <td className="border-b-2 border-slate-800 p-3">{index + 1}</td>
                <td className="border-b-2 border-slate-800 p-3">
                  {`${category.name.substring(0, 30)} ${
                    category.name.length > 30 ? "..." : ""
                  }`}
                </td>

                <td className="border-b-2 border-slate-800 p-3">
                  <Link
                    href={`/admin/categories/edit/${category._id}`}
                    aria-label="The button navigates to project edit page"
                  >
                    <button
                      type="button"
                      className="rounded-md bg-yellow-600 p-2 transition-all duration-500 hover:bg-yellow-500 hover:text-gray-200"
                      aria-label="Button for project edit"
                    >
                      <VscEdit />
                    </button>
                  </Link>
                  <button
                    type="button"
                    // onClick={() => handleConfirmDelete(category._id)}
                    onClick={() => openModal(category)}
                    className="ml-2 rounded-md bg-red-700 p-2 transition-all duration-500 hover:bg-red-500 hover:text-gray-300"
                    aria-label="Button for project delete"
                  >
                    <RiDeleteBin5Fill />
                  </button>

                  {/* the modal of category deletion */}
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
                          {`"${modalCat?.name}"`}?
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
                          onClick={closeModal}
                          className="rounded-full flex items-center text-sm gap-x-1 bg-slate-500 px-3 py-2 transition-all duration-500 hover:bg-slate-800 hover:text-gray-300"
                          aria-label="Button for project cancel"
                        >
                          <RiDeleteBin5Fill /> Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => handleConfirmDelete(modalCat._id)}
                          className="rounded-full flex items-center text-sm gap-x-1 bg-red-700 px-3 py-2 transition-all duration-500 hover:bg-red-500 hover:text-gray-300"
                          aria-label="Button for project delete"
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
          aria-label="Button for no category exist"
        >
          No Categories exist to show
        </button>
      )}
    </div>
  );
}

export default ViewProjects;
