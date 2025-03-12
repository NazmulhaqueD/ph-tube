
// active remove function
function removeActiveClass(){
    const activeClassBtn = document.getElementsByClassName("active");
    for(const activeBtn of activeClassBtn){
        activeBtn.classList.remove("active");
    }
}
// write function and fetch
function categoriesLoader(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response)=> response.json())
    .then((data) => displayCategories(data.categories))
}

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response)=> response.json())
    .then((data)=> {
        removeActiveClass()
        document.getElementById("all-btn").classList.add("active");
        displayVideos(data.videos)
    })
}

function loadCategoryVideos(id){
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        const clickedBtn = document.getElementById(`btn-${id}`);
        removeActiveClass()
        clickedBtn.classList.add("active")

        displayVideos(data.category)
    })
    
}


// call-back function create
const displayCategories=(categories)=>{
    const categoryContainer = document.getElementById("category-container");

    for(const cat of categories){
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML=`
        <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv)
    }
}

const displayVideos = (videos)=>{
    const videoContainer = document.getElementById("videos-container");
    videoContainer.innerHTML="";
    if(videos.length==0){
        videoContainer.innerHTML=`
        <div id="opps" class="flex justify-center text-center flex-col col-span-full mt-20">
            <img class="mx-auto" src="asets/Icon.png" alt="">
            <h2 class="text-4xl font-bold">Oops!! Sorry, There is no content here</h2>
      </div>
        `
    }
   
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


// call function
categoriesLoader()
loadVideos()
