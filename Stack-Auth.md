TITLE: Verifying JWT Access Token on Server (Node.js)
DESCRIPTION: This Node.js snippet shows how to verify a user's access token locally using the 'jose' library. It fetches the JWKS (JSON Web Key Set) from Stack Auth's well-known endpoint, then uses it to verify the JWT. This method is fast and provides essential user information from the token payload.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/concepts/backend-integration.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
import * as jose from 'jose';

// you can cache this and refresh it with a low frequency
const jwks = jose.createRemoteJWKSet(new URL("https://api.stack-auth.com/api/v1/projects/<your-project-id>/.well-known/jwks.json"));

const accessToken = 'access token from the headers';

try {
  const { payload } = await jose.jwtVerify(accessToken, jwks);
  console.log('Authenticated user with ID:', payload.sub);
} catch (error) {
  console.error(error);
  console.log('Invalid user');
}
```

----------------------------------------

TITLE: Signing Out User in TypeScript
DESCRIPTION: A straightforward example demonstrating how to call the `signOut()` method on the `user` object. This action effectively logs out the current user and clears their session.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/types/user.mdx#_snippet_44

LANGUAGE: typescript
CODE:
```
await user.signOut();
```

----------------------------------------

TITLE: Wrapping Root Layout with Stack Auth Providers (TSX)
DESCRIPTION: This snippet demonstrates how to wrap your Next.js `RootLayout` with `StackProvider` and `StackTheme`. This integration ensures that Stack Auth's context and styling are available throughout your application, enabling client-side authentication features.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import React from "react";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

```

----------------------------------------

TITLE: Wrapping Application with StackProvider and StackTheme (Next.js)
DESCRIPTION: This snippet demonstrates how to wrap your Next.js application's children with `StackProvider` and `StackTheme`. `StackProvider` is crucial for enabling Stack's authentication functionalities, while `StackTheme` applies the default styling and theming.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
<body>
  <StackProvider app={stackServerApp}>
    <StackTheme>
      {children}
    </StackTheme>
  </StackProvider>
</body>
```

----------------------------------------

TITLE: Updating Server-Side and Reading Client Read-Only Metadata in Stack Auth (TypeScript)
DESCRIPTION: This snippet demonstrates how to manage clientReadOnlyMetadata in Stack Auth. This type of metadata is writable only from the server but readable by the client, making it suitable for data like subscription status. The first part shows the server updating the subscriptionPlan, and the second part shows the client reading this information using useUser().
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/concepts/custom-user-data.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:
```
// On the server:
const user = await stackServerApp.getUser();
await user.update({
  clientReadOnlyMetadata: {
    subscriptionPlan: "premium",
  },
});

// On the client:
const user = useUser();
console.log(user.clientReadOnlyMetadata);
```

----------------------------------------

TITLE: Example Server-Side Usage with Stack Auth (TypeScript)
DESCRIPTION: Demonstrates server-side operations using the initialized `stackServerApp`. It shows how to retrieve a user by ID, update their display name, create a new team, and add a user to that team. This highlights common administrative and data manipulation tasks.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_18

LANGUAGE: typescript
CODE:
```
import { stackServerApp } from "@/stack/server";

const user = await stackServerApp.getUser("user_id");

await user.update({
  displayName: "New Display Name",
});

const team = await stackServerApp.createTeam({
  name: "New Team",
});

await team.addUser(user.id);
```

----------------------------------------

TITLE: StackClientApp Type Definition
DESCRIPTION: Defines the structure and available methods of the `StackClientApp` object, including its constructor, user and project retrieval methods, and various authentication functions like sign-in and sign-up.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/objects/stack-app.mdx#_snippet_0

LANGUAGE: typescript
CODE:
```
type StackClientApp = {
  new(options): StackClientApp;  //$stack-link-to:#constructor

  getUser([options]): Promise<User>;  //$stack-link-to:#stackclientappgetuseroptions
  // NEXT_LINE_PLATFORM react-like
   ⤷ useUser([options]): User;  //$stack-link-to:#stackclientappuseuseroptions
  getProject(): Promise<Project>;  //$stack-link-to:#stackclientappgetproject
  // NEXT_LINE_PLATFORM react-like
   ⤷ useProject(): Project;  //$stack-link-to:#stackclientappuseproject

  signInWithOAuth(provider): void;  //$stack-link-to:#stackclientappsigninwithoauthprovider
  signInWithCredential([options]): Promise<...>;  //$stack-link-to:#stackclientappsigninwithcredentialoptions
  signUpWithCredential([options]): Promise<...>;  //$stack-link-to:#stackclientappsignupwithcredentialoptions
  sendForgotPasswordEmail(email): Promise<...>;  //$stack-link-to:#stackclientappsendforgotpasswordemailemail
  sendMagicLinkEmail(email): Promise<...>;  //$stack-link-to:#stackclientappsendmagiclinkemailemail
};
```

----------------------------------------

TITLE: Fetching User Data in React Server and Client Components with StackApp
DESCRIPTION: Illustrates the difference between using `stackServerApp.getUser()` in an `async` React Server Component (which returns a Promise and must be awaited) and `useStackApp().useUser()` in a React Client Component (which returns the value directly via a hook). This demonstrates the `getXyz`/`listXyz` vs. `useXyz` pattern.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/concepts/stack-app.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
// server-component.tsx
async function ServerComponent() {
  const app = stackServerApp;
  // returns a Promise, must be awaited
  const user = await app.getUser();

  return <div>{user.displayName}</div>;
}
```

LANGUAGE: TypeScript
CODE:
```
"use client";
function ClientComponent() {
  const app = useStackApp();
  // returns the value directly
  const user = app.useUser();

  return <div>{user.displayName}</div>;
}
```

----------------------------------------

TITLE: Initializing Stack Auth Client in TypeScript
DESCRIPTION: This snippet initializes the `StackClientApp` instance, configuring it with essential environment variables like API URL, project ID, and publishable client key. It also sets the token storage to 'cookie' and defines the OAuth callback URL, while including a type declaration for Vite's `import.meta.env`.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/example-pages.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { StackClientApp } from "@stackframe/js";

// Add type declaration for Vite's import.meta.env
declare global {
  interface ImportMeta {
    env: {
      VITE_STACK_API_URL: string;
      VITE_STACK_PROJECT_ID: string;
      VITE_STACK_PUBLISHABLE_CLIENT_KEY: string;
    };
  }
}

export const stackClientApp = new StackClientApp({
  baseUrl: import.meta.env.VITE_STACK_API_URL,
  projectId: import.meta.env.VITE_STACK_PROJECT_ID,
  publishableClientKey: import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY,
  tokenStore: "cookie",
  urls: {
    oauthCallback: window.location.origin + "/oauth",
  },
}); 
```

----------------------------------------

TITLE: Passing Auth Headers to External Server in TypeScript
DESCRIPTION: Demonstrates how to use `stackApp.getAuthHeaders()` on the client to include authentication headers in a `fetch` request. It also shows how to process the `Request` object on the server using `stackServerApp.getUser()` to authenticate the user based on the received token.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/types/user.mdx#_snippet_40

LANGUAGE: typescript
CODE:
```
// client
const res = await fetch("https://api.example.com", {
  headers: {
    ...await stackApp.getAuthHeaders()
    // you can also add your own headers here
  }
});

// server
function handleRequest(req: Request) {
  const user = await stackServerApp.getUser({ tokenStore: req });
  return new Response("Welcome, " + user.displayName);
}
```

----------------------------------------

TITLE: Rendering UserButton Component with Custom Options (TSX)
DESCRIPTION: This example demonstrates how to render the UserButton component from @stackframe/stack within a Next.js page. It configures the button to display user information, includes a callback for color mode toggling, and adds a custom menu item with an icon and click handler. The component requires the @stackframe/stack dependency.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/components/user-button.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
'use client';
import { UserButton } from '@stackframe/stack';

export default function Page() {
  return (
    <div>
      <h1>User Button</h1>
      <UserButton
        showUserInfo={true}
        colorModeToggle={() => { console.log("color mode toggle clicked") }}
        extraItems={[{
          text: 'Custom Action',
          icon: <CustomIcon />,
          onClick: () => console.log('Custom action clicked')
        }]}
      />
    </div>
  );
}
```

----------------------------------------

TITLE: Retrieving StackClientApp with useStackApp Hook (React)
DESCRIPTION: Illustrates the common React-like pattern for obtaining a `StackClientApp` instance within a client component using the `useStackApp()` hook, which is typically used after the app has been provided via `<StackProvider />`.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/objects/stack-app.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
"use client";

function MyReactComponent() {
  const stackClientApp = useStackApp();
}
```

----------------------------------------

TITLE: Initializing StackProvider in React (TSX)
DESCRIPTION: This snippet demonstrates how to integrate the StackProvider component into a React application. It shows how to pass the Stack app instance, specify the language for translations, and provide custom translation overrides for specific strings like 'Sign in' and 'Sign In'. This component wraps the main application content to make Stack context available throughout the component tree.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/components/stack-provider.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { StackProvider } from '@stackframe/stack';
import { stackServerApp } from '@/stack';

function App() {
  return (
    <StackProvider
      app={stackServerApp}
      lang="de-DE"
      translationOverrides={{
        "Sign in": "Einloggen",
        "Sign In": "Einloggen"
      }}
    >
      {/* Your app content */}
    </StackProvider>
  );
}
```

----------------------------------------

TITLE: Building a Custom OAuth Sign-In Button from Scratch (TSX)
DESCRIPTION: This snippet illustrates how to create a custom OAuth sign-in button using Stack Auth's low-level functions, specifically 'useStackApp' and 'signInWithOAuth'. It provides complete control over the UI and authentication logic, allowing developers to integrate specific OAuth providers like Google and handle the redirection to their login pages. The ''use client'' directive indicates this component runs on the client side.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/customization/custom-pages.mdx#_snippet_2

LANGUAGE: TSX
CODE:
```
'use client';
import { useStackApp } from "@stackframe/stack";

export default function CustomOAuthSignIn() {
  const app = useStackApp();

  return (
    <div>
      <h1>My Custom Sign In page</h1>
      <button onClick={async () => {
        // This will redirect to the OAuth provider's login page.
        await app.signInWithOAuth('google');
      }}>
        Sign In with Google
      </button>
    </div>
  );
}
```

----------------------------------------

TITLE: Building a Custom Password Reset Form with Stack Auth API (TSX)
DESCRIPTION: This snippet illustrates how to create a fully custom password reset form using the Stack Auth API. It demonstrates handling user input for new and confirmed passwords, validating password matching, and calling `app.resetPassword` with the provided reset `code`. This approach offers maximum control over UI and error handling.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/customization/page-examples/password-reset.mdx#_snippet_2

LANGUAGE: TSX
CODE:
```
'use client';

import { useStackApp } from "@stackframe/stack";
import { useState } from "react";

export default function CustomPasswordResetForm({ code }: { code: string }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const app = useStackApp();

  const onSubmit = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const result = await app.resetPassword({ password, code });
      if (result.status === 'error') {
        setError('Failed to reset password');
        return;
      }
      setSuccess(true);
    } catch (err) {
      setError(`An unexpected error occurred: ${err.message}`);
    }
  };

  if (success) {
    return <div>Password successfully reset!</div>;
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      {error && <div>{error}</div>}
      <div>
        <label htmlFor="password">New Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirm">Confirm Password</label>
        <input
          id="confirm"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
}
```

----------------------------------------

TITLE: Creating a Custom Sign-In Page with Stack Auth Components (TSX)
DESCRIPTION: This snippet demonstrates how to create a custom sign-in page using Stack Auth's 'SignIn' component. It allows for layout customization, such as adding a custom title, while leveraging the pre-built authentication UI and logic provided by 'SignIn'. This page will be rendered when users are redirected to the custom sign-in URL.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/customization/custom-pages.mdx#_snippet_0

LANGUAGE: TSX
CODE:
```
import { SignIn } from "@stackframe/stack";

export default function CustomSignInPage() {
  return (
    <div>
      <h1>My Custom Sign In page</h1>
      <SignIn />
    </div>
  );
}
```

----------------------------------------

TITLE: Implementing Password Reset with Stack Auth Component (TSX)
DESCRIPTION: This snippet demonstrates the simplest way to add password reset functionality using the `PasswordReset` component from `@stackframe/stack`. It provides a complete form with built-in validation and error handling, requiring minimal setup.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/customization/page-examples/password-reset.mdx#_snippet_0

LANGUAGE: TSX
CODE:
```
'use client';
import { PasswordReset } from "@stackframe/stack";

export default function DefaultPasswordReset() {
  return <PasswordReset />;
}
```

----------------------------------------

TITLE: Handling User Authentication with `useUser` Options
DESCRIPTION: Shows how to use the `useUser` hook with different `or` options (`"return-null"`, `"redirect"`, `"throw"`) to control behavior when a user is not signed in. It demonstrates returning `null`, redirecting to a sign-in page, or throwing an error.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/objects/stack-app.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
"use client";

function MyReactComponent() {
  const user = useUser();
  console.log(user); // null if not signed in

  const user = useUser({ or: "redirect" });  // redirects to sign-in page if necessary
  console.log(user); // always defined

  const user = useUser({ or: "throw" });  // throws an error if not signed in
  console.log(user); // always defined
}
```

----------------------------------------

TITLE: Handling Password Sign-In with Stack Client App in TypeScript
DESCRIPTION: This TypeScript snippet handles the user sign-in process. It retrieves email and password from input fields, calls `stackClientApp.signInWithCredential` to authenticate the user, and redirects to the home page on successful sign-in or displays an alert on failure.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/example-pages.mdx#_snippet_6

LANGUAGE: typescript
CODE:
```
document.getElementById("signIn")?.addEventListener("click", async () => {
  const emailInput = document.getElementById("emailInput") as HTMLInputElement;
  const passwordInput = document.getElementById("passwordInput") as HTMLInputElement;

  const result = await stackClientApp.signInWithCredential({
    email: emailInput.value,
    password: passwordInput.value,
  });

  if (result.status === "error") {
    alert("Sign in failed. Please check your email and password and try again.");
  } else {
    window.location.href = "/";
  }
});
```

----------------------------------------

TITLE: Checking User Permission with `hasPermission` (TypeScript)
DESCRIPTION: This snippet demonstrates how to use the `hasPermission` function to check if a user possesses a specific permission within a given team. It returns a Promise that resolves to a boolean indicating whether the permission is granted. The `scope` parameter specifies the team, and `permissionId` is the unique identifier for the permission.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/types/user.mdx#_snippet_27

LANGUAGE: typescript
CODE:
```
declare function hasPermission(scope: Team, permissionId: string): Promise<boolean>;
```

LANGUAGE: typescript
CODE:
```
const hasPermission = await user.hasPermission(team, "permissionId");
```

----------------------------------------

TITLE: Implementing Default Sign-In with Stack Auth Component (TSX)
DESCRIPTION: This snippet demonstrates how to render a full-page sign-in interface using the `SignIn` component from `@stackframe/stack`. It also notes the optional use of `useUser` for redirection if the user is already signed in, providing a quick way to integrate a standard sign-in flow.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/customization/page-examples/sign-in.mdx#_snippet_0

LANGUAGE: TSX
CODE:
```
'use client';
import { SignIn } from "@stackframe/stack";

export default function DefaultSignIn() {
  // optionally redirect to some other page if the user is already signed in
  // const user = useUser();
  // if (user) { redirect to some other page }
  return <SignIn fullPage />;
}
```

----------------------------------------

TITLE: Accessing User in Client Component (Basic) - TypeScript
DESCRIPTION: This snippet demonstrates the basic usage of the `useUser()` hook within a React Client Component to retrieve the current user. It displays a greeting if a user is logged in, otherwise a 'not logged in' message. By default, `useUser()` returns `null` if no user is signed in.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/users.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
"use client";
import { useUser } from "@stackframe/stack"

export function MyClientComponent() {
  const user = useUser();
  return <div>{user ? `Hello, ${user.displayName ?? "anon"}` : 'You are not logged in'}</div>;
}
```

----------------------------------------

TITLE: Displaying Sign-In Form with SignIn Component (Next.js/TSX)
DESCRIPTION: This snippet illustrates the basic usage of the <SignIn /> component from @stackframe/stack to render a sign-in form within a Next.js application. The component provides a complete authentication interface, composed of smaller primitives like OAuth buttons and credential fields. It requires importing SignIn from the Stack library.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/components.mdx#_snippet_1

LANGUAGE: TSX
CODE:
```
import { SignIn } from '@stackframe/stack';

export default function Page() {
  return (
    <SignIn />
  );
}
```

----------------------------------------

TITLE: Accessing User in Client Component (Redirect) - TypeScript
DESCRIPTION: This snippet shows how to use the `useUser()` hook with the `{ or: "redirect" }` option. When this option is passed, the hook will automatically redirect the user to the sign-in page if they are not authenticated, ensuring that `user` is never `null`.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/users.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
  const user = useUser({ or: "redirect" });
  return <div>{`Hello, ${user.displayName ?? "anon"}`}</div>;
```

----------------------------------------

TITLE: Signing Up with Email and Password using `stackClientApp` - TypeScript
DESCRIPTION: Demonstrates how to use `stackClientApp.signUpWithCredential` to register a new user with an email and password. It includes error handling to check the result status and log any sign-up failures.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/objects/stack-app.mdx#_snippet_16

LANGUAGE: TypeScript
CODE:
```
const result = await stackClientApp.signUpWithCredential({
  email: "test@example.com",
  password: "password",
});

if (result.status === "error") {
  console.error("Sign up failed", result.error.message);
}
```

----------------------------------------

TITLE: Initiating OAuth Sign-in with Provider (TypeScript)
DESCRIPTION: The `signInWithOAuth` method initiates the OAuth sign-in flow, redirecting the user to the specified provider's authentication page. Upon successful authentication, the user is redirected back to the application, either to a `after_auth_return_to` URL or the configured `afterSignIn` URL. It takes a `provider` string (e.g., 'google') as a parameter and returns a `Promise<void>`.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/objects/stack-app.mdx#_snippet_13

LANGUAGE: typescript
CODE:
```
await stackClientApp.signInWithOAuth("google");
```

----------------------------------------

TITLE: Setting Stack Auth API Keys Manually (Shell)
DESCRIPTION: These environment variables are essential for connecting your application to the Stack Auth service. They must be added to a `.env.local` file in your project's root directory, providing your unique project ID, publishable client key, and secret server key.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_3

LANGUAGE: sh
CODE:
```
NEXT_PUBLIC_STACK_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=<your-publishable-client-key>
STACK_SECRET_SERVER_KEY=<your-secret-server-key>
```

----------------------------------------

TITLE: Fetching Current User with StackServerApp in TypeScript
DESCRIPTION: This TypeScript example illustrates how to asynchronously retrieve the current authenticated user on the server by calling the `getUser` method without any parameters. The returned `user` object will be of type `CurrentServerUser`.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/objects/stack-app.mdx#_snippet_25

LANGUAGE: typescript
CODE:
```
const user = await stackServerApp.getUser();
console.log(user); // CurrentServerUser
```

----------------------------------------

TITLE: Initializing Stack Auth Client App (TSX)
DESCRIPTION: Initializes the Stack Auth client-side application using `StackClientApp`. It configures the `projectId`, `publishableClientKey`, and sets `tokenStore` to 'cookie' for browser-based applications. These keys should be stored in environment variables.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
import { StackClientApp } from "@stackframe/js";

export const stackClientApp = new StackClientApp({
  // You should store these in environment variables based on your project setup
  projectId: "your-project-id",
  publishableClientKey: "your-publishable-client-key",
  tokenStore: "cookie",
});
```

----------------------------------------

TITLE: Displaying User Profile with UserButton (Next.js/TSX)
DESCRIPTION: This snippet demonstrates how to integrate the <UserButton /> component from @stackframe/stack into a Next.js page. The component displays the user's avatar and provides a dropdown menu for user settings upon interaction. It requires importing UserButton from the Stack library.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/components.mdx#_snippet_0

LANGUAGE: TSX
CODE:
```
import { UserButton } from '@stackframe/stack';

export default function Page() {
  return (
    <UserButton />
  );
}
```

----------------------------------------

TITLE: Signing In with Email and Password (TypeScript)
DESCRIPTION: The `signInWithCredential` method allows users to sign in using their email and password. By default, it redirects to the `afterSignIn` URL upon success, but this can be overridden by `after_auth_return_to` or prevented with `noRedirect: true`. If sign-in fails, it returns a `Result` object containing error details without redirection. It requires `email` and `password` in the options object.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/objects/stack-app.mdx#_snippet_14

LANGUAGE: typescript
CODE:
```
const result = await stackClientApp.signInWithCredential({
  email: "test@example.com",
  password: "password",
});

if (result.status === "error") {
  console.error("Sign in failed", result.error.message);
}
```

----------------------------------------

TITLE: Installing Stack React SDK
DESCRIPTION: This command installs the `@stackframe/react` npm package, which is the official SDK for integrating Stack authentication into React applications. It's the first step to setting up Stack in your project.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_9

LANGUAGE: bash
CODE:
```
npm install @stackframe/react
```

----------------------------------------

TITLE: Example Client-Side Usage with Stack Auth (TypeScript)
DESCRIPTION: Illustrates client-side authentication and user management with `stackClientApp`. It covers signing in with credentials, fetching the current user, updating user profile information, and signing out. This demonstrates typical user-facing interactions.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_19

LANGUAGE: typescript
CODE:
```
import { stackClientApp } from "@/stack/client";

await stackClientApp.signInWithCredential({
  email: "test@example.com",
  password: "password123",
});

const user = await stackClientApp.getUser();

await user.update({
  displayName: "New Display Name",
});

await user.signOut();
```

----------------------------------------

TITLE: Getting Current User with Stack Auth in React/Next.js
DESCRIPTION: This snippet demonstrates how to retrieve the current authenticated user within a React/Next.js component using the `useUser` hook provided by Stack Auth. The `or: "redirect"` option automatically handles redirection to the login page if the user is not authenticated. The `user` object provides access to user properties like `displayName`.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/overview.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
export function MyComponent() {
  const user = useUser({ or: "redirect" });
  return <div>Hi, {user.displayName}</div>;
}
```

----------------------------------------

TITLE: Using User Access Tokens for Stack Auth API Requests in Python
DESCRIPTION: This snippet demonstrates how to make an authenticated request to the Stack Auth API using a user's access token. The `access_token` is typically retrieved from the Stack Auth JavaScript SDK on the client-side and then passed to the backend. This allows backend servers to fetch user-specific data, such as the current user's profile, by including the token in the `x-stack-access-token` header.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_22

LANGUAGE: python
CODE:
```
access_token = # access token retrieved from the JavaScript SDK

print(stack_auth_request('GET', '/api/v1/users/me', headers={
  'x-stack-access-token': access_token,
}))
```

----------------------------------------

TITLE: Creating Supabase Client with Dynamic JWT (TypeScript)
DESCRIPTION: This helper function, `createSupabaseClient`, initializes a Supabase browser client. It uses the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables. Crucially, it dynamically fetches the Supabase JWT using the `getSupabaseJwt` server action, ensuring that the client is authenticated with the correct user ID for Row Level Security (RLS) enforcement.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/others/supabase.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseJwt } from "./actions";

export const createSupabaseClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { accessToken: async () => await getSupabaseJwt() || "" }
  );
}
```

----------------------------------------

TITLE: Configuring Stack Auth Environment Variables (Shell)
DESCRIPTION: These environment variables, obtained from the Stack Auth dashboard, are crucial for authenticating your Next.js application with Stack Auth. They should be placed in the `.env.local` file to secure your project ID, publishable client key, and secret server key.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_1

LANGUAGE: sh
CODE:
```
NEXT_PUBLIC_STACK_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=<your-publishable-client-key>
STACK_SECRET_SERVER_KEY=<your-secret-server-key>
```

----------------------------------------

TITLE: Initializing StackClientApp in React
DESCRIPTION: This snippet initializes the `StackClientApp` instance, which is the core client-side application for Stack authentication in React. It requires `projectId` and `publishableClientKey` (ideally from environment variables) and integrates with `react-router-dom`'s `useNavigate` for redirection.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
import { StackClientApp } from "@stackframe/react";
import { useNavigate } from "react-router-dom";

export const stackClientApp = new StackClientApp({
  // You should store these in environment variables based on your project setup
  projectId: "your-project-id",
  publishableClientKey: "your-publishable-client-key",
  tokenStore: "cookie",
  redirectMethod: {
    useNavigate,
  }
});
```

----------------------------------------

TITLE: Rendering SignUp Component in Next.js
DESCRIPTION: This snippet illustrates the basic JSX usage of the <SignUp /> component, a pre-built UI element from Stack Auth designed for Next.js applications to handle user sign-up.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/components/overview.mdx#_snippet_2

LANGUAGE: JSX
CODE:
```
<SignUp />
```

----------------------------------------

TITLE: Initializing Stack Auth Client App (TSX) - Manual
DESCRIPTION: Initializes the Stack Auth client-side application using `StackClientApp` as part of a manual installation. It configures the `projectId`, `publishableClientKey`, and sets `tokenStore` to 'cookie'. These keys should be stored in environment variables.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_17

LANGUAGE: tsx
CODE:
```
import { StackClientApp } from "@stackframe/js";

const stackClientApp = new StackClientApp({
  // You should store these in environment variables based on your project setup
  projectId: "your-project-id",
  publishableClientKey: "your-publishable-client-key",
  tokenStore: "cookie",
});
```

----------------------------------------

TITLE: Getting Current User with `stackClientApp.getUser`
DESCRIPTION: Demonstrates how to use `stackClientApp.getUser()` to retrieve the current user. It shows both the default behavior (returning `null` if not signed in) and the `or: "redirect"` option, which redirects the user to the sign-in page if they are not authenticated.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/objects/stack-app.mdx#_snippet_5

LANGUAGE: typescript
CODE:
```
const userOrNull = await stackClientApp.getUser();
console.log(userOrNull); // null if not signed in

const user = await stackClientApp.getUser({ or: "redirect" });
console.log(user); // always defined; redirects to sign-in page if not signed in
```

----------------------------------------

TITLE: Rendering SignIn Component in Next.js
DESCRIPTION: This snippet illustrates the basic JSX usage of the <SignIn /> component, a pre-built UI element from Stack Auth designed for Next.js applications to handle user sign-in.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/components/overview.mdx#_snippet_1

LANGUAGE: JSX
CODE:
```
<SignIn />
```

----------------------------------------

TITLE: Rendering AccountSettings Component with Custom Items (TypeScript)
DESCRIPTION: This snippet demonstrates how to use the AccountSettings component from @stackframe/stack to render a full-page account settings interface. It includes an example of adding a custom section to the sidebar using the extraItems prop, specifying its title, icon, content, and subpath. This allows for extending the default account settings with application-specific sections.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/components/account-settings.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { AccountSettings } from '@stackframe/stack';

export default function MyAccountPage() {
  return (
    <AccountSettings
      fullPage={true}
      extraItems={[{
        title: 'Custom Section',
        iconName: "Settings",
        content: <CustomContent />,
        subpath: '/custom',
      }]}
    />
  );
}
```

----------------------------------------

TITLE: Rendering OAuthButtonGroup for Sign-In in React
DESCRIPTION: This snippet demonstrates how to integrate the `OAuthButtonGroup` component from `@stackframe/stack` into a React page. It configures the buttons for a 'sign-in' purpose, displaying all OAuth providers enabled in the project's dashboard. The component will not render any buttons if no OAuth providers are configured.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/components/oauth-button-group.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { OAuthButtonGroup } from '@stackframe/stack';

export default function Page() {
  return (
    <div>
      <h1>Sign In</h1>
      <OAuthButtonGroup type='sign-in' />
    </div>
  );
}
```

----------------------------------------

TITLE: Running Stack Auth Setup Wizard (Shell)
DESCRIPTION: This command executes the Stack Auth installation wizard, which automates the setup process for integrating Stack Auth into a Next.js project. It's the recommended first step for a seamless installation.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
npx @stackframe/init-stack@latest
```

----------------------------------------

TITLE: Protecting Server Components with getUser - TypeScript
DESCRIPTION: This snippet illustrates how to protect a server-side Next.js component by calling `await stackServerApp.getUser({ or: 'redirect' })`. If the user is not logged in, this call will redirect them to the sign-in page, preventing unauthorized access to the component's rendered content.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/users.mdx#_snippet_4

LANGUAGE: TypeScript
CODE:
```
import { stackServerApp } from "@/stack";

export default async function MyProtectedServerComponent() {
  await stackServerApp.getUser({ or: 'redirect' });
  return <h1>You can only see this if you are logged in</h1>
}
```

----------------------------------------

TITLE: Accessing User in Server Component - TypeScript
DESCRIPTION: This snippet illustrates how to retrieve user information in a React Server Component using `stackServerApp.getUser()`. Unlike `useUser()`, `getUser()` is not a hook and fetches the user once on page load. It can also accept the `{ or: "redirect" }` option for automatic redirection.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/users.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { stackServerApp } from "@/stack";

export default async function MyServerComponent() {
  const user = await stackServerApp.getUser();  // or: stackServerApp.getUser({ or: "redirect" })
  return <div>{user ? `Hello, ${user.displayName ?? "anon"}` : 'You are not logged in'}</div>;
}
```

----------------------------------------

TITLE: Updating and Reading Client Metadata in Stack Auth (TypeScript)
DESCRIPTION: This snippet demonstrates how to update and read clientMetadata in Stack Auth. clientMetadata is accessible and modifiable by both the client and server, suitable for non-sensitive user information like a mailing address. The first part shows updating the metadata from a server context, and the second part shows reading it from a client using useUser().
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/concepts/custom-user-data.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
await user.update({
  clientMetadata: {
    mailingAddress: "123 Main St",
  },
});

// On the client:
const user = useUser();
console.log(user.clientMetadata);
```

----------------------------------------

TITLE: Displaying User Profile (Server Component) in Next.js (TSX)
DESCRIPTION: This server-side React component demonstrates how to fetch and display user profile information using `stackServerApp.getUser()`. It renders user details (display name, email, sign-out link) if a user is logged in, or sign-in/sign-up links if not. This method is ideal for server-rendered pages where user data is needed before the client-side hydration.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/users.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
import { stackServerApp } from "@/stack";
import { UserButton } from "@stackframe/stack";

export default async function Page() {
  const user = await stackServerApp.getUser();
  return (
    <div>
      {user ? (
        <div>
          <UserButton />
          <p>Welcome, {user.displayName ?? "unnamed user"}</p>
          <p>Your e-mail: {user.primaryEmail}</p>
          <p><a href={stackServerApp.urls.signOut}>Sign Out</a></p>
        </div>
      ) : (
        <div>
          <p>You are not logged in</p>
          <p><a href={stackServerApp.urls.signIn}>Sign in</a></p>
          <p><a href={stackServerApp.urls.signUp}>Sign up</a></p>
        </div>
      )}
    </div>
  );
}
```

----------------------------------------

TITLE: Creating Stack Auth Handler Page (TSX)
DESCRIPTION: This TSX component defines the Stack Auth handler page, which automatically generates default pages for sign-in, sign-up, and password reset. It also serves as a callback URL for OAuth, integrating the `stackServerApp` for its functionality.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/setup.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export default function Handler(props: unknown) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
```

----------------------------------------

TITLE: Implementing User Onboarding Page with React and Stack Auth
DESCRIPTION: This React component renders an onboarding page where users can input their address. Upon submission, it updates the user's `clientMetadata` with the address and sets an `onboarded` flag to `true` using `user.update()`, then redirects to the home page. It uses `useUser` from `@stackframe/stack` and `useRouter` from `next/navigation`.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/concepts/user-onboarding.mdx#_snippet_0

LANGUAGE: JSX
CODE:
```
export default function OnboardingPage() {
  const user = useUser();
  const router = useRouter();
  const [address, setAddress] = useState('');


  return <>
    <input 
      type="text" 
      value={address} 
      onChange={(e) => setAddress(e.target.value)} 
    />

    <button onClick={async () => {
      await user.update({
        clientMetadata: {
          onboarded: true,
          address,
        },
      });
      router.push('/');
    }}>
      Submit
    </button>
    </>
  ;}
```

----------------------------------------

TITLE: Rendering OAuthButton Component in Next.js
DESCRIPTION: This snippet illustrates the basic JSX usage of the <OAuthButton /> component, a pre-built UI element from Stack Auth designed for Next.js applications to handle OAuth provider sign-in.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/components/overview.mdx#_snippet_5

LANGUAGE: JSX
CODE:
```
<OAuthButton />
```

----------------------------------------

TITLE: Starting Next.js Development Server (Bash)
DESCRIPTION: This snippet provides commands to start the Next.js development server using various package managers. It allows developers to run the application locally and access it via a web browser for real-time updates during development.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/examples/middleware/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Implementing Custom Credential Sign-In (Email/Password) (TSX)
DESCRIPTION: This snippet illustrates building a custom email and password sign-in form. It uses `useState` for input management and `app.signInWithCredential` to handle authentication, including basic error display and redirection upon successful sign-in, offering full control over the form's appearance and behavior.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/customization/page-examples/sign-in.mdx#_snippet_2

LANGUAGE: TSX
CODE:
```
'use client';
import { useStackApp } from "@stackframe/stack";
import { useState } from "react";

export default function CustomCredentialSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const app = useStackApp();

  const onSubmit = async () => {
    if (!password) {
      setError('Please enter your password');
      return;
    }
    // This will redirect to app.urls.afterSignIn if successful.
    // You can customize the redirect URL in the StackServerApp constructor.
    const result = await app.signInWithCredential({ email, password });
    // It's better to handle each error code separately, but for simplicity,
    // we'll just display the error message directly here.
    if (result.status === 'error') {
      setError(result.error.message);
    }
  };
  
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); } }>
      {error}
      <input type='email' placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Sign In</button>
    </form>
  );
}
```

----------------------------------------

TITLE: Configuring Stack Auth Environment Variables
DESCRIPTION: These environment variables are crucial for connecting your Next.js application to your Stack Auth project. They should be copied from the Stack Auth dashboard into your `.env.local` file to secure your project ID, publishable client key, and secret server key.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/README.md#_snippet_2

LANGUAGE: Shell
CODE:
```
NEXT_PUBLIC_STACK_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=<your-publishable-client-key>
STACK_SECRET_SERVER_KEY=<your-secret-server-key>
```

----------------------------------------

TITLE: Rendering OAuth Buttons with Stackframe in TypeScript
DESCRIPTION: This snippet demonstrates how to use the `OAuthButton` component from `@stackframe/stack` to render sign-in and sign-up buttons for different OAuth providers. It shows the component's usage with `provider` (e.g., 'google', 'github') and `type` ('sign-in' or 'sign-up') props, which dictate the button's appearance and functionality. The component automatically handles styling and the authentication flow upon click.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/components/oauth-button.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { OAuthButton } from '@stackframe/stack';

export default function Page() {
  return (
    <div>
      <h1>Sign In</h1>
      <OAuthButton provider="google" type="sign-in" />
      <OAuthButton provider="github" type="sign-up" />
    </div>
  );
}
```

----------------------------------------

TITLE: Client-Side Page Protection with `useUser`
DESCRIPTION: Provides an example of protecting a React component client-side using `useUser({ or: "redirect" })`. It explains that this method redirects unauthenticated users but does not secure sensitive information from malicious users, recommending server-side protection for true security.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/objects/stack-app.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
"use client";

function MyProtectedComponent() {
  // Note: This component is protected on the client-side.
  // It does not protect against malicious users, since
  // they can just comment out the `useUser` call in their
  // browser's developer console.
  //
  // The purpose of client-side protection is to redirect
  // unauthenticated users to the sign-in page, not to
  // hide secret information from them.
  //
  // For more information on protecting pages and how to
  // protect a page server-side or in the middleware, see
  // the Stack Auth documentation:
  // https://docs.stack-auth.com/getting-started/users#protecting-a-page

  useUser({ or: "redirect" });
  return <div>You can only see this if you are authenticated</div>;
}
```

----------------------------------------

TITLE: Updating User Attributes in Client Components - TypeScript
DESCRIPTION: This client-side component snippet shows how to update a user's attributes using the `user.update()` function provided by the `useUser` hook. When the button is clicked, it asynchronously updates the `displayName` attribute of the currently logged-in user, demonstrating a common user data management operation.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/users.mdx#_snippet_6

LANGUAGE: TypeScript
CODE:
```
'use client';
import { useUser } from "@stackframe/stack";

export default function MyClientComponent() {
  const user = useUser();
  return <button onClick={async () => await user.update({ displayName: "New Name" })}>
    Change Name
  </button>;
}
```

----------------------------------------

TITLE: Checking Team Permissions (Client) in TypeScript
DESCRIPTION: This snippet demonstrates how to check if a user has a specific permission on a team using the client-side `useUser` and `usePermission` hooks. It first retrieves the user and a specific team, then verifies if the user possesses the `$invite_members` permission before allowing further actions.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/concepts/orgs-and-teams.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const user = useUser({ or: 'redirect' });
const team = user.useTeam('some-team-id');

if (!team) {
  return <div>Team not found</div>;
}

const hasPermission = user.usePermission(team, '$invite_members');

if (!hasPermission) {
  return <div>No permission</div>;
}

// Perform corresponding action like inviting a user
```

----------------------------------------

TITLE: Installing Stack Auth CLI with default options
DESCRIPTION: This command runs the Stack Auth installation wizard, which typically opens a browser for interactive setup. It's the recommended way to initialize Stack Auth in a Next.js project.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/README.md#_snippet_0

LANGUAGE: Bash
CODE:
```
npx @stackframe/init-stack@latest
```

----------------------------------------

TITLE: Protecting Routes with Next.js Middleware - TypeScript
DESCRIPTION: This middleware snippet demonstrates how to protect routes by checking user authentication before allowing access. It uses `stackServerApp.getUser()` to retrieve user data and redirects unauthenticated users to the sign-in page. The `config.matcher` property specifies which paths this middleware should apply to, such as a `/protected` section.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/getting-started/users.mdx#_snippet_5

LANGUAGE: TypeScript
CODE:
```
export async function middleware(request: NextRequest) {
  const user = await stackServerApp.getUser();
  if (!user) {
    return NextResponse.redirect(new URL('/handler/sign-in', request.url));
  }
  return NextResponse.next();
}

export const config = {
  // You can add your own route protection logic here
  // Make sure not to protect the root URL, as it would prevent users from accessing static Next.js files or Stack's /handler path
  matcher: '/protected/:path*',
};
```

----------------------------------------

TITLE: Minting Supabase JWT with Stack Auth User ID (TypeScript)
DESCRIPTION: This server action, `getSupabaseJwt`, retrieves the authenticated user from Stack Auth. If a user exists, it mints a JSON Web Token (JWT) for Supabase, setting the `sub` (subject) claim to the Stack Auth user's ID and the `role` to 'authenticated'. The token is signed using the `SUPABASE_JWT_SECRET` environment variable and expires in 1 hour. This enables Supabase RLS to identify the user based on Stack Auth's authentication.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/others/supabase.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:
```
'use server';

import { stackServerApp } from "@/stack";
import * as jose from "jose";

export const getSupabaseJwt = async () => {
  const user = await stackServerApp.getUser();

  if (!user) {
    return null;
  }

  const token = await new jose.SignJWT({
    sub: user.id,
    role: "authenticated",
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET));

  return token;
};
```

----------------------------------------

TITLE: Updating User Details Example - TypeScript
DESCRIPTION: Demonstrates how to update a user's display name, password, and server-side metadata using the `serverUser.update` method. This operation modifies the user's profile on the server.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/sdk/types/user.mdx#_snippet_51

LANGUAGE: typescript
CODE:
```
await serverUser.update({
  displayName: "Updated Display Name",
  password: "newSecurePassword",
  serverMetadata: {
    internalNote: "Confidential information",
  },
});
```

----------------------------------------

TITLE: Initializing StackHandler in Next.js TSX
DESCRIPTION: This snippet demonstrates how to integrate the `StackHandler` component into a Next.js page. It shows how to pass the `stackServerApp` instance and `routeProps` to the handler, enabling it to manage authentication flows. The `fullPage` prop is set to true, and `componentProps` allows for passing specific props to nested authentication components like SignIn and SignUp.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/components/stack-handler.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { StackHandler } from '@stackframe/stack';
import { stackServerApp } from "@/stack";

export default function Handler(props: { params: any, searchParams: any }) {
  return (
    <StackHandler
      app={stackServerApp}
      routeProps={props}
      fullPage={true}
      componentProps={{
        SignIn: { /* SignIn component props */ },
        SignUp: { /* SignUp component props */ },
        // ... other component props
      }}
    />
  );
}
```

----------------------------------------

TITLE: Retrieving and Using Google OAuth Access Token for API Calls (React/Next.js)
DESCRIPTION: This snippet illustrates how to retrieve the OAuth access token using `account.useAccessToken()` after a user has connected their account with Google and granted necessary scopes. It then demonstrates using this token to make an authenticated API request to the Google Drive API, fetching file listings.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/concepts/oauth.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
'use client';

import { useEffect, useState } from 'react';
import { useUser } from "@stackframe/stack";

export default function Page() {
  const user = useUser({ or: 'redirect' });
  const account = user.useConnectedAccount('google', { or: 'redirect', scopes: ['https://www.googleapis.com/auth/drive.readonly'] });
  const { accessToken } = account.useAccessToken();
  const [response, setResponse] = useState<any>();

  useEffect(() => {
    fetch('https://www.googleapis.com/drive/v3/files', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((err) => console.error(err));
  }, [accessToken]);

  return <div>{response ? JSON.stringify(response) : 'Loading...'}</div>;
}
```

----------------------------------------

TITLE: Checking User Permission on Server with Stack
DESCRIPTION: This server-side React component illustrates how to securely check if a user possesses a specific permission within a team using `stackServerApp.getUser` and `user.getPermission`. Server-side checks are recommended for enforcing business logic as they provide a secure and reliable method for permission validation.
SOURCE: https://github.com/stack-auth/stack-auth/blob/dev/docs/fern/docs/pages-template/concepts/permissions.mdx#_snippet_1

LANGUAGE: TSX
CODE:
```
import { stackServerApp } from "@/stack";

export default async function CheckUserPermission() {
  const user = await stackServerApp.getUser({ or: 'redirect' });
  const team = await stackServerApp.getTeam('some-team-id');
  const permission = await user.getPermission(team, 'read');

  // This is a server-side check, so it's secure.
  return (
    <div>
      {permission ? 'You have the read permission' : 'You shall not pass'}
    </div>
  );
}
```