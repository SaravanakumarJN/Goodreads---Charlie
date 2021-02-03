import React from 'react'
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className={styles.navbar__cont}>
            <div className={styles.navbar__left}>
                <div className={styles.menu__logo}>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F1a%2FGoodreads_logo.svg%2F800px-Goodreads_logo.svg.png&f=1&nofb=1"/>
                </div>
                <div className={styles.menu}><Link to="#" className={styles.menu__link}>Home</Link></div> 
                <div className={styles.menu}><Link to="#" className={styles.menu__link}>My Books</Link></div> 
                <div className={styles.menu}>
                    <Link to="#" className={styles.menu__link}>Browse <i class="fas fa-caret-down"></i></Link>
                    <div className={styles.dropdown_content}>
                        <Link to="#" className={styles.dropdown_link}>All Genre</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Mystery</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Thriller</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Comic</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Children's</Link>
                    </div>
                </div>
                <div className={styles.menu}>
                    <Link to="#" className={styles.menu__link}>Community <i class="fas fa-caret-down"></i></Link>
                    <div className={styles.dropdown_content}>
                        <Link to="#" className={styles.dropdown_link}>Discussions</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>People</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Trivia</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Quotes</Link><br/>
                    </div>
                </div> 
            </div>
            <div>
                <input type="text" className={styles.navbar__search} placeholder="Search"/> 
            </div>
            <div>
                <div className={styles.menu__icon}>
                    <Link to="#"><i class="fas fa-bell"></i></Link>
                </div>
                <div className={styles.menu__icon}>
                    <Link to="#"><i class="fas fa-comments"></i></Link>

                </div>
                <div className={styles.menu__icon}>
                    <Link to="#"><i class="fas fa-envelope"></i></Link>
                    
                </div>
                <div className={styles.menu__icon}>
                    <Link to="#"><i class="fas fa-users"></i></Link>
                    
                </div>
                <div className={styles.menu__icon}>
                    <Link to="#"><i class="fas fa-user"></i></Link>
                    <div className={styles.dropdown_content}>
                        <Link to="#" className={styles.dropdown_link}>Name</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Profile</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Friends</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Discussions</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Favourites</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Quotes</Link><br/>
                        <Link to="#" className={styles.dropdown_link}>Sign Out</Link><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Navbar}
