
import { Admin, CustomRoutes, Resource, ListGuesser, EditGuesser, ShowGuesser, fetchUtils } from 'react-admin';
import { Route } from 'react-router-dom';
//import { dataProvider } from './dataProvider';
import { UserList } from './users';
import chatDataProvider from './chat-data-provider'

// Chat
import ChatPage from './chat/ChatPage';

// [Sending Credentials To The API](https://marmelab.com/react-admin/Authentication.html)

import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { access_token } = JSON.parse(localStorage.getItem('access_token') || '{}');
    options.headers.set('Authorization', `Bearer ${access_token}`);
    return fetchUtils.fetchJson(url, options);
}

const apiRootUrl = 'https://packdir.com';
const dataProvider = simpleRestProvider(apiRootUrl, httpClient);
//const dataProvider = chatDataProvider(apiRootUrl, httpClient);

import { authProvider } from './authProvider';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from '@haxqer/ra-language-chinese';
//import englishMessages from 'ra-language-english';
import englishMessages from '@packdir/language-en';
console.log('chineseMessages', chineseMessages)
console.log('englishMessages', englishMessages)
const i18nProvider = polyglotI18nProvider(() => englishMessages, 'en');

import { Analytics } from '@vercel/analytics/react';

//import DashLoginPage from './loginPage';
import { Login } from './auth/Login';
import { Register } from './auth/Register';

export const App = () => (
    <Admin
        i18nProvider={i18nProvider}
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={Login}
        //loginPage={DashLoginPage}
	>

        <CustomRoutes noLayout>
            <Route path="/register" element={<Register />} />
        </CustomRoutes>

        <CustomRoutes>
            <Route path="/chat" element={<ChatPage />} />
        </CustomRoutes>

        <Resource name="rausers" list={UserList} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="sessions" list={UserList} edit={EditGuesser} show={ShowGuesser} />
        
        <Analytics />
    </Admin>

);
