import _sequelize from "sequelize";
import config from "../../server/config/config";

const sequelize=new _sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect:'postgres',
    pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
    }
  }
)

const DataTypes = _sequelize.DataTypes;
import _address from  "./address.js";
import _address_type from  "./address_type.js";
import _bank from  "./bank.js";
import _batch from  "./batch.js";
import _batch_student from  "./batch_student.js";
import _batch_student_evaluation from  "./batch_student_evaluation.js";
import _bootcamp_apply from  "./bootcamp_apply.js";
import _bootcamp_apply_progress from  "./bootcamp_apply_progress.js";
import _cart_items from  "./cart_items.js";
import _category from  "./category.js";
import _city from  "./city.js";
import _client from  "./client.js";
import _content_section from  "./content_section.js";
import _content_section_material from  "./content_section_material.js";
import _contents from  "./contents.js";
import _country from  "./country.js";
import _coupon_ofter from  "./coupon_ofter.js";
import _coupon_ofter_course from  "./coupon_ofter_course.js";
import _course_review from  "./course_review.js";
import _courses from  "./courses.js";
import _department from  "./department.js";
import _employee from  "./employee.js";
import _employee_client_contract from  "./employee_client_contract.js";
import _employee_department_history from  "./employee_department_history.js";
import _employee_pay_history from  "./employee_pay_history.js";
import _employee_range from  "./employee_range.js";
import _entity from  "./entity.js";
import _instructor_course from  "./instructor_course.js";
import _job_category from  "./job_category.js";
import _job_post from  "./job_post.js";
import _job_role from  "./job_role.js";
import _job_type from  "./job_type.js";
import _modules from  "./modules.js";
import _payment_gateaway from  "./payment_gateaway.js";
import _payment_transaction from  "./payment_transaction.js";
import _phone_number_type from  "./phone_number_type.js";
import _program_entity from  "./program_entity.js";
import _programs_review from  "./programs_review.js";
import _province from  "./province.js";
import _roles from  "./roles.js";
import _route_actions from  "./route_actions.js";
import _sales_order_detail from  "./sales_order_detail.js";
import _sales_order_header from  "./sales_order_header.js";
import _skill_template from  "./skill_template.js";
import _skill_type from  "./skill_type.js";
import _status from  "./status.js";
import _student_course from  "./student_course.js";
import _student_evaluation from  "./student_evaluation.js";
import _talent_apply from  "./talent_apply.js";
import _talent_apply_progress from  "./talent_apply_progress.js";
import _user_accounts from  "./user_accounts.js";
import _users from  "./users.js";
import _users_address from  "./users_address.js";
import _users_education from  "./users_education.js";
import _users_email from  "./users_email.js";
import _users_experiences from  "./users_experiences.js";
import _users_experiences_skill from  "./users_experiences_skill.js";
import _users_media from  "./users_media.js";
import _users_phones from  "./users_phones.js";
import _users_roles from  "./users_roles.js";
import _users_skill from  "./users_skill.js";

function initModels(sequelize) {
  const address = _address.init(sequelize, DataTypes);
  const address_type = _address_type.init(sequelize, DataTypes);
  const bank = _bank.init(sequelize, DataTypes);
  const batch = _batch.init(sequelize, DataTypes);
  const batch_student = _batch_student.init(sequelize, DataTypes);
  const batch_student_evaluation = _batch_student_evaluation.init(sequelize, DataTypes);
  const bootcamp_apply = _bootcamp_apply.init(sequelize, DataTypes);
  const bootcamp_apply_progress = _bootcamp_apply_progress.init(sequelize, DataTypes);
  const cart_items = _cart_items.init(sequelize, DataTypes);
  const category = _category.init(sequelize, DataTypes);
  const city = _city.init(sequelize, DataTypes);
  const client = _client.init(sequelize, DataTypes);
  const content_section = _content_section.init(sequelize, DataTypes);
  const content_section_material = _content_section_material.init(sequelize, DataTypes);
  const contents = _contents.init(sequelize, DataTypes);
  const country = _country.init(sequelize, DataTypes);
  const coupon_ofter = _coupon_ofter.init(sequelize, DataTypes);
  const coupon_ofter_course = _coupon_ofter_course.init(sequelize, DataTypes);
  const course_review = _course_review.init(sequelize, DataTypes);
  const courses = _courses.init(sequelize, DataTypes);
  const department = _department.init(sequelize, DataTypes);
  const employee = _employee.init(sequelize, DataTypes);
  const employee_client_contract = _employee_client_contract.init(sequelize, DataTypes);
  const employee_department_history = _employee_department_history.init(sequelize, DataTypes);
  const employee_pay_history = _employee_pay_history.init(sequelize, DataTypes);
  const employee_range = _employee_range.init(sequelize, DataTypes);
  const entity = _entity.init(sequelize, DataTypes);
  const instructor_course = _instructor_course.init(sequelize, DataTypes);
  const job_category = _job_category.init(sequelize, DataTypes);
  const job_post = _job_post.init(sequelize, DataTypes);
  const job_role = _job_role.init(sequelize, DataTypes);
  const job_type = _job_type.init(sequelize, DataTypes);
  const modules = _modules.init(sequelize, DataTypes);
  const payment_gateaway = _payment_gateaway.init(sequelize, DataTypes);
  const payment_transaction = _payment_transaction.init(sequelize, DataTypes);
  const phone_number_type = _phone_number_type.init(sequelize, DataTypes);
  const program_entity = _program_entity.init(sequelize, DataTypes);
  const programs_review = _programs_review.init(sequelize, DataTypes);
  const province = _province.init(sequelize, DataTypes);
  const roles = _roles.init(sequelize, DataTypes);
  const route_actions = _route_actions.init(sequelize, DataTypes);
  const sales_order_detail = _sales_order_detail.init(sequelize, DataTypes);
  const sales_order_header = _sales_order_header.init(sequelize, DataTypes);
  const skill_template = _skill_template.init(sequelize, DataTypes);
  const skill_type = _skill_type.init(sequelize, DataTypes);
  const status = _status.init(sequelize, DataTypes);
  const student_course = _student_course.init(sequelize, DataTypes);
  const student_evaluation = _student_evaluation.init(sequelize, DataTypes);
  const talent_apply = _talent_apply.init(sequelize, DataTypes);
  const talent_apply_progress = _talent_apply_progress.init(sequelize, DataTypes);
  const user_accounts = _user_accounts.init(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);
  const users_address = _users_address.init(sequelize, DataTypes);
  const users_education = _users_education.init(sequelize, DataTypes);
  const users_email = _users_email(sequelize, DataTypes);
  const users_experiences = _users_experiences.init(sequelize, DataTypes);
  const users_experiences_skill = _users_experiences_skill.init(sequelize, DataTypes);
  const users_media = _users_media.init(sequelize, DataTypes);
  const users_phones = _users_phones.init(sequelize, DataTypes);
  const users_roles = _users_roles(sequelize, DataTypes);
  const users_skill = _users_skill.init(sequelize, DataTypes);

  batch.belongsToMany(users, { as: 'bast_entity_id_users', through: batch_student, foreignKey: "bast_batch_id", otherKey: "bast_entity_id" });
  bootcamp_apply.belongsToMany(bootcamp_apply, { as: 'bapr_prog_id_bootcamp_applies', through: bootcamp_apply_progress, foreignKey: "bapr_entity_id", otherKey: "bapr_prog_id" });
  bootcamp_apply.belongsToMany(bootcamp_apply, { as: 'bapr_entity_id_bootcamp_applies', through: bootcamp_apply_progress, foreignKey: "bapr_prog_id", otherKey: "bapr_entity_id" });
  coupon_ofter.belongsToMany(program_entity, { as: 'saca_prog_id_program_entities', through: coupon_ofter_course, foreignKey: "saca_coof_id", otherKey: "saca_prog_id" });
  courses.belongsToMany(employee, { as: 'inco_entity_id_employees', through: instructor_course, foreignKey: "inco_prog_id", otherKey: "inco_entity_id" });
  courses.belongsToMany(users, { as: 'core_entity_id_users', through: course_review, foreignKey: "core_prog_id", otherKey: "core_entity_id" });
  courses.belongsToMany(users, { as: 'stud_entity_id_users', through: student_course, foreignKey: "stud_prog_id", otherKey: "stud_entity_id" });
  employee.belongsToMany(courses, { as: 'inco_prog_id_courses', through: instructor_course, foreignKey: "inco_entity_id", otherKey: "inco_prog_id" });
  entity.belongsToMany(users, { as: 'usac_user_entity_id_users', through: user_accounts, foreignKey: "usac_entity_id", otherKey: "usac_user_entity_id" });
  program_entity.belongsToMany(coupon_ofter, { as: 'saca_coof_id_coupon_ofters', through: coupon_ofter_course, foreignKey: "saca_prog_id", otherKey: "saca_coof_id" });
  program_entity.belongsToMany(users, { as: 'boap_entity_id_users', through: bootcamp_apply, foreignKey: "boap_prog_id", otherKey: "boap_entity_id" });
  program_entity.belongsToMany(users, { as: 'pore_entity_id_users', through: programs_review, foreignKey: "pore_prog_id", otherKey: "pore_entity_id" });
  roles.belongsToMany(users, { as: 'usro_entity_id_users', through: users_roles, foreignKey: "usro_role_id", otherKey: "usro_entity_id" });
  users.belongsToMany(batch, { as: 'bast_batch_id_batches', through: batch_student, foreignKey: "bast_entity_id", otherKey: "bast_batch_id" });
  users.belongsToMany(courses, { as: 'core_prog_id_courses', through: course_review, foreignKey: "core_entity_id", otherKey: "core_prog_id" });
  users.belongsToMany(courses, { as: 'stud_prog_id_courses', through: student_course, foreignKey: "stud_entity_id", otherKey: "stud_prog_id" });
  users.belongsToMany(entity, { as: 'usac_entity_id_entities', through: user_accounts, foreignKey: "usac_user_entity_id", otherKey: "usac_entity_id" });
  users.belongsToMany(program_entity, { as: 'boap_prog_id_program_entities', through: bootcamp_apply, foreignKey: "boap_entity_id", otherKey: "boap_prog_id" });
  users.belongsToMany(program_entity, { as: 'pore_prog_id_program_entities', through: programs_review, foreignKey: "pore_entity_id", otherKey: "pore_prog_id" });
  users.belongsToMany(roles, { as: 'usro_role_id_roles', through: users_roles, foreignKey: "usro_entity_id", otherKey: "usro_role_id" });
  users_experiences.belongsToMany(users_skill, { as: 'uesk_uski_id_users_skills', through: users_experiences_skill, foreignKey: "uesk_usex_id", otherKey: "uesk_uski_id" });
  users_skill.belongsToMany(users_experiences, { as: 'uesk_usex_id_users_experiences', through: users_experiences_skill, foreignKey: "uesk_uski_id", otherKey: "uesk_usex_id" });
  client.belongsTo(address, { as: "clit_addr", foreignKey: "clit_addr_id"});
  address.hasMany(client, { as: "clients", foreignKey: "clit_addr_id"});
  sales_order_header.belongsTo(address, { as: "sohe_ship_address_address", foreignKey: "sohe_ship_address"});
  address.hasMany(sales_order_header, { as: "sales_order_headers", foreignKey: "sohe_ship_address"});
  users_address.belongsTo(address, { as: "etad_addr", foreignKey: "etad_addr_id"});
  address.hasOne(users_address, { as: "users_address", foreignKey: "etad_addr_id"});
  users_address.belongsTo(address_type, { as: "etad_adty", foreignKey: "etad_adty_id"});
  address_type.hasMany(users_address, { as: "users_addresses", foreignKey: "etad_adty_id"});
  batch_student.belongsTo(batch, { as: "bast_batch", foreignKey: "bast_batch_id"});
  batch.hasMany(batch_student, { as: "batch_students", foreignKey: "bast_batch_id"});
  batch_student_evaluation.belongsTo(batch_student, { as: "base_bast", foreignKey: "base_bast_id"});
  batch_student.hasMany(batch_student_evaluation, { as: "batch_student_evaluations", foreignKey: "base_bast_id"});
  bootcamp_apply_progress.belongsTo(bootcamp_apply, { as: "bapr_entity", foreignKey: "bapr_entity_id"});
  bootcamp_apply.hasMany(bootcamp_apply_progress, { as: "bootcamp_apply_progresses", foreignKey: "bapr_entity_id"});
  bootcamp_apply_progress.belongsTo(bootcamp_apply, { as: "bapr_prog", foreignKey: "bapr_prog_id"});
  bootcamp_apply.hasMany(bootcamp_apply_progress, { as: "bapr_prog_bootcamp_apply_progresses", foreignKey: "bapr_prog_id"});
  coupon_ofter.belongsTo(cart_items, { as: "coof_cate", foreignKey: "coof_cate_id"});
  cart_items.hasMany(coupon_ofter, { as: "coupon_ofters", foreignKey: "coof_cate_id"});
  category.belongsTo(category, { as: "cate_cate", foreignKey: "cate_cate_id"});
  category.hasMany(category, { as: "categories", foreignKey: "cate_cate_id"});
  program_entity.belongsTo(category, { as: "prog_cate", foreignKey: "prog_cate_id"});
  category.hasMany(program_entity, { as: "program_entities", foreignKey: "prog_cate_id"});
  address.belongsTo(city, { as: "addr_city", foreignKey: "addr_city_id"});
  city.hasMany(address, { as: "addresses", foreignKey: "addr_city_id"});
  program_entity.belongsTo(city, { as: "prog_city", foreignKey: "prog_city_id"});
  city.hasMany(program_entity, { as: "program_entities", foreignKey: "prog_city_id"});
  user_accounts.belongsTo(city, { as: "usac_branch_city_city", foreignKey: "usac_branch_city"});
  city.hasMany(user_accounts, { as: "user_accounts", foreignKey: "usac_branch_city"});
  users_experiences.belongsTo(city, { as: "usex_city", foreignKey: "usex_city_id"});
  city.hasMany(users_experiences, { as: "users_experiences", foreignKey: "usex_city_id"});
  employee_client_contract.belongsTo(client, { as: "ecco_clit", foreignKey: "ecco_clit_id"});
  client.hasMany(employee_client_contract, { as: "employee_client_contracts", foreignKey: "ecco_clit_id"});
  job_post.belongsTo(client, { as: "jopo_clit", foreignKey: "jopo_clit_id"});
  client.hasMany(job_post, { as: "job_posts", foreignKey: "jopo_clit_id"});
  content_section_material.belongsTo(content_section, { as: "cosm_cose", foreignKey: "cosm_cose_id"});
  content_section.hasMany(content_section_material, { as: "content_section_materials", foreignKey: "cosm_cose_id"});
  content_section.belongsTo(contents, { as: "cose_cont", foreignKey: "cose_cont_id"});
  contents.hasMany(content_section, { as: "content_sections", foreignKey: "cose_cont_id"});
  student_evaluation.belongsTo(contents, { as: "stev_cont", foreignKey: "stev_cont_id"});
  contents.hasMany(student_evaluation, { as: "student_evaluations", foreignKey: "stev_cont_id"});
  province.belongsTo(country, { as: "prov_country_code_country", foreignKey: "prov_country_code"});
  country.hasMany(province, { as: "provinces", foreignKey: "prov_country_code"});
  coupon_ofter_course.belongsTo(coupon_ofter, { as: "saca_coof", foreignKey: "saca_coof_id"});
  coupon_ofter.hasMany(coupon_ofter_course, { as: "coupon_ofter_courses", foreignKey: "saca_coof_id"});
  sales_order_detail.belongsTo(coupon_ofter, { as: "sode_coof", foreignKey: "sode_coof_id"});
  coupon_ofter.hasMany(sales_order_detail, { as: "sales_order_details", foreignKey: "sode_coof_id"});
  contents.belongsTo(courses, { as: "cont_prog", foreignKey: "cont_prog_id"});
  courses.hasMany(contents, { as: "contents", foreignKey: "cont_prog_id"});
  course_review.belongsTo(courses, { as: "core_prog", foreignKey: "core_prog_id"});
  courses.hasMany(course_review, { as: "course_reviews", foreignKey: "core_prog_id"});
  instructor_course.belongsTo(courses, { as: "inco_prog", foreignKey: "inco_prog_id"});
  courses.hasMany(instructor_course, { as: "instructor_courses", foreignKey: "inco_prog_id"});
  student_course.belongsTo(courses, { as: "stud_prog", foreignKey: "stud_prog_id"});
  courses.hasMany(student_course, { as: "student_courses", foreignKey: "stud_prog_id"});
  employee_department_history.belongsTo(department, { as: "edhi_dept", foreignKey: "edhi_dept_id"});
  department.hasMany(employee_department_history, { as: "employee_department_histories", foreignKey: "edhi_dept_id"});
  batch.belongsTo(employee, { as: "batch_co_instructor", foreignKey: "batch_co_instructor_id"});
  employee.hasMany(batch, { as: "batches", foreignKey: "batch_co_instructor_id"});
  batch.belongsTo(employee, { as: "batch_instructor", foreignKey: "batch_instructor_id"});
  employee.hasMany(batch, { as: "batch_instructor_batches", foreignKey: "batch_instructor_id"});
  batch.belongsTo(employee, { as: "batch_recruiter", foreignKey: "batch_recruiter_id"});
  employee.hasMany(batch, { as: "batch_recruiter_batches", foreignKey: "batch_recruiter_id"});
  employee.belongsTo(employee, { as: "emp_emp_entity", foreignKey: "emp_emp_entity_id"});
  employee.hasMany(employee, { as: "employees", foreignKey: "emp_emp_entity_id"});
  employee_client_contract.belongsTo(employee, { as: "ecco_account_manager_employee", foreignKey: "ecco_account_manager"});
  employee.hasMany(employee_client_contract, { as: "employee_client_contracts", foreignKey: "ecco_account_manager"});
  employee_client_contract.belongsTo(employee, { as: "ecco_entity", foreignKey: "ecco_entity_id"});
  employee.hasMany(employee_client_contract, { as: "ecco_entity_employee_client_contracts", foreignKey: "ecco_entity_id"});
  employee_department_history.belongsTo(employee, { as: "edhi_entity", foreignKey: "edhi_entity_id"});
  employee.hasMany(employee_department_history, { as: "employee_department_histories", foreignKey: "edhi_entity_id"});
  employee_pay_history.belongsTo(employee, { as: "ephi_entity", foreignKey: "ephi_entity_id"});
  employee.hasMany(employee_pay_history, { as: "employee_pay_histories", foreignKey: "ephi_entity_id"});
  instructor_course.belongsTo(employee, { as: "inco_entity", foreignKey: "inco_entity_id"});
  employee.hasMany(instructor_course, { as: "instructor_courses", foreignKey: "inco_entity_id"});
  job_post.belongsTo(employee, { as: "jopo_emp_entity", foreignKey: "jopo_emp_entity_id"});
  employee.hasMany(job_post, { as: "job_posts", foreignKey: "jopo_emp_entity_id"});
  client.belongsTo(employee_range, { as: "clit_emra", foreignKey: "clit_emra_id"});
  employee_range.hasMany(client, { as: "clients", foreignKey: "clit_emra_id"});
  bank.belongsTo(entity, { as: "bank_entity", foreignKey: "bank_entity_id"});
  entity.hasOne(bank, { as: "bank", foreignKey: "bank_entity_id"});
  user_accounts.belongsTo(entity, { as: "usac_entity", foreignKey: "usac_entity_id"});
  entity.hasMany(user_accounts, { as: "user_accounts", foreignKey: "usac_entity_id"});
  users.belongsTo(entity, { as: "user_entity", foreignKey: "user_entity_id"});
  entity.hasOne(users, { as: "user", foreignKey: "user_entity_id"});
  job_post.belongsTo(job_category, { as: "jopo_joca", foreignKey: "jopo_joca_id"});
  job_category.hasMany(job_post, { as: "job_posts", foreignKey: "jopo_joca_id"});
  talent_apply.belongsTo(job_post, { as: "taap_jopo", foreignKey: "taap_jopo_id"});
  job_post.hasMany(talent_apply, { as: "talent_applies", foreignKey: "taap_jopo_id"});
  employee.belongsTo(job_role, { as: "emp_joro", foreignKey: "emp_joro_id"});
  job_role.hasMany(employee, { as: "employees", foreignKey: "emp_joro_id"});
  job_post.belongsTo(job_role, { as: "jopo_joro", foreignKey: "jopo_joro_id"});
  job_role.hasMany(job_post, { as: "job_posts", foreignKey: "jopo_joro_id"});
  employee_client_contract.belongsTo(job_type, { as: "ecco_joty", foreignKey: "ecco_joty_id"});
  job_type.hasMany(employee_client_contract, { as: "employee_client_contracts", foreignKey: "ecco_joty_id"});
  job_post.belongsTo(job_type, { as: "jopo_joty", foreignKey: "jopo_joty_id"});
  job_type.hasMany(job_post, { as: "job_posts", foreignKey: "jopo_joty_id"});
  route_actions.belongsTo(modules, { as: "roac_module_name_module", foreignKey: "roac_module_name"});
  modules.hasMany(route_actions, { as: "route_actions", foreignKey: "roac_module_name"});
  status.belongsTo(modules, { as: "status_module_module", foreignKey: "status_module"});
  modules.hasMany(status, { as: "statuses", foreignKey: "status_module"});
  users_phones.belongsTo(phone_number_type, { as: "uspo_ponty_code_phone_number_type", foreignKey: "uspo_ponty_code"});
  phone_number_type.hasMany(users_phones, { as: "users_phones", foreignKey: "uspo_ponty_code"});
  batch.belongsTo(program_entity, { as: "batch_prog", foreignKey: "batch_prog_id"});
  program_entity.hasMany(batch, { as: "batches", foreignKey: "batch_prog_id"});
  bootcamp_apply.belongsTo(program_entity, { as: "boap_prog", foreignKey: "boap_prog_id"});
  program_entity.hasMany(bootcamp_apply, { as: "bootcamp_applies", foreignKey: "boap_prog_id"});
  cart_items.belongsTo(program_entity, { as: "cait_prog", foreignKey: "cait_prog_id"});
  program_entity.hasMany(cart_items, { as: "cart_items", foreignKey: "cait_prog_id"});
  coupon_ofter_course.belongsTo(program_entity, { as: "saca_prog", foreignKey: "saca_prog_id"});
  program_entity.hasMany(coupon_ofter_course, { as: "coupon_ofter_courses", foreignKey: "saca_prog_id"});
  courses.belongsTo(program_entity, { as: "corse_prog", foreignKey: "corse_prog_id"});
  program_entity.hasOne(courses, { as: "course", foreignKey: "corse_prog_id"});
  programs_review.belongsTo(program_entity, { as: "pore_prog", foreignKey: "pore_prog_id"});
  program_entity.hasMany(programs_review, { as: "programs_reviews", foreignKey: "pore_prog_id"});
  sales_order_detail.belongsTo(program_entity, { as: "sode_prog", foreignKey: "sode_prog_id"});
  program_entity.hasMany(sales_order_detail, { as: "sales_order_details", foreignKey: "sode_prog_id"});
  city.belongsTo(province, { as: "city_prov", foreignKey: "city_prov_id"});
  province.hasMany(city, { as: "cities", foreignKey: "city_prov_id"});
  // users.belongsTo(roles, { as: "user_current_role_role", foreignKey: "user_current_role"});
  // roles.hasMany(users, { as: "users", foreignKey: "user_current_role"});
  users_roles.belongsTo(roles, { as: "usro_role", foreignKey: "usro_role_id"});
  roles.hasMany(users_roles, { as: "users_roles", foreignKey: "usro_role_id"});
  bootcamp_apply_progress.belongsTo(route_actions, { as: "bapr_roac", foreignKey: "bapr_roac_id"});
  route_actions.hasMany(bootcamp_apply_progress, { as: "bootcamp_apply_progresses", foreignKey: "bapr_roac_id"});
  talent_apply_progress.belongsTo(route_actions, { as: "tapr_roac", foreignKey: "tapr_roac_id"});
  route_actions.hasMany(talent_apply_progress, { as: "talent_apply_progresses", foreignKey: "tapr_roac_id"});
  sales_order_detail.belongsTo(sales_order_header, { as: "sode_sohe", foreignKey: "sode_sohe_id"});
  sales_order_header.hasMany(sales_order_detail, { as: "sales_order_details", foreignKey: "sode_sohe_id"});
  skill_template.belongsTo(skill_template, { as: "skte_skte", foreignKey: "skte_skte_id"});
  skill_template.hasMany(skill_template, { as: "skill_templates", foreignKey: "skte_skte_id"});
  skill_template.belongsTo(skill_type, { as: "skty_name_skill_type", foreignKey: "skty_name"});
  skill_type.hasMany(skill_template, { as: "skill_templates", foreignKey: "skty_name"});
  users_skill.belongsTo(skill_type, { as: "uski_skty_name_skill_type", foreignKey: "uski_skty_name"});
  skill_type.hasMany(users_skill, { as: "users_skills", foreignKey: "uski_skty_name"});
  sales_order_header.belongsTo(status, { as: "sohe_status_status", foreignKey: "sohe_status"});
  status.hasMany(sales_order_header, { as: "sales_order_headers", foreignKey: "sohe_status"});
  talent_apply_progress.belongsTo(talent_apply, { as: "tapr_taap", foreignKey: "tapr_taap_id"});
  talent_apply.hasMany(talent_apply_progress, { as: "talent_apply_progresses", foreignKey: "tapr_taap_id"});
  payment_transaction.belongsTo(user_accounts, { as: "patr_source", foreignKey: "patr_source_id"});
  user_accounts.hasMany(payment_transaction, { as: "payment_transactions", foreignKey: "patr_source_id"});
  payment_transaction.belongsTo(user_accounts, { as: "patr_target", foreignKey: "patr_target_id"});
  user_accounts.hasMany(payment_transaction, { as: "patr_target_payment_transactions", foreignKey: "patr_target_id"});
  batch_student.belongsTo(users, { as: "bast_entity", foreignKey: "bast_entity_id"});
  users.hasMany(batch_student, { as: "batch_students", foreignKey: "bast_entity_id"});
  bootcamp_apply.belongsTo(users, { as: "boap_entity", foreignKey: "boap_entity_id"});
  users.hasMany(bootcamp_apply, { as: "bootcamp_applies", foreignKey: "boap_entity_id"});
  cart_items.belongsTo(users, { as: "cait_entity", foreignKey: "cait_entity_id"});
  users.hasMany(cart_items, { as: "cart_items", foreignKey: "cait_entity_id"});
  course_review.belongsTo(users, { as: "core_entity", foreignKey: "core_entity_id"});
  users.hasMany(course_review, { as: "course_reviews", foreignKey: "core_entity_id"});
  employee.belongsTo(users, { as: "emp_entity", foreignKey: "emp_entity_id"});
  users.hasOne(employee, { as: "employee", foreignKey: "emp_entity_id"});
  payment_gateaway.belongsTo(users, { as: "paga_owner", foreignKey: "paga_owner_id"});
  users.hasMany(payment_gateaway, { as: "payment_gateaways", foreignKey: "paga_owner_id"});
  payment_transaction.belongsTo(users, { as: "patr_user_entity", foreignKey: "patr_user_entity_id"});
  users.hasMany(payment_transaction, { as: "payment_transactions", foreignKey: "patr_user_entity_id"});
  programs_review.belongsTo(users, { as: "pore_entity", foreignKey: "pore_entity_id"});
  users.hasMany(programs_review, { as: "programs_reviews", foreignKey: "pore_entity_id"});
  sales_order_header.belongsTo(users, { as: "sohe_student_entity", foreignKey: "sohe_student_entity_id"});
  users.hasMany(sales_order_header, { as: "sales_order_headers", foreignKey: "sohe_student_entity_id"});
  student_course.belongsTo(users, { as: "stud_entity", foreignKey: "stud_entity_id"});
  users.hasMany(student_course, { as: "student_courses", foreignKey: "stud_entity_id"});
  student_evaluation.belongsTo(users, { as: "stev_entity", foreignKey: "stev_entity_id"});
  users.hasMany(student_evaluation, { as: "student_evaluations", foreignKey: "stev_entity_id"});
  talent_apply.belongsTo(users, { as: "taap_entity", foreignKey: "taap_entity_id"});
  users.hasMany(talent_apply, { as: "talent_applies", foreignKey: "taap_entity_id"});
  user_accounts.belongsTo(users, { as: "usac_user_entity", foreignKey: "usac_user_entity_id"});
  users.hasMany(user_accounts, { as: "user_accounts", foreignKey: "usac_user_entity_id"});
  users_address.belongsTo(users, { as: "etad_entity", foreignKey: "etad_entity_id"});
  users.hasMany(users_address, { as: "users_addresses", foreignKey: "etad_entity_id"});
  users_education.belongsTo(users, { as: "usdu_entity", foreignKey: "usdu_entity_id"});
  users.hasMany(users_education, { as: "users_educations", foreignKey: "usdu_entity_id"});
  users_email.belongsTo(users, { as: "pmail_entity", foreignKey: "pmail_entity_id"});
  users.hasMany(users_email, { as: "users_emails", foreignKey: "pmail_entity_id"});
  users_experiences.belongsTo(users, { as: "usex_entity", foreignKey: "usex_entity_id"});
  users.hasMany(users_experiences, { as: "users_experiences", foreignKey: "usex_entity_id"});
  users_media.belongsTo(users, { as: "usme_entity", foreignKey: "usme_entity_id"});
  users.hasMany(users_media, { as: "users_media", foreignKey: "usme_entity_id"});
  users_phones.belongsTo(users, { as: "uspo_entity", foreignKey: "uspo_entity_id"});
  users.hasOne(users_phones, { as: "users_phone", foreignKey: "uspo_entity_id"});
  users_roles.belongsTo(users, { as: "usro_entity", foreignKey: "usro_entity_id"});
  users.hasMany(users_roles, { as: "users_roles", foreignKey: "usro_entity_id"});
  users_skill.belongsTo(users, { as: "uski_entity", foreignKey: "uski_entity_id"});
  users.hasMany(users_skill, { as: "users_skills", foreignKey: "uski_entity_id"});
  users_experiences_skill.belongsTo(users_experiences, { as: "uesk_usex", foreignKey: "uesk_usex_id"});
  users_experiences.hasMany(users_experiences_skill, { as: "users_experiences_skills", foreignKey: "uesk_usex_id"});
  users_experiences_skill.belongsTo(users_skill, { as: "uesk_uski", foreignKey: "uesk_uski_id"});
  users_skill.hasMany(users_experiences_skill, { as: "users_experiences_skills", foreignKey: "uesk_uski_id"});

  return {
    address,
    address_type,
    bank,
    batch,
    batch_student,
    batch_student_evaluation,
    bootcamp_apply,
    bootcamp_apply_progress,
    cart_items,
    category,
    city,
    client,
    content_section,
    content_section_material,
    contents,
    country,
    coupon_ofter,
    coupon_ofter_course,
    course_review,
    courses,
    department,
    employee,
    employee_client_contract,
    employee_department_history,
    employee_pay_history,
    employee_range,
    entity,
    instructor_course,
    job_category,
    job_post,
    job_role,
    job_type,
    modules,
    payment_gateaway,
    payment_transaction,
    phone_number_type,
    program_entity,
    programs_review,
    province,
    roles,
    route_actions,
    sales_order_detail,
    sales_order_header,
    skill_template,
    skill_type,
    status,
    student_course,
    student_evaluation,
    talent_apply,
    talent_apply_progress,
    user_accounts,
    users,
    users_address,
    users_education,
    users_email,
    users_experiences,
    users_experiences_skill,
    users_media,
    users_phones,
    users_roles,
    users_skill,
  };
}
const models=initModels(sequelize);
export default models
export {sequelize}

