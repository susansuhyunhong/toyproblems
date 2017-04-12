// Given two strings, compute the Levenshtein distance between them
// i.e. the minimum number of edits required to convert one string into the other.
// For example, the Levenshtein distance between "kitten" and "sitting" is 3.
// The minimum steps required to transform the former into latter are:
// 1. kitten → sitten (substitution of "s" for "k")
// 2. sitten → sittin (substitution of "i" for "e")
// 3. sittin → sitting (insertion of "g" at the end)

// Sol1 - two dimentional array, Time O(n^2), Space O(n^2)
// if s1 is equal to s2, return 0
//
// Set m as length of s1
// Set n as length of s2
// if s1 is empty, return n
// if s2 is empty, return m
//
// Create a two dimensional array with m+1 rows and n+1 columns
// Initialize the first row to 0..n
// Inaitialize the first column to 0..m
//
// for each character of s1 (i from 1..m)
//     for each character of s2 (j from 1..n)
//         if s1[i] = s2[j], initialize 'cost' to 0, otherwise initialize 'cost' to 1
//         set d[i][j] = minimum (d[i-1][j] + 1, [the cell immediately above plus 1]
//                                d[i][j-1] + 1, [the cell immediately to the left plus 1]
//                                d[i-1][j-1] + cost [the cell diagonally above and to the left plus cost])
//
// return d[m][n]

// Sol2 - Time O(n^2), Space O(n)
