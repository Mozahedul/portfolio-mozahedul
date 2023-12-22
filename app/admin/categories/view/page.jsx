"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import Spin from "@/app/components/animation/spinner/page";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import injectMetadata from "@/app/functions/metadata/setMetadata";

function ViewProjects() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
        // router.refresh();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setCategories, router]);

  /**
   * Handle a single user delete
   */
  const handleDelete = async categoryId => {
    try {
      const response = await fetch(`/api/categories?categoryId=${categoryId}`, {
        method: "DELETE",
      });

      const data = response.ok && (await response.json());

      if (data.success) {
        toastSuccess(data.success);
        const extractedCategories = categories.filter(
          category => categoryId !== category._id
        );
        setCategories(extractedCategories);
      }

      if (data.errMsg) {
        toastError(data.errMsg);
      }

      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-3 mt-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">Category List</h2>
        <div>
          <Link href="/admin/projects/create">
            <button
              type="button"
              className="rounded-md bg-cyan-600 px-3 py-2 text-xs text-gray-200 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-300"
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
                  {`${category.name.substring(0, 20)}...`}
                </td>

                <td className="border-b-2 border-slate-800 p-3">
                  <Link href={`/admin/categories/edit/${category._id}`}>
                    <button
                      type="button"
                      className="rounded-md bg-yellow-600 p-2 transition-all duration-500 hover:bg-yellow-500 hover:text-gray-500"
                    >
                      <VscEdit />
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(category._id)}
                    className="ml-2 rounded-md bg-red-700 p-2 transition-all duration-500 hover:bg-red-500 hover:text-gray-300"
                  >
                    <RiDeleteBin5Fill />
                  </button>
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
          No Categories exist to show
        </button>
      )}
    </>
  );
}

export default ViewProjects;
