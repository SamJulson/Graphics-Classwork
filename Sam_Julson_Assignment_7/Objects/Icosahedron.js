"use strict";

const Icosahedron = function(name, transform, update) {
  const vertexSource = document.getElementById("icosahedron-vshader").text;
  const fragmentSource = document.getElementById("icosahedron-fshader").text;
  
  const vertices = [
    // Face 1
     1.000000,  1.618033,  0.000000,
    -1.000000,  1.618033,  0.000000,
     0.000000,  1.000000,  1.618033,
    // Face 2
     1.000000,  1.618033,  0.000000,
    -1.000000,  1.618033,  0.000000,
     0.000000,  1.000000, -1.618033,
    // Face 3
     1.000000,  1.618033,  0.000000,
     1.618033,  0.000000,  1.000000,
     1.618033,  0.000000, -1.000000,
    // Face 4
    -1.000000,  1.618033,  0.000000,
    -1.618033,  0.000000,  1.000000,
    -1.618033,  0.000000, -1.000000,
    // Face 5
     1.000000,  1.618033,  0.000000,
     0.000000,  1.000000,  1.618033,
     1.618033,  0.000000,  1.000000,
    // Face 6
     1.000000,  1.618033,  0.000000,
     0.000000,  1.000000, -1.618033,
     1.618033,  0.000000, -1.000000,
    // Face 7
    -1.000000,  1.618033,  0.000000,
     0.000000,  1.000000,  1.618033,
    -1.618033,  0.000000,  1.000000,
    // Face 8
    -1.000000,  1.618033,  0.000000,
     0.000000,  1.000000, -1.618033,
    -1.618033,  0.000000, -1.000000,
    // Face 9
     0.000000,  1.000000,  1.618033,
     1.618033,  0.000000,  1.000000,
     0.000000, -1.000000,  1.618033,
    // Face 10
     0.000000,  1.000000,  1.618033,
    -1.618033,  0.000000,  1.000000,
     0.000000, -1.000000,  1.618033,
    // Face 11
     0.000000,  1.000000, -1.618033,
     1.618033,  0.000000, -1.000000,
     0.000000, -1.000000, -1.618033,
    // Face 12
     0.000000,  1.000000, -1.618033,
    -1.618033,  0.000000, -1.000000,
     0.000000, -1.000000, -1.618033,
    // Face 13
     1.618033,  0.000000,  1.000000,
     0.000000, -1.000000,  1.618033,
     1.000000, -1.618033,  0.000000,
    // Face 14
     1.618033,  0.000000, -1.000000,
     0.000000, -1.000000, -1.618033,
     1.000000, -1.618033,  0.000000,
    // Face 15
    -1.618033,  0.000000,  1.000000,
     0.000000, -1.000000,  1.618033,
    -1.000000, -1.618033,  0.000000,
    // Face 16
    -1.618033,  0.000000, -1.000000,
     0.000000, -1.000000, -1.618033,
    -1.000000, -1.618033,  0.000000,
    // Face 17
     1.618033,  0.000000,  1.000000,
     1.618033,  0.000000, -1.000000,
     1.000000, -1.618033,  0.000000,
    // Face 18
    -1.618033,  0.000000,  1.000000,
    -1.618033,  0.000000, -1.000000,
    -1.000000, -1.618033,  0.000000,
    // Face 19
     0.000000, -1.000000,  1.618033,
     1.000000, -1.618033,  0.000000,
    -1.000000, -1.618033,  0.000000,
    // Face 20
     0.000000, -1.000000, -1.618033,
     1.000000, -1.618033,  0.000000,
    -1.000000, -1.618033,  0.000000,
    ];
  
  const normals = [
    // Face 1
     0.000000,  0.934172,  0.356822,
     0.000000,  0.934172,  0.356822,
     0.000000,  0.934172,  0.356822,
    // Face 2
     0.000000,  0.934172, -0.356822,
     0.000000,  0.934172, -0.356822,
     0.000000,  0.934172, -0.356822,
    // Face 3
     0.934172,  0.356822,  0.000000,
     0.934172,  0.356822,  0.000000,
     0.934172,  0.356822,  0.000000,
    // Face 4
    -0.934172,  0.356822,  0.000000,
    -0.934172,  0.356822,  0.000000,
    -0.934172,  0.356822,  0.000000,
    // Face 5
     0.809017,  0.500000,  0.309017,
     0.809017,  0.500000,  0.309017,
     0.809017,  0.500000,  0.309017,
    // Face 6
     0.809017,  0.500000, -0.309017,
     0.809017,  0.500000, -0.309017,
     0.809017,  0.500000, -0.309017,
    // Face 7
    -0.809017,  0.500000,  0.309017,
    -0.809017,  0.500000,  0.309017,
    -0.809017,  0.500000,  0.309017,
    // Face 8
    -0.809017,  0.500000, -0.309017,
    -0.809017,  0.500000, -0.309017,
    -0.809017,  0.500000, -0.309017,
    // Face 9
     0.356822,  0.000000, -0.934172,
     0.356822,  0.000000, -0.934172,
     0.356822,  0.000000, -0.934172,
    // Face 10
     0.356822,  0.000000,  0.934172,
     0.356822,  0.000000,  0.934172,
     0.356822,  0.000000,  0.934172,
    // Face 11
    -0.356822,  0.000000, -0.934172,
    -0.356822,  0.000000, -0.934172,
    -0.356822,  0.000000, -0.934172,
    // Face 12
    -0.356822,  0.000000,  0.934172,
    -0.356822,  0.000000,  0.934172,
    -0.356822,  0.000000,  0.934172,
    // Face 13
     0.809017, -0.500000,  0.309017,
     0.809017, -0.500000,  0.309017,
     0.809017, -0.500000,  0.309017,
    // Face 14
     0.809017, -0.500000, -0.309017,
     0.809017, -0.500000, -0.309017,
     0.809017, -0.500000, -0.309017,
    // Face 15
    -0.809017, -0.500000,  0.309017,
    -0.809017, -0.500000,  0.309017,
    -0.809017, -0.500000,  0.309017,
    // Face 16
    -0.809017, -0.500000, -0.309017,
    -0.809017, -0.500000, -0.309017,
    -0.809017, -0.500000, -0.309017,
    // Face 17
     0.934172, -0.356822,  0.000000,
     0.934172, -0.356822,  0.000000,
     0.934172, -0.356822,  0.000000,
    // Face 18
    -0.934172, -0.356822,  0.000000,
    -0.934172, -0.356822,  0.000000,
    -0.934172, -0.356822,  0.000000,
    // Face 19
     0.000000, -0.934172,  0.356822,
     0.000000, -0.934172,  0.356822,
     0.000000, -0.934172,  0.356822,
    // Face 20
     0.000000, -0.934172, -0.356822,
     0.000000, -0.934172, -0.356822,
     0.000000, -0.934172, -0.356822,
  ];
  
  const colors = [
    // Face 1
    1.0, 0.0, 0.0, 1.0,
    1.0, 0.0, 0.0, 1.0,
    1.0, 0.0, 0.0, 1.0,
    // Face 2
    0.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    // Face 3
    0.0, 0.0, 1.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    // Face 4
    1.0, 1.0, 0.0, 1.0,
    1.0, 1.0, 0.0, 1.0,
    1.0, 1.0, 0.0, 1.0,
    // Face 5
    0.0, 1.0, 1.0, 1.0,
    0.0, 1.0, 1.0, 1.0,
    0.0, 1.0, 1.0, 1.0,
    // Face 6
    1.0, 0.0, 1.0, 1.0,
    1.0, 0.0, 1.0, 1.0,
    1.0, 0.0, 1.0, 1.0,
    // Face 7
    1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0,
    // Face 8
    0.1, 0.1, 0.1, 1.0,
    0.1, 0.1, 0.1, 1.0,
    0.1, 0.1, 0.1, 1.0,
    // Face 9
    1.0, 0.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    // Face 10
    1.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 1.0, 1.0,
    1.0, 0.0, 1.0, 1.0,
    // Face 11
    1.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 1.0, 1.0,
    1.0, 0.0, 1.0, 1.0,
    // Face 12
    1.0, 0.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    // Face 13
    0.1, 0.1, 0.1, 1.0,
    0.1, 0.1, 0.1, 1.0,
    0.1, 0.1, 0.1, 1.0,
    // Face 14
    1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0,
    // Face 15
    1.0, 0.0, 1.0, 1.0,
    1.0, 0.0, 1.0, 1.0,
    1.0, 0.0, 1.0, 1.0,
    // Face 16
    0.0, 1.0, 1.0, 1.0,
    0.0, 1.0, 1.0, 1.0,
    0.0, 1.0, 1.0, 1.0,
    // Face 17
    1.0, 1.0, 0.0, 1.0,
    1.0, 1.0, 0.0, 1.0,
    1.0, 1.0, 0.0, 1.0,
    // Face 18
    0.0, 0.0, 1.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    // Face 19
    0.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    // Face 20
    1.0, 0.0, 0.0, 1.0,
    1.0, 0.0, 0.0, 1.0,
    1.0, 0.0, 0.0, 1.0,
  ];
  
  const indices = [
    // Face 1
    0, 1, 2,
    // Face 2
    3, 4, 5,
    // Face 3
    6, 7, 8,
    // Face 4
    9, 10, 11,
    // Face 5
    12, 13, 14,
    // Face 6
    15, 16, 17,
    // Face 7
    18, 19, 20,
    // Face 8
    21, 22, 23,
    // Face 9
    24, 25, 26,
    // Face 10
    27, 28, 29,
    // Face 11
    30, 31, 32,
    // Face 12
    33, 34, 35,
    // Face 13
    36, 37, 38,
    // Face 14
    39, 40, 41,
    // Face 15
    42, 43, 44,
    // Face 16
    45, 46, 47,
    // Face 17
    48, 49, 50,
    // Face 18
    51, 52, 53,
    // Face 19
    54, 55, 56,
    // Face 20
    57, 58, 59,
  ];
  
  const vertexCount = indices.length;
  
  let newIcosahedron = GrObject(name, transform, update);
  newIcosahedron.vertexSource = vertexSource;
  newIcosahedron.fragmentSource = fragmentSource;
  newIcosahedron.vertices = vertices;
  newIcosahedron.normals = normals;
  newIcosahedron.colors = colors;
  newIcosahedron.indices = indices;
  newIcosahedron.vertexCount = vertexCount;
  return newIcosahedron;
}