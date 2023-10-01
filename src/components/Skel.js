import  React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material';

export default function Variants() {
  return (
    <Stack direction='column' spacing={3} >

         <Stack  direction='row' spacing={7} >
      <Skeleton  className="w-[50%]" variant="rectangular"  height={400} />

      <div  className=" flex items-center   w-[50%] ">
        <div className=" w-[100%] h-auto">
      <Stack direction='column' spacing={4} >
      <Skeleton className=" mt-4 w-[30%]" variant="rounded"  height={35} />

      <Stack direction='column' gap={0.5}>
      <div className="w-[25%]">
        <Stack direction='row' gap={4}>
      <Skeleton className="w-[50%] " variant="rounded"  height={25} />
      <Skeleton className="w-[50%]" variant="rounded"  height={25} />
      </Stack>
      </div>
      <Skeleton className="w-[16%]" variant="rounded"  height={30} />
      <Skeleton className="w-[15%]" variant="rounded"  height={20} />
      </Stack>

        <div className="w-[25%]"><Stack direction='row' gap={3}>
        <Avatar></Avatar>
      <Skeleton className=" mt-2 w-[100%]" variant="rounded"  height={25} />
      </Stack>
      </div>
      <Skeleton className="w-[15%]" variant="rounded"  height={28} />
      </Stack>
      </div>
      </div>
      
      </Stack>
      <Stack  direction='row' spacing={6}>
      <Skeleton  className="w-[55%]" variant="rounded"  height={150} />
      <Skeleton   className="w-[45%]" variant="rounded"  height={100} />
    </Stack>
    </Stack>
  );
}
