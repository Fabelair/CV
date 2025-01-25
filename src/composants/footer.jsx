import React from "react";

function Footer(){
    return <nav class=" border-gray-200 bg-gray-900 min-w-[31rem]">
        <hr class="h-px bg-gray-200 border-1"></hr>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">@fabelair</span>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" class="self-center text-2xl font-semibold whitespace-nowrap text-white">Linkedin</a>
            <a href="https://github.com/Fabelair" class="self-center text-2xl font-semibold whitespace-nowrap text-white">Github</a>
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">belair.fa@outlook.com</span>
        </div>
    </nav>
}

export default Footer;