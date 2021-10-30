interface MungGeo {
  lat: number;
  lng: number;
  address?: string;
}

type mungGeo = Required<MungGeo>;

// 모든 컬럼은 required이기 때문에 하나라도 없으면 에러발생
const geo: mungGeo = {
  lat: 0,
  lng: 0,
  address: '경기도 파주시', 
};