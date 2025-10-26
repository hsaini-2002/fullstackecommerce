import { Link } from 'react-router-dom';
import Logo from '../../assets/images/download.jpeg'
import CountryDropdown from '../CountryDropdown';
import { Button } from '@mui/material';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header =()=>{
    const context = useContext(MyContext)
    return(
        <>
        <div className="headerWrapper ">
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center"> Due to the <b>COVID19</b> epidemic, orders may be processed with a slight delay</p>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                        </div>
                        
                        <div className='col-sm-10 d-flex align-items-center part2'>
                        {
                            context.countryList.length!==0 && <CountryDropdown/>
                        }
                                
                                <SearchBox/>

                                <div className='part3 d-flex align-items-center part3 ms-auto'> 
                                    {
                                        context.isLogin!== true ? <Link to="/signIn"><Button className='btn-blue btn-round me-3'>Sign In</Button></Link> : <Button className='circle me-3'> <FaRegCircleUser/></Button>
                                    }
                                    
                                    {/* <Button className='circle me-3'> <FaRegCircleUser/></Button> */}
                                    <div className='ms-auto cartTab d-flex align-items-center'> 
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ms-2'>
                                            <Button className='circle'><IoBagOutline/> </Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>


                                </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation/>
        </div>

        </>
    )
}
export default Header;