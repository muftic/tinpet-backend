"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "photos",
      [
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/sub-buzz-17379-1555623266-1_sugeuc.png",
          petId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527256/TinPet/5a9ba7a3c479180755ad996b-large_nryik6.jpg",
          petId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527256/TinPet/5c005d9bac00e20fe169f725_rvcjnv.png",
          petId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/grumpy_cat_ynk8pm.jpg",
          petId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/grumpy_cat_ynk8pm.jpg",
          petId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/grumpy_cat_ynk8pm.jpg",
          petId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/grumpy_cat_ynk8pm.jpg",
          petId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527256/TinPet/dancer_cat_wrl1gf.jpg",
          petId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527256/TinPet/5088501f6bb3f78664000002_kfqb4e.jpg",
          petId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("photos", null, {});
  },
};
