
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import CatagoryList from '../CatagoryList/CatagoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJobs></FeaturedJobs>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;