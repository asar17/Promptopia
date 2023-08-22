"use client"
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession, useProviders } from 'next-auth/react'
import { useState } from 'react'
const Nav = () => {
   const isUserLoggedIn = true;
   const [toggleDropDowunMenu,setToggleDropDownMenu] = useState(false)
    return(
        <nav className="w-full bg-red-100 flex-between mb-16 pt-3">
            <Link href="http://www.google.com" className="flex flex-center gap-2">
                <Image
                  src="/assets/images/logo.svg"
                  alt="Promptopia Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <p className="logo_text">Promptopia</p>
            </Link>

            {/* desktop Navigation */}
            <div className="sm:flex hidden">
              <div className="flex gap-6">
                  {isUserLoggedIn ? 
                    (<div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompot" className="black_btn">Create Post</Link>
                        <button type="button" className="outline_btn" onClick={signOut}>Sign Out</button>
                        <Link href="/profile">
                          <Image
                            src="/assets/images/logo.svg"
                            alt="Profile Logo"
                            width={37}
                            height={37}
                            className="rounded-full"
                          />
                        </Link>
                    </div>) : 
                    (<></>)
                  }
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                {isUserLoggedIn ? 
                  (<div className="flex">
                        <Image
                            src="/assets/images/logo.svg"
                            alt="Profile Logo"
                            width={37}
                            height={37}
                            className="rounded-full"
                            onClick={()=>setToggleDropDownMenu((prev) => !prev)}
                          />
                  </div>)
                  :(<></>)
                }

                { toggleDropDowunMenu && (
                    <div className="dropdown">
                        <Link 
                            href="/profile"
                            className="dropdown_link" 
                            onClick={()=>setToggleDropDownMenu(false)}
                         >
                           My Profile
                        </Link>

                        <Link 
                            href="/create-prompt"
                            className="dropdown_link" 
                            onClick={()=>setToggleDropDownMenu(false)}
                         >
                           Create Prompt
                        </Link>

                        <button
                            type="button"
                            className=" w-full black_btn mt-5"
                            onClick={()=>{
                                setToggleDropDownMenu(false);
                                signOut();
                            }}
                        >
                            Sign Out                        
                        </button>

                    </div>
                )}

            </div>
        </nav>
    )
}
export default Nav