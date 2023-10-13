const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  nationalId: "G300303",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialStateAccount = {
  user: null,
  isAuth: false,
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/login":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case "account/logout":
      return initialStateAccount;

    default:
      return state;
  }
}

export function login(email, password) {
  if (email == FAKE_USER.email && password == FAKE_USER.password) {
    return {
      type: "account/login",
      payload: FAKE_USER,
    };
  }
}

export function logout() {
  return {
    type: "account/logout",
  };
}
