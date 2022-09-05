import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function bootcamp() {
  return (
    <div>
      <h1>Bootcamp Page</h1>
      <div class="flex justify-between items-center">
        <button
          type="button"
          class="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-900"
        >
          <a href="bootcamp">Bootcamp Page</a>
        </button>
        <br></br>
        <button
          type="button"
          class="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-900"
        >
          <a href="bootcampReguler">BootcampReguler</a>
        </button>
        <br></br>
        <button
          type="button"
          class="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-900"
        >
          <a href="app/module">Master/Module</a>
        </button>

        <button
          type="button"
          class="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-900"
        >
          <a href="app/dummy">Dummy</a>
        </button>

        <button
          type="button"
          class="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-900"
        >
          <a href="app/dummybp">Dummy BEPE</a>
        </button>
      </div>
    </div>
  );
}
