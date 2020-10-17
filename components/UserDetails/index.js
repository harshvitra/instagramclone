import React from 'react'
import styles from './UserDetails.module.scss'
function UserDetails() {
    return (
        <div className={styles.userDetailsContainer}>
            <div className="container">
                <div className="row">
                <div className={`col-lg-4 ${styles.userImage} d-flex justify-content-center align-items-center`}>
                    <img src={'/assets/images/vk.jpg'} style={{borderRadius:'50%'}} />
                </div>
                <div className={styles.userDetails}>
                    <div className={`d-flex d-flex-row ${styles.userIDContainer}`}>
                        <p className={styles.userID}>
                            virat_kholi2979
                        </p>
                        <button type="button" className={`btn btn-primary btn-sm ${styles.userFollowButton}`}>Follow</button>
                    </div>
                    <div className={`d-flex d-flex-row ${styles.userStats}`}>
                        <p>
                           <span>8</span> posts
                        </p>
                        <p>
                           <span>3,380</span> followers
                        </p>
                        <p>
                          <span>3</span> following
                        </p>
                    </div>
                    <p>
                        <span style={{fontWeight:'bold'}}>VIRAT KHOLI FAN PAGE</span> 
                        <br/>
                        ❣️Welcome
                    </p>
                </div>
                </div>
               

            </div>
        </div>
    )
}

export default UserDetails
