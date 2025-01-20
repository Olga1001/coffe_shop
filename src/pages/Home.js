import AppOffer from '../components/app-offer/app-offer';
import AppAbout from '../components/app-about/app-about';
import AppBest from '../components/app-best/app-best';

export const Home = ({data}) => {
    return (
      <> 
        <AppOffer/>
        <AppAbout/>
        <AppBest data={data}/>
      </> 
    );
}

export default Home;
