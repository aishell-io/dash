
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
//import { dataProvider } from './dataProvider';
import { UserList } from './users';
import chatDataProvider from './chat-data-provider'

const dataProvider = chatDataProvider('https://packdir.com')

import { authProvider } from './authProvider';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from '@haxqer/ra-language-chinese';
const i18nProvider = polyglotI18nProvider(() => chineseMessages, 'zh');

export const App = () => (
    <Admin
        i18nProvider={i18nProvider}
        authProvider={authProvider}
        dataProvider={dataProvider}
	>

        <Resource name="rausers" list={UserList} edit={EditGuesser} show={ShowGuesser} />
        
    </Admin>
);

    
