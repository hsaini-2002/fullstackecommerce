import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating'; 
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useRef } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import QuantityBox from '../QuantityBox';
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';
import { useContext } from 'react';
import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductZoom from '../ProductZoom';
import { IoCartSharp } from 'react-icons/io5';

const ProductModal = (props) => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
    return (
        <>
         <Dialog  open={context.isOpenProductModal} className='productModal' onClose={() =>context.setisOpenProductModal(false)} >
                <Button className='close_' onClick ={()=> context.setisOpenProductModal(false)}><MdClose/></Button>
                <h4 class="mb-1 font-weight-bold">All Natural Italian-Style Chicken meatballs</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center me-4'>
                        <span>Brands:</span>
                        <span className='ms-2'><b>Welch's</b></span>
                    </div> 
                    <Rating name="read-only" value={5 } size="small" precision={0.5}  readOnly />
                </div>
                        <hr/>
                
                <div className='row mt-2 productDetaileModal'>
                    <div className='col-md-5'>
                        <ProductZoom/>
                    </div>
                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg me-2'>$9.35</span>
                            <span className='netPrice text-danger lg'>$7.25</span>
                        </div>

                        <span className='badge bg-success'>IN STOCK</span>

                        <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                        <div className='d-flex align-items-center'>
                            <QuantityBox/>
                            <Button className='btn-blue btn-lg btn-big btn-round ms-3'><IoCartSharp/>Add to Cart </Button>
                        </div>

                        <div className='d-flex align-items-center mt-5 actions'>
                            <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/> &nbsp; ADD TO WISHLIST</Button>
                            <Button className='btn-round btn-sml ml-3' variant='outlined'><MdOutlineCompareArrows/> &nbsp; COMPARE</Button>
                        </div>
                    </div>
                </div>


            </Dialog>


        </>
    )
}

 export default ProductModal;