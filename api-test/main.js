
/* 인정된 사용자 : 일반 인증키 */
const API_KEY = "b86sVBL5Pc9iNZNvXWSF0LJFPQhMmchB5E%2FlTCV8PheBiyJCx3neuUE%2FN225UhcD4QhSXgp6%2FilpM%2F3ZDF4x4A%3D%3D"

async function getData() {
  const url = `https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?serviceKey=${API_KEY}&searchYearCd=2021&siDo=31&guGun=140&type=json&numOfRows=10&pageNo=1`
  const response = await fetch(url);
  const data = await response.json()
  console.log('data: ', data);
}
getData(); // 불러줘야 실행된다.