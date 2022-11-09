import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userImage from "../../../assets/user.jpg";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ReviewForm from './ReviewForm';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    return (
        <section>
            <h2 className='text-3xl font-semibold mt-12'>Review Section</h2>
            <div className='lg:flex justify-between gap-8 mx-4'>
                <div className='my-5'>
                    {
                        user ?
                            <>
                                <div className='border-2 border-gray-200 rounded-md p-5 lg:w-[35vw]'>
                                    <ReviewForm></ReviewForm>
                                </div>
                            </>
                            :
                            <>
                                <div className='border border-gray-200 rounded-md p-5 lg:w-[35vw]'>
                                    <p>For Reviewing Please <Link to="/login">Login</Link> First</p>
                                </div>

                            </>
                    }
                </div>
                
                <div className='h-[10/12] overflow-y-scroll border-2 p-4 my-5'>
                    <div
                        className='flex items-start gap-5 border-2 border-base-300 rounded-lg p-8 my-5 shadow-lg'>
                        <img className='w-12' src={userImage} alt="" />
                        <div className=''>
                            <h3>Person 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos soluta fugit eveniet mollitia reprehenderit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;