import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNav from '../components/app-nav/app-nav';

import Home from './Home';
import ForYourPleasure from './ForYourPleasure';
import OurCoffee from './OurCoffee';
import Product from './Product';
// import styled from 'styled-components';

// import './app.css';

class Theme extends Component {
  state = {
    data: [
      {
        id: 0,
        name: 'Solimo Coffee Beans 2 kg',
        image: '815O9ktyfUL.png',
        imagePDP: 'pdp.jpg',
        price: 10.73,
        link: '/product/0',
        country: 'Brasil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 1,
        name: 'Presto Coffee Beans 1 kg',
        image: '91Ryk2gKejL.png',
        imagePDP: 'pdp.jpg',
        price: 15.99,
        link: '/product/1',
        country: 'Brasil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 2,
        name: 'AROMISTICO Coffee 1 kg',
        image: '71qBQnpQFYL.png',
        imagePDP: 'pdp.jpg',
        price: 6.99,
        link: '/product/2',
        country: 'Brasil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
    ],
  };

  setRouterPDP = (link) => {
    console.log(link)
    this.setState(({data, linkPDP}) => ({
      linkPDP: link,
      data: data.map(item => {
        console.log(link)
        if (item.link === link) {
          return {...item, selected: true}
        }
          
        return {...item, selected: false}
        
      }),
    }));
  };

  render() {
    const { data } = this.state;

    const beansLogo = `${process.env.PUBLIC_URL}/assets/images/beans-logo2.svg`;

    return (
      <Router className="wrapper">
        <header>
          <AppNav item="header" />
        </header>

        <main>
          <Routes>
            <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
            <Route path="/our-coffee" element={<OurCoffee />} />
            <Route
              path="/"
              element={<Home data={data}/>}
            />
            <Route
              path="/product/:id"
              element={<Product data={data}/>}
            />
          </Routes>
        </main>

        <footer>
          <AppNav item="footer" />
          <img src={beansLogo} alt="image" />
        </footer>
      </Router>
    );
  }
}

export default Theme;
