import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function Slider() {
  return (
    <>
      <Stack direction='column' gap={3}>
        <Stack direction="row" gap={10}  >
          <Swiper >
            <div className='container'>
              <SwiperSlide >
                <img src="https://picsum.photos/id/1018/1000/600/" alt=" " style={{ width: "100%"  }} />
              </SwiperSlide >
              <SwiperSlide>
                <img src="https://picsum.photos/id/1015/1000/600/" alt=" " style={{ width: "100%" }} />
              </SwiperSlide >
              <SwiperSlide >
                <img src="https://picsum.photos/id/1019/1000/600/" alt=" " style={{ width: "100%" }} />
              </SwiperSlide >
            </div>
          </Swiper>
          <div className='   w-[100%]  h-[auto] text-left  text-xl font-semibold' >
            <div className='text-4xl mt-20 mb-5 font-bold'>ABCD</div> 
            <div className='mb-2 inline text-2xl'>Rs. 2000 <div className='  text-2xl inline ml-10 mb-2'><del> Rs. 2100</del> </div></div>
            <div className='mb-2'>SKU:#1225f5dsadfsa</div>
            <div className=' mb-2' >
             
            </div>
            <div>suvadra</div>
            <div>Product Description Here ..............</div>
          </div>
        </Stack>
        <Stack direction="row" gap={5}>
          <div className='border rounded-lg border-grey p-4 w-[50%] '>
           <div className='text-3xl font-bold'> Varients</div>
            <div className=' space-x-5 m-5 text-2xl font-semibold'>
         <span>Color</span>  
              <Chip label="red" color="primary" />
              <Chip label="blue" color="primary" />
            </div>
            <div className=' space-x-5 m-5 text-2xl font-semibold'>
         <span>Style</span>  
              <Chip label="red" color="primary" />
              <Chip label="blue" color="primary" />
            </div>
            <div className=' space-x-5 m-5 text-2xl font-semibold'>
         <span>Material</span>  
              <Chip label="red" color="primary" />
              <Chip label="blue" color="primary" />
            </div>
          </div>
          <div className='border rounded-lg border-grey p-4 w-[40%]  h-[75%] '>
            <div className='font-bold text-3xl'>Inventory </div>
             <div className='font-semibold text-2xl m-5 '><pre>ABC   12  </pre>
              <pre>CDE   6 </pre>   
            <pre>EGF   8 </pre> </div> 
          </div>
        </Stack>
        <Stack drection='row'>
          <div className='border rounded-lg border-grey p-4  w-[95%]'>
           <div className="text-3xl font-bold">Update history</div>
            <div className='border rounded-lg border-grey w-[25%] h-[70%] py-5 my-5' >
              <div className='px-5'>
              <Avatar alt="Remy Sharp" src="https://picsum.photos/id/1019/1000/600/" /> 
            </div>
            <div className='font-semibold text-xl  ml-5'>
            <div>Suvadra</div>
            <div className='inline mr-10 '> 26 aug,2023</div>
            <div  className='inline'> 3 days ago</div>
            </div>
            </div>
            <div>
            </div>
          </div>
        </Stack>
      </Stack>
    </>
  );
};