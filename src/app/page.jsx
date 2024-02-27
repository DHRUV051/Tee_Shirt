import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Component1 from "@/Components/HomeAstha/Component1";
import { Component2 } from "@/Components/HomeAstha/Component2";
import Component3 from "@/Components/HomeAstha/Component3";
import Component4 from "@/Components/HomeAstha/Component4";
import Component5 from "@/Components/HomeAstha/Component5";


const Home = () => {
  return (
    <main>
           <Header/>
           <Component1 />
           <Component2 />
           <Component3 />
           <Component4 />
           <Component5 />
           <Footer />
    </main>
  );
}

export default Home;
