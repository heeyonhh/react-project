const DATA_API_KEY = 'p4E8rJzvqGLm3jPxuoGzp221x63QbRBUnsMnd8aaV3ae%2FRy0Oi7bUWiAvT%2FQ5w4cWyk4Jq0LHC3iBfVXce3hRA%3D%3D';

async function locationdata() {
    const url= `https://api.odcloud.kr/api/3044314/v1/uddi:ff3903a3-4e11-48f8-b732-d469e4d1088d_201906131420?page=1&perPage=10&serviceKey=${DATA_API_KEY}`
    // 호출
    const response = await fetch(url)
    const data = await response.json()
    console.log("data", data)
}
locationdata();

export default locationdata;