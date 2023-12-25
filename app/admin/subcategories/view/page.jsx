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
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  const router = useRouter();

  console.log(subCategories);

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
        const response = await fetch("/api/subcategories");
        const data = response.ok && (await response.json());
        setSubCategories(data.subcategories);
        setIsLoading(false);
        // router.refresh();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setSubCategories, router]);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  /**
   * @description: The function that is responsible to delete a single category
   * by using the fetch api with the help of the api endpoint
   * @endpoint /api/categories?subcategoryId=${subcategoryId}
   * @method: DELETE
   * @return success or error message according to the category update
   */
  const handleConfirmDelete = async subcategoryId => {
    try {
      const response = await fetch(
        `/api/subcategories?subcategoryId=${subcategoryId}`,
        {
          method: "DELETE",
        }
      );

      const data = response.ok && (await response.json());

      if (data.success) {
        setIsModalOpen(false);
        toastSuccess(data.success);
        const extractedCategories = subCategories.filter(
          category => subcategoryId !== category._id
        );
        setSubCategories(extractedCategories);
      }

      if (data.errMsg) {
        toastError(data.errMsg);
      }

      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * This function is used to cancel the category deletion process
   */
  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = event => {
    console.log(modalRef.current);
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="mb-3 mt-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">SubCategory List</h2>
        <div>
          <Link href="/admin/subcategories/create">
            <button
              type="button"
              className="rounded-md bg-cyan-600 px-3 py-2 text-sm text-gray-200 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-300"
            >
              Create SubCategory
            </button>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <Spin />
      ) : subCategories?.length > 0 ? (
        <table className="w-full table-auto border-2 border-slate-800">
          <thead>
            <tr className="bg-slate-700 text-gray-400">
              <th className="px-3 py-2 text-left text-gray-200">SL No</th>
              <th className="px-3 py-2 text-left text-gray-200">
                SubCategory Name
              </th>
              <th className="px-3 py-2 text-left text-gray-200">
                Category Name
              </th>
              <th className="px-3 py-2 text-left text-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {subCategories?.map((subcategory, index) => (
              <tr
                key={subcategory._id}
                className="text-gray-300 transition-all duration-500 hover:bg-cyan-900"
              >
                <td className="border-b-2 border-slate-800 p-3">{index + 1}</td>
                <td className="border-b-2 border-slate-800 p-3">
                  {`${subcategory?.name.substring(0, 30)} ${
                    subcategory?.name.length > 30 ? "..." : ""
                  }`}
                </td>
                <td className="border-b-2 border-slate-800 p-3 ellipsis">
                  {`${
                    subcategory?.category?.name.length > 0
                      ? subcategory?.category?.name.substring(0, 30)
                      : "No Category"
                  } `}
                </td>

                <td className="border-b-2 border-slate-800 p-3">
                  <Link href={`/admin/subcategories/edit/${subcategory?._id}`}>
                    <button
                      type="button"
                      className="rounded-md bg-yellow-600 p-2 transition-all duration-500 hover:bg-yellow-500 hover:text-gray-500"
                    >
                      <VscEdit />
                    </button>
                  </Link>
                  <button
                    type="button"
                    // onClick={() => handleConfirmDelete(subcategory._id)}
                    onClick={handleModal}
                    className="ml-2 rounded-md bg-red-700 p-2 transition-all duration-500 hover:bg-red-500 hover:text-gray-300"
                  >
                    <RiDeleteBin5Fill />
                  </button>

                  {/* the modal of subcategory deletion */}
                  {isModalOpen && (
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
                          {`"${subcategory?.name}"`}?
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
                        >
                          <RiDeleteBin5Fill /> Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => handleConfirmDelete(subcategory._id)}
                          className="rounded-full flex items-center text-sm gap-x-1 bg-red-700 px-3 py-2 transition-all duration-500 hover:bg-red-500 hover:text-gray-300"
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
        >
          No SubCategories exist to show
        </button>
      )}
    </>
  );
}

export default ViewProjects;
