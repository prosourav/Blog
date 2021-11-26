const oktaAuthConfig = {
  issuer: "https://dev-92890177.okta.com/oauth2/default",
  clientId: "0oa2vpicanKilRE7c5d7",
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  baseUrl: "https://dev-92890177.okta.com",
  clientId: "0oa2vpicanKilRE7c5d7",
  redirectUri: window.location.origin + "/login/callback",
  authParams: {},
};

export { oktaAuthConfig, oktaSignInConfig };
