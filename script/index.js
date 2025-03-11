
// write function and fetch
function categoriesLoader(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response)=> response.json())
    .then((data) => displayCategories(data.categories))
}



function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response)=> response.json())
    .then((data)=> displayVideos(data.videos))
}



// call-back function create
const displayCategories=(categories)=>{
    const categoryContainer = document.getElementById("category-container");

    for(const cat of categories){
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML=`
        <button class="btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv)
    }
}


const displayVideos = (videos)=>{
    const videoContainer = document.getElementById("videos-container");
    videos.forEach(video => {
        // console.log(video.authors[0].profile_picture)
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML=`
        <div class="shadow-sm">
            <div class="relative w-full">
                <div class="relative">
                    <img class="w-full h-[200px] object-cover" src="${video.thumbnail}" alt="">
                    <p class="absolute right-2 bottom-2 text-white bg-black rounded p-1">3hrs 56 min ago</p>
                </div>
            </div>

            <div class="py-5 flex gap-5 items-start">
                <div>
                    <img class="w-[40px] h-[40px] rounded-full" src="${video.authors[0].profile_picture}" alt="">
                </div>
                <div class="flex flex-col gap-2">
                    <h2 class="text-xl font-semibold">${video.title}</h2>
                    <div class="flex gap-3 items-center">
                        <p class="text-gray-500">${video.authors[0].profile_name}</p>
                        <img src="asets/Group 3.png" alt="">
                    </div>
                    <p class="text-gray-500">${video.others.views}</p>
                </div>
            </div>
        </div>
        `
        videoContainer.append(cardDiv)
    });
}

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

// call function
categoriesLoader()
loadVideos()
