"use client";
import { useState } from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

const YesNoButton = () => {
    type SelectionType = 'yes' | 'no' | null;
    const [selection, setSelection] = useState<SelectionType>(null);

    return (
        <div className="flex flex-col items-start md:items-center space-x-4 md:flex-row ">
            <button
                type="button"
                className={`flex items-center space-x-1 p-2 rounded ${selection === 'no' ? ' text-red-500' : 'bg-white'}`}
                onClick={() => setSelection('no')}
            >
                <FaThumbsDown className='w-10 h-6'/>
                <span>No</span>
            </button>

            <button
                type="button"
                className={`flex items-center space-x-1 p-2 rounded ${selection === 'yes' ? ' text-green-500' : 'bg-white'}`}
                onClick={() => setSelection('yes')}
            >
                <FaThumbsUp className='w-10 h-6'/>
                <span>Yes</span>
            </button>
        </div>
    );
};

export default YesNoButton;
