export const getDishById = (id: number) => {
  const meals = restaurant.food.flatMap((category) => category.meals);
  return meals.find((meal) => meal.id === id);
};
export const restaurant = {
  name: 'KFC',
  rating: '4.5 Excellent',
  ratings: '(500+)',
  img: require('@/assets/data/KFC.png'),
  distance: '0.7km',
  delivery: '20 - 35 phút',
  tags: ['Gà', 'Khoai tây chiên', 'Salads'],
  about: 'Một thương hiệu bán Gà rán lâu đời vô cùng nổi tiếng và thịnh hành tại Mỹ cũng như trên toàn cầu',
  food: [
    {
      category: 'Gà rán',
      meals: [
        {
          id: 1,
          name: 'Combo vui vẻ',
          price: 95000,
          info: 'Gồm 3 miếng gà rán và 1 Pepsi',
          img: require('@/assets/data/combo-vui-ve.png'),
        },
        {
          id: 2,
          name: 'Combo Hân Hoan',
          price: 175000,
          info: 'Gồm 5 miếng gà rán và 2 Pepsi',
          img: require('@/assets/data/combo-han-hoan.png'),
        },
        {
          id: 3,
          name: 'Combo gà Địa Trung Hải A',
          price: 93000,
          info: 'Gồm 1 miếng gà Địa Trung Hải + 1 Burger + 1 Pepsi',
          img: require('@/assets/data/GaDTH-a.png'),
        },
        {
          id: 4,
          name: "Combo gà Địa Trung Hải B",
          price: 125000,
          info: 'Gồm 2 miếng gà Địa Trung Hải + 1 Gà viên Popcorn + 1 Pepsi',
          img: require('@/assets/data/GaDTH-b.png'),
        },
      ],
    },
    {
      category: 'Gà cuộn',
      meals: [
        {
          id: 5,
          name: 'Gà cuộn Bắc Kinh',
          price: 39000,
          info: 'Gồm 1 gà cuộn Bắc Kinh',
          img: require('@/assets/data/GaBacKinh.png'),
        },
        {
          id: 6,
          name: 'Gà cuộn Bắc Kinh HD ',
          price: 89000,
          info: 'Gồm 1 gà cuộn Bắc Kinh + 1 gà rán + 1 khoai tây chiên / khoai tây nghiền + 1 bắp cải trộn',
          img: require('@/assets/data/ComboGaBacKinh.png'),
        },
      ],
    },
    {
      category: 'Nước uông & Tráng miệng',
      meals: [
        {
          id: 7,
          name: '4 Bánh Trứng',
          price: 58000,
          info: 'Gồm 4 bánh trứng thơm ngon béo ngậy',
          img: require('@/assets/data/BanhTrung.png'),
        },
        {
          id: 8,
          name: '2 Viên Khoai Môn Kim Sa',
          price: 26000,
          info: 'Gồm 2 viên khoai môn Kim Sa',
          img: require('@/assets/data/KhoaiMonKimSa.png'),
        },
        {
          id: 9,
          name: 'Trà Chanh Lipton',
          price: 17000,
          info: 'Trà Chanh Lipton lớn',
          img: require('@/assets/data/Lipton.png'),
        },
        {
          id: 10,
          name: 'Trà Đào',
          price: 24000,
          info: 'Trà Đào ',
          img: require('@/assets/data/TraDao.png'),
        },
      ],
    },
    {
      category: 'Salad',
      meals: [
        {
          id: 11,
          name: 'Salad Hạt',
          price: 35000,
          info: '1 Salad Hạt',
          img: require('@/assets/data/SALAD-HAT.png'),
        },
        {
          id: 12,
          name: 'Salad Pop',
          price: 38000,
          info: '1 Salad Hạt gà viên Popcorn',
          img: require('@/assets/data/SALAD-GaVien.png'),
        },
      ],
    },
    {
      category: 'Gà rán',
      meals: [
        {
          id: 1,
          name: 'Combo vui vẻ',
          price: 95000,
          info: 'Gồm 3 miếng gà rán và 1 Pepsi',
          img: require('@/assets/data/combo-vui-ve.png'),
        },
        {
          id: 2,
          name: 'Combo Hân Hoan',
          price: 175000,
          info: 'Gồm 5 miếng gà rán và 2 Pepsi',
          img: require('@/assets/data/combo-han-hoan.png'),
        },
        {
          id: 3,
          name: 'Combo gà Địa Trung Hải A',
          price: 93000,
          info: 'Gồm 1 miếng gà Địa Trung Hải + 1 Burger + 1 Pepsi',
          img: require('@/assets/data/GaDTH-a.png'),
        },
        {
          id: 4,
          name: "Combo gà Địa Trung Hải B",
          price: 125000,
          info: 'Gồm 2 miếng gà Địa Trung Hải + 1 Gà viên Popcorn + 1 Pepsi',
          img: require('@/assets/data/GaDTH-b.png'),
        },
      ],
    },
    {
      category: 'Gà cuộn',
      meals: [
        {
          id: 5,
          name: 'Gà cuộn Bắc Kinh',
          price: 39000,
          info: 'Gồm 1 gà cuộn Bắc Kinh',
          img: require('@/assets/data/GaBacKinh.png'),
        },
        {
          id: 6,
          name: 'Gà cuộn Bắc Kinh HD ',
          price: 89000,
          info: 'Gồm 1 gà cuộn Bắc Kinh + 1 gà rán + 1 khoai tây chiên / khoai tây nghiền + 1 bắp cải trộn',
          img: require('@/assets/data/ComboGaBacKinh.png'),
        },
      ],
    },
    {
      category: 'Nước uông & Tráng miệng',
      meals: [
        {
          id: 7,
          name: '4 Bánh Trứng',
          price: 58000,
          info: 'Gồm 4 bánh trứng thơm ngon béo ngậy',
          img: require('@/assets/data/BanhTrung.png'),
        },
        {
          id: 8,
          name: '2 Viên Khoai Môn Kim Sa',
          price: 26000,
          info: 'Gồm 2 viên khoai môn Kim Sa',
          img: require('@/assets/data/KhoaiMonKimSa.png'),
        },
        {
          id: 9,
          name: 'Trà Chanh Lipton',
          price: 17000,
          info: 'Trà Chanh Lipton lớn',
          img: require('@/assets/data/Lipton.png'),
        },
        {
          id: 10,
          name: 'Trà Đào',
          price: 24000,
          info: 'Trà Đào ',
          img: require('@/assets/data/TraDao.png'),
        },
      ],
    },
    {
      category: 'Salad',
      meals: [
        {
          id: 11,
          name: 'Salad Hạt',
          price: 35000,
          info: '1 Salad Hạt',
          img: require('@/assets/data/SALAD-HAT.png'),
        },
        {
          id: 12,
          name: 'Salad Pop',
          price: 38000,
          info: '1 Salad Hạt gà viên Popcorn',
          img: require('@/assets/data/SALAD-GaVien.png'),
        },
      ],
    },
  ],
};