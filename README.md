# Cashu-Lightning-Claim API

## Overview

The Cashu-Lightning-Claim API provides endpoints for validating and checking the status of Cashu tokens. This API is designed to enhance the usability and functionality for developers and users by ensuring token integrity and tracking their usage.

## New Token Validation and Status Endpoints

### **GET `/api/token/validate`**
**Description**: Validates the format of a Cashu token.

- **Query Parameters**:
  - `cashuToken=ENCODED_CASHU_TOKEN`

- **Response**:
```json
{
    "isValid": true
}
```

**Error Responses:**
- `400`: Invalid or missing token.
- `500`: Internal server error.

### **GET `/api/token/status`**
**Description**: Checks whether a Cashu token has been spent and its total amount.

- **Query Parameters**:
  - `cashuToken=ENCODED_CASHU_TOKEN`

- **Response**:
```json
{
    "isSpent": false,
    "amount": 1000
}
```

**Error Responses:**
- `400`: Invalid or missing token.
- `500`: Internal server error.

---

### **Testing the Endpoints**

#### Example Requests

1. Validate a token:
   ```
   GET http://localhost:3000/api/token/validate?cashuToken=YOUR_CASHU_TOKEN
   ```

2. Check token status:
   ```
   GET http://localhost:3000/api/token/status?cashuToken=YOUR_CASHU_TOKEN
   ```

These endpoints ensure that the API now supports token validation and checking spend status, offering improved usability and functionality for developers and users.
