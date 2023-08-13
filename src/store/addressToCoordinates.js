const getAddressCoordinates = async (address) => {
    try {
        const response = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`, {
            headers: {
                Authorization: 'a0ab11a1d2a24d584c1cdbfb5c9a608c',
            },
        });

        const data = await response.json();

        if (data.documents && data.documents.length > 0) {
            const firstResult = data.documents[0];
            const { x, y } = firstResult.address;
            return { latitude: y, longitude: x };
        } else {
            throw new Error('No results found');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
    }
};

export default getAddressCoordinates;
