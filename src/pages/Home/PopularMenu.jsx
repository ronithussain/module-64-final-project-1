import SectionTitle from '../../components/sectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';

import MenuItem from '../shared/MenuItem';

const PopularMenu = () => {
   const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='mb-12'>
            <SectionTitle subHeading={"Popular items"} heading={"From our menu"}></SectionTitle>

            <div className='grid md:grid-cols-2 gap-8'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-3'>
                <button className='btn btn-outline border-0 border-b-4 mt-4 uppercase'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;