import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./pages/login";
import Main from "./pages/main";
import Admin from "./pages/admin";
import ICO from "./pages/icoInfo";
import CoinInfo from "./pages/cryptocurrency/CoinInfo";
import Category from "./pages/cryptocurrency/Category";
import Tag from "./pages/cryptocurrency/Tag";
import Nft from "./pages/cryptocurrency/NFTCollection";
import RelatedNews from "./pages/cryptocurrency/RelatedNews";
import Trade from "./pages/trade";
import CryptocurrencyAPI from "./pages/goods/CryptocurrencyAPI";
import Calculation from "./pages/goods/Calculation";
import RecentNews from "./pages/serviceCenter/RecentNews";
import Service from "./pages/serviceCenter/Service";
import Term from "./pages/serviceCenter/Term";
import Privacy from "./pages/serviceCenter/Privacy";
import EscapeClause from "./pages/serviceCenter/EscapeClause";
import Cookie from "./pages/serviceCenter/Cookie";
import Qna from "./pages/InquiryReport/Qna";
import ErrorReport from "./pages/InquiryReport/ErrorReport";
import IcoSubmit from "./pages/InquiryReport/IcoSubmit";
import Language from "./pages/setting/Language/LanguageContainer";
import Currency from "./pages/setting/Currency/CurrencyContainer";
import PriceNotice from "./pages/setting/PriceNotice/PriceNoticeContainer";
import NewsLetter from "./pages/mailing/NewsLetter/NewsLetterContainer";
import Subscriber from "./pages/mailing/Subscriber/SubscriberContainer";
import Mailing from "./pages/mailing/Mail";

const LoggedOutRoutes = () => (
    <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
    </Switch>
)

const LoggedInRoutes = () => (
    <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/admin" component={Admin} />
        <Route path="/ico" component={ICO} />
        <Route path="/coinInfo" component={CoinInfo} />
        <Route path="/category" component={Category} />
        <Route path="/tag" component={Tag} />
        <Route path="/nft" component={Nft} />
        <Route path="/relatedNews" component={RelatedNews} />
        <Route path="/trade" component={Trade} />
        <Route path="/api" component={CryptocurrencyAPI} />
        <Route path="/calculation" component={Calculation} />
        <Route path="/recentNews" component={RecentNews} />
        <Route path="/service" component={Service} />
        <Route path="/term" component={Term} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/escapeClause" component={EscapeClause} />
        <Route path="/cookie" component={Cookie} />
        <Route path="/qna" component={Qna} />
        <Route path="/errorReport" component={ErrorReport} />
        <Route path="/icoSubmit" component={IcoSubmit} />
        <Route path="/language" component={Language} />
        <Route path="/currency" component={Currency} />
        <Route path="/priceNotice" component={PriceNotice} />
        <Route path="/newsLetter" component={NewsLetter} />
        <Route path="/subscriber" component={Subscriber} />
        <Route path="/mailing" component={Mailing} />
    </Switch>
)

const Router = ({ isLoggedIn }) => {
    return (
        <>
            {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
        </>
    )
}

export default Router;