export interface AccessToken {
    token: string;
}

// accessToken
export interface Profile {
    wxheadpic: string;
    wxname: string;
}

export interface AuthType  {
  url: string;
  openid?: string;
}