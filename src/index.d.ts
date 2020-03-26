export { GoogleSignInOptions, GoogleSignInResult, GoogleSignInType, GoogleSignInScope, GoogleSignInResultType, FacebookLoginOptions, FacebookLoginResult } from "./login.common";

/**
 * Function to wire in the Google Sign In SDK. Only required for iOS support.
 * @param iosClientID The registered Client ID for the iOS app.
 */
export declare function wireInGoogleSignIn(iosClientID: string): void;

/**
 * Start the Google Sign In flow with the given options.
 * @param googleSignInOptions
 */
export declare function startGoogleSignIn(googleSignInOptions: GoogleSignInOptions): Promise<GoogleSignInResult>;

/**
 * Function to wire in the Facebook Login SDK. Only required for iOS support.
 */
export declare function wireInFacebookLogin(): void;

/**
 * Start the Facebook Login flow with the given options.
 * @param facebookLoginOptions
 */
export declare function startFacebookLogin(facebookLoginOptions: FacebookLoginOptions): Promise<FacebookLoginResult>;
