import { Link } from 'react-router-dom';
import Cover from '../shared/Cover';
import MenuItem from '../shared/MenuItem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            <Cover img={img} title={title}></Cover>
            <div className='grid md:grid-cols-2 gap-8 my-12'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={`/order/${title}`}>
                    <button className='btn btn-outline border-0 border-b-4 mb-8'>Order  Your Favorite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;