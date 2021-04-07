
export default function Home() {
    return (
        <div className="text-gray-900 text-sm">
            <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-400">
                        <svg className="w-8 fill-current" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>

                    <div className="relative">
                        <input
                            type="text"
                            className="rounded bg-gray-700 placeholder-white w-72 px-3 py-1"
                            placeholder="Search or jump to..."
                        />

                        <div className="absolute top-0 right-0 flex items-center h-full">
                            <div className="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">
                                /
                            </div>
                        </div>
                    </div>

                    <ul className="flex items-center font-semibold space-x-4">
                        <li><a href="#" className="hover:text-gray-400">Pull Request</a></li>
                        <li><a href="#" className="hover:text-gray-400">Issues</a></li>
                        <li><a href="#" className="hover:text-gray-400">Marketplace</a></li>
                        <li><a href="#" className="hover:text-gray-400">Explore</a></li>
                    </ul>
                </div>

                <div className="flex items-center space-x-4 text-white">
                    <a href="#" className="relative hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>

                        <span className="bg-blue-600 rounded-full w-2 h-2 absolute top-0 right-0" />
                    </a>

                    <a href="#" className="flex items-center hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>

                    <a href="#" className="flex items-center hover:text-gray-400">
                        <img src="https://avatars.githubusercontent.com/u/7153989?s=60&amp;v=4" alt="@javiergomezve"
                             className="w-6 h-6 rounded-full" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>
            </nav>

            <div className="repo-stats flex items-center justify-between px-7 py-4">
                <div className="flex">
                    <svg aria-label="Repository" className="w-4 fill-current text-gray-600" viewBox="0 0 16 16" role="img">
                        <path fill-rule="evenodd"
                              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>

                    <div className="flex items-center text-xl ml-2">
                        <a href="#" className="text-blue-600 hover:underline">tailwindcss</a>
                        <span className="mx-1">/</span>
                        <a href="#" className="text-blue-600 hover:underline font-semibold">tailwindcss</a>
                    </div>
                </div>

                <div className="flex space-x-2">
                    <div className="flex text-xs">
                        <button className="border border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
                            <svg className="fill-current text-gray-600 w-4" viewBox="0 0 16 16" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                            </svg>

                            <div>
                                Watch
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <a href="#" className="border border-gray-400 rounded rounded-l-none border-l-0 px-3 py-1 font-semibold hover:text-blue-600">
                            430
                        </a>
                    </div>

                    <div className="flex text-xs">
                        <button className="border border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
                            <svg className="fill-current text-gray-600 w-4" viewBox="0 0 16 16" aria-hidden="true">
                                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                            </svg>

                            <div>
                                Star
                            </div>
                        </button>

                        <a href="#" className="border border-gray-400 rounded rounded-l-none border-l-0 px-3 py-1 font-semibold hover:text-blue-600">
                            30
                        </a>
                    </div>

                    <div className="flex text-xs">
                        <button className="border border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
                            <svg className="fill-current text-gray-600 w-4" viewBox="0 0 16 16" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                            </svg>

                            <div>
                                Fork
                            </div>
                        </button>
                        <a href="#" className="border border-gray-400 rounded rounded-l-none border-l-0 px-3 py-1 font-semibold hover:text-blue-600">
                            40
                        </a>
                    </div>
                </div>
            </div>

            <ul className="repo-nav border-b border-gray-400 flex items-center px-8 mt-4">
                <li className="font-semibold">
                    <a href="#" className="flex items-center border-b-2 border-red-500 px-4 pb-3">
                        <svg className="w-4" viewBox="0 0 16 16" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
                        </svg>

                        <span className="ml-2">Code</span>
                    </a>
                </li>

                <li className="font-semibold">
                    <a href="#" className="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150">
                        <svg className="w-4" viewBox="0 0 16 16" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>
                        </svg>

                        <span className="ml-2">Issues</span>

                        <span className="text-xs rounded-lg bg-gray-300 px-2 ml-1">10</span>
                    </a>
                </li>

                <li className="font-semibold">
                    <a href="#" className="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150">
                        <svg className="w-4" viewBox="0 0 16 16" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                        </svg>

                        <span className="ml-2">Pull requests</span>

                        <span className="text-xs rounded-lg bg-gray-300 px-2 ml-1">20</span>
                    </a>
                </li>

                <li className="font-semibold">
                    <a href="#" className="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150">
                        <svg className="w-4" viewBox="0 0 16 16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>
                        </svg>

                        <span className="ml-2">Actions</span>
                    </a>
                </li>

                <li className="font-semibold">
                    <a href="#" className="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150">
                        <svg className="w-4" viewBox="0 0 16 16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path>
                        </svg>

                        <span className="ml-2">Security</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
