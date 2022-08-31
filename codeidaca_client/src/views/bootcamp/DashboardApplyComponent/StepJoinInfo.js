import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

export default function StepJoinInfo(props) {
  const getSubtitle = (status) => {
    switch (status) {
      case "Apply Aplication":
        return "Applied";
      case "Filtering Test":
        return "Result Pass";
      case "Join Bootcamp":
        return "Already join";
      default:
        return "Done";
    }
  };

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  };

  return (
    <div className="row-span-2 col-span-2">
      <div className="block p-6 max-w-md">
        <h4 className="text-gray-800 font-semibold leading-tight text-xl">
          Step To Join Bootcamp
        </h4>
        <ol className="border-l-2 border-blue-500 ml-4 mt-4">
          {props.BootcampProgress.map((progress) => (
            <li
              key={`${progress.bapr_id}-${progress.bapr_prog_id}-${progress.bapr_entity_id}`}
            >
              <div className="flex flex-start items-center">
                <div className="bg-blue-500 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <h6 className="font-semibold leading-tight text-lg hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out ">
                  {progress.bapr_roac.roac_name}
                </h6>
              </div>
              <div className="ml-6 pb-4">
                <p className="text-base italic">
                  {progress.bor_status === "done" ? (
                    <>
                      {getSubtitle(progress.bapr_roac.roac_name)} on{" "}
                      {formatDate(progress.boar_modified_date)}
                    </>
                  ) : (
                    <>
                      <span className="capitalize	mr-1">
                        {progress.bor_status}
                      </span>
                      on {formatDate(progress.boar_modified_date)}
                    </>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
