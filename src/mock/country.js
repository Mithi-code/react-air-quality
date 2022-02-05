const countries = () => Promise.resolve({
  data: [
    {
      code: 'AF',
      name: 'Afganistan',
      popullation: 40218324,
    },
    {
      code: 'NG',
      name: 'Nigeria',
      popullation: 206139587,
    },
  ],
});

export default countries;
