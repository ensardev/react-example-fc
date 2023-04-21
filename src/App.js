import ProfileCard from "./ProfileCard";

function App(){
    return (
        <div>
            <div>Football Clubs</div>
            <ProfileCard title="Arsenal FC" handle="@Arsenal" />
            <ProfileCard title="Real Madrid CF" handle="@realmadrid" />
            <ProfileCard title="Borussia Dortmund" handle="@BVB" />
        </div>
    )
}

export default App;