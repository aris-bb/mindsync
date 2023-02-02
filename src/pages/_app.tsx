import '../styles/global.scss';
import type { Session } from 'next-auth';
import { getSession, SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/app';
import { trpc } from 'utils/trpc';
import Layout from 'components/layout';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
}) => {
  return (
    <Layout>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
};

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    session: await getSession(ctx),
  };
};

export default trpc.withTRPC(MyApp);
