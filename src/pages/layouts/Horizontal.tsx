import React, { Suspense } from 'react';

interface HorizontalType {
  children: React.ReactNode;
}

function Horizontal({ children }: HorizontalType) {
  const loading = () => <div>로딩중..</div>;
  return <Suspense fallback={loading()}>{children}</Suspense>;
}
export default Horizontal;
