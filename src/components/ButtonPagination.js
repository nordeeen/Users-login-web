import React from 'react'
import { useDispatch } from 'react-redux';
import { getList } from 'store/reducer';

const ButtonPagination = () => {
    const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-end gap-1 mb-2">
        <button
          onClick={() => dispatch(getList(1))}
          className="py-2 px-3 bg-blue-700 text-base font-medium text-center text-white rounded-l-lg" >
          page 1
        </button>
        <button
          onClick={() => dispatch(getList(2))}
          className="py-2 px-3 bg-blue-700 text-base font-medium text-center text-white rounded-r-lg" >
          page 2
        </button>
      </div>
    </>
  );
}

export default ButtonPagination