import React from "react";
import { Link } from "react-router-dom";
import pdf from "../../public/CV Fa Belair.pdf"
function Navbar(){
    return (
        <nav class=" border-gray-200 bg-gray-900 min-w-[31rem]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                <a href={pdf} download="CV Fa Belair.pdf" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-3xl font-semibold whitespace-nowrap text-white">CV Félix-Antoine Bélair.pdf</span>
                    <span class="self-center text-sm font-semibold whitespace-nowrap text-white">(Click ici!)</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-900  border-gray-700">
                        <li>
                        <Link to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Étude</Link>
                        </li>
                        <li>
                        <Link to="/Prix" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Prix</Link>
                        </li>
                        <li>
                        <Link to="/Emplois" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Emplois</Link>
                        </li>
                        <li>
                        <Link to="/Realisations" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Réalisations</Link>
                        </li>
                        <li>
                        <Link to="/Engagements" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Engagements</Link>
                        </li>
                        <li>
                        <Link to="/Loisirs" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Loisirs</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="h-px border-1 bg-gray-700"></hr>
        </nav>
    );
}

export default Navbar;