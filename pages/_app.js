import { withRouter } from 'next/router';
import App, { Container } from 'next/app';
import { ConditionalWrap } from 'shared-components';
import Layout from 'components/Layout';
import WrongLayout from 'components/wrong/Layout';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const {
      Component, pageProps, router: { pathname },
    } = this.props;
    return (
      <Container>
        <ConditionalWrap
          condition={pathname.indexOf('/wrong') === 0}
          wrap={{
            wrapForTrue: children => (
              <WrongLayout>{children}</WrongLayout>
            ),
            wrapForFalse: children => (
              <Layout>{children}</Layout>
            ),
          }}
        >
          <Component {...pageProps} />
        </ConditionalWrap>
      </Container>
    );
  }
}

export default withRouter(MyApp);
