function ProfileCard(props){
    return (
        <div>
            <div>Title : {props.title}</div> 
            <div>Handle : {props.handle}</div>
        </div>
    )
}

export default ProfileCard;