import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";

import ArsenalLogo from "./images/logo_arsenal.jpg";
import ArsenalHeader from "./images/header_arsenal.jpg"
import RealMadridLogo from "./images/logo_realmadrid.jpg";
import ReadlMadridHeader from "./images/header_realmadrid.jpg";
import DortmundLogo from "./images/logo_bvb.jpg";
import DortmundHeader from "./images/header_bvb.jpg";

function App(){

    const twitterArsenal="https://twitter.com/Arsenal";
    const twitterRealMadrid="https://twitter.com/realmadrid";
    const twitterDortmund="https://twitter.com/BVB";

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."

    return (
        <div>
        <section class="hero is-danger">
            <div class="hero-body">
                <p class="title">Football Clubs</p>
                <p class="subtitle">MyTeams</p>
            </div>
        </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Arsenal FC" 
                                handle="@Arsenal" 
                                logoImage={ArsenalLogo} 
                                headerImage={ArsenalHeader} 
                                twitterAdress={twitterArsenal}
                                description={description} 
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Real Madrid CF" 
                                handle="@realmadrid" 
                                logoImage={RealMadridLogo} 
                                headerImage={ReadlMadridHeader} 
                                twitterAdress={twitterRealMadrid}
                                description={description} 
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Borussia Dortmund" 
                                handle="@BVB" 
                                logoImage={DortmundLogo} 
                                headerImage={DortmundHeader} 
                                twitterAdress={twitterDortmund}
                                description={description} 
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default App;