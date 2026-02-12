// server/models/User.js
const allowedUsers = [
  { username: 'admin', password: 'password123' },
  { username: 'user1', password: 'userpass' },
  { username: 'user2', password: 'userpass2' },
];

module.exports = {
  getUsers: () => allowedUsers,
  getUserByUsername: (username) => allowedUsers.find(user => user.username === username),
};