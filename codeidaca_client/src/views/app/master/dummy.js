import Page from "../../../component/commons/Page";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import { React, Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
//import { View, Switch, StyleSheet } from "react-native";
import { Switch } from "@headlessui/react";
export default function DummyBackup() {
  const onCheckDisplay = (item) => (event) => {
    let data = event.target.checked;
    let tampung = [data, item];
  };
  let navigate = useNavigate();

  let formik = "";
  let user = "";

  const [enabled, setEnabled] = useState(false);
  console.log(enabled);
  let checkDisplay = 1;

  // if (checkDisplay == 0) {
  //   target.checked = !enabled;
  // } else {
  //   tarchecked = enabled;
  // }
  return (
    <Page
      title="Master Module"
      titleButton="Administrator"
      onClick={() => navigate("/app/dummy")}
    >
      <div>
        <div className="flex-1 align-center justify-center">
          {/* <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          /> */}
        </div>
        {/* {setEnabled(true)} */}
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>

          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white`}
          />
        </Switch>

        {/* <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded-md hidden peer"
              name="bast_entity_id"
              id="bast_entity_id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="bast_entity_id"
              onClick={onCheckDisplay(user)}
            />
            <div className="flex flex-1 py-1 px-3 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 peer-checked:bg-green-400 peer-checked:font-semibold duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class=" h-14 w-14 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-ru
                  le="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="flex-1">
                <span className="block text-xl font-semibold uppercase">
                  {user.user_name}
                </span>
                <span className="-mt-1 text-sm">Univ. Ternama</span>
              </div>
            </div>
            <div className="absolute right-3 peer-checked:rotate-45 duration-300 peer-checked:bg-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </label>
        </div> */}
      </div>
    </Page>
  );
}
