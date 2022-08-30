import React from "react";
import { CheckCircleIcon, XIcon } from "@heroicons/react/solid";

export default function AlertApplicationInfo(props) {
  return (
    <div className="grid place-items-center w-full">
      {props.ShowApplicationInfo ? (
        <>
          <div
            className="bg-green-100 rounded-lg py-5 px-6 text-base text-green-700 inline-flex items-center w-full max-w-3xl alert-dismissible fade show"
            role="alert"
          >
            <CheckCircleIcon className="w-6 h-6 text-green-600 mr-1" />
            {props.ApplicationInfo.title}
            <button
              type="button"
              className="btn-close box-content w-4 h-4 ml-auto border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => props.setApplicationInfo(false)}
            >
              <XIcon className="w-6 h-6 text-white-600 mb-1" />
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
