const matrixAdd = function (A, B) {
  return A.map((item, index1) => item.map((item2, index2) => A[index1][index2] + B[index1][index2]))
}
const matrixMinus = function (A, B) {
  return A.map((item, index1) => item.map((item2, index2) => A[index1][index2] - B[index1][index2]))
}
// 矩阵乘法 strassen解法
const strassen = function (A, B) {
  // console.log('------------------')
  // console.log('A', A)
  // console.log('B', B)
  // 递归终止条件
  if (A.length === 1 && A[0].length === 1) {
    return [[A[0][0] * B[0][0]]]
  }
  if (A.length !== A[0].length) {
    throw new Error('不是n*n矩阵')
  }
  if ((A.length !== 1) && ((A.length % 2) !== 0)) {
    throw new Error('不是2^n*2^n矩阵')
  }
  if (B.length !== B[0].length) {
    throw new Error('不是n*n矩阵')
  }
  if ((B.length !== 1) && ((B.length % 2) !== 0)) {
    throw new Error('不是2^n*2^n矩阵')
  }
  // 8 个子矩阵
  const A11 = A.slice(0, A.length / 2).map(item => item.slice(0, A.length / 2))
  const A12 = A.slice(0, A.length / 2).map(item => item.slice(A.length / 2, A.length))
  const A21 = A.slice(A.length / 2, A.length).map(item => item.slice(0, A.length / 2))
  const A22 = A.slice(A.length / 2, A.length).map(item => item.slice(A.length / 2, A.length))
  // console.log('A11', A11)
  // console.log('A12', A12)
  // console.log('A21', A21)
  // console.log('A22', A22)
  const B11 = B.slice(0, B.length / 2).map(item => item.slice(0, B.length / 2))
  const B12 = B.slice(0, B.length / 2).map(item => item.slice(B.length / 2, B.length))
  const B21 = B.slice(B.length / 2, B.length).map(item => item.slice(0, B.length / 2))
  const B22 = B.slice(B.length / 2, B.length).map(item => item.slice(B.length / 2, B.length))
  // console.log(B11, B12, B21, B22)
  // console.log('B11', B11)
  // console.log('B12', B12)
  // console.log('B21', B21)
  // console.log('B22', B22)
  // 10 个矩阵变量
  const S1 = matrixMinus(B12, B22)
  const S2 = matrixAdd(A11, A12)
  const S3 = matrixAdd(A21, A22)
  const S4 = matrixMinus(B21, B11)
  const S5 = matrixAdd(A11, A22)
  const S6 = matrixAdd(B11, B22)
  const S7 = matrixMinus(A12, A22)
  const S8 = matrixAdd(B21, B22)
  const S9 = matrixMinus(A11, A21)
  const S10 = matrixAdd(B11, B12)

  // 递归计算7次矩阵乘法
  const P1 = strassen(A11, S1)
  const P2 = strassen(S2, B22)
  const P3 = strassen(S3, B11)
  const P4 = strassen(A22, S4)
  const P5 = strassen(S5, S6)
  const P6 = strassen(S7, S8)
  const P7 = strassen(S9, S10)

  // 计算结果的子矩阵
  const C11 = matrixMinus(matrixAdd(P5, P4), matrixMinus(P2, P6))
  const C12 = matrixAdd(P1, P2)
  const C21 = matrixAdd(P3, P4)
  const C22 = matrixMinus(matrixAdd(P5, P1), matrixAdd(P3, P7))
  // 合并成结果
  const C1 = C11.map((item, index) => item.concat(C12[index]))
  const C2 = C21.map((item, index) => item.concat(C22[index]))
  return C1.concat(C2)
}
module.exports = strassen
