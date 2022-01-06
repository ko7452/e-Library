import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Kategorie, SearchingKategorie, PostsCard, Post } from '../style/booksSt';

import AppLayout from '../components/AppLayout';

// dummyData
const kategories = [
  '인기도서',
  '소설',
  '시/에세이',
  '경제/경영',
  '자기계발',
  '인문',
  '역사/문화',
  '종교',
  '정치/사회',
  '예술/대중문화',
  '과학',
  '기술/공학',
  '컴퓨터/IT',
  '유아(0~7세)',
  '어린이(초등)',
  '어린이전집',
  '어린이ELT',
  '청소년',
  '초등참고서',
  '중/고등참고서',
  '대학교재',
  '방송통신대교재',
  '취업/수험서',
  '외국어',
  '가정/육아',
  '건강',
  '여행',
  '요리',
  '요리일반',
  '요리에세이',
  '테마별요리',
  '베이킹/간식',
  '계절요리',
  '재료별요리',
  '나라별요리',
  '생활요리',
  '전문요리',
  '와인/커피/음료',
  '요리수험서',
  '취미/실용/스포츠',
  '잡지',
  '만화',
];
const bookImages = [
  {
    id: 1,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
  {
    id: 2,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
  {
    id: 3,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
  {
    id: 4,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
  {
    id: 5,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
  {
    id: 6,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
  {
    id: 7,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
  {
    id: 8,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
  {
    id: 9,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
  {
    id: 8,
    image: 'https://bimage.interpark.com/partner/goods_image/1/3/4/8/230951348g.jpg',
    post: '어떻게 공부할 것인가',
  },
];

const Books = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const onSubmitClick = useCallback(
    (e) => {
      e.preventDefault();
      console.log('검색어: ', search);
    },
    [search], // 매번 변할 값을 넣어주지 않으면, 클릭 시 console.log에 검색어를 받아오지 못함(함수를 기억하는 useCallback)
  );

  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 책추천</title>
      </Head>
      <Kategorie>
        {kategories.map((kategorie, index) => {
          return <a key={kategorie}>{kategorie}</a>;
        })}
      </Kategorie>
      <SearchingKategorie>
        <form onSubmit={onSubmitClick}>
          <input type="text" placeholder="검색어를 입력해주세요" value={search} onChange={onChangeSearch} />
          <button type="submit">검색</button>
        </form>
      </SearchingKategorie>
      <PostsCard>
        {bookImages.map((bookImage, index) => {
          return (
            <>
              <Post>
                <div>
                  <a>
                    <img src={bookImage.image} alt="책표지 이미지" />
                    <p>{bookImage.post}</p>
                  </a>
                </div>
              </Post>
            </>
          );
        })}
      </PostsCard>
    </AppLayout>
  );
};

export default Books;