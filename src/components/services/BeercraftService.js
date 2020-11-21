class BeercraftService {
    async getAllData() {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json');
        if (response.status === 200)
        return await response.json();
        else {
            alert("Could not fetch data. Please refresh");
            window.location.reload();
        }
    }
}

export default new BeercraftService();