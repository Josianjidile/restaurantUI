import { NextResponse } from "next/server";

export const GET =()=>{
    return new NextResponse("hello jcee starboy",{status: 200});
};

