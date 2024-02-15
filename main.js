

let cursols = [
    {duration: 71, rating: 8.8, season: 5, episode: 5, episode_name: "The Shock", name: "Peaky Blinders", description:"Tommy, Polly and Arthur tend to Linda's gunshot wound, and as she recovers, she abandons Arthur. Mosley uses the stage at the end of the Swan Lake to make an impassioned speech concerning the advent of the fascist movement in the United Kingdom"},
    {duration: 62, rating: 8.8, season: 2, episode: 9, episode_name: "Look for the Light", name: "The Last of Us", description:"In a flashback, Ellie's mother Anna is bitten by an infected as she gives birth to Ellie. She is found by Marlene, who hesitantly takes Ellie and kills Anna, at the latter's request"},
    {duration: 44, rating: 8.5, season: 6, episode: 17, episode_name: "The Raft of Medusa", name: "Vikings", description:"When king Alfred hears about the arrival of the sons of Ragnar, with an army he must take drastic action. So as the Vikings army makes camp & lies in wait, Alfred and his army abandon the royal villa and march to meet them."}
]

function render_hero_box(info){
    document.getElementById('duration').innerHTML = `Duration : ${info.duration}m`
    document.getElementById('rate').innerHTML = info.rating
    document.getElementById('season_value').innerHTML = info.season + " -"
    document.getElementById('episode_value').innerHTML = info.episode + " -"
    document.getElementById('episode_name').innerHTML = info.episode_name
    document.getElementById('movie_name').innerHTML = info.name
    document.getElementById('desc').innerHTML = info.description
}

function cursol(index){
    render_hero_box(cursols[index])
}

/*__________________________
     
           section nav
//////__________________________ */

class Section_Nav{
    constructor(deafult_id){

        this.non_select_style = " color : var(--gray_text)"
        this.select_style = "color: var(--tetx); font-size: clamp(20px, 1.5vw, 60px);"

        this.selected = document.getElementById(deafult_id)
        this.selected.style = this.select_style
        this.selected.lastElementChild.style = "display:block"
    }
    select_sec_nav(new_btn){
        this.selected.style = this.non_select_style
        this.selected.lastElementChild.style = "display: collapse"
        new_btn.style = this.select_style
        new_btn.lastElementChild.style = "display:block"
        this.selected = new_btn
    }
}

let section1_nav = new Section_Nav("deafult_active")

let section2_nav = new Section_Nav("deafult_active_2")



/*////// __________________________
     
           section nav
__________________________ */

let types = ["Action", "Comedy", "Adventure", "Drama", "Animation", "Crime", "Biography", "Family", "Fantasy", "History", "Sport"]

function render_types(){
    let html = ""
    for(let i =0; i< types.length; i++){
        html+= `<button onclick="select_type(this)">${types[i]}</button>`
    }
    node_list = document.querySelectorAll('.type_select')
    for(let i=0; i< node_list.length; i++){
        node_list[i].innerHTML = html
    }
}

let selected_types = []

selected_type_style = "background-color: var(--primary);"
un_selected_type_style = "background-color: #1e1d22;"

function select_type(btn){
    
    if(selected_types.includes(btn)){
        btn.style = un_selected_type_style
        let index = selected_types.indexOf(btn) 
        selected_types.splice(index, 1)
    }else{
        btn.style = selected_type_style
        selected_types.push(btn)
    }
}

render_types()




movies = [
    {name: "Kuolleet lehdet", date: 2023, rate: 7.4, fave: false, seen: false, image:"Assets/movies_posters/Kuolleet lehdet.jpg"},
    {name: "The Holdovers", date: 2023, rate: 8.0, fave: false, seen: true, image:"Assets/movies_posters/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctThe Holdovers.jpg"},
    {name: "Past Lives", date: 2023, rate: 7.9, fave: true, seen: false, image:"Assets/movies_posters/Past Lives.jpg"},
    {name: "Oppenheimer", date: 2023, rate: 8.4, fave: true, seen: true, image:"Assets/movies_posters/openhimer.jpg"},
    {name: "Poor Things", date: 2023, rate: 8.4, fave: false, seen: true, image:"Assets/movies_posters/Poor Things .jpg"},
    {name: "Bastarden", date: 2023, rate: 7.7, fave: false, seen: false, image:"Assets/movies_posters/Bastarden.jpg"},
    {name: "Kuru Otlar Üstüne", date: 2023, rate: 6.6, fave: false, seen: false, image:"Assets/movies_posters/Kuru Otlar Üstüne .jpg"},
    {name: "Sound of Freedom", date: 2023, rate: 7.7, fave: false, seen: false, image:"Assets/movies_posters/Sound of Freedom.jpg"},
    {name: "The Zone of Interest", date: 2023, rate: 7.9, fave: false, seen: false, image:"Assets/movies_posters/The Zone of Interest.jpg"},
    {name: "American Fiction", date: 2023, rate: 7.9, fave: false, seen: false, image:"Assets/movies_posters/American Fiction.jpg"},
    {name: "Air", date: 2023, rate: 8.8, fave: false, seen: false, image:"Assets/movies_posters/Air.jpg"}
]

movies_grid = [
    {name: "The Shawshank Redemption", date: 1994, rate: 9.3, fave: false, seen: false, image:"Assets/movies_posters/shawshank.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m", details_img:"Assets/movies_background/shawshank.jpg"},
    {name: "The Godfather", date: 1972, rate: 9.2, fave: true, seen: true, image:"Assets/movies_posters/The Godfather.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m", details_img:"Assets/movies_background/godfather.jpg"},
    {name: "The Dark Knight", date: 2008, rate: 9.0, fave: true, seen: false, image:"Assets/movies_posters/The Dark Knight.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m", details_img:"Assets/movies_background/TheDarkKnight.jpg"},
    {name: "The Godfather II", date: 1974, rate: 9.0, fave: true, seen: true, image:"Assets/movies_posters/The Godfather Part II.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m", details_img:"Assets/movies_background/god_father_2.jpg"},
    {name: "12 Angry Men", date: 1957, rate: 9.0, fave: true, seen: true, image:"Assets/movies_posters/12 Angry Men.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Schindler's List", date: 1993, rate: 9, fave: false, seen: false, image:"Assets/movies_posters/Schindler's List.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Pulp Fiction", date: 1994, rate: 8.9, fave: false, seen: false, image:"Assets/movies_posters/Pulp Fiction.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Forrest Gump", date: 1994, rate: 8.8, fave: false, seen: false, image:"Assets/movies_posters/Forrest Gump.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Fight Club", date: 1999, rate: 8.8, fave: true, seen: true, image:"Assets/movies_posters/Fight Club.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m", details_img:"Assets/movies_background/fight_club.jpg"},
    {name: "Inception", date: 2010, rate: 8.8, fave: false, seen: false, image:"Assets/movies_posters/Inception.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "The Matrix", date: 1999, rate: 8.7, fave: false, seen: false, image:"Assets/movies_posters/The Matrix.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},

    {name: "Goodfellas", date: 1990, rate: 8.7, fave: false, seen: true, image:"Assets/movies_posters/Goodfellas.jpg", description: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito." , duration: "2h 25m", details_img:"Assets/movies_background/goodfellas.jpg"},
    {name: "Interstellar", date: 2014, rate: 8.7, fave: false, seen: false, image:"Assets/movies_posters/Interstellar.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Gisaengchung", date: 2019, rate: 8.5, fave: false, seen: true, image:"Assets/movies_posters/Gisaengchung.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Django Unchained", date: 2012, rate: 8.5, fave: false, seen: false, image:"Assets/movies_posters/Django Unchained.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "WALL·E", date: 2008, rate: 8.4, fave: false, seen: false, image:"Assets/movies_posters/WALL·E.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Oppenheimer", date: 2023, rate: 8.4, fave: true, seen: true, image:"Assets/movies_posters/openhimer.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Django Unchained", date: 2012, rate: 8.5, fave: false, seen: false, image:"Assets/movies_posters/Django Unchained.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "3 Idiots", date: 2009, rate: 8.4, fave: false, seen: false, image:"Assets/movies_posters/3 Idiots.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Joker", date: 2019, rate: 8.4, fave: false, seen: false, image:"Assets/movies_posters/image.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    
    
    {name: "Jagten", date: 2012, rate: 8.3, fave: false, seen: false, image:"Assets/movies_posters/Jagten.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Poor Things", date: 2023, rate: 8.4, fave: false, seen: true, image:"Assets/movies_posters/Poor Things .jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Scarface", date: 1983, rate: 8.3, fave: true, seen: true, image:"Assets/movies_posters/Scarface.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
    {name: "Taxi Driver", date: 1976, rate: 8.2, fave: false, seen: false, image:"Assets/movies_posters/Taxi Driverjpg.jpg", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion" , duration: "2h 22m"},
]

function render_movies(container, movies_l){
    let html = ""
    
    for(let i=0; i< movies_l.length; i++){
        let fav_color = ""
        let seen_color = ""

        if(movies_l[i].fave){
            fav_color = "var(--primary)"
        }else{
            fav_color = "var(--gray_text)"
        }
        if(movies_l[i].seen){
            seen_color = "var(--primary)"
        }else{
            seen_color = "var(--gray_text)"
        }

        html += `
        <div class="movie_card">
            <div class="movie_pic">
            <img src="${movies_l[i].image}">
            </div>
            <div class="movie_info">
                <div class="movie_name_card"> ${movies_l[i].name}</div>
                <div class="movie_down">
                    <div class="year">
                        ${movies_l[i].date}
                    </div>
                    <div class="movie_icons">
                        <span class="fav">
                            <i class="fa-solid fa-heart" style = "color: ${fav_color} "></i>
                        </span>
                        <span class="seen">
                            <i class="fa-solid fa-eye" style = "color: ${seen_color} "></i>
                        </span>
                        <div class="movie_rate">
                            <i class="fa-solid fa-star"></i>
                            <p class="movie_rate_value">${movies_l[i].rate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> `
    }
    container.innerHTML = html
}

function render_grid(movies_l){
    let html = ""
    
    for(let i=0; i< movies_l.length; i++){
        let fav_color = ""
        let seen_color = ""

        if(movies_l[i].fave){
            fav_color = "var(--primary)"
        }else{
            fav_color = "var(--gray_text)"
        }
        if(movies_l[i].seen){
            seen_color = "var(--primary)"
        }else{
            seen_color = "var(--gray_text)"
        }

        //onclick="show_movie_details(${i}, ${movies_l})"

        html += `
        <div class="movie_card col-3" onclick ="show_movie_details(${i}, movies_grid)" id="${i}">
            <div class="movie_pic">
            <img src="${movies_l[i].image}">
            </div>
            <div class="movie_info">
                <div class="movie_name_card"> ${movies_l[i].name}</div>
                <div class="movie_down">
                    <div class="year">
                        ${movies_l[i].date}
                    </div>
                    <div class="movie_icons">
                        <span class="fav">
                            <i class="fa-solid fa-heart" style = "color: ${fav_color} "></i>
                        </span>
                        <span class="seen">
                            <i class="fa-solid fa-eye" style = "color: ${seen_color} "></i>
                        </span>
                        <div class="movie_rate">
                            <i class="fa-solid fa-star"></i>
                            <p class="movie_rate_value">${movies_l[i].rate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> `
    }
    document.getElementById("movie_grid").innerHTML = html
}

render_movies(document.getElementById('movies_list'), movies)
render_grid(movies_grid)


function movies_list_scroll(x){
    document.getElementById('movies_list').scrollBy(x, 0)
}


let showed_movie = undefined

function show_movie_details(id, movies){

    let details = document.querySelectorAll('.movie_details_container')
        for(let i=0; i<details.length; i++){
            details[i].remove()
            console.log("done")   
    }

    let html = `
    <div class="movie_details_container" id="details_${id}" style="background-image: url(${movies[id].details_img})">
        <div class="hero_box_container movies">
            <div class="duration" id="duration"> Duration : ${movies[id].duration}</div>
            <div class="rating"> 
                <div class="left_rate">
                    <div class="rate_icon">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="rate" id="rate">${movies[id].rate}</div>
                </div>            
                <div class="types_container">

                </div>
            </div>

            <div class="movie_name" id="movie_name"> ${movies[id].name}</div>

            <div class="description" id="desc"> ${movies[id].description}
            </div>

            <div class="buttons"> 
                <button class="watch"> <i class="fa-solid fa-play"></i> WATCH</button>
                <button class="add_list"> <i class="fa-solid fa-plus"></i> ADD LIST</button>
            </div>
        </div>
    </div>`

    if(id == showed_movie){
        
        let details = document.querySelectorAll('.movie_details_container')
        for(let i=0; i<details.length; i++){
            details[i].remove()
            console.log("done")   
        }
        showed_movie = undefined
    }else{
        document.getElementById(id).outerHTML += html
        showed_movie = id
    }

   
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("navbar").style.backgroundColor = "#16151a";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}
