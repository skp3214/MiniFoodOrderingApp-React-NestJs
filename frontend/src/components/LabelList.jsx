import React from 'react';
import { useDispatch } from 'react-redux';
import { setLabel } from '../store/orderSlice';
const LabelList = ({ labels }) => {
  const dispatch = useDispatch();
  const handleLabel=(label)=>{
    console.log(label)
    dispatch(setLabel(label));
  }
  return (
    <div className="p-4">
      <ul className="flex flex-wrap gap-8">
        {labels.map((label) => (
          <li 
            key={label.id} 
            onClick={()=>handleLabel(label.id)}
            className="list-none border-2 border-rose-600 rounded px-4 py-2 bg-gray-100 text-gray-700 hover:bg-rose-600 hover:text-white transition-colors duration-300"
          >
            {label.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabelList;
