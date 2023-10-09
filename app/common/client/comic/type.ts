import dayjs, { Dayjs } from 'dayjs';

export type TotalCategoryName = '도서(만화책)';

export type Genre = '로맨스 판타지' | 'BL';

export type AgeGroup = '전체연령';

export type Country = '일본';

export type ComicType = {
  id: string;
  masterId: string;
  productName: string;
  category: TotalCategoryName;
  author: string;
  genre: Genre;
  summary: string;
  outline: string;
  ageGroup: AgeGroup;
  country: Country;
  imageUrl: string;
  // createdAt: Dayjs,
  // updatedAt: Dayjs,
};

export class KmasDataMasterTypeUtil {
  static transformToComicType(item: KmasDataMasterType) {
    return {
      id: item.mastrId,
      masterId: item.mastrId,
      productName: item.prdctNm,
      category: item.listSeCdNm,
      author: item.pictrWritrNm,
      genre: item.mainGenreCdNm as Genre,
      summary: item.outline,
      outline: item.outline,
      ageGroup: item.ageGradCdNm as AgeGroup,
      country: item.orginlNationCdNm as Country,
      imageUrl: item.imageDownloadUrl,
      // createdAt: dayjs(),
      // updatedAt: dayjs(),
    };
  }
}

export type KmasDataMasterTypePaging = {
  result: KmasDataMasterTypePagingResult;
  itemList: KmasDataMasterType[];
};

export type KmasDataMasterTypePagingResult = {
  viewItemCnt: number;
  listSeCd: string;
  pageNo: number;
  resultState: string;
  resultMessage: string;
  totalCount: number;
};

export type KmasDataMasterType = {
  mastrId: string;
  listSeCd: string;
  listSeCdNm: string;
  prdctNm: string;
  title: string;
  subtitl: string;
  edtn: string;
  pictrWritrNm: string;
  sntncWritrNm: string;
  plscmpnIdNm: string;
  orginlTitle: string;
  originClCd: string | null;
  originClCdNm: string | null;
  stleClCd: string | null;
  stleClCdNm: string | null;
  mainGenreCd: string;
  mainGenreCdNm: string;
  outline: string;
  isbn: string;
  issn: string;
  setIsbn: string;
  pltfomCd: string;
  pltfomCdNm: string;
  pltfomCmpnyIdNm: string;
  ageGradCd: string;
  ageGradCdNm: string | null;
  pusryBeginDe: string | null;
  pusryEndDe: string;
  fnshYn: string;
  pblcateYn: string;
  webtoonPusryYn: string;
  wnpzCareer: string;
  dstrcpIdNm: string;
  pblicteDe: string;
  dtaTyCd: string;
  dtaTyCdNm: string;
  orginlNationCd: string;
  orginlNationCdNm: string;
  relDe: string | null;
  tlviseBeginDe: string | null;
  tlviseEndDe: string | null;
  bdcpn: string | null;
  makr: string | null;
  distr: string | null;
  auspc: string | null;
  mngt: string | null;
  stndrd: string;
  pgeCo: string;
  wt: string;
  prc: string;
  eventSeCd: string | null;
  eventSeCdNm: string | null;
  cnsleNm: string | null;
  imageDownloadUrl: string;
};
