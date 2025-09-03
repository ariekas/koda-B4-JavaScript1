// var objec, mendapatkan hasil koda, tapi harus akses

const obj = {
  str: [
    "a",
    "b",
    "c",
    [
      "A",
      [
        "A",
        "B",
        {
          man: [
            {
              the: {
                name: {
                  of: {
                    us: "Koda",
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
};

const hello = {
  world: "Hello word",
};

const my = [
  {
    favourite: [
      0,
      1,
      2,
      {
        fruit: {
          is: "Apple",
        },
      },
    ],
  },
];

console.log(obj.str[3][1][2].man[0].the.name.of.us);
console.log(hello.world);
console.log(my[0].favourite[3].fruit.is);
