# Uncommon JavaScript Bug: Implicit Type Coercion with Null Checks

This repository demonstrates a subtle bug in JavaScript related to how null checks interact with implicit type coercion in addition operations.

## Bug Description

The `foo` function checks for null inputs before performing addition. While it correctly handles null inputs, it fails to explicitly handle cases where one input is a number and the other is a non-null, non-numeric value (e.g., string).

## How to Reproduce

1. Clone the repository.
2. Run `bug.js`.
3. Observe the unexpected behavior when passing non-numeric values other than null. 

## Solution

The solution (`bugSolution.js`) demonstrates how to robustly handle various input types using explicit type checking and error handling.