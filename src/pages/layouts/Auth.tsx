import React, { Suspense } from 'react';

interface AuthType {
  children: React.ReactNode;
}

function Auth({ children }: AuthType) {
  const loading = () => <div>로딩중..</div>;
  return <Suspense fallback={loading()}>{children}</Suspense>;
}
export default Auth;
