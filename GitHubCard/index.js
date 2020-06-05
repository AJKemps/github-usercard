/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function getProfiles(name){
  const thePromise = axios.get(`https://api.github.com/users/${name}`)

  thePromise.then(response => {
    console.log('the api returned', response)
    debugger
    const profileCard = cardMaker(response.data)
    document.querySelector('.cards').appendChild(profileCard)
  })

  .catch(error => {
    debugger
    console.log('something went wrong', error)
  })

  .finally(() => {
    console.log('done')
  })
}

console.log(getProfiles('ajkemps'))


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(githubData) {
  
  const {avatar_url, name, login, location, html_url, followers, following, bio} = githubData

  // create elements
  const card = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardTitle = document.createElement('h3')
  const cardUsername = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')
  const cardProfileAnchor = document.createElement('a')

  // structure elements
  card.appendChild(cardImg)
  card.appendChild(cardInfo)

  cardInfo.appendChild(cardTitle)
  cardInfo.appendChild(cardUsername)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)
  

  // fill elements
  cardTitle.textContent = name
  cardUsername.textContent = login
  cardLocation.textContent = `Location: ${location}`
  cardProfileAnchor.textContent = html_url
  cardProfile.textContent = `Profile: ${cardProfileAnchor}`
  cardFollowers.textContent = `Followers: ${followers}`
  cardFollowing.textContent = `Following: ${following}`
  cardBio.textContent = `Bio: ${bio}`

  // add attributes
  card.classList.add('card')
  cardImg.src = avatar_url
  cardInfo.classList.add('card-info')
  cardTitle.classList.add('name')
  cardUsername.classList.add('username')
  cardProfileAnchor.href = html_url 


  // return item
  cardProfile.appendChild(cardProfileAnchor)
  return card

  // loop array
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
