import React from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineArrowRight} from "react-icons/hi"
;
const About = () => {
  return (
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we're serious about is food.</p>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam aliquid sint. Animi consequatur eos unde officia? Dolores, hic quam quidem repellendus voluptate earum numquam praesentium eum esse. Accusamus, soluta cum maiores sapiente facilis blanditiis cumque consequuntur laboriosam reiciendis ullam laudantium aliquid magnam, temporibus itaque labore quam harum. Quo, architecto?
                    </p>
                    <Link className='explore-btn' to={"/"}>
                    Explore Menu{" "} <span><HiOutlineArrowRight /></span></Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>

        </section>
  )
}

export default About