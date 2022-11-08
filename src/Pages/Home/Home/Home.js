import React from 'react';
import img1 from "../../../assets/HomeImage/home1.jpeg";
import img2 from "../../../assets/HomeImage/home2.jpeg";
import img3 from "../../../assets/HomeImage/home3.jpeg";
import Services from '../Services/Services';

const Home = () => {
    return (
        <section>
            <div className="hero flex justify-between items-center gap-5 mt-12 mb-40 h-[70vh]">
                <div className="text-center">
                    <div className="my-28">
                        <h1 className="text-4xl font-bold">Welcome To My Home Food</h1>
                        <p className="py-6">
                            Thanks for coming my Home Food Website. Here You can get the food product which is made by my home. You can enjoy it very much.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
                <div className='relative mt-5'>
                    <div
                        className='w-[30%] shadow-2xl border-dashed border-2 border-orange-400 rounded-md p-3'>
                        <img className='rounded' src={img1} alt="" />
                    </div>
                    <div
                        className='w-[30%] shadow-2xl border-dashed border-2 border-orange-400 rounded-md p-3 absolute bottom-[-170px] left-[180px]'>
                        <img className='rounded' src={img2} alt="" />
                    </div>
                    <div
                        className='w-[30%] shadow-2xl border-dashed border-2 border-orange-400 rounded-md p-3 absolute top-[-110px] right-[180px]'>
                        <img className='rounded' src={img3} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <Services></Services>
            </div>
        </section>
    );
};

export default Home;