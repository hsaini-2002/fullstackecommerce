import { Button } from '@mui/material';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

const Navigation=()=>{
    const[isOpenSidebarVal, setisopenSidebarVal]=useState(false);
        return(
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-13 navPart1'>
                            <div className='catWrapper'>
                            <Button className='allCatTab align-iteml-center' onClick={()=>setisopenSidebarVal(!isOpenSidebarVal)}>
                                <span className='icon1 me-2'><IoIosMenu/></span>
                                <span class='text'>ALL CATEGORIES</span> 
                                <span className='icon2 ml-2'><FaAngleDown/></span>
                            </Button>

                            <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open' : '' }`}>
                                <ul>
                                    <li><Link to="/"><Button>men<FaAngleRight className="AngleRight"/></Button></Link>
                                        <div className="submenu">
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                       </div>
                                    </li>
                                    <li><Link to="/"><Button>Women<FaAngleRight className='AngleRight'/></Button></Link>
                                        <div className="submenu">
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        </div>
                                        </li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li>
                                    <li><Link to="/"><Button>men</Button></Link></li>
                                    <li><Link to="/"><Button>Women</Button></Link></li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li> 
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className='col-sm-10 navPart2 d-flex align-iteml-center'>
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                                <li className='list-inline-item'><Link to="/"><Button>men</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Women</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Beauty</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                </div></li>
                                <li className='list-inline-item'><Link to="/"><Button>Watches</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                </div></li>
                                <li className='list-inline-item'><Link to="/"><Button>Kids</Button></Link></li>
                                <li className='list-inline-item'><Link to="/"><Button>Gift</Button></Link></li>
                                <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
}

export default Navigation;