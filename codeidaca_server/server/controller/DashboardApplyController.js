import {
  getBootcampApply,
  setBootcampApply,
} from "./DashboardApply/BootcampApply";
import { getProgram } from "./DashboardApply/ProgramEntity";
import { getUser, setUser } from "./DashboardApply/User";
import {
  getUserEducation,
  setUsersEducation,
} from "./DashboardApply/UserEducation";
import {
  getUserMedia,
  setUserMedia,
} from "./DashboardApply/UserMedia";
import { getBootcampApplyProgress } from "./DashboardApply/BootcampApplyProgress"

// user_entity_id 0
// usdu_id 1
// cv_usme_id 2
// photo_usme_id 3
// prog_id 4
// first name user_first_name 5
// last name user_last_name 6
// date 7
// age 8
// school usdu_school 9
// jurusan usdu_field_study 10
// pendidikan usdu_degree 11
// motivation 12
// cv 0
// photo 1

export default {
  getBootcampApply,
  getProgram,
  getUserEducation,
  getUserMedia,
  getUser,
  getBootcampApplyProgress,
  setBootcampApply,
  setUsersEducation,
  setUserMedia,
  setUser,
};
