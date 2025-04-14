"use client";
import React from 'react';

export default function Favourites (){
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold">Fav</h1>
        <p className="text-lg">Welcome to the Fav page!</p>
        <button onClick={()=>{console.log("onclickbutton")}}>Hi click</button>
        </div>
    )
}