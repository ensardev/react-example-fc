function ProfileCard({title, handle, logoImage, headerImage}){

//Aşağıdaki 3 satır ile yukarıdaki function tanımına eklediğimiz {title, handle} aynı işi yapar.
// const title = props.title;
// const handle = props.handle;

//const {title, handle} = props;


    return (
        <div>
            <img src={logoImage} alt="FC Logo"/>
            <div>Title : {title}</div> 
            <div>Handle : {handle}</div>
        </div>
    )
}

export default ProfileCard;