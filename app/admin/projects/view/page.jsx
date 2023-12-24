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
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
    (async function fetchProjects() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/projects");
        const data = response.ok && (await response.json());
        setProjects(data.projects);
        setIsLoading(false);
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setProjects, router]);

  /**
   * Handle a single user delete
   */
  const handleConfirmDelete = async projectId => {
    try {
      const response = await fetch(`/api/projects?projectId=${projectId}`, {
        method: "DELETE",
      });

      const data = response.ok && (await response.json());

      if (data.success) {
        setOpenModal(false);
        toastSuccess(data.success);
        const extractedProjects = projects.filter(
          project => projectId !== project._id
        );
        setProjects(extractedProjects);
      }

      if (data.errMsg) {
        toastError(data.errMsg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete modal handler for show / hide the modal dialog
  const handleDeleteModal = () => {
    setOpenModal(true);
  };

  // Cancel the delete modal handler and hide the modal dialog
  const handleCancelDelete = () => {
    setOpenModal(false);
  };

  // Handler for all projects delete
  const handleDeleteAll = async event => {
    event.preventDefault();
    const response = await fetch(`/api/projects/allProjects`, {
      method: "DELETE",
    });

    const data = response.ok && (await response.json());

    if (data.success) {
      toastSuccess(data.success);
      setProjects([]);
    }

    if (data.errMsg) {
      toastError(data.errMsg);
    }
  };

  /**
   * When click outside of the modal box, the modal will disappear
   * @explanation modalRef.current means the modal is open and
   * when click anywhere on the document, the mouse event is grabbed by
   * event.target. Now we can check that click is over the modal or not
   */
  const handleClickOutsideModal = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  return (
    <>
      <div className="mb-3 mt-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">Project List</h2>
        <div>
          <button
            type="button"
            onClick={handleDeleteAll}
            className="mr-2 rounded-md bg-red-500 px-3 py-2 text-xs font-medium tracking-wide text-gray-200 transition-all duration-500 hover:bg-red-700 hover:text-gray-300"
          >
            Delete All Projects
          </button>
          <Link href="/admin/projects/create">
            <button
              type="button"
              className="rounded-md bg-cyan-600 px-3 py-2 text-xs text-gray-200 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-300"
            >
              Create Project
            </button>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <Spin />
      ) : projects?.length > 0 ? (
        <table className="w-full table-auto border-2 border-slate-800">
          <thead>
            <tr className="bg-slate-700 text-gray-400">
              <th className="px-3 py-2 text-left text-gray-200">SL No</th>
              <th className="px-3 py-2 text-left text-gray-200">Title</th>
              <th className="px-3 py-2 text-left text-gray-200">Anchor</th>
              <th className="px-3 py-2 text-left text-gray-200">GitHub</th>
              <th className="px-3 py-2 text-left text-gray-200">Languages</th>
              <th className="px-3 py-2 text-left text-gray-200">Description</th>
              <th className="px-3 py-2 text-left text-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project, index) => (
              <tr
                key={project._id}
                className="text-gray-300 transition-all duration-500 hover:bg-cyan-900"
              >
                <td className="border-b-2 border-slate-800 p-3">{index + 1}</td>
                <td className="border-b-2 border-slate-800 p-3">
                  {`${project.title.substring(0, 20)}...`}
                </td>
                <td className="border-b-2 border-slate-800 p-3">
                  {`${project.anchor.substring(0, 15)}...`}
                </td>
                <td className="border-b-2 border-slate-800 p-3">
                  {`${project.github.substring(0, 15)}...`}
                </td>
                <td className="flex flex-wrap border-b-2 border-slate-800 p-3">
                  {project?.language?.map(lang => (
                    <span
                      className="m-1 rounded-full bg-slate-700 p-1 text-xs"
                      key={lang}
                    >
                      {lang}
                    </span>
                  ))}
                </td>
                <td className="border-b-2 border-slate-800 p-3">
                  {`${project.description.substring(0, 20)}...`}
                </td>
                <td className="border-b-2 border-slate-800 p-3">
                  <Link href={`/admin/projects/edit/${project._id}`}>
                    <button
                      type="button"
                      className="rounded-md bg-yellow-600 p-2 transition-all duration-500 hover:bg-yellow-500 hover:text-gray-500"
                    >
                      <VscEdit />
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={handleDeleteModal}
                    className="ml-2 rounded-md bg-red-700 p-2 transition-all duration-500 hover:bg-red-500 hover:text-gray-300"
                  >
                    <RiDeleteBin5Fill />
                  </button>
                  {openModal && (
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
                          {`"${project?.title}"`}?
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
                          onClick={() => handleConfirmDelete(project?._id)}
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
          No Projects exist to show
        </button>
      )}
    </>
  );
}

export default ViewProjects;
