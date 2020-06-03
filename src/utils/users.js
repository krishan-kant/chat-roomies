const users = []

//add user
const adduser = ({id,username,room}) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validating the data
    if(!username || !room){
        return {
            error: 'Username and room are required'
        }
    }

    //checking for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if(existingUser){
        return {
            error: 'Username already in use!'
        }
    }

    //store user
    const user = {id,username,room}
    users.push(user)
    return { user }
}


//remove user
const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if(index != -1){
        return users.splice(index,1)[0]
    }
}

//get user
const getUser = (id) => {
    return users.find((user) => user.id === id)
}
//get users in room
const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

module.exports = {
    adduser,
    removeUser,
    getUser,
    getUsersInRoom
}
