import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>

            {/* Main Cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's offer">
            </SectionTitle>

            {/* Offered menu items */}
            <MenuCategory
                items={offered}
                title="Offered"
                img={dessertImg}>
            </MenuCategory>

            {/* Dessert menu item */}
            <MenuCategory
                items={desserts}
                title="dessert"
                img={dessertImg}>
            </MenuCategory>

            {/* Pizza menu item */}
            <MenuCategory
                items={pizzas}
                title="pizza"
                img={pizzaImg}>
            </MenuCategory>

            {/* Soup menu item */}
            <MenuCategory
                items={soups}
                title="soups"
                img={soupImg}>
            </MenuCategory>

            {/* Salad menu item */}
            <MenuCategory
                items={salads}
                title="salad"
                img={saladImg}>
            </MenuCategory>
        </div>
    );
};

export default Menu;