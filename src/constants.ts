import { 
  Utensils, 
  History, 
  MapPin, 
  Image as ImageIcon, 
  Heart,
  Clock,
  Phone,
  Facebook
} from 'lucide-react';

export const MENU_CATEGORIES = [
  {
    id: 'main',
    name: 'Main Menu',
    items: [
      { name: 'Wooguji Haejanggook', korean: '우거지 해장국', description: 'Stewed beef with vegetable soup', price: '16.99' },
      { name: 'Yookgaejang', korean: '육개장', description: 'Boiled hot spicy beef soup with vegetable', price: '17.99' },
      { name: 'Sullungtang', korean: '설렁탕', description: 'Beef bone soup with noodles', price: '16.99' },
      { name: 'Galbi Tang', korean: '갈비탕', description: 'Boiled beef stock with short ribs', price: '19.99' },
      { name: 'Soontofu Jigae', korean: '순두부 찌개', description: 'Boiled soft tofu with vegetable & seafood (or beef)', price: '15.99' },
      { name: 'Doenjang Jigae', korean: '된장 찌개', description: 'Soybean paste stew with tofu, vegetable', price: '15.99' },
      { name: 'Kimchi Jigae', korean: '김치 찌개', description: 'Spicy kimchi stew with pork & tofu', price: '15.99' },
      { name: 'Ddukmandugook', korean: '떡만두국', description: 'Dumpling & rice cake soup', price: '16.99' },
      { name: 'Bibimbop', korean: '비빔밥', description: 'Seasoned vegetables & beef with hot spicy sauce', price: '15.99' },
      { name: 'Dolsot Bibimbop', korean: '돌솥 비빔밥', description: 'Vegetables & beef with hot sauce in a sizzling stone pot', price: '17.99' },
      { name: 'Kimchi Dolsot Bibimbop', korean: '김치 돌솥 비빔밥', description: 'Kimchi & beef with hot sauce in a sizzling stone pot', price: '18.99' },
      { name: 'Haemul Maeuntang', korean: '해물 매운탕', description: 'Boiled mixed seafood, tofu in hot spicy vegetable soup', price: '22.99' },
      { name: 'Yumso Tang', korean: '염소탕', description: 'Goat with vegetable soup', price: '24.99' },
      { name: 'Mul Naengmyun', korean: '물냉면', description: 'Buckwheat noodles with homemade cold beef broth', price: '16.99' },
      { name: 'Bibim Naengmyun', korean: '비빔냉면', description: 'Buckwheat noodles with hot spicy sauce', price: '16.99' },
      { name: 'Kodeungh Gu-e', korean: '고등어 구이', description: 'Grilled mackerel', price: '18.99' },
      { name: 'Yunuh Gu-e', korean: '연어 구이', description: 'Grilled salmon', price: '22.99' },
      { name: 'Jangeu Gu-e', korean: '장어구이', description: 'Grilled eel', price: '26.99' },
      { name: 'Ojinguh Bokum', korean: '오징어 볶음', description: 'Pan fried sautéed squid with vegetables', price: '21.99' },
      { name: 'Jeyook Tofu Kimchi', korean: '제육 두부김치', description: 'Cooked fresh bean curd with pork & kimchi', price: '24.99' },
      { name: 'Nakji Bokum', korean: '낙지 볶음', description: 'Pan fried sautéed small octopus with vegetables', price: '26.99' },
      { name: 'Nakji Soomean', korean: '낙지 소면', description: 'Pan fried sautéed small octopus & noodles with vegetables', price: '28.99' },
      { name: 'Bokum Bob', korean: '볶음밥', description: 'Fried rice (beef or chicken or shrimp)', price: '15.99' },
      { name: 'Bokumbap Combo', korean: '볶음밥 콤보', description: 'Fried rice with beef, chicken & shrimp', price: '18.99' },
    ]
  },
  {
    id: 'jungol',
    name: 'Jungol (Hot Pot)',
    items: [
      { name: 'J1. Haemul Jungol', korean: '해물전골', description: 'Assorted seafood, noodles with vegetable casserole', price: '49.99' },
      { name: 'J2. Yumso Jungol', korean: '염소전골', description: 'Goat with vegetables in special herb casserole', price: '54.99' },
      { name: 'J3. Sausage Ham Jungol', korean: '소세지 햄 전골', description: 'Sausages, ham, tofu with vegetable casserole', price: '45.99' },
      { name: 'J4. Gopchang Jungol', korean: '곱창 전골', description: 'Spicy beef intestine, tofu, noodle with vegetable casserole', price: '49.99' },
      { name: 'J5. Ohsam Chulpan Doroogochi', korean: '오삼 철판 두루치기', description: 'Grilled sautéed squid and pork with vegetables', price: '46.99' },
    ]
  },
  {
    id: 'noodles',
    name: 'Noodles',
    items: [
      { name: 'N1. Ramen Noodle', korean: '라면', description: 'Chicken or beef or vegetable ramen soup (spicy or non-spicy)', price: '12.99' },
      { name: 'N2. Jangtu Kooksoo', korean: '장터 국수', description: 'Thin Korean noodle soup', price: '13.99' },
      { name: 'N3. Udon', korean: '우동', description: 'Thick Japanese noodle soup', price: '14.99' },
    ]
  },
  {
    id: 'bbq',
    name: 'Korean BBQ',
    items: [
      { name: 'B1. Sang Galbi', korean: '생갈비', description: 'Fresh (non-marinated) beef rib served with sesame oil dipping sauce', price: '42.99' },
      { name: 'B2. Yangnyum Galbi', korean: '양념갈비', description: 'Spare beef rib marinated in Korean BBQ sauce', price: '38.99' },
      { name: 'B3. L.A. Galbi', korean: 'LA 갈비', description: 'Thinly sliced beef rib marinated in Korean BBQ sauce', price: '36.99' },
      { name: 'B4. Bulgogi', korean: '불고기', description: 'Thinly sliced tender sirloin beef marinated in Korean BBQ sauce', price: '29.99' },
      { name: 'B5. Spicy Bulgogi', korean: '매운 불고기', description: 'Thinly sliced tender sirloin beef marinated in spicy BBQ sauce', price: '30.99' },
      { name: 'B6. Spicy Pork Bulgogi', korean: '매운 양념돼지', description: 'Tender pork marinated in spicy sauce & jalapeño', price: '28.99' },
      { name: 'B7. Samgyupsal', korean: '삼겹살', description: 'Thinly sliced fresh pork belly', price: '27.99' },
      { name: 'B8. Jeyook Gu-e', korean: '제육구이', description: 'Sautéed pork with mixed spicy sauce', price: '27.99' },
      { name: 'B9. Chicken B.B.Q.', korean: '닭구이', description: 'Barbecue chicken with spicy sauce', price: '24.99' },
      { name: 'B10. Chicken Teriyaki', korean: '닭구이 (데리야끼)', description: 'Chicken with teriyaki sauce', price: '24.99' },
    ]
  }
];

export const GALLERY_IMAGES = [
  { id: 1, src: 'input_file_4.png', alt: 'Authentic Korean Table Spread' },
  { id: 2, src: 'input_file_0.png', alt: 'Handmade Gimbap' },
  { id: 3, src: 'input_file_6.png', alt: 'Traditional Soontofu Stew' },
  { id: 4, src: 'input_file_1.png', alt: 'Premium Marinated Sizzling BBQ' },
  { id: 5, src: 'input_file_3.png', alt: 'Sizzling Beef BBQ' },
  { id: 6, src: 'input_file_5.png', alt: 'Traditional Korean Galbi' },
  { id: 7, src: 'input_file_2.png', alt: 'Spicy Marinated Pork' },
  { id: 8, src: 'input_file_10.png', alt: 'Modern Dining Hall' },
  { id: 9, src: 'input_file_9.png', alt: 'Full Korean Banquet' },
];

export const INTERIOR_IMAGES = [
  'input_file_10.png',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200'
];

export const REVIEWS = [
  {
    author: "Sarah M.",
    text: "The best Galbi in Fort Worth. It's so refreshing to see the family return with even better service than before!",
    rating: 5
  },
  {
    author: "James T.",
    text: "Authentic tastes that take me back to Korea. The banchan variety is amazing and everything tastes incredibly fresh.",
    rating: 5
  },
  {
    author: "Linda K.",
    text: "A local legend reborn. The new space is bright, clean, and welcoming. Exactly what the neighborhood needed.",
    rating: 5
  }
];

export const RESTAURANT_INFO = {
  name: 'Samwon Korean Cuisine',
  logo: 'input_file_logo.png', // Temporary placeholder until re-uploaded
  address: '5201 McCart Ave, Fort Worth, TX 76115, United States',
  phone: '+1 817-926-1515',
  tagline: 'Korean BBQ & other specialties are served at neatly partitioned tables for lunch & dinner.',
  openingSoon: true,
  reopeningDate: '2026-06-01T11:00:00',
  social: {
    facebook: 'https://www.facebook.com/swgrestaurant'
  }
};
