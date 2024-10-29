const url = "https://randomuser.me/api";

const getUser = async() => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
    const user = data.results[0];
    displayUserProfile(user);
}

const displayUserProfile = (user) =>{
    const profileContainer = document.getElementById("userProfile");

    profileContainer.innerHTML = `
    <h1>Random User</h1>
    <h2>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h2>
    <img src = "${user.picture.large}">
    <p>Dob: ${user.dob.date}</p>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
    `;
}
getUser()