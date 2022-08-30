import React, { useState, useEffect } from "react";
import categoryApi from '../../../api/categoryApi';
import parentCateApi from '../../../api/parentCateApi';

export default function CategoryEdit(props) {
    const [category, setCategory] = useState([])
    const [parents, setParents] = useState([])

    useEffect(() => {
        categoryApi.findOne(props.id.cateID).then(data => {
            setCategory(data)
        })
        parentCateApi.list().then(data => {
            setParents(data)
        })
    },[])


  return (
    <div>
        <form onSubmit={props.onEdit} className="shadow-lg shadow-gray-400 w-fit h-60 border-4 border-black-500/50 rounded-md ml-4">
        <h1 className="ml-3 mt-3 text-lg font-bold ">Edit Category</h1>
            <div className="ml-3 mt-2 mr-8">
                <div>
                    <label>Category Name : </label>
                    <input name="Category Name" type="text" placeholder="Category Name" defaultValue={category.cate_name}
                    onChange = {props.handleOnChange('cate_name')}/>
                </div>
                <div className="mt-2">
                    <label>Parent Category : </label>
                <select defaultValue={category.cate_cate_id} name="Parent Category" onChange = {props.handleOnChange('cate_cate_id')}>
                    {parents&&parents.map(parcat => {
                    if(parcat.cate_id===category.cate_cate_id){
                    return <option value={parcat.cate_id} selected>{parcat.cate_name}</option>
                    }else{
                    return <option value={parcat.cate_id}>{parcat.cate_name}</option>
                    }
                    })}
                </select>
                </div>
                <div className="mt-2 float-right">
                    <button onClick={()=>props.setDisplayEdit(false)} className="w-24 h-10 bg-red-500 text-white rounded-md"> Cancel </button>
                    <button type='submit' className="w-24 h-10 ml-2 bg-green-500 text-white rounded-md"> Save </button>
                </div>
            </div>
        </form>
    </div>
  )
}
