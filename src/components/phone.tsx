"use client";
import Head from 'next/head';
import { useState } from 'react';
import StarRating from './card/StarRating';
import YesNoButton from './card/Thumbs';
import Choice from './card/choice';
import { FaX } from 'react-icons/fa6';
import { FaBatteryThreeQuarters, FaNetworkWired, FaSignal, FaWifi } from 'react-icons/fa';

export default function Home() {
    const [selection, setSelection] = useState<number | null>(null);
    return (
        <div className="flex flex-col min-w-screen sm:w-3/4 md:w-1/2 bg-white rounded-xl px-2 ">
            <nav className='flex justify-between items-center mb-2'>
                <div className='text-sm font-medium'>9:41</div>
                <div className='flex gap-2 items-center'>
                    <FaSignal />
                    <FaWifi />
                    <FaBatteryThreeQuarters />
                </div>
            </nav>
            <button className='mb-2'>
                <FaX className='w-5 h-5' />
            </button>
            <h1 className="text-2xl font-bold mb-6">Leave a Review</h1>
            <div className='flex flex-col justify-start mb-6'>
                <h2 className='text-xl font-semibold'>Safety</h2>
                <p className='text-sm opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <StarRating />
            </div>
            <div className='flex flex-col justify-start mb-6'>
                <h2 className='text-xl font-semibold'>Communication</h2>
                <p className='text-sm opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <StarRating />
            </div>
            <div className='flex flex-col justify-start mb-6'>
                <h2 className='text-xl font-semibold'>Would you recommend Trausti?</h2>
                <p className='text-sm opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <YesNoButton />
            </div>
            <div className='flex flex-col justify-start mb-6'>
                <h2 className='text-xl font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                <p className='text-sm opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <Choice
                        desc="Lorem"
                        selected={selection === 1}
                        onClick={() => setSelection(1)}
                    />
                    <Choice
                        desc="Ipsum"
                        selected={selection === 2}
                        onClick={() => setSelection(2)}
                    />
                    <Choice
                        desc="Dolor"
                        selected={selection === 3}
                        onClick={() => setSelection(3)}
                    />
                </div>
            </div>
            <div className='flex justify-center mb-4'>
                <button className='px-4 py-2 bg-green-500 rounded-xl hover:text-white hover:bg-green-600'>
                    Submit
                </button>
            </div>
        </div>
    );
}
