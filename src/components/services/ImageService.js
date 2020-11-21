class ImageService {
    async getAllImages() {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json');
        if (response.status === 200)
        return await response.json();
        else {
            alert("Could not fetch images. Please refresh");
            window.location.reload();
        }
    }
}

export default new ImageService();