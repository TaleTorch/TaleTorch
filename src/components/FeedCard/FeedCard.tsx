import './FeedCard.css'

function FeedCard() {
    return (
        <> 
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/sample-story.jpg" alt="story's img"/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Story of a broken man</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">There once was a young man hanging around with friend. Unfortunatelty he found a big bag on the ground and he got curious.</p>
                </div>
            </a>
        </>
    )
}

export default FeedCard