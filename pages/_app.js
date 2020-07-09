import App from 'next/app';
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store';
import { createWrapper } from 'next-redux-wrapper'
import { I18nextProvider } from "react-i18next";
import i18n from "../I18n";
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return(
            <I18nextProvider i18n={i18n}>
                <Provider store={store}>
                    <Component {...pageProps}></Component>
                </Provider>
            </I18nextProvider>
        )
    }
}

const makestore = () => store;
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(MyApp)