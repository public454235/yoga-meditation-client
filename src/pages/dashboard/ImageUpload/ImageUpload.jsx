export const imageUpload = async image => {
    const formData = new FormData()
    formData.append('image', photo)
    const url = `https://meditation-server-assignment12.vercel.app=${import.meta.env.VITE_IMGBB_KEY}`
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await response.json()
    return data;
}