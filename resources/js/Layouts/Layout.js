import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import FlashMessages from '@/Components/FlashMessages';

import { Link, usePage } from '@inertiajs/inertia-react';
import ButtonMenu from '@/Components/ButtonMenu';

export default function Layout({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { auth, flash } = usePage().props;
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-900 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex w-full h-16 items-center">

                        <div className="flex-1 justify-start">
                            <div className="flex-shrink-0 flex ">
                                <Link href={route('home')}>
                                    <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                                </Link>
                            </div> 
                        </div> 
                        <div className="flex-1  justify-end">
                            <div className="flex  justify-end">
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex flex">
                                    <Link href={route('home')}  style={{ textDecoration: 'none' }}>
                                        <ButtonMenu className="">
                                            Início
                                        </ButtonMenu>
                                    </Link>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex flex">
                                    <Link href={route('personagem')}  style={{ textDecoration: 'none' }}>
                                        <ButtonMenu className="">
                                            Personagens
                                        </ButtonMenu>
                                    </Link>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex flex">
                                    <Link href={route('sobre')}  style={{ textDecoration: 'none' }}>
                                        <ButtonMenu className="">
                                            Sobre
                                        </ButtonMenu>
                                    </Link>
                                </div>
                        

                            {auth ? (
                                <div className="hidden sm:flex sm:items-center sm:ml-6 flex">
                                    <div className="">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <ButtonMenu
                                                        type="button"
                                                        className="inline-flex items-center border border-transparent leading-4 rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                        {auth.name}
                                                        <svg className="ml-2 -mr-0.5 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </ButtonMenu>
                                                </span>
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                                    Sair
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                            ) : (
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex flex">
                                    <Link href={route('login')}  style={{ textDecoration: 'none' }}>
                                        <ButtonMenu className="">
                                            Entrar
                                        </ButtonMenu>
                                    </Link>
                                </div>
                            )}
                            </div>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'} >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('home')} active={route().current('home')}>
                            Início
                        </ResponsiveNavLink>
                    </div>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('personagem')} active={route().current('personagem')}>
                            Personagens
                        </ResponsiveNavLink>
                    </div>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('sobre')} active={route().current('sobre')}>
                            Sobre
                        </ResponsiveNavLink>
                    </div>
                    {auth ? (
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">{auth.name}</div>
                                <div className="font-medium text-sm text-gray-500">{auth.email}</div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                    Sair
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('login')} active={false}>
                                Entrar
                            </ResponsiveNavLink>
                        </div>
                    )}
                    
                </div>
            </nav>
            <main>
            <div className="flex justify-center"> <FlashMessages /> </div>
                {children}
            </main>
        </div>
    );
}
