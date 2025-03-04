export const imageUpload = async (imageFile: File) => {
    console.log("Uploading image:", imageFile);  // চেক করতে ফাইল ঠিকমতো আসছে কিনা

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
        console.log("Image upload response:", data);  // এখানে চেক করো কনসোল এর রেসপন্স

        if (!data.success) throw new Error("Image Upload failed");

        return data.data.url;  // ইউআরএল রিটার্ন হবে
    } catch (error) {
        console.error("Error Uploading Image:", error);
        return null;  // যদি সমস্যা হয়, null রিটার্ন করবে
    }
};
