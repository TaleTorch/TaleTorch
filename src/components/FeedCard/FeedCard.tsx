import './FeedCard.css'

function FeedCard() {
    return (
        <>
            <div className="flex flex-col items-center my-6 rounded-xl shadow md:flex-row md:max-w-xl bg-oxford-blue border border-dark-orange select-none">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg select-none" src="/sample-story.jpg" alt="story's img" />
                <div className="flex flex-col justify-between p-4 leading-normal select-none">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white text-white select-none"><a href="">The Story of a broken man</a></h5>
                    <p className="mb-3 font-normal text-gray-400 select-none">There once was a young man hanging around with friend. Unfortunatelty he found a big bag on the ground and he got curious.</p>
                    <a href="#" className="feedcard-button inline-flex items-center w-56 px-3 py-2 text-sm font-medium text-center rounded-2xl bg-dark-orange select-none">
                        Read more
                    </a>
                </div>
            </div>
        </>
    )
}

export default FeedCard