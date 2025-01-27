import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "./../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "./../../../hooks/useMenu";
import OrderTab from "./../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "soup", "pizza", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="mr-0 p-0">
      <Helmet>
        <title>Order</title>
      </Helmet>
      <Cover title="Order Food" img={orderCoverImg}></Cover>
      <div>
        <Tabs
          className="my-6 text-center"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
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
