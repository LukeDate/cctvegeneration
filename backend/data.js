import bcrypt from 'bcryptjs';

export default {
  users: [
    {
      name: "Luke",
      email: "luke.date@hotmail.com",
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    }
  ],
  products: [
    {
      title: 'T-Shirt',
      imageUrl: {
        front: '/assets/cctv-assets/front.jpg',
        back: '/assets/cctv-assets/back.jpg'
      },
      price: 69,
      countInStock: 5
    },
    {
      title: 'T-Shirt One',
      imageUrl: {
        front: '/assets/cctv-assets/front.jpg',
        back: '/assets/cctv-assets/back.jpg'
      },
      price: 420,
      countInStock: 5
    },
    {
      title: 'T-Shirt Two',
      imageUrl: {
        front: '/assets/cctv-assets/front.jpg',
        back: '/assets/cctv-assets/back.jpg'
      },
      price: 123,
      countInStock: 5
    },
    {
      title: 'T-Shirt Three',
      imageUrl: {
        front: '/assets/cctv-assets/front.jpg',
        back: '/assets/cctv-assets/back.jpg'
      },
      price: 169,
      countInStock: 5
    },
    {
      title: 'T-Shirt Four',
      imageUrl: {
        front: '/assets/cctv-assets/front.jpg',
        back: '/assets/cctv-assets/back.jpg'
      },
      price: 269,
      countInStock: 5
    },
    {
      title: 'T-Shirt Five',
      imageUrl: {
        front: '/assets/cctv-assets/front.jpg',
        back: '/assets/cctv-assets/back.jpg'
      },
      price: 569,
      countInStock: 0
    }
  ]
}
