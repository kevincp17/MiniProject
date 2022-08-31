import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function ModalSuccess(props) {
  return (
    <div>
      {props.ShowModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-w-lg p-4 mx-auto bg-gray-50 rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                    <CheckCircleIcon className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      {props.ModalInfo.title}
                    </h4>
                    <p className="text-sm text-gray-500 max-w-xs">
                      {props.ModalInfo.message}
                    </p>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => {
                          props.setShowModal(false);
                          props.setRefresh(true);
                          props.setIsCvReupload(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => {
                          props.setShowModal(false);
                          props.navigate("/bootcamp/dashboard");
                        }}
                      >
                        Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
