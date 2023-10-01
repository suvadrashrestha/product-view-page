import  React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
export default function Sichu(){
    return(<div className="flex justify-center items-center"> 
    <Stack className="w-[80%]" direction='column' spacing={2} >
    <Skeleton  className="w-[100%]" variant="rectangular"  height={400} />


   <Stack className=" w-[100%]  flex  justify-center items-center" direction='column' spacing={-5} >
    <Skeleton className="w-[15%]" varient="rounded" height={50}/>

    <Stack className="w-[80%]" direction='row' spacing={1} >
    <Skeleton className="w-[25%]" varient="rectangular" height={250}/>
    <Skeleton className="w-[25%]" varient="rectangular" height={250}/>
    <Skeleton className="w-[25%]" varient="rectangular" height={250}/>
    <Skeleton className="w-[25%]" varient="rectangular" height={250}/>
    </Stack>

    <Skeleton className="w-[10%]" varient="rounded" height={50}/>
    </Stack>


    <Skeleton  className="w-[100%]" variant="rectangular"  height={200} />
    </Stack>
    </div>
    )
}