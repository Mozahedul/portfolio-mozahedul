"use client";

import Link from "next/link";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";
import React, { useEffect, useState } from "react";
import Header from "@/app/sections/header/page";
import FooterSection from "@/app/sections/footer/page";
import Spin from "@/app/components/animation/spinner/page";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";

function ViewProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function fetchProjects() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/projects");
        const data = response.ok && (await response.json());
        setProjects(data.projects);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setProjects]);

  /**
   * Handle a single user delete
   */
  const handleDelete = async projectId => {
    try {
      const response = await fetch(`/api/projects?projectId=${projectId}`, {
        method: "DELETE",
      });

      const data = response.ok && (await response.json());

      if (data.success) {
        toastSuccess(data.success);
        const extractedProjects = projects.filter(
          project => projectId !== project._id
        );
        setProjects(extractedProjects);
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
   * Handler for all projects delete
   */
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

  return (
    <>
      <Header />
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
                    onClick={() => handleDelete(project._id)}
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
          No Projects exist to show
        </button>
      )}

      <FooterSection />
    </>
  );
}

export default ViewProjects;
