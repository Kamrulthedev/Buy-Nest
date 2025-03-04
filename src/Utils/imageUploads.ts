export const imageUpload = async (imageFile: File) => {
    const formData = new FormData();
    formData.append('image', imageFile)
    const apiKey = ""
    try {
        const res = await fetch(`?key=${apiKey}`, {
            method: "POST",
            body: 
    })
    }
}