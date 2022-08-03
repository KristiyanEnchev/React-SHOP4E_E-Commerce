<<<<<<< HEAD
import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      _id: '4eb6e7e7e9b7f4194e000001',
      name: 'kiko',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
      bio: 'Helo there I am the admin here , dont make me angry ok ? ',
      profile: {
        firstName: 'admin',
        lastName: 'admin',
        avatar:
          'https://ashallendesign.co.uk/images/custom/AshleyAllen-Blog.png?v=1',
      },
      address: {
        street: 'Nova Gvineq 50',
        city: 'Silistra',
        country: 'Bulgaria',
      },
    },
    {
      name: 'Johny',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
      bio: 'Opa Opa zeliona q agrada .... ',
      profile: {
        firstName: 'Johny',
        lastName: 'Bravo',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4bCSBiL3114mq9BSIZmJ3Rq6huVNeW053516pM5IhIZeNtVGvSWtaXrE12AJUSSHij0&usqp=CAU',
      },
      address: {
        street: 'Nova Gvineq 40',
        city: 'Nova',
        country: 'Zelandiq',
      },
    },
  ],

  products: [
    {
      name: 'Buldozer Jordan',
      slug: 'buldozer-jordan',
      category: 'Buldozer',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197464/samples/ecommerce/1_wuvp4l.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197464/samples/ecommerce/1_wuvp4l.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444855/samples/New%20Assets/d623bce064c8a2593ea3528627f39fd6_ojuo2x.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444855/samples/New%20Assets/624921c3aa4829a8d6ba30836e1a8919_kemwpa.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444855/samples/New%20Assets/6b07894970aa770b8c91d847d92bf6f2_asoehx.jpg',
      ],
      price: 120,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Clodes Moon',
      slug: 'clodes-moon',
      category: 'More',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444858/samples/New%20Assets/4_fmjt2t.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444858/samples/New%20Assets/adidas-human-race-nmd-pharrell-sun-glow-407-456233_fskmkw.webp',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444858/samples/New%20Assets/12530620_11862263_600_gdavb0.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444858/samples/New%20Assets/4_fmjt2t.jpg',
      ],
      price: 200,
      countInStock: 10,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      rating: 4.5,
      numReviews: 13,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Chicane',
      slug: 'chicane',
      category: 'More',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/Michelin-x-Chicane-Speedster-2_wsntab.webp',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/Speedster_SBM3_b6d3be4b-a2a8-4552-a394-64d0eb347337_1500x_xparfu.webp',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/SpeedsterBlueOUTSIDE_1445x_h9bndo.webp',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/Michelin-x-Chicane-Speedster-2_wsntab.webp',
      ],
      price: 200,
      countInStock: 10,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      rating: 4.5,
      numReviews: 13,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Pharell Chanel',
      slug: 'pharell-chanel',
      category: 'More',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197473/samples/ecommerce/2_blforx.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/7e152a276e54ed1722d3de7a8fa180bb_ewul75.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/9bcc84ed59d8e33043f6ba7872ed608e_h9j0wx.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197473/samples/ecommerce/2_blforx.jpg',
      ],
      price: 250,
      countInStock: 0,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      rating: 4.0,
      numReviews: 10,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Race-Humman',
      slug: 'race-humman',
      category: 'More',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197453/samples/ecommerce/3_oiapln.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/11f8f76ac251783c218abef1b7420961_tirrrw.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444856/samples/New%20Assets/c44bbeca589ef63b4aff657716b253f0_wuar5y.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444856/samples/New%20Assets/b5257d90e52ab77e72e26e189ebdce67_b7em2k.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197453/samples/ecommerce/3_oiapln.jpg',
      ],
      price: 25,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      countInStock: 15,
      rating: 4.5,
      numReviews: 14,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Nike Jordan',
      slug: 'nike-jordan',
      category: 'Nike',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197486/samples/ecommerce/4_lj2fon.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444856/samples/New%20Assets/6d2a4292ed85372f2ff1c496953371c9_gbtoqk.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444856/samples/New%20Assets/11217260480a097739d09f1f380a78cf_unrewj.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444855/samples/New%20Assets/SNEAKERS-PG-1b-1024x682_gbyt4p.webp',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197486/samples/ecommerce/4_lj2fon.jpg',
      ],
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      price: 65,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
  ],

  banners: [
    {
      img: 'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659350087/samples/ecommerce/image_2022-07-31_210215978-removebg-preview-2_zcknmo.png',
      samllText: 'Air Jordan',
      midText: 'Nike',
      largeText: 'Amazing',
      buttonText: 'Amazing Smeakers',
      productSlug: 'nike-jordan',
      description:
        'The most amazing sneakers out there, here you can find all kind ot sneakers for your taste, and be amazed from the quality.',
      discount: '20 %',
      backgroudColor: 'DCDCDC',
    },
    {
      img: 'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659349585/samples/ecommerce/shoes2-2_xt3qoy.png',
      samllText: 'Nike Amazing',
      midText: 'Get yours today',
      largeText: 'Summer Sale',
      buttonText: 'Shop Now',
      productSlug: 'shoes-many',
      description: 'We are having passion for good sneakers',
      discount: '20 % off',
      backgroudCollor: 'F02D34',
    },
  ],
};

export default data;
=======
import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      _id: '4eb6e7e7e9b7f4194e000001',
      name: 'kiko',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
      bio: 'Helo there I am the admin here , dont make me angry ok ? ',
      profile: {
        firstName: 'admin',
        lastName: 'admin',
        avatar:
          'https://ashallendesign.co.uk/images/custom/AshleyAllen-Blog.png?v=1',
      },
      address: {
        street: 'Nova Gvineq 50',
        city: 'Silistra',
        country: 'Bulgaria',
      },
    },
    {
      name: 'Johny',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
      bio: 'Opa Opa zeliona q agrada .... ',
      profile: {
        firstName: 'Johny',
        lastName: 'Bravo',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4bCSBiL3114mq9BSIZmJ3Rq6huVNeW053516pM5IhIZeNtVGvSWtaXrE12AJUSSHij0&usqp=CAU',
      },
      address: {
        street: 'Nova Gvineq 40',
        city: 'Nova',
        country: 'Zelandiq',
      },
    },
  ],

  products: [
    {
      name: 'Buldozer Jordan',
      slug: 'buldozer-jordan',
      category: 'Buldozer',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197464/samples/ecommerce/1_wuvp4l.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197464/samples/ecommerce/1_wuvp4l.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444855/samples/New%20Assets/d623bce064c8a2593ea3528627f39fd6_ojuo2x.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444855/samples/New%20Assets/624921c3aa4829a8d6ba30836e1a8919_kemwpa.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444855/samples/New%20Assets/6b07894970aa770b8c91d847d92bf6f2_asoehx.jpg',
      ],
      price: 120,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Clodes Moon',
      slug: 'clodes-moon',
      category: 'More',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444858/samples/New%20Assets/4_fmjt2t.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444858/samples/New%20Assets/adidas-human-race-nmd-pharrell-sun-glow-407-456233_fskmkw.webp',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444858/samples/New%20Assets/12530620_11862263_600_gdavb0.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444858/samples/New%20Assets/4_fmjt2t.jpg',
      ],
      price: 200,
      countInStock: 10,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      rating: 4.5,
      numReviews: 13,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Chicane',
      slug: 'chicane',
      category: 'More',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/Michelin-x-Chicane-Speedster-2_wsntab.webp',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/Speedster_SBM3_b6d3be4b-a2a8-4552-a394-64d0eb347337_1500x_xparfu.webp',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/SpeedsterBlueOUTSIDE_1445x_h9bndo.webp',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/Michelin-x-Chicane-Speedster-2_wsntab.webp',
      ],
      price: 200,
      countInStock: 10,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      rating: 4.5,
      numReviews: 13,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Pharell Chanel',
      slug: 'pharell-chanel',
      category: 'More',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197473/samples/ecommerce/2_blforx.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/7e152a276e54ed1722d3de7a8fa180bb_ewul75.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/9bcc84ed59d8e33043f6ba7872ed608e_h9j0wx.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197473/samples/ecommerce/2_blforx.jpg',
      ],
      price: 250,
      countInStock: 0,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      rating: 4.0,
      numReviews: 10,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Race-Humman',
      slug: 'race-humman',
      category: 'More',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197453/samples/ecommerce/3_oiapln.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444857/samples/New%20Assets/11f8f76ac251783c218abef1b7420961_tirrrw.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444856/samples/New%20Assets/c44bbeca589ef63b4aff657716b253f0_wuar5y.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444856/samples/New%20Assets/b5257d90e52ab77e72e26e189ebdce67_b7em2k.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197453/samples/ecommerce/3_oiapln.jpg',
      ],
      price: 25,
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      countInStock: 15,
      rating: 4.5,
      numReviews: 14,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
    {
      name: 'Nike Jordan',
      slug: 'nike-jordan',
      category: 'Nike',
      image:
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197486/samples/ecommerce/4_lj2fon.jpg',
      images: [
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444856/samples/New%20Assets/6d2a4292ed85372f2ff1c496953371c9_gbtoqk.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444856/samples/New%20Assets/11217260480a097739d09f1f380a78cf_unrewj.jpg',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659444855/samples/New%20Assets/SNEAKERS-PG-1b-1024x682_gbyt4p.webp',
        'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659197486/samples/ecommerce/4_lj2fon.jpg',
      ],
      _ownerId: '4eb6e7e7e9b7f4194e000001',
      price: 65,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit torquent praesent et quisque cubilia ut purus nostra enim senectus platea condimentum efficitur feugiat mattis accumsan pellentesque tortor malesuada ex ante finibus cras duis aliquet placerat class felis montes commodo bibendum nam iaculis nisl leo semper vulputate nisi sapien a tempus libero',
    },
  ],

  banners: [
    {
      img: 'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659350087/samples/ecommerce/image_2022-07-31_210215978-removebg-preview-2_zcknmo.png',
      samllText: 'Air Jordan',
      midText: 'Nike',
      largeText: 'Amazing',
      buttonText: 'Amazing Smeakers',
      productSlug: 'nike-jordan',
      description:
        'The most amazing sneakers out there, here you can find all kind ot sneakers for your taste, and be amazed from the quality.',
      discount: '20 %',
      backgroudColor: 'DCDCDC',
    },
    {
      img: 'https://res.cloudinary.com/dmkgrwjes/image/upload/v1659349585/samples/ecommerce/shoes2-2_xt3qoy.png',
      samllText: 'Nike Amazing',
      midText: 'Get yours today',
      largeText: 'Summer Sale',
      buttonText: 'Shop Now',
      productSlug: 'shoes-many',
      description: 'We are having passion for good sneakers',
      discount: '20 % off',
      backgroudCollor: 'F02D34',
    },
  ],
};

export default data;
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
