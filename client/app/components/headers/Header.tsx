import React from 'react';
import Link from 'next/link';
import { auth } from '@clerk/nextjs';
import DashBoardPage from '@/app/dashboard/page';

const Header = () => {
    const { userId } = auth();

    return (
        <>
            <div>
                {userId && <DashBoardPage />}
                {!userId && (
                    <div>
                        <nav className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
                            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                                    <Link href="/">
                                        <img
                                            src=""
                                            alt="..."
                                            width={110}
                                            className="max-w-full h-auto align-middle border-none"
                                        />
                                    </Link>
                                    <button
                                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                        type="button"
                                    >
                                        <i className="fas fa-bars" />
                                    </button>
                                </div>
                                <div className="lg:flex flex-grow items-center">
                                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                        <Link href="/sign-in">
                                            <li className="nav-item">
                                                <button
                                                    className="rounded-full bg-red-600 text-white active:bg-red-600 text-xs font-bold uppercase px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                                                    type="button"
                                                    style={{ transition: "all 0.15s ease 0s" }}
                                                >
                                                    Sign-In <i className="fas fa-arrow-right" />
                                                </button>
                                            </li>
                                        </Link>

                                        <Link href="/sign-up">
                                            <li className="nav-item">
                                                <button
                                                    className="rounded-full bg-red-600 text-white active:bg-red-600 text-xs font-bold uppercase px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                                                    type="button"
                                                    style={{ transition: "all 0.15s ease 0s" }}
                                                >
                                                    Sign-Up <i className="fas fa-arrow-right" />
                                                </button>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <main className="mt-24">
                            <section
                                className="header relative items-center flex h-screen my-32 md:py-16 md:my-0"
                                style={{ maxHeight: 860 }}
                            >
                                <div className="container mx-auto px-4 my-16 ">
                                    <div className="items-center flex flex-col md:flex-row-reverse">
                                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto my-16 md:my-0">
                                            <img
                                                alt="..."
                                                className="max-w-full rounded-lg"
                                                src="https://favr-images.s3.us-east-2.amazonaws.com/branding/image.png"
                                            />
                                        </div>
                                        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                                            <div className="pt-0 md:pt-32">
                                                <h2 className="font-semibold text-4xl text-gray-700">
                                                    MithoGuff
                                                </h2>
                                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                                    MithoGuff is a ChatApp that everyone can use. It provides a platform for users 
                                                    to engage in conversations and discussions, fostering connections and interactions among its users. 
                                                </p>
                                                <div className="mt-12">
                                                    <div className="flex flex-wrap text-3xl text-green-800 font-extrabold">
                                                        <h1>Note: You must Login to chat.</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="mt-40 pb-20 py-10 relative bg-gray-200">
                                <div
                                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
                                    style={{ height: 80, transform: "translateZ(0px)" }}
                                >
                                    <svg
                                        className="absolute bottom-0 overflow-hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                        version="1.1"
                                        viewBox="0 0 2560 100"
                                        x={0}
                                        y={0}
                                    >
                                        <polygon
                                            className="text-gray-200 fill-current"
                                            points="2560 0 2560 100 0 100"
                                        />
                                    </svg>
                                </div>
                            </section>
                        </main>
                    </div>
                )}
            </div>
        </>
    );
}

export default Header;
