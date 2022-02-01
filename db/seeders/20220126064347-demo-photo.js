module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Photos', [{
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwU0XZQkxEJbKr3ux8BUVl-V27kJTuUHAQ4iHI1uxPn7DvgrQE6V7d9x0u_9fmy72RTtE&usqp=CAU',
      likes: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PZzIaFM1t5zFKMwsPqD-3PRm3KsHzymMHA&usqp=CAU',
      likes: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7s7xGFWkcKFfHZyyfVE0ZUppFVlggyqvHbA&usqp=CAU',
      likes: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1wOv-uW8TCFmHAHMRBGCh_rzQPP816cppw&usqp=CAU',
      likes: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrUJ5GfCmFfbmf6vuNAHFWUrnwn04cO4acw&usqp=CAU',
      likes: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Photos', null, {});
  },
};
