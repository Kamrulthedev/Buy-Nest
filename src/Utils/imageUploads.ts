export const imageUpload = async (imageFile: File) => {

    if (!(imageFile instanceof File)) {
        console.error("Provided image is not a valid File");
        return null;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    const apiKey = "26ca840c6bddf0fe4d1eed5918a380a0"; 
    const apiUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            body: formData
        });

        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();

        if (!data.success) throw new Error("Image Upload failed");

        return data.data.url; 
    } catch (error) {
        console.error("Error Uploading Image:", error);
        return null;
    }
};
