import App, { AppComponentProps, Container } from 'next/app';
import * as React from 'react';

export default class RootApp extends App<AppComponentProps> {
    static async getInitialProps({ Component, router, ctx }: any) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        };

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}