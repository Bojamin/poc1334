const searchInput = document.querySelector("#search")
const searchResult = document.querySelector(".table-results")

let dataArray;

async function getUsers(){
    const res = await fetch("https://newsapi.org/v2/everything?q=associations&from=2022-07-06&to=2022-07-06&language=fr&sortBy=popularity&pageSize=30&apiKey=5511be81599c41c0ba081b3a95e1a6c1")

    const { articles } = await res.json()

    dataArray = orderList(articles);
    createUserList(dataArray);
}

getUsers()

function orderList(data) {
    const orderedData = data.sort((a,b) => {
        if(a.title.toLowerCase() < b.title.
        toLowerCase()) {
            return -1;
        }
        if(a.title.toLowerCase() > b.title.
        toLowerCase()) {
            return 1;
        }
        return 0;
    })

    return orderedData;
}

function createUserList(usersList) {
    usersList.forEach(articles => {
        const listItem = document.createElement("div");
        listItem.setAttribute("class", "table-item");

        listItem.innerHTML = `
        <div class="container-img">
        <p class="name">${articles.title}</p>
        </div>
        <p class="email">${articles.source.name}</p>
        <p class="phone">${articles.author}</p>
        `
        searchResult.appendChild(listItem);
    })
}

searchInput.addEventListener("input", 
filterData)

function filterData(e) {
    searchResult.innerHTML = ""

    const searchedString = e.target.value.toLowerCase();

    const filteredArr = dataArray.filter(el => el.title.toLowerCase().includes(searchedString))

    createUserList(filteredArr)
}