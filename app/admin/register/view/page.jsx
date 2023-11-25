"use client";

import Link from "next/link";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";
import React, { useEffect, useState } from "react";
import Spin from "@/app/components/animation/spinner/page";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";

function ViewRegister() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function fetchUsers() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/users`);
        const data = response.ok && (await response.json());
        setUsers(data.users);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setUsers]);

  /**
   * Handle a single user delete
   */
  const handleDelete = async userId => {
    try {
      const response = await fetch(`/api/users?userId=${userId}`, {
        method: "DELETE",
      });

      const data = response.ok && (await response.json());

      if (data.success) {
        toastSuccess(data.success);
        const extractedUser = users.filter(user => userId !== user._id);
        setUsers(extractedUser);
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
   * Handler for all users delete
   */
  const handleDeleteAll = async event => {
    event.preventDefault();
    const response = await fetch(`/api/users/allUsers`, {
      method: "DELETE",
    });

    const data = response.ok && (await response.json());

    if (data.success) {
      toastSuccess(data.success);
      setUsers([]);
    }

    if (data.errMsg) {
      toastError(data.errMsg);
    }
  };

  return (
    <>
      <div className="mb-3 mt-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">User List</h2>
        <div>
          <button
            type="button"
            onClick={handleDeleteAll}
            className="mr-2 rounded-md bg-red-500 px-3 py-2 text-xs font-medium tracking-wide text-gray-200 transition-all duration-500 hover:bg-red-700 hover:text-gray-300"
          >
            Delete All Users
          </button>
          <Link href="/admin/register/create">
            <button
              type="button"
              className="rounded-md bg-cyan-600 px-3 py-2 text-xs text-gray-200 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-300"
            >
              Create User
            </button>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <Spin />
      ) : users?.length > 0 ? (
        <table className="w-full table-auto border-2 border-slate-800">
          <thead>
            <tr className="bg-slate-700 text-gray-400">
              <th className="px-3 py-2 text-left text-gray-200">SL No</th>
              <th className="px-3 py-2 text-left text-gray-200">Name</th>
              <th className="px-3 py-2 text-left text-gray-200">Email</th>
              <th className="px-3 py-2 text-left text-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr
                key={user._id}
                className="text-gray-300 transition-all duration-500 hover:bg-cyan-900"
              >
                <td className="border-b-2 border-slate-800 p-3">{index + 1}</td>
                <td className="border-b-2 border-slate-800 p-3">{user.name}</td>
                <td className="border-b-2 border-slate-800 p-3">
                  {user.email}
                </td>
                <td className="border-b-2 border-slate-800 p-3">
                  <Link href={`/admin/register/edit/${user._id}`}>
                    <button
                      type="button"
                      className="rounded-md bg-yellow-600 p-2 transition-all duration-500 hover:bg-yellow-500 hover:text-gray-500"
                    >
                      <VscEdit />
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(user._id)}
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
          No users exist to show
        </button>
      )}
    </>
  );
}

export default ViewRegister;
