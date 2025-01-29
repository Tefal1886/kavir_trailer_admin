export const uploadImage = () => {
    const selected = ref(null);
    const preview = ref('');
    const newImg = ref('');
    function encodeFileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split(',')[1]); // Extract Base64 portion
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file); // Read file as a Data URL
        });
    }
    const handle = async (event) => {
        const file = event.target.files[0];
        selected.value = file;
        preview.value = URL.createObjectURL(file);
        try {
            newImg.value = await encodeFileToBase64(file);
        } catch (error) {
            alert('دوباره آپلود کنید');
        }
    }
    return { preview, handle, newImg }
}