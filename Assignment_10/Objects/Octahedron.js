"use strict";

const Octahedron = function(name, transform, update) {
  const vertexSource = document.getElementById("texture-vshader").text;
  const fragmentSource = document.getElementById("texture-fshader").text;
  const textureSource = "";
  
  const vertices = [
    // Face 1
     0.000000,  1.000000,  0.000000,
     1.000000,  0.000000,  0.000000,
     0.000000,  0.000000,  1.000000,
    // Face 2
     0.000000,  1.000000,  0.000000,
     1.000000,  0.000000,  0.000000,
     0.000000,  0.000000, -1.000000,
    // Face 3
     0.000000,  1.000000,  0.000000,
    -1.000000,  0.000000,  0.000000,
     0.000000,  0.000000,  1.000000,
    // Face 4
     0.000000,  1.000000,  0.000000,
    -1.000000,  0.000000,  0.000000,
     0.000000,  0.000000, -1.000000,
    // Face 5
     0.000000, -1.000000,  0.000000,
     1.000000,  0.000000,  0.000000,
     0.000000,  0.000000,  1.000000,
    // Face 6
     0.000000, -1.000000,  0.000000,
     1.000000,  0.000000,  0.000000,
     0.000000,  0.000000, -1.000000,
    // Face 7
     0.000000, -1.000000,  0.000000,
    -1.000000,  0.000000,  0.000000,
     0.000000,  0.000000,  1.000000,
    // Face 8
     0.000000, -1.000000,  0.000000,
    -1.000000,  0.000000,  0.000000,
     0.000000,  0.000000, -1.000000,
  ];
  
  const normals = [
    // Face 1
    -0.707107,  0.000000, -0.707107,
    -0.707107,  0.000000, -0.707107,
    -0.707107,  0.000000, -0.707107,
    // Face 2
     0.707107,  0.000000, -0.707107,
     0.707107,  0.000000, -0.707107,
     0.707107,  0.000000, -0.707107,
    // Face 3
    -0.707107,  0.000000,  0.707107,
    -0.707107,  0.000000,  0.707107,
    -0.707107,  0.000000,  0.707107,
    // Face 4
     0.707107,  0.000000,  0.707107,
     0.707107,  0.000000,  0.707107,
     0.707107,  0.000000,  0.707107,
    // Face 5
     0.707107,  0.000000,  0.707107,
     0.707107,  0.000000,  0.707107,
     0.707107,  0.000000,  0.707107,
    // Face 6
    -0.707107,  0.000000,  0.707107,
    -0.707107,  0.000000,  0.707107,
    -0.707107,  0.000000,  0.707107,
    // Face 7
     0.707107,  0.000000, -0.707107,
     0.707107,  0.000000, -0.707107,
     0.707107,  0.000000, -0.707107,
    // Face 8
    -0.707107,  0.000000, -0.707107,
    -0.707107,  0.000000, -0.707107,
    -0.707107,  0.000000, -0.707107,
  ];
  
  const texCoords = [
    // Face 1
    0.0, 1.0,
    0.5, 0.0,
    1.0, 1.0,
    // Face 2
    0.0, 1.0,
    0.5, 0.0,
    1.0, 1.0,
    // Face 3
    0.0, 1.0,
    0.5, 0.0,
    1.0, 1.0,
    // Face 4
    0.0, 1.0,
    0.5, 0.0,
    1.0, 1.0,
    // Face 5
    0.0, 1.0,
    0.5, 0.0,
    1.0, 1.0,
    // Face 6
    0.0, 1.0,
    0.5, 0.0,
    1.0, 1.0,
    // Face 7
    0.0, 1.0,
    0.5, 0.0,
    1.0, 1.0,
    // Face 8
    0.0, 1.0,
    0.5, 0.0,
    1.0, 1.0,
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
  ];
  
  const vertexCount = indices.length;
  
  let newOctahedron = GrObject(name, transform, update);
  newOctahedron.vertexSource = vertexSource;
  newOctahedron.fragmentSource = fragmentSource;
  newOctahedron.textureSource = textureSource;
  newOctahedron.vertices = vertices;
  newOctahedron.normals = normals;
  newOctahedron.texCoords = texCoords;
  newOctahedron.indices = indices;
  newOctahedron.vertexCount = vertexCount;
  return newOctahedron;
}