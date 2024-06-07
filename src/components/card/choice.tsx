"use client";
import { useState } from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

interface choiceProps {
    desc : string;
    selected : boolean;
    onClick: () => void;
}

const choice:React.FC<choiceProps> = ({ desc, selected, onClick }) => {
    

    return (
        <div className="flex items-center space-x-4">
            <button
                type="button"
                className={`flex items-center space-x-1 p-2 rounded ${selected ? ' bg-green-500 px-2 py-1 space-x-1 text-white rounded-xl' : 'bg-white'}`}
                onClick={onClick}
            >
                <span>{desc}</span>
            </button>
        </div>
    );
};

export default choice;
