import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";

import ArsenalLogo from "./images/logo_arsenal.jpg";
import ArsenalHeader from "./images/header_arsenal.jpg"
import RealMadridLogo from "./images/logo_realmadrid.jpg";
import ReadlMadridHeader from "./images/header_realmadrid.jpg";
import DortmundLogo from "./images/logo_bvb.jpg";
import DortmundHeader from "./images/header_bvb.jpg";

function App(){
    return (
        <div>
            <div>Football Clubs</div>
            <ProfileCard title="Arsenal FC" handle="@Arsenal" logoImage={ArsenalLogo} headerImage={ArsenalHeader} />
            <ProfileCard title="Real Madrid CF" handle="@realmadrid" logoImage={RealMadridLogo} headerImage={ReadlMadridHeader} />
            <ProfileCard title="Borussia Dortmund" handle="@BVB" logoImage={DortmundLogo} headerImage={DortmundHeader} />
        </div>
    )
}

export default App;