export const saveUser = user => {
    console.log(user)
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        role: user?.role ? user?.role : 'student'

    }
    fetch(`https://meditation-server-assignment12.vercel.app/users/${user?.email}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => { console.log(data) })
}