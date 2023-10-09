import axios, { AxiosResponse } from 'axios';
import {
  ComicType,
  KmasDataMasterTypePaging,
  KmasDataMasterTypeUtil,
} from '@/app/common/client/comic/type';

export class ComicOpenApiClient {
  static async searchByProductName(productName: string) {
    try {
      //
      const response = await axios.get('https://www.kmas.or.kr/openapi/search/dcmtDtaList', {
        params: {
          prvKey: process.env.COMIC_API_KEY,
          title: productName,
          pageNo: 1,
          viewItemCnt: 30,
        },
      });

      console.log(`response.data: ${JSON.stringify(response.data)}`);
    } catch (e) {
      console.error(e);
    }
  }

  static async getComics(): Promise<ComicType[]> {
    // const response= await axios.get<KmasDataMasterTypePaging, AxiosResponse<KmasDataMasterTypePaging>>("https://www.kmas.or.kr/openapi/search/rgDtaMasterList", {
    //     params: {
    //         prvKey: process.env.COMIC_API_KEY,
    //         listSeCd: '2',
    //         pageNo: 40000,
    //         viewItemCnt: 30,
    //     }
    // });
    //
    // console.log(response.data);
    //
    // console.log(response.data.itemList.map((item) => {
    //     return KmasDataMasterTypeUtil.transformToComicType(item)
    // }))

    return [
      {
        id: '2023069002',
        masterId: '2023069002',
        productName: '누가 이 상황을 설명 좀 해주세요!',
        category: '도서(만화책)',
        author: '키노사키 카즈라',
        genre: '순정',
        summary:
          '빈곤 귀족 영애 비올라에게 갑자기 날아 들어온 혼담이 설마 「계약결혼」이라니!\r\n' +
          '\r\n' +
          '상대는 초명문 공작가의 미남 당주 서시스 님.\r\n' +
          '\r\n' +
          '심지어 서시스 님에게는 따로 연인이??\r\n' +
          '\r\n' +
          '허울뿐인 마님 생활을 시작합니다!',
        outline:
          '빈곤 귀족 영애 비올라에게 갑자기 날아 들어온 혼담이 설마 「계약결혼」이라니!\r\n' +
          '\r\n' +
          '상대는 초명문 공작가의 미남 당주 서시스 님.\r\n' +
          '\r\n' +
          '심지어 서시스 님에게는 따로 연인이??\r\n' +
          '\r\n' +
          '허울뿐인 마님 생활을 시작합니다!',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=3775b44a-d788-4435-a349-bc60d5ddfd98',
      },
      {
        id: '2023069001',
        masterId: '2023069001',
        productName: '농농할멈과 나',
        category: '도서(만화책)',
        author: '미즈키 시게루',
        genre: '드라마',
        summary:
          '일본 쇼와시대 초반인 1920~30년대, 저자 미즈키 시게루가 나고 자란 돗토리현 사카이미나토의 토속적이고 한가로운 풍경 속에서 벌어지는 신비한 사건들을 그려낸 자전적인 작품 ' +
          '\r\n' +
          '농농할멈을 통해 접하게 된 도깨비와 요괴들의 불가사의한 세계와 어린 시절의 즐겁고도 아련한 추억이 그려져 있습니다.',
        outline:
          '일본 쇼와시대 초반인 1920~30년대, 저자 미즈키 시게루가 나고 자란 돗토리현 사카이미나토의 토속적이고 한가로운 풍경 속에서 벌어지는 신비한 사건들을 그려낸 자전적인 작품 ' +
          '\r\n' +
          '농농할멈을 통해 접하게 된 도깨비와 요괴들의 불가사의한 세계와 어린 시절의 즐겁고도 아련한 추억이 그려져 있습니다.',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=e7078b5e-cb24-484a-8db5-922506f879b1',
      },
      {
        id: '2023069000',
        masterId: '2023069000',
        productName: '농농할멈과 나',
        category: '도서(만화책)',
        author: '미즈키 시게루',
        genre: '드라마',
        summary:
          '일본 쇼와시대 초반인 1920~30년대, 저자 미즈키 시게루가 나고 자란 돗토리현 사카이미나토의 토속적이고 한가로운 풍경 속에서 벌어지는 신비한 사건들을 그려낸 자전적인 작품 ' +
          '\r\n' +
          '농농할멈을 통해 접하게 된 도깨비와 요괴들의 불가사의한 세계와 어린 시절의 즐겁고도 아련한 추억이 그려져 있습니다.',
        outline:
          '일본 쇼와시대 초반인 1920~30년대, 저자 미즈키 시게루가 나고 자란 돗토리현 사카이미나토의 토속적이고 한가로운 풍경 속에서 벌어지는 신비한 사건들을 그려낸 자전적인 작품 ' +
          '\r\n' +
          '농농할멈을 통해 접하게 된 도깨비와 요괴들의 불가사의한 세계와 어린 시절의 즐겁고도 아련한 추억이 그려져 있습니다.',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=0059220d-6e42-45cd-af6e-8d73c5b4e300',
      },
      {
        id: '2023068999',
        masterId: '2023068999',
        productName: '녹턴',
        category: '도서(만화책)',
        author: '박은아',
        genre: '순정',
        summary:
          '소녀는 시간이 빨리 지나길 바랐습니다.\r\n' +
          '\r\n' +
          '그는 시간이 더디게 흐르길 바랐습니다.\r\n' +
          '\r\n' +
          '소녀의 소원대로 시간은 흘러 흘러――\r\n' +
          '\r\n' +
          '소녀는 이제 징검다리 따위는 혼자 걸을 수 있을 만큼 자랐지만, \r\n' +
          '\r\n' +
          '언젠가부터 그 역시 더 이상 소녀의 손을 잡아주지 않았습니다.\r\n' +
          '\r\n' +
          '인기 작가 박은아가 그리는 수채화 같은 감성 가득한 아름다운 이야기!',
        outline:
          '소녀는 시간이 빨리 지나길 바랐습니다.\r\n' +
          '\r\n' +
          '그는 시간이 더디게 흐르길 바랐습니다.\r\n' +
          '\r\n' +
          '소녀의 소원대로 시간은 흘러 흘러――\r\n' +
          '\r\n' +
          '소녀는 이제 징검다리 따위는 혼자 걸을 수 있을 만큼 자랐지만, \r\n' +
          '\r\n' +
          '언젠가부터 그 역시 더 이상 소녀의 손을 잡아주지 않았습니다.\r\n' +
          '\r\n' +
          '인기 작가 박은아가 그리는 수채화 같은 감성 가득한 아름다운 이야기!',
        ageGroup: '전체연령',
        country: '대한민국',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=3a46e518-9f1f-48b1-ab60-f701258608d5',
      },
      {
        id: '2023068998',
        masterId: '2023068998',
        productName: '니코스가의 시시한 빙고부',
        category: '도서(만화책)',
        author: '사쿠라가와 나로',
        genre: 'BL',
        summary:
          '도시를 동경해 취업을 계기로 상경한 스가.\r\n' +
          '\r\n' +
          '세련된 여자친구와 유명한 장소에서 데이트♥를 꿈꾸었지만 여자에게 고백만 하면 「남자로 안 보여.」라며 차이기 일쑤.\r\n' +
          '\r\n' +
          '문득 정신을 차리고 보니 회사와 집만 오가며 하루하루를 보내고 있었다.\r\n' +
          '\r\n' +
          '새로운 문을 열 수 있을지도 몰라! 라는 선배의 소개로 따라간 게이 파티에서 적응하지 못하는 스가에게 말을 걸어온 섹시한 꽃미남 니코.\r\n' +
          '\r\n' +
          '대화를 나눠보니 자유분방하고 개방적인 노멀이라는 것을 알고 친근감이 생겼다!\r\n' +
          '\r\n' +
          '의기투합한 기세로 『시시한 일 빙고부』를 발족.\r\n' +
          '\r\n' +
          '둘이서 『시시하지만 해보고 싶은 일 빙고』를 진행하는 동안 점점 거리가 가까워지고 친해지는 니코와 스가.\r\n' +
          '\r\n' +
          '마침내 야한 단어 빙고가 시작되고, 부과된 과제는 폰섹스로……!!?',
        outline:
          '도시를 동경해 취업을 계기로 상경한 스가.\r\n' +
          '\r\n' +
          '세련된 여자친구와 유명한 장소에서 데이트♥를 꿈꾸었지만 여자에게 고백만 하면 「남자로 안 보여.」라며 차이기 일쑤.\r\n' +
          '\r\n' +
          '문득 정신을 차리고 보니 회사와 집만 오가며 하루하루를 보내고 있었다.\r\n' +
          '\r\n' +
          '새로운 문을 열 수 있을지도 몰라! 라는 선배의 소개로 따라간 게이 파티에서 적응하지 못하는 스가에게 말을 걸어온 섹시한 꽃미남 니코.\r\n' +
          '\r\n' +
          '대화를 나눠보니 자유분방하고 개방적인 노멀이라는 것을 알고 친근감이 생겼다!\r\n' +
          '\r\n' +
          '의기투합한 기세로 『시시한 일 빙고부』를 발족.\r\n' +
          '\r\n' +
          '둘이서 『시시하지만 해보고 싶은 일 빙고』를 진행하는 동안 점점 거리가 가까워지고 친해지는 니코와 스가.\r\n' +
          '\r\n' +
          '마침내 야한 단어 빙고가 시작되고, 부과된 과제는 폰섹스로……!!?',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=4dd602b6-3067-4bc6-ba35-6177b5059785',
      },
      {
        id: '2023068997',
        masterId: '2023068997',
        productName: '니이즈마 군과 아라오 군 한 번 더',
        category: '도서(만화책)',
        author: '츠루사와 츠타코',
        genre: 'BL',
        summary:
          '잘 나가는 호스트 아라오 카케루와 엄청난 인기작가 니이즈마 사토시.\r\n' +
          '\r\n' +
          '만취해서 작업을 건 아라오에게 니이즈마가 첫눈에 반해버린 것으로 시작된 관계.\r\n' +
          '\r\n' +
          "여전히 '너무 좋아' 아우라를 내뿜는 위태로운 니이즈마.\r\n" +
          '\r\n' +
          '멋대로 내버려두면 무슨 짓을 저지를지 모르기 때문에 마지못해 챙겨주게 되는 세심한 아라오.\r\n' +
          '\r\n' +
          '플라토닉 러브를 요구하는 니이즈마에 대항하는 하늘 높은 줄 모르는 성욕 몬스터 아라오의 공방전은 니이즈마의 취급법을 숙지한 아라오에 의해 매번 엎치락뒤치락하기를 반복하고.\r\n ' +
          '\r\n' +
          '쉬는 날 함께 외출하기도 하는 등 연인다운 생활을 보내면서도 둘에게 서서히 다가오는 어둠의 손길에 우당탕탕 동거생활은 파란의 예감??!?',
        outline:
          '잘 나가는 호스트 아라오 카케루와 엄청난 인기작가 니이즈마 사토시.\r\n' +
          '\r\n' +
          '만취해서 작업을 건 아라오에게 니이즈마가 첫눈에 반해버린 것으로 시작된 관계.\r\n' +
          '\r\n' +
          "여전히 '너무 좋아' 아우라를 내뿜는 위태로운 니이즈마.\r\n" +
          '\r\n' +
          '멋대로 내버려두면 무슨 짓을 저지를지 모르기 때문에 마지못해 챙겨주게 되는 세심한 아라오.\r\n' +
          '\r\n' +
          '플라토닉 러브를 요구하는 니이즈마에 대항하는 하늘 높은 줄 모르는 성욕 몬스터 아라오의 공방전은 니이즈마의 취급법을 숙지한 아라오에 의해 매번 엎치락뒤치락하기를 반복하고.\r\n ' +
          '\r\n' +
          '쉬는 날 함께 외출하기도 하는 등 연인다운 생활을 보내면서도 둘에게 서서히 다가오는 어둠의 손길에 우당탕탕 동거생활은 파란의 예감??!?',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=f4f2a767-148b-4aef-8bf5-d8786bd3705f',
      },
      {
        id: '2023068996',
        masterId: '2023068996',
        productName: '능욕! 잠입 수사관',
        category: '도서(만화책)',
        author: '히이라기 마사키',
        genre: 'BL',
        summary:
          '사로잡힌 형사를 덮치는 열락과 치욕의 수난극!\r\n' +
          '\r\n' +
          '잠입수사관 버디의 지극히 비도덕적인 에로스&액션!\r\n' +
          '\r\n' +
          '형사 키도 레오나는 마약 거래 루트를 조사하기 위해 잠입 수사에 나서지만, 먼저 잠입한 동료와 합류하기 전 조직에 붙잡히고 마는데……?',
        outline:
          '사로잡힌 형사를 덮치는 열락과 치욕의 수난극!\r\n' +
          '\r\n' +
          '잠입수사관 버디의 지극히 비도덕적인 에로스&액션!\r\n' +
          '\r\n' +
          '형사 키도 레오나는 마약 거래 루트를 조사하기 위해 잠입 수사에 나서지만, 먼저 잠입한 동료와 합류하기 전 조직에 붙잡히고 마는데……?',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=95510b01-096c-488e-89a3-cf4f7b89eba7',
      },
      {
        id: '2023068995',
        masterId: '2023068995',
        productName: '늑대의 신부맞이',
        category: '도서(만화책)',
        author: '이누이 하나',
        genre: 'BL',
        summary:
          '토끼족 소년 카에데는 자신의 마을을 위해 늑대족 명가(名家)로 시집을 가게 되었다.\r\n' +
          '\r\n' +
          '인신공양 같은 결혼에 화가 나기도 했지만, 천성적으로 지기 싫어하는 카에데는 긍정적인 마음으로 약혼자와 대면한다.\r\n' +
          '\r\n' +
          '그러나 후계자인 렌은 어째서인지 차갑고 퉁명스럽기만 하다.\r\n' +
          '\r\n' +
          "하물며 도착하자마자 '이종족 간에 짝이 되기 위해 네 체질을 바꾸겠다'며 카에데에게 '신부화 약'이라는 약을 먹이고 손가락으로 카에데를 농락한다.\r\n" +
          '\r\n' +
          "그것이 정식 혼인 의식까지 한 달 동안 이뤄질 '신부화'의 시작이었다――",
        outline:
          '토끼족 소년 카에데는 자신의 마을을 위해 늑대족 명가(名家)로 시집을 가게 되었다.\r\n' +
          '\r\n' +
          '인신공양 같은 결혼에 화가 나기도 했지만, 천성적으로 지기 싫어하는 카에데는 긍정적인 마음으로 약혼자와 대면한다.\r\n' +
          '\r\n' +
          '그러나 후계자인 렌은 어째서인지 차갑고 퉁명스럽기만 하다.\r\n' +
          '\r\n' +
          "하물며 도착하자마자 '이종족 간에 짝이 되기 위해 네 체질을 바꾸겠다'며 카에데에게 '신부화 약'이라는 약을 먹이고 손가락으로 카에데를 농락한다.\r\n" +
          '\r\n' +
          "그것이 정식 혼인 의식까지 한 달 동안 이뤄질 '신부화'의 시작이었다――",
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=3dee9f8d-19cb-4874-83d0-e9093fd080cd',
      },
      {
        id: '2023068994',
        masterId: '2023068994',
        productName: '뉴욕의 스노우캣',
        category: '도서(만화책)',
        author: 'SNOWCAT',
        genre: '드라마',
        summary:
          '무슨 일이든 일어날 수 있고, 어떤 것이든 찾아낼 수 있는 이 도시에서 스노우캣 역시 조금씩 변화했다.\r\n' +
          '\r\n' +
          '1년 반이 넘는 시간 동안 스노우캣은 집 밖으로 나와 뉴욕, 특히 맨해튼의 곳곳을 찾아다니며 거리의 풍경을 화폭에 담았다.',
        outline:
          '무슨 일이든 일어날 수 있고, 어떤 것이든 찾아낼 수 있는 이 도시에서 스노우캣 역시 조금씩 변화했다.\r\n' +
          '\r\n' +
          '1년 반이 넘는 시간 동안 스노우캣은 집 밖으로 나와 뉴욕, 특히 맨해튼의 곳곳을 찾아다니며 거리의 풍경을 화폭에 담았다.',
        ageGroup: '전체연령',
        country: '대한민국',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=ab341d51-1279-46c7-80e6-75d47ed4f558',
      },
      {
        id: '2023068993',
        masterId: '2023068993',
        productName: '뉴욕 뉴욕',
        category: '도서(만화책)',
        author: '라가와 마리모',
        genre: 'BL',
        summary:
          '“지저스, 운명이다 ─.” 뉴욕 시경의 경관 케인 워커, 24세.\r\n' +
          '\r\n' +
          '주위에 자신이 동성애자임을 숨기는 케인은 원나잇 상대를 찾아 밤마다 맨해튼을 찾고 있었다.\r\n' +
          '\r\n' +
          '어느 날 밤, 케인은 이상적인 외모의 아름다운 청년 멜 프레드릭스를 만났다…!\r\n' +
          '\r\n' +
          '멜의 과거의 아픔, 양친에 대한 커밍아웃, 휘말려버린 흉악범죄, 온갖 차별과 편견….\r\n' +
          '\r\n' +
          '게이를 주제로 사랑과 휴머니즘을 진지하게 그려낸, 라가와 마리모의 회심의 문제작!!',
        outline:
          '“지저스, 운명이다 ─.” 뉴욕 시경의 경관 케인 워커, 24세.\r\n' +
          '\r\n' +
          '주위에 자신이 동성애자임을 숨기는 케인은 원나잇 상대를 찾아 밤마다 맨해튼을 찾고 있었다.\r\n' +
          '\r\n' +
          '어느 날 밤, 케인은 이상적인 외모의 아름다운 청년 멜 프레드릭스를 만났다…!\r\n' +
          '\r\n' +
          '멜의 과거의 아픔, 양친에 대한 커밍아웃, 휘말려버린 흉악범죄, 온갖 차별과 편견….\r\n' +
          '\r\n' +
          '게이를 주제로 사랑과 휴머니즘을 진지하게 그려낸, 라가와 마리모의 회심의 문제작!!',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=a2e8c4d6-1110-4ff3-be2f-78df0f56e4da',
      },
      {
        id: '2023068992',
        masterId: '2023068992',
        productName: '뉴욕 뉴욕',
        category: '도서(만화책)',
        author: '라가와 마리모',
        genre: 'BL',
        summary:
          '“지저스, 운명이다 ─.” 뉴욕 시경의 경관 케인 워커, 24세.\r\n' +
          '\r\n' +
          '주위에 자신이 동성애자임을 숨기는 케인은 원나잇 상대를 찾아 밤마다 맨해튼을 찾고 있었다.\r\n' +
          '\r\n' +
          '어느 날 밤, 케인은 이상적인 외모의 아름다운 청년 멜 프레드릭스를 만났다…!\r\n' +
          '\r\n' +
          '멜의 과거의 아픔, 양친에 대한 커밍아웃, 휘말려버린 흉악범죄, 온갖 차별과 편견….\r\n' +
          '\r\n' +
          '게이를 주제로 사랑과 휴머니즘을 진지하게 그려낸, 라가와 마리모의 회심의 문제작!!',
        outline:
          '“지저스, 운명이다 ─.” 뉴욕 시경의 경관 케인 워커, 24세.\r\n' +
          '\r\n' +
          '주위에 자신이 동성애자임을 숨기는 케인은 원나잇 상대를 찾아 밤마다 맨해튼을 찾고 있었다.\r\n' +
          '\r\n' +
          '어느 날 밤, 케인은 이상적인 외모의 아름다운 청년 멜 프레드릭스를 만났다…!\r\n' +
          '\r\n' +
          '멜의 과거의 아픔, 양친에 대한 커밍아웃, 휘말려버린 흉악범죄, 온갖 차별과 편견….\r\n' +
          '\r\n' +
          '게이를 주제로 사랑과 휴머니즘을 진지하게 그려낸, 라가와 마리모의 회심의 문제작!!',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=93824549-0bdb-412e-86ea-a0df1e9a785c',
      },
      {
        id: '2023068991',
        masterId: '2023068991',
        productName: '눈은 입만큼 사랑을 말한다',
        category: '도서(만화책)',
        author: '하기',
        genre: 'BL',
        summary:
          '"그 표정, 수상쩍어." 다섯 번의 전학을 거치며, 후지노는 어느새 억지웃음에 능숙해져갔다.\r\n' +
          '\r\n' +
          '사람 좋은 미소를 지으며 무난하게 친구들과의 관계를 만들어가던 전학 2주일 차, \r\n' +
          '\r\n' +
          '사람을 피해 옥상에 갔다가 어떤 남학생이 자고 있는 모습을 발견한다.\r\n' +
          '\r\n' +
          "그는 반 친구들이 '미친개'라고 부르며 무서워하는 학생.\r\n" +
          '\r\n' +
          '멀찍이서 보고 있었더니, 그가 눈을 뜨고……',
        outline:
          '"그 표정, 수상쩍어." 다섯 번의 전학을 거치며, 후지노는 어느새 억지웃음에 능숙해져갔다.\r\n' +
          '\r\n' +
          '사람 좋은 미소를 지으며 무난하게 친구들과의 관계를 만들어가던 전학 2주일 차, \r\n' +
          '\r\n' +
          '사람을 피해 옥상에 갔다가 어떤 남학생이 자고 있는 모습을 발견한다.\r\n' +
          '\r\n' +
          "그는 반 친구들이 '미친개'라고 부르며 무서워하는 학생.\r\n" +
          '\r\n' +
          '멀찍이서 보고 있었더니, 그가 눈을 뜨고……',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=c4187926-9356-4715-865e-39edc2638c22',
      },
      {
        id: '2023068990',
        masterId: '2023068990',
        productName: '눈물은 프라이스리스',
        category: '도서(만화책)',
        author: '소우토메 에무',
        genre: 'BL',
        summary:
          'Priceless is you in tears 부모님의 3주기를 지내고 돌아가는 신칸센에서 울고 있던 츠시마 소고와 그에게 손수건을 건넨 서글서글한 미소를 가진 청년 오키노 히로무.\r\n' +
          '\r\n' +
          '사람의 온기가 그리워 분위기에 휩쓸린 하룻밤을 함께 보낸 후, \r\n' +
          '\r\n' +
          '우는 얼굴을 보고 첫눈에 반했다는 오키노의 고백에 당혹하던 츠시마는 우연히 오키노의 가방 속에 숨겨져 있던 거액의 돈다발을 보고 마는데??',
        outline:
          'Priceless is you in tears 부모님의 3주기를 지내고 돌아가는 신칸센에서 울고 있던 츠시마 소고와 그에게 손수건을 건넨 서글서글한 미소를 가진 청년 오키노 히로무.\r\n' +
          '\r\n' +
          '사람의 온기가 그리워 분위기에 휩쓸린 하룻밤을 함께 보낸 후, \r\n' +
          '\r\n' +
          '우는 얼굴을 보고 첫눈에 반했다는 오키노의 고백에 당혹하던 츠시마는 우연히 오키노의 가방 속에 숨겨져 있던 거액의 돈다발을 보고 마는데??',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=c7716783-4832-43d4-b76b-17219f611ac1',
      },
      {
        id: '2023068989',
        masterId: '2023068989',
        productName: '눈꺼풀 안의 여름',
        category: '도서(만화책)',
        author: '킨교바치 데메',
        genre: 'BL',
        summary:
          '10년 전 여름, 혼자 먼 섬에서 체류하던 타카후미가 만난 것은 갈색 피부색의 소년 우미.\r\n' +
          '\r\n' +
          '대학생이 된 타카후미는 새콤달콤한 추억을 품고 오랜만에 섬을 방문하여 줄곧 소식불통이었던 우미와 재회한다.\r\n' +
          '\r\n' +
          '하지만 재회해도 우미의 반응은 예상과는 달리 어쩐지 냉담하기만 하다.\r\n' +
          '\r\n' +
          '그렇게 친하게 지냈는데 이상하다며 위화감을 느끼던 중 취기를 빌려 우미와 몸을 섞은 타카후미는 스쳐 간 여러 명의 남자와 관계를 가졌다는 우미의 일면을 알게 되는데―――?',
        outline:
          '10년 전 여름, 혼자 먼 섬에서 체류하던 타카후미가 만난 것은 갈색 피부색의 소년 우미.\r\n' +
          '\r\n' +
          '대학생이 된 타카후미는 새콤달콤한 추억을 품고 오랜만에 섬을 방문하여 줄곧 소식불통이었던 우미와 재회한다.\r\n' +
          '\r\n' +
          '하지만 재회해도 우미의 반응은 예상과는 달리 어쩐지 냉담하기만 하다.\r\n' +
          '\r\n' +
          '그렇게 친하게 지냈는데 이상하다며 위화감을 느끼던 중 취기를 빌려 우미와 몸을 섞은 타카후미는 스쳐 간 여러 명의 남자와 관계를 가졌다는 우미의 일면을 알게 되는데―――?',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=9f9472d9-7658-4fb6-ac6a-e3a240b2e12e',
      },
      {
        id: '2023068988',
        masterId: '2023068988',
        productName: '눈 밑의 퀄리아',
        category: '도서(만화책)',
        author: '키이 칸나',
        genre: 'BL',
        summary:
          '식물을 좋아하고 사람을 싫어하는 코바야시 아키오.\r\n' +
          '\r\n' +
          '동성과 일회성 관계를 반복해온 오하시 우미.\r\n' +
          '\r\n' +
          '두 사람은 같은 대학이며 같은 학생 기숙사였다.\r\n' +
          '\r\n' +
          '우미가 아키오를 따르고, 아키오도 조금씩 우미에게 마음을 허락해간다.\r\n' +
          '\r\n' +
          '그러던 어느 날, 우미는 아키오에게 "" 선배는 자지 않아도 같이 있어 주니까 다정해요."" 라고 말한다. \r\n' +
          '\r\n' +
          '아키오는 그런 우미가 이해가 가질 않고……\r\n' +
          '\r\n' +
          '좋아하게 된 상대에게 사랑받고 싶다.\r\n' +
          '\r\n' +
          '그렇게 생각한 건 어느 쪽이었을까?',
        outline:
          '식물을 좋아하고 사람을 싫어하는 코바야시 아키오.\r\n' +
          '\r\n' +
          '동성과 일회성 관계를 반복해온 오하시 우미.\r\n' +
          '\r\n' +
          '두 사람은 같은 대학이며 같은 학생 기숙사였다.\r\n' +
          '\r\n' +
          '우미가 아키오를 따르고, 아키오도 조금씩 우미에게 마음을 허락해간다.\r\n' +
          '\r\n' +
          '그러던 어느 날, 우미는 아키오에게 "" 선배는 자지 않아도 같이 있어 주니까 다정해요."" 라고 말한다. \r\n' +
          '\r\n' +
          '아키오는 그런 우미가 이해가 가질 않고……\r\n' +
          '\r\n' +
          '좋아하게 된 상대에게 사랑받고 싶다.\r\n' +
          '\r\n' +
          '그렇게 생각한 건 어느 쪽이었을까?',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=38a271a3-82fe-4bee-a687-6ac7c54438a0',
      },
      {
        id: '2023068987',
        masterId: '2023068987',
        productName: '누에가 우는 밤에',
        category: '도서(만화책)',
        author: 'miso',
        genre: 'BL',
        summary:
          '누군가에게, 무언가에, 지배를 받고 싶다.\r\n' +
          '\r\n' +
          '쿠로사키 조직 두목의 차남이자 알파인 마오.\r\n' +
          '\r\n' +
          '그에게 충성을 맹세하고 목적을 위해서라면 몸을 이용하는 행위도 서슴지 않는 오메가 야사카.\r\n' +
          '\r\n' +
          '그런 두 사람 덕분에 목숨을 구한 알파, 니시키.\r\n' +
          '\r\n' +
          '니시키는 두 사람의 심상치 않은 인연을 보면서도 야사카에게 끌린다.\r\n' +
          '\r\n' +
          '운명에 이끌리는 것인가, 본능에 이끌리는 것인가.',
        outline:
          '누군가에게, 무언가에, 지배를 받고 싶다.\r\n' +
          '\r\n' +
          '쿠로사키 조직 두목의 차남이자 알파인 마오.\r\n' +
          '\r\n' +
          '그에게 충성을 맹세하고 목적을 위해서라면 몸을 이용하는 행위도 서슴지 않는 오메가 야사카.\r\n' +
          '\r\n' +
          '그런 두 사람 덕분에 목숨을 구한 알파, 니시키.\r\n' +
          '\r\n' +
          '니시키는 두 사람의 심상치 않은 인연을 보면서도 야사카에게 끌린다.\r\n' +
          '\r\n' +
          '운명에 이끌리는 것인가, 본능에 이끌리는 것인가.',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=7da6709d-cb68-48cb-a74b-6a5756010bbd',
      },
      {
        id: '2023068986',
        masterId: '2023068986',
        productName: '누구든 좋으니까 안아줘!!',
        category: '도서(만화책)',
        author: '슈이치',
        genre: 'BL',
        summary:
          '나는 멋진 남자에게 안기고 싶을 뿐인데??\r\n' +
          '\r\n' +
          '타고난 카리스마와 마성의 매력으로 인해 같은 남자들에게 끊임없에 고백을 받는 타카미야 세이에이.\r\n' +
          '\r\n' +
          "하지만 그에게는 남에게 말할 수 없는 고민이 있었으니, 바로 '남자에게 안기는 쪽이고 싶다'는 것이었는데……\r\n" +
          '\r\n' +
          '이상의 공을 찾아 떠나는 험난한 러브 코미디!',
        outline:
          '나는 멋진 남자에게 안기고 싶을 뿐인데??\r\n' +
          '\r\n' +
          '타고난 카리스마와 마성의 매력으로 인해 같은 남자들에게 끊임없에 고백을 받는 타카미야 세이에이.\r\n' +
          '\r\n' +
          "하지만 그에게는 남에게 말할 수 없는 고민이 있었으니, 바로 '남자에게 안기는 쪽이고 싶다'는 것이었는데……\r\n" +
          '\r\n' +
          '이상의 공을 찾아 떠나는 험난한 러브 코미디!',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=fcb65d69-cac7-4269-a0bc-f61390770948',
      },
      {
        id: '2023068985',
        masterId: '2023068985',
        productName: '누각의 미인',
        category: '도서(만화책)',
        author: '칸노 유키',
        genre: 'BL',
        summary:
          "그 특이한 취향으로 인해 '애인 귀족'이라는 별명이 붙은 리처드 번스타인 백작과 그의 충실한 집사이자 연인인 리요.\r\n" +
          '\r\n' +
          '오늘도 리처드의 너무나 깊은 사랑 앞에서 곤란해하면서도 리요는 자신의 주인님과 함께 충실한 나날을 보내고 있었는데……',
        outline:
          "그 특이한 취향으로 인해 '애인 귀족'이라는 별명이 붙은 리처드 번스타인 백작과 그의 충실한 집사이자 연인인 리요.\r\n" +
          '\r\n' +
          '오늘도 리처드의 너무나 깊은 사랑 앞에서 곤란해하면서도 리요는 자신의 주인님과 함께 충실한 나날을 보내고 있었는데……',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=6b42f2be-3c98-429a-b2d1-54b2fb5df773',
      },
      {
        id: '2023068984',
        masterId: '2023068984',
        productName: '뇌신과 샐러리맨',
        category: '도서(만화책)',
        author: 'RENA',
        genre: 'BL',
        summary:
          '“인간이 된다면 자손을 남기고 싶어”\r\n' +
          '\r\n' +
          '“인간이 되어도 오무라와 함께 있고 싶어”\r\n' +
          '\r\n' +
          '오무라와 동거생활을 하면서 희노애락의 감정을 어렴풋이나마 느끼기 시작한 라이유는 솔직한 감정을 오무라에게 전했다.\r\n' +
          '\r\n' +
          '그러나 오무라의 답은 라이유를 크게 혼란하게 만드는데?\r\n' +
          '\r\n' +
          '리쿠와 치카코의 감질나는 관계에도 변화가 찾아온다!',
        outline:
          '“인간이 된다면 자손을 남기고 싶어”\r\n' +
          '\r\n' +
          '“인간이 되어도 오무라와 함께 있고 싶어”\r\n' +
          '\r\n' +
          '오무라와 동거생활을 하면서 희노애락의 감정을 어렴풋이나마 느끼기 시작한 라이유는 솔직한 감정을 오무라에게 전했다.\r\n' +
          '\r\n' +
          '그러나 오무라의 답은 라이유를 크게 혼란하게 만드는데?\r\n' +
          '\r\n' +
          '리쿠와 치카코의 감질나는 관계에도 변화가 찾아온다!',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=d22d38f1-9d56-4fd9-8977-05a1472adafa',
      },
      {
        id: '2023068983',
        masterId: '2023068983',
        productName: '뇌쇄 하드 펀처',
        category: '도서(만화책)',
        author: '야가미 마노',
        genre: 'BL',
        summary:
          '강력한 공격에 정수리가 어질어질 헤비급 녹아웃 LOVE!!\r\n' +
          '\r\n' +
          '무턱대고 싸움만 하는 문제아 니시는 어느 날 복싱 동아리의 토오시마를 만나게 된다.\r\n' +
          '\r\n' +
          '니시가 마음에 든 토오시마는 다짜고짜 시합을 보러 오라고 권유하고.\r\n' +
          '\r\n' +
          '멋지게 우승한 토오시마에게 진한 키스를 받게 되는데……?',
        outline:
          '강력한 공격에 정수리가 어질어질 헤비급 녹아웃 LOVE!!\r\n' +
          '\r\n' +
          '무턱대고 싸움만 하는 문제아 니시는 어느 날 복싱 동아리의 토오시마를 만나게 된다.\r\n' +
          '\r\n' +
          '니시가 마음에 든 토오시마는 다짜고짜 시합을 보러 오라고 권유하고.\r\n' +
          '\r\n' +
          '멋지게 우승한 토오시마에게 진한 키스를 받게 되는데……?',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=91426ad9-f469-45e0-b88d-1a768137bf78',
      },
      {
        id: '2023068982',
        masterId: '2023068982',
        productName: '농익어 가는 살결',
        category: '도서(만화책)',
        author: '마루가오 메메',
        genre: 'BL',
        summary:
          '내내 보고 싶었어요. 이건 상상했던 것보다 더..\r\n' +
          '\r\n' +
          "' 사람을 대하는 게 서툴러서, 주변과 계속 거리를 둬 온 미대 강사 하스미.\r\n" +
          '\r\n' +
          '유일한 안식처인 마쿠나카 교수의 연구실에서 평온한 시간을 보내고 있었으나, \r\n' +
          '\r\n' +
          '마쿠나카 교수 밑으로 새로운 조수, 후지마루가 오면서 그 일상이 붕괴된다……\r\n' +
          '\r\n' +
          '후지마루는 난데없이 하스미의 피부를 만져대고, 이상해진 거리감에 하스미는 거부감을 느끼는데...',
        outline:
          '내내 보고 싶었어요. 이건 상상했던 것보다 더..\r\n' +
          '\r\n' +
          "' 사람을 대하는 게 서툴러서, 주변과 계속 거리를 둬 온 미대 강사 하스미.\r\n" +
          '\r\n' +
          '유일한 안식처인 마쿠나카 교수의 연구실에서 평온한 시간을 보내고 있었으나, \r\n' +
          '\r\n' +
          '마쿠나카 교수 밑으로 새로운 조수, 후지마루가 오면서 그 일상이 붕괴된다……\r\n' +
          '\r\n' +
          '후지마루는 난데없이 하스미의 피부를 만져대고, 이상해진 거리감에 하스미는 거부감을 느끼는데...',
        ageGroup: '19세 이상',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=d4120e6a-5db0-405f-9474-b8fff98e6df3',
      },
      {
        id: '2023068981',
        masterId: '2023068981',
        productName: '니나의 마법 생활',
        category: '도서(만화책)',
        author: '타카나시 링고',
        genre: '드라마',
        summary:
          '비룡을 거듭 갈아타고 도착한 마을에서도 다시 3일.\r\n' +
          '\r\n' +
          "깊고 깊은 숲속의, 그보다 더 안쪽에 그 '마녀'는 살고 있다고 한다.\r\n" +
          '\r\n' +
          "마녀 니나- 또 다른 이름은 '세계 최강의 마녀'.\r\n" +
          '\r\n' +
          '그리고 그녀를 찾아간 예비 마법사 소녀 아이리스.\r\n' +
          '\r\n' +
          "환상과 마법이 살아 숨쉬는 변방의 숲에서 펼쳐지는 마녀와 그 제자의 안식과 재생의 '일상'.",
        outline:
          '비룡을 거듭 갈아타고 도착한 마을에서도 다시 3일.\r\n' +
          '\r\n' +
          "깊고 깊은 숲속의, 그보다 더 안쪽에 그 '마녀'는 살고 있다고 한다.\r\n" +
          '\r\n' +
          "마녀 니나- 또 다른 이름은 '세계 최강의 마녀'.\r\n" +
          '\r\n' +
          '그리고 그녀를 찾아간 예비 마법사 소녀 아이리스.\r\n' +
          '\r\n' +
          "환상과 마법이 살아 숨쉬는 변방의 숲에서 펼쳐지는 마녀와 그 제자의 안식과 재생의 '일상'.",
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=4960a7fc-6f7b-4023-a2da-f2533445784f',
      },
      {
        id: '2023068980',
        masterId: '2023068980',
        productName: '늑대는 잠들지 않는다',
        category: '도서(만화책)',
        author: '신카와 곤베',
        genre: '판타지',
        summary:
          '미궁에서 발견한 <검은 구멍>에 뛰어들어, 이세계로 이동한 <애꾸눈의 늑대> 레칸.\r\n' +
          '\r\n' +
          '모험자인 그는, 이세계에서도 자신이 나아가야 할 길을 헤매지 않는다.\r\n' +
          '\r\n' +
          '강함을 추구하기 위해, 미궁에 도전해 강적을 쓰러뜨린다.\r\n' +
          '\r\n' +
          '그렇게 결의한 레칸은 어떤 마차가 마수에게 습격당하고 있는 모습을 우연히 보게 되는데………',
        outline:
          '미궁에서 발견한 <검은 구멍>에 뛰어들어, 이세계로 이동한 <애꾸눈의 늑대> 레칸.\r\n' +
          '\r\n' +
          '모험자인 그는, 이세계에서도 자신이 나아가야 할 길을 헤매지 않는다.\r\n' +
          '\r\n' +
          '강함을 추구하기 위해, 미궁에 도전해 강적을 쓰러뜨린다.\r\n' +
          '\r\n' +
          '그렇게 결의한 레칸은 어떤 마차가 마수에게 습격당하고 있는 모습을 우연히 보게 되는데………',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=bbe47421-b006-412d-b526-a46d4097d97f',
      },
      {
        id: '2023068979',
        masterId: '2023068979',
        productName: '나는 왜 늘 바쁠까?',
        category: '도서(만화책)',
        author: '예묘',
        genre: '코믹',
        summary:
          '<매일 한 칸씩> <나도 옷 잘 입고 싶다><이웃집 유부녀>를 그린 만화가 예묘의 4컷 만화 단행본.\r\n' +
          '\r\n' +
          '딱히 하는 일이 없으면서도 늘 바쁘다는 생각에 시달리는 일상에 의문이 생겼고그 이유와 해결책을 찾아가는 과정을 만화로 담았다.',
        outline:
          '<매일 한 칸씩> <나도 옷 잘 입고 싶다><이웃집 유부녀>를 그린 만화가 예묘의 4컷 만화 단행본.\r\n' +
          '\r\n' +
          '딱히 하는 일이 없으면서도 늘 바쁘다는 생각에 시달리는 일상에 의문이 생겼고그 이유와 해결책을 찾아가는 과정을 만화로 담았다.',
        ageGroup: '전체연령',
        country: '대한민국',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=0f7171a5-ee01-440a-b77d-db1042a32103',
      },
      {
        id: '2023068978',
        masterId: '2023068978',
        productName: '너와 가타멜라타!',
        category: '도서(만화책)',
        author: '마츠하시 이누스케',
        genre: '순정',
        summary:
          '전직 복서인 누드모델 카타오카 스스무는 꿈도 잃고 몸도 마음도 반응하지 않는 하루하루를 보내던 시원찮은 남자였다.\r\n' +
          '\r\n' +
          '그런 메일을 그저 포기한 채로 보내던 스스무 앞에 여신이 나타난다!\r\n' +
          '\r\n' +
          '오직 그녀와 가까워지고 싶은 마음에 흑심을 품고 그녀가 다니는 미대 입시학원의 문을 두드리지만……?',
        outline:
          '전직 복서인 누드모델 카타오카 스스무는 꿈도 잃고 몸도 마음도 반응하지 않는 하루하루를 보내던 시원찮은 남자였다.\r\n' +
          '\r\n' +
          '그런 메일을 그저 포기한 채로 보내던 스스무 앞에 여신이 나타난다!\r\n' +
          '\r\n' +
          '오직 그녀와 가까워지고 싶은 마음에 흑심을 품고 그녀가 다니는 미대 입시학원의 문을 두드리지만……?',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=5a797d76-45d5-4ab2-9338-2994700477cc',
      },
      {
        id: '2023068977',
        masterId: '2023068977',
        productName: '너는 달밤에 빛나고',
        category: '도서(만화책)',
        author: '마츠세 다이치',
        genre: '순정',
        summary:
          '누나의 죽음을 계기로 자조적인 인생을 살아가던 고등학생 타쿠야는 어느 날 동급생 소녀의 병문안을 가게 된다.\r\n' +
          '\r\n' +
          "소녀의 이름은 와타라세 마미즈. 달빛을 쐬면 몸이 희미하게 빛나고, 이윽고 죽음에 이르는 '발광병(發光病)' 환자다.\r\n" +
          '\r\n' +
          '마미즈는 자신이 시한부 생명이라는 것과 죽기 전에 하고 싶은 일이 있다는 것을 타쿠야에게 알리는데……',
        outline:
          '누나의 죽음을 계기로 자조적인 인생을 살아가던 고등학생 타쿠야는 어느 날 동급생 소녀의 병문안을 가게 된다.\r\n' +
          '\r\n' +
          "소녀의 이름은 와타라세 마미즈. 달빛을 쐬면 몸이 희미하게 빛나고, 이윽고 죽음에 이르는 '발광병(發光病)' 환자다.\r\n" +
          '\r\n' +
          '마미즈는 자신이 시한부 생명이라는 것과 죽기 전에 하고 싶은 일이 있다는 것을 타쿠야에게 알리는데……',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=949db3fa-ac11-4074-8852-eab3d9376189',
      },
      {
        id: '2023068976',
        masterId: '2023068976',
        productName: '너는 달밤에 빛나고',
        category: '도서(만화책)',
        author: '마츠세 다이치',
        genre: '순정',
        summary:
          '누나의 죽음을 계기로 자조적인 인생을 살아가던 고등학생 타쿠야는 어느 날 동급생 소녀의 병문안을 가게 된다.\r\n' +
          '\r\n' +
          "소녀의 이름은 와타라세 마미즈. 달빛을 쐬면 몸이 희미하게 빛나고, 이윽고 죽음에 이르는 '발광병(發光病)' 환자다.\r\n" +
          '\r\n' +
          '마미즈는 자신이 시한부 생명이라는 것과 죽기 전에 하고 싶은 일이 있다는 것을 타쿠야에게 알리는데……',
        outline:
          '누나의 죽음을 계기로 자조적인 인생을 살아가던 고등학생 타쿠야는 어느 날 동급생 소녀의 병문안을 가게 된다.\r\n' +
          '\r\n' +
          "소녀의 이름은 와타라세 마미즈. 달빛을 쐬면 몸이 희미하게 빛나고, 이윽고 죽음에 이르는 '발광병(發光病)' 환자다.\r\n" +
          '\r\n' +
          '마미즈는 자신이 시한부 생명이라는 것과 죽기 전에 하고 싶은 일이 있다는 것을 타쿠야에게 알리는데……',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=d3dfda6b-1309-4bba-8aac-856d7526de6b',
      },
      {
        id: '2023068975',
        masterId: '2023068975',
        productName: '너는 귀여운 여자아이',
        category: '도서(만화책)',
        author: '이치노헤 루미',
        genre: '순정',
        summary:
          '사랑 같은 건 내게 필요 없는 거라고 생각했다-. \r\n' +
          '\r\n' +
          '작고 마른 체형이 콤플렉스인 코에다 츠구미(고1). \r\n' +
          '\r\n' +
          '어느 날, 옆 반의 세나 마사무네에게 실수로 자신의 몸을 보이고 만다. \r\n' +
          '\r\n' +
          '하지만 순수하고 솔직한 마사무네와 같이 있는 사이 내내 숨겨왔던 ‘여자아이’이고 싶은 마음이 점점 커지는데…. 연애 빵점 소녀의 순정',
        outline:
          '사랑 같은 건 내게 필요 없는 거라고 생각했다-. \r\n' +
          '\r\n' +
          '작고 마른 체형이 콤플렉스인 코에다 츠구미(고1). \r\n' +
          '\r\n' +
          '어느 날, 옆 반의 세나 마사무네에게 실수로 자신의 몸을 보이고 만다. \r\n' +
          '\r\n' +
          '하지만 순수하고 솔직한 마사무네와 같이 있는 사이 내내 숨겨왔던 ‘여자아이’이고 싶은 마음이 점점 커지는데…. 연애 빵점 소녀의 순정',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=3fda1a2e-7eb3-4f45-8911-41d40bcf83d9',
      },
      {
        id: '2023068974',
        masterId: '2023068974',
        productName: '너 같은 건 필요없어!',
        category: '도서(만화책)',
        author: '스기야마 미와코',
        genre: '순정',
        summary:
          '내 이름은 유이. 얼마 전 실연당한 소녀.\r\n' +
          '\r\n' +
          '이렇게 된 이상 새로운 사랑을 찾기 위해 집을 떠나 남자 소굴로 유명한 학교 기숙사에 들어가기로 결심했다.\r\n' +
          '\r\n' +
          '하지만 그 기숙사에는 온통 지저분한 괴짜들뿐인데……?',
        outline:
          '내 이름은 유이. 얼마 전 실연당한 소녀.\r\n' +
          '\r\n' +
          '이렇게 된 이상 새로운 사랑을 찾기 위해 집을 떠나 남자 소굴로 유명한 학교 기숙사에 들어가기로 결심했다.\r\n' +
          '\r\n' +
          '하지만 그 기숙사에는 온통 지저분한 괴짜들뿐인데……?',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=20096914-e5d9-4ad5-a085-b8a4a73b6730',
      },
      {
        id: '2023068973',
        masterId: '2023068973',
        productName: '냥아치',
        category: '도서(만화책)',
        author: '오카다 아츠시',
        genre: '코믹',
        summary:
          '만약 동네 길고양이들이 양아치처럼 그려진다면……\r\n' +
          '\r\n' +
          '신감각 고양이 만화, 여기에 개막! 그들의 세계는 혹독하다.\r\n' +
          '\r\n' +
          '영역을 지키기 위해라면 싸움도 주저하지 않는 이 세계는 그 누구도 의지할 수도 없는 살벌한 곳.\r\n' +
          '\r\n' +
          '왜냐하면, 그들은…… 길고양이이기 때문이다!\r\n' +
          '\r\n' +
          '아주 묘(猫)~한 녀석들이 왔다! 길고양이들이 양아치처럼 그려진 신감각 고양이 만화, 개막!',
        outline:
          '만약 동네 길고양이들이 양아치처럼 그려진다면……\r\n' +
          '\r\n' +
          '신감각 고양이 만화, 여기에 개막! 그들의 세계는 혹독하다.\r\n' +
          '\r\n' +
          '영역을 지키기 위해라면 싸움도 주저하지 않는 이 세계는 그 누구도 의지할 수도 없는 살벌한 곳.\r\n' +
          '\r\n' +
          '왜냐하면, 그들은…… 길고양이이기 때문이다!\r\n' +
          '\r\n' +
          '아주 묘(猫)~한 녀석들이 왔다! 길고양이들이 양아치처럼 그려진 신감각 고양이 만화, 개막!',
        ageGroup: '전체연령',
        country: '일본',
        imageUrl:
          'https://www.kmas.or.kr:443/common/file/atchmnflDownload.ajax?fileImageId=e7486e6e-ebc3-499f-b121-7d4a0ffe322c',
      },
    ] as ComicType[];
  }
}
