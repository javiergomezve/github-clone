
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

            <div className="container mx-auto my-8 px-4 flex">
                <div className="file-explorer-container w-3/4 mr-8">
                    <div className="branch-navigation flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <button className="border border-gray-400 rounded-md px-4 py-1 hover:bg-gray-200 flex items-center space-x-2">
                                <svg className="w-4" viewBox="0 0 16 16" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                                </svg>

                                <span className="font-semibold">master</span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <a href="#" className="flex items-center space-x-2 px-3 py-1 group">
                                <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" viewBox="0 0 16 16" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                                </svg>

                                <span className="text-gray-600 group-hover:text-blue-600">
                                    <span className="font-semibold">
                                        25{' '}
                                    </span>
                                    <span>branches</span>
                                </span>
                            </a>

                            <a href="#" className="flex items-center space-x-2 px-3 py-1 group">
                                <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" viewBox="0 0 16 16" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                                </svg>

                                <span className="text-gray-600 group-hover:text-blue-600">
                                    <span className="font-semibold">
                                        2{' '}
                                    </span>
                                    <span>tags</span>
                                </span>
                            </a>
                        </div>

                        <div className="flex items-center space-x-3">
                            <button className="border border-gray-400 rounded-md text-black hover:bg-gray-100 px-4 py-1 flex items-center space-x-1">
                                Go to file
                            </button>

                            <button className="border border-gray-400 rounded-md text-black hover:bg-gray-100 px-4 py-1 flex items-center space-x-1">
                                <span>
                                    Add file
                                </span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <button className="border border-gray-400 text-white rounded-md bg-green-600 hover:bg-green-700 px-4 py-1 flex items-center space-x-1">
                                <svg className="fill-current w-4" viewBox="0 0 16 16" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                                </svg>

                                <span>
                                    Code
                                </span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="commits-container bg-blue-100 rounded-md rounded-b-none border border-blue-200 border-b-0 flex items-center justify-between px-4 py-4 mt-5">
                        <div className="flex items-center space-x-2">
                            <a href="#" className="flex items-center hover:text-gray-400">
                                <img src="https://avatars.githubusercontent.com/u/7153989?s=60&amp;v=4" alt="@javiergomezve"
                                     className="w-6 h-6 rounded-full" />
                            </a>
                            <a href="#" className="font-semibold hover:underline">
                                javiergomezve
                            </a>
                            <a href="#" className="hover:underline hover:text-blue-600">
                                1.5.1
                            </a>
                        </div>

                        <div className="flex items-center space-x-2">
                            <a href="#">
                                <svg aria-label="0 / 2 checks OK" className="w-4 fill-current text-red-700" viewBox="0 0 16 16" role="img">
                                    <path fill-rule="evenodd"
                                          d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>
                            </a>

                            <a href="#"
                               className="font-mono text-xs text-gray-600 hover:underline hover:text-blue-500 ml-2">
                                da070bd
                            </a>

                            <a href="#" className="text-gray-600 hover:underline hover:text-blue-500 ml-2">
                                4 days ago
                            </a>

                            <a href="#" className="text-black px-4 py-1 flex items-center space-x-1 hover:text-blue-600">
                                <svg className="w-4 fill-current" viewBox="0 0 16 16"
                                     version="1.1" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path>
                                </svg>

                                <span className="font-semibold">
                                    3,672
                                </span>

                                <span>
                                    commits
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="file-explorer rounded-md rounded-t-none border border-gray-400 text-gray-700 divide-y divide-gray-400">
                        <div className="flex justify-between px-4 py-2 hover:bg-gray-100">
                            <div className="w-4/12 flex items-center">
                                <svg aria-label="Directory" className="w-4 fill-current text-blue-400" viewBox="0 0 16 16" role="img">
                                    <path fill-rule="evenodd"
                                          d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                </svg>

                                <a href="#" className="hover:underline hover:text-blue-500 ml-3">.github</a>
                            </div>
                            <div className="w-6/12 truncate">
                                <a href="#" className="text-gray-600 hover:underline hover:text-blue-600">
                                    Initial commit
                                </a>
                            </div>
                            <div className="w-2/12 text-right">
                                <span className="text-gray-600">5 days ago</span>
                            </div>
                        </div>

                        <div className="flex justify-between px-4 py-2 hover:bg-gray-100">
                            <div className="w-4/12 flex items-center">
                                <svg aria-label="File" className="w-4" viewBox="0 0 16 16" role="img">
                                    <path fill-rule="evenodd"
                                          d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                </svg>

                                <a href="#" className="hover:underline hover:text-blue-500 ml-3">index.js</a>
                            </div>
                            <div className="w-6/12 truncate">
                                <a href="#" className="text-gray-600 hover:underline hover:text-blue-600">
                                    Initial commit
                                </a>
                            </div>
                            <div className="w-2/12 text-right">
                                <span className="text-gray-600">5 days ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="readme-container rounded-md border border-gray-400 px-4 py-4 mt-4">
                        <h4 className="font-semibold">README.md</h4>

                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto deleniti, eius et labore magni molestiae, molestias nisi quaerat recusandae, ut velit veritatis voluptatem. Commodi necessitatibus non quam, quis quisquam soluta. Aperiam asperiores aspernatur blanditiis delectus deleniti distinctio dolor dolorem ea error esse mollitia, nisi quaerat quasi quos ratione reiciendis sapiente sed ullam? Deleniti fuga magni odit quia rerum! Cupiditate eum fugiat maxime, minima numquam odio perferendis quisquam sapiente temporibus voluptates! Animi error, incidunt molestiae recusandae sed veniam. A aliquam assumenda beatae dignissimos dolorem et fugiat illo impedit inventore ipsum iure laudantium nobis praesentium, quas, quos recusandae, rerum saepe veritatis?
                        </div>
                    </div>
                </div>

                <div className="sidebar w-1/4">
                    <div className="about">
                        <h4 className="text-base font-semibold">About</h4>
                        <p className="text-base mt-4">A utility-first CSS framework for rapid UI development</p>

                        <div className="flex items-center space-x-2 mt-4">
                            <svg className="h-4 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" />
                            </svg>

                            <a href="#" className="text-blue-600 hover:underline font-semibold">
                                tailwindcss.com/
                            </a>
                        </div>

                        <div className="tags text-xs font-semibold flex items-center flex-wrap mt-2">
                            <a href="#"
                               className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                tailwindcss
                            </a>
                            <a href="#"
                               className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                css
                            </a>
                            <a href="#"
                               className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                css-framework
                            </a>
                            <a href="#"
                               className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                postcss
                            </a>
                            <a href="#"
                               className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                functional-css
                            </a>
                            <a href="#"
                               className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                utility-classes
                            </a>
                            <a href="#"
                               className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                responsive
                            </a>
                        </div>

                        <a href="#" className="flex items-center space-x-2 mt-4 group">
                            <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" viewBox="0 0 16 16" aria-hidden="true">
                                <path fillRule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z" />
                            </svg>

                            <span className="text-gray-600 group-hover:text-blue-600">Readme</span>
                        </a>

                        <a href="#" className="flex items-center space-x-2 mt-4 group">
                            <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" viewBox="0 0 16 16" aria-hidden="true">
                                <path fillRule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z" />
                            </svg>

                            <span className="text-gray-600 group-hover:text-blue-600">MIT License</span>
                        </a>
                    </div>

                    <div className="releases border-t border-gray-400 mt-6 pt-6">
                        <h4 className="text-base font-semibold flex items-center">
                            <span>Releases</span>

                            <span className="text-xs rounded-lg bg-gray-300 px-2 ml-1">
                                79
                            </span>
                        </h4>

                        <a href="#" className="flex items-start mt-4 group">
                            <svg className="fill-current w-4 mt-1 text-green-500 group-hover:text-blue-500" viewBox="0 0 16 16" aria-hidden="true">
                                <path fillRule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z" />
                            </svg>

                            <span className="ml-2">
                                <span className="font-semibold group-hover:text-blue-600">v1.5.1</span>
                                <span className="ml-1 text-xs border border-green-500 text-green-600 rounded-full font-semibold inline-block px-2">
                                    Latest
                                </span>
                                <span className="block text-xs group-hover:text-blue-600">
                                    6 days ago
                                </span>
                            </span>
                        </a>

                        <div className="mt-4">
                            <a href="#" className="text-blue-600 hover:underline text-xs">
                                + 78 releases
                            </a>
                        </div>
                    </div>

                    <div className="used-by border-t border-gray-400 mt-6 pt-6">
                        <h4 className="text-base font-semibold flex items-center">
                            <span>Used by</span>

                            <span className="text-xs rounded-lg bg-gray-300 px-2 ml-1">
                                5,00+
                            </span>
                        </h4>

                        <div className="mt-4">
                            <a href="#" className="flex items-center -space-x-2">
                                <img
                                    src="https://avatars.githubusercontent.com/u/16372780?s=88&u=59bad5969570e86801b08440d08ca2d46e6a260a&v=4" alt="avatar"
                                    className="w-8 border-2 border-white rounded-full"
                                />
                                <img
                                    src="https://avatars.githubusercontent.com/u/51749393?s=88&u=d0c044ddf32c2581ceebfe9b4161f0f22dc108da&v=4" alt="avatar"
                                    className="w-8 border-2 border-white rounded-full"
                                />
                                <img
                                    src="https://avatars.githubusercontent.com/u/19916465?s=88&u=aa916649d47ab2be857889055f47b09bedc14784&v=4" alt="avatar"
                                    className="w-8 border-2 border-white rounded-full"
                                />
                                <img
                                    src="https://avatars.githubusercontent.com/u/4436129?s=88&u=c09e4e55b02843bfb31c6c699a604272babe5b7b&v=4" alt="avatar"
                                    className="w-8 border-2 border-white rounded-full"
                                />
                                <img
                                    src="https://avatars.githubusercontent.com/u/12580072?s=88&u=69b0c57bab9bafab5b2f51c43c277930487a799e&v=4" alt="avatar"
                                    className="w-8 border-2 border-white rounded-full"
                                />
                                <img
                                    src="https://avatars.githubusercontent.com/u/23244002?s=88&u=8c487e2da82c479827b4ddeb68694c8caa4657ce&v=4" alt="avatar"
                                    className="w-8 border-2 border-white rounded-full"
                                />

                                <span className="text-xs text-blue-600 font-semibold hover:underline" style={{marginLeft: '0.5rem'}}>
                                    + 58,357
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="contributors border-t border-gray-400 mt-6 pt-6">
                        <h4 className="text-base font-semibold flex items-center">
                            <span>Contributors</span>

                            <span className="text-xs rounded-lg bg-gray-300 px-2 ml-1">
                                115
                            </span>
                        </h4>

                        <div className="flex items-center flex-wrap mt-2">
                            <a href="#">
                                <img
                                    src="https://avatars.githubusercontent.com/u/4323180?s=64&v=4" alt="avatar"
                                    className="w-8 rounded-full mr-2 mt-2"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="https://avatars.githubusercontent.com/in/2141?s=64&v=4" alt="avatar"
                                    className="w-8 rounded-full mr-2 mt-2"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="https://avatars.githubusercontent.com/u/882133?s=64&v=4" alt="avatar"
                                    className="w-8 rounded-full mr-2 mt-2"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="https://avatars.githubusercontent.com/u/1834413?s=64&v=4" alt="avatar"
                                    className="w-8 rounded-full mr-2 mt-2"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="https://avatars.githubusercontent.com/u/5871133?s=64&v=4" alt="avatar"
                                    className="w-8 rounded-full mr-2 mt-2"
                                />
                            </a>
                        </div>

                        <div className="mt-4">
                            <a href="#" className="text-blue-600 hover:underline text-xs">
                                + 104 contributors
                            </a>
                        </div>
                    </div>

                    <div className="languages border-t border-gray-400 mt-6 pt-6">
                        <h4 className="text-base font-semibold flex items-center">
                            Languages
                        </h4>

                        <div className="mt-4 flex">
                            <div className="w-11/12 h-2 rounded-md rounded-r-none bg-purple-700" />
                            <div className="w-1/12 h-2 rounded-md rounded-l-none bg-yellow-400" />
                        </div>

                        <ul className="mt-2 flex space-x-8 items-center text-xs">
                            <li className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-purple-700" />
                                <span className="ml-4">
                                    <span className="font-semibiold">CSS </span>
                                    <span>93.9%</span>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                                <span className="ml-4">
                                    <span className="font-semibiold">JavaScript </span>
                                    <span>6.1%</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <footer className="container mx-auto text-xs border-t border-gray-400 py-10 flex items-center justify-between">
                <ul className="flex items-center space-x-12">
                    <li>&copy; 2020 GitHub, Inc.</li>
                    <li><a href="#" className="text-blue-600 hover:underline">Terms</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Privacy</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Security</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Status</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Docs</a></li>
                </ul>

                <a href="#">
                    <svg className="w-4 fill-current text-gray-400 hover:text-gray-700" viewBox="0 0 16 16" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>

                <ul className="flex items-center space-x-12">
                    <li><a href="#" className="text-blue-600 hover:underline">Contact GitHub</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Pricing</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">API</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Training</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Blog</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">About</a></li>
                </ul>
            </footer>
        </div>
    );
}
