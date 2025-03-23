import type { AppProps } from 'next/app';
import { NextRouter } from 'next/router';
import '../styles/globals.css';
import AuthLayout from '@/components/Layouts/AuthLayout';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();
//
// shadcn component
// https://ui.shadcn.com/docs/components/accordion
// React query
// https://tanstack.com/query/v5/docs/framework/react/overview
// https://dev.to/sanditzz/how-to-use-shadcn-ui-with-a-react-project-gfh

export default function App({
  Component,
  pageProps,
  router
}: AppProps & { router: NextRouter }) {
  const isAppRoute = router.pathname.startsWith('/app');

  return (
    <QueryClientProvider client={queryClient}>
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </QueryClientProvider>
  );
}
