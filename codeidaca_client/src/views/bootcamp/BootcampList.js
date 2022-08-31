import React, { useState, useEffect } from "react";
import api from "../../api/api-bootcamp-list";
import { Link, useNavigate } from "react-router-dom";

export default function BootcampList() {
  const navigate = useNavigate();
  const [bootcamp, setBootcamp] = useState([]);

  useEffect(() => {
    api.getListBootcamp().then((data) => {
      setBootcamp(data);
    });
  }, []);

  return (
    <div>
      <h1>Bootcamp List</h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="overscroll-auto md:overscroll-contain">
          {bootcamp.map((data) => (
            <tr
              key={data.prog_id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-2">{data.prog_id}</td>
              <td className="px-6 py-2">{data.prog_title}</td>
              <td className="px-6 py-2">{data.prog_type}</td>
              <td className="px-6 py-2">
                <Link to={`/bootcamp/dashboard/${data.prog_id}`}>Open</Link>
                {/* <button className="transition text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500 cursor-pointer px-1 py-1 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => navigate(`dashboard/${data.prog_id}`)}
                >
                  Open
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
