import React from "react";

export default function CategoryAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit} className="shadow-lg shadow-gray-400 w-fit h-60 border-4 border-black-500/50 rounded-md ml-4">
        <h1 className="ml-3 mt-3 text-lg font-bold ">Add Category</h1>
            <div className="ml-3 mt-2 mr-8">
                <div>
                    <label>Category Name : </label>
                    <input type="text" placeholder="Category Name" 
                    onChange = {props.handleOnChange('cate_name')}/>
                </div>
                <div className="mt-2">
                    <label>Parent Category : </label>
                    <select name="parent"  onChange = {props.handleOnChange('cate_cate_id')}>
                        <option value="" selected>--select--</option>
                        <option value="1" >Development</option>
                        <option value="6" >Mobile Development</option>
                        <option value="11" >Data Scientist</option>
                    </select>
                </div>
                <div className="mt-2 float-right">
                    <button onClick={()=>props.setDisplay(false)} className="w-24 h-10 bg-red-500 text-white rounded-md"> Cancel </button>
                    <button type='submit' className="w-24 h-10 ml-2 bg-green-500 text-white rounded-md"> Save </button>
                </div>
            </div>
        </form>
    </div>
  )
}
