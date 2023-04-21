function ProfileCard({title, handle, logoImage, headerImage, twitterAdress, description}){

    //Aşağıdaki 3 satır ile yukarıdaki function tanımına eklediğimiz {title, handle} aynı işi yapar.
    // const title = props.title;
    // const handle = props.handle;

    //const {title, handle} = props;
    
    return (
        <div className="card">
            <div className="card-image">
            <figure className="image is-4by3">
                <img src={headerImage} alt="FC Header"/>
            </figure>
            </div>

            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={logoImage} alt="FC Logo"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6"><a href={twitterAdress} target="_blank" rel="noreferrer">{handle}</a></p>
                    </div>
                </div>

                <div className="content">{description}</div>
            </div>
        </div>
    )
}

export default ProfileCard;