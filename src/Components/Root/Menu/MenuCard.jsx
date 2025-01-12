import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import useEff from '../Hook/useEff';
import Map from '../../Shared/Map';
import Title from '../../Shared/Title';
import Background from '../../Shared/Background';

import desertImg from '../../../assets/assets/menu/dessert-bg.jpeg';
import soupImg from '../../../assets/assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/assets/menu/pizza-bg.jpg';

const MenuCard = () => {
  const [menu] = useEff();

  const categories = {
    popular: menu.filter((item) => item.category === 'popular'),
    soup: menu.filter((item) => item.category === 'soup'),
    salad: menu.filter((item) => item.category === 'salad'),
    pizza: menu.filter((item) => item.category === 'pizza'),
    dessert: menu.filter((item) => item.category === 'dessert'),
    offered: menu.filter((item) => item.category === 'offered'),
  };

  return (
    <div className="my-7">
      {/* Popular Items */}
      <section>
        <Title head="Cheif Recominded" sub="Check it out" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10 auto-rows-fr">
          <Map data={categories.popular} />
        </div>
      </section>

      {/* Tabs Section */}
      <Tabs>
        <TabList className="text-center mx-auto">
          <Tab>Offered Item</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Salad</Tab>
        </TabList>

        {/* Offered Items */}
        <TabPanel>
          <section className="">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-9">
              <Map data={categories.offered} />
            </div>
          </section>
        </TabPanel>

        {/* Pizza Items */}
        <TabPanel>
          <section className="my-7">
            <Background head="Our Pizza Item" img={pizzaImg} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-9">
              <Map data={categories.pizza} />
            </div>
          </section>
        </TabPanel>

        {/* Soup Items */}
        <TabPanel>
          <section className="my-7">
            <Background head="Our Soup Item" img={soupImg} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-9">
              <Map data={categories.soup} />
            </div>
          </section>
        </TabPanel>

        {/* Dessert Items */}
        <TabPanel>
          <section className="my-7">
            <Background head="Our Dessert Item" img={desertImg} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-9">
              <Map data={categories.dessert} />
            </div>
          </section>
        </TabPanel>

        {/* Salad Items */}
        <TabPanel>
          <section className="my-7">
            <Background head="Our Salad Item" img={saladImg} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-9">
              <Map data={categories.salad} />
            </div>
          </section>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuCard;
