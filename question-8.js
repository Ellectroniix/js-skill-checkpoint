// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function getData() {
    const getUserData = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await getUserData.json();
    // console.log(userData);
    let newUsers = [];
    for (let data in userData){
        newUsers.push(userData[data].name);
    }
    console.log(newUsers);
}

getData();
