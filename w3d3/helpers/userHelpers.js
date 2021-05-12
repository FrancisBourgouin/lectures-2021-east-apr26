const authenticateUser = (userParams, db) => {
  const { email, password } = userParams
  for (const user of db) {
    if (user.email === email) {
      if (user.password === password) {
        return { data: user, error: null }
      }
      return { data: null, error: "bad password" }

    }
  }
  return { data: null, error: "bad email" }
}

const fetchUser = (email, db) => {
  for (const user of db) {
    if (user.email === email) {
      return user
    }
  }
  return null
}

const createUser = (userParams, db) => {
  if (fetchUser(userParams.email)) {
    return { data: null, error: "user already exists" }
  }
  const { email, name, avatar, password } = userParams

  if (!email || !name || !avatar || !password) {
    return { data: null, error: "invalid fields" }
  }

  db.push(userParams)
  return { data: userParams, error: null }
}

module.exports = { authenticateUser, fetchUser, createUser }