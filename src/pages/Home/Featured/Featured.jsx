import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
import SectionTitle from '../../../components/sectionTitle/SectionTitle';


const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-8 text-white my-20'>
            <SectionTitle subHeading="Check it out" heading="From our menu"></SectionTitle>
            <div  className='md:flex justify-center items-center pb-20 pt-12 px-24 bg-slate-500 opacity-60'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa minus, ex adipisci voluptatum a repellat exercitationem dolorem ad asperiores cum earum deserunt nemo sequi harum provident nulla omnis repellendus saepe reiciendis quis. Nostrum enim itaque rem doloribus harum aperiam tenetur id ratione et illo officia quos deserunt a, eius similique?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;