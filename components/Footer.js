function Footer() {
    return (                                                        // this point do not use space-x-4, u can use space. why u use space and it in grid, it like tresh.
        <div className="grid md:grid-cols-4 bg-gray-100 text-gray-600 gap-y-4  px-32 py-14">
            <div className="space-y-4 text-xs text-gray-800 pb-2 border-b-2 sm:border-none">
                <h5 className="font-bold">ABOUT</h5>
                <p> How Airbnb works </p>
                <p> Newsroom </p>
                <p> Investores </p>
                <p> Airbnb Plus </p>
                <p> Airbnb Luxe </p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 border-b-2 sm:border-none pb-2">
                <h5 className="font-bold">COMMUNITY</h5>
                <p> Accessibility </p>
                <p> This is not a real site </p>
                <p> Its a pretty awesome clone </p>
                <p> Referrals accepted </p>
                <p> Papafam </p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 border-b-2 sm:border-none pb-2">
                <h5 className="font-bold">HOST</h5>
                <p> How Airbnb works </p>
                <p> Newsroom </p>
                <p> Investores </p>
                <p> Airbnb Plus </p>
                <p> Airbnb Luxe </p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 border-b-2 sm:border-none pb-2">
                <h5 className="font-bold">SUPPORT</h5>
                <p> Help Centre </p>
                <p> Trust & Safty </p>
                <p> Say Hi YouTube </p>
                <p> Airbnb Plus </p>
                <p> Airbnb Luxe </p>
            </div>

        </div>
    )
}

export default Footer
