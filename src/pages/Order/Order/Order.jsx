import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import { Helmet } from 'react-helmet-async';
import OrderTab from '../OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    console.log(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    


    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | order</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order food"></Cover>

            <div className='my-12 '>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salads</Tab>
                        <Tab>Pizzas</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soups}></OrderTab> 
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={desserts}></OrderTab> 
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinks}></OrderTab> 
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Order;