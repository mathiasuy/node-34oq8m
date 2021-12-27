// Ejercicio 4

const tree = {
  value: 1,
  children: [
    {
      value: 10,
      children: [
        {
          value: 3,
          children: [],
        },
        {
          value: 4,
          children: [
            {
              value: 7,
              children: [
                {
                  value: 8,
                  children: [],
                },
              ],
            },
            {
              value: 11,
              children: [],
            },
          ],
        },
      ],
    },
    {
      value: 0.1,
      children: [
        {
          value: 4.2,
          children: [
            {
              value: 1,
              children: [],
            },
            {
              value: 3,
              children: [],
            },
          ],
        },
      ],
    },
    {
      value: 4,
      children: [
        {
          value: 54,
          children: [
            {
              value: 1,
              children: [],
            },
            {
              value: 9,
              children: [],
            },
          ],
        },
        {
          value: 4,
          children: [
            {
              value: 2,
              children: [],
            },
          ],
        },
      ],
    },
    {
      value: 33,
      children: [
        {
          value: 10,
          children: [
            {
              value: 30,
              children: [
                {
                  value: 2,
                  children: [
                    {
                      value: 4,
                      children: [],
                    },
                    {
                      value: 21,
                      children: [],
                    },
                    {
                      value: 12,
                      children: [
                        {
                          value: 44,
                          children: [
                            {
                              value: 5,
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function findMax(tree){
  if (tree){
    let result = inOrder (tree);
    if (result && result > tree.value){
      return result;
    }else{
      return tree.value;
    }
  }
}

console.log(findMax(tree));

// Hallar el máximo valor del árbol: 54
// Todos los números son mayores que 0.

