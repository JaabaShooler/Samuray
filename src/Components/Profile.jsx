import React from "react";
import avatar from "../empty-man.jpg";

const Profile = () => {
    return (
        <div className="profile-main">
            <img src="https://wallpapers-fenix.eu/full/160904/063125204.jpg" alt="https://i.pinimg.com/originals/f2/c5/89/f2c589cd5b482c1d51334a1e127438cf.jpg"/>
            <div className="profile-content">
                <div className="main-info">
                    <img src={avatar} alt="Profile-img"/>
                    <div className="info">
                        <h3>Sanya Goncharenko <span>nickname: <b>_jaaba</b></span></h3>
                        <div className="other-info">
                            <p>Birst Day: <span>13 March</span></p>
                            <p>City: <span>Charnigiv</span></p>
                            <p>Education: <span>CNTU</span></p>
                            <p>WebSite: <a href="https://google.com">Google.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="enter-post">
                    <h2>My Post</h2>
                    <form action="">
                        <textarea type="text" placeholder="Your news..."></textarea>
                        <button className='post-enter'>Send</button>
                    </form>
                </div>
                <div className="posts">
                    <div className="post-item">
                        <img src={avatar} alt="avatar"/>
                        <p>asdasdasda</p>
                    </div>
                    <div className="post-item">
                        <img src={avatar} alt="avatar"/>
                        <p>asdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasdaasdasdasda</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;