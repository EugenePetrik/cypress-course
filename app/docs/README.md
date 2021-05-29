# TodoMVC app

### How to install and run app
1. `npm install`
2. `npm start`
3. open app on http://localhost:3000

### Backend

Backend is a json-server on a static json file located in `todomvc/data.json`. 

### API

---
#### GET /todos
Returns an array of all todo items.

---
#### POST /todos
Creates a todo item. 

**Example of a an item payload:**
```json
{
  "title": "buy milk",
  "completed": false,
  "id": 1
}
```
---
#### PATCH /todos/{id}
Edits todo item, usually to change `completed` state. {id} stands for todo id.

**Example payload:**
```json
{
  "completed": true
}
```
---
#### DELETE /todos/{id}
Deletes todo item with given id.

---
#### DELETE /todos
Deletes all todos.

---
#### POST /todos/seed
Seed an array of todos. Payload needs to be an array of objects, containing todos. This request rewrites all todos.

---
#### POST /signup
Creates a new account. 
**Example payload:**
```json
{
  "email": "email@example.com",
  "password": "abc123"
}
```
**Example error statuses:**

`409 (Conflict)` - Account already exists

`401 (Unauthorized)` - Email or password was not provided

**Request headers:**

`sendwelcomeemail: true` - Sends welcome email to signed up user

**Response headers:**

`Set-Cookie: "auth=true;"`

---
#### POST /login
Logs into a new account.

**Example payload:**
```json
{
  "email": "email@example.com",
  "password": "abc123"
}
```
**Response headers:**

`Set-Cookie: "auth=true;"`

**Example error statuses:**

`401 (Unauthorized)` - Wrong email or password

---
#### POST /reset
Deletes all todos and all accounts.

---
#### DELETE /accounts
Deletes all accounts.

---
#### POST /accounts/seed
Seed an array of accounts. Payload needs to be an array of objects, containing accounts. This request rewrites all accounts.
