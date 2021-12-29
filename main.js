// API information

const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


//요소선택
const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById('search')

showMovies(apiUrl)
function showMovies(url){
    fetch(url)
    .then(res=> res.json())
    .then(function (data){
        data.results.forEach( element =>{

            // 메인태그에 데이터 넣기
            const el = document.createElement('div')
            const image = document.createElement('img')
            const text = document.createElement('h2')

            text.innerHTML = `${element.title}`
            image.src = IMGPATH + element.poster_path
            el.appendChild(image)
            el.appendChild(text)
            main.appendChild(el)
        })
    })
}

// form을 통해 제출했을때 새로고침없이 업로드
form.addEventListener("submit", e=>{
    e.preventDefault()
    main.innerHTML = ''


    // search에 단어를 검색하면 API목록이 나옴
    const searchTerm = search.value
    if (searchTerm){
        showMovies(SEARCHAPI + searchTerm)
        search.value = ""
    }
})