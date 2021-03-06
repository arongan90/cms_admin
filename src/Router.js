import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from "./pages/login";
import Main from "./pages/main";
import Admin from "./pages/admin";
import ICO from "./pages/ico";
import IcoDetail from "./pages/icoDetail";
import IcoUpdate from "./pages/icoUpdate";
import CoinInfo from "./pages/cryptocurrency/CoinInfo";
import CoinInfoDetail from "./pages/cryptocurrency/CoinInfoDetail";
import CoinInfoUpdate from "./pages/cryptocurrency/CoinInfoUpdate";
import Category from "./pages/cryptocurrency/Category";
import CategoryDetail from "./pages/cryptocurrency/CategoryDetail";
import Tag from "./pages/cryptocurrency/Tag";
import Nft from "./pages/cryptocurrency/NFTCollection";
import NftDetail from "./pages/cryptocurrency/NFTCollectionDetail";
import RelatedNews from "./pages/cryptocurrency/RelatedNews";
import RelatedNewsDetail from "./pages/cryptocurrency/RelatedNewsDetail";
import Trade from "./pages/trade";
import TradeDetail from "./pages/tradeDetail";
import CryptocurrencyAPI from "./pages/goods/CryptocurrencyAPI";
import CryptocurrencyAPIUpdate from "./pages/goods/CryptocurrencyAPIUpdate";
import Calculation from "./pages/goods/Calculation";
import RecentNews from "./pages/serviceCenter/RecentNews";
import RecentNewsDetail from "./pages/serviceCenter/RecentNewsDetail";
import Faq from "./pages/serviceCenter/Faq";
import FaqUpdate from "./pages/serviceCenter/FaqUpdate";
import Service from "./pages/serviceCenter/Service";
import Term from "./pages/serviceCenter/Term";
import Privacy from "./pages/serviceCenter/Privacy";
import EscapeClause from "./pages/serviceCenter/EscapeClause";
import Cookie from "./pages/serviceCenter/Cookie";
import Qna from "./pages/InquiryReport/Qna";
import QnaDetail from "./pages/InquiryReport/QnaDetail";
import ErrorReport from "./pages/InquiryReport/ErrorReport";
import IcoSubmit from "./pages/InquiryReport/IcoSubmit";
import IcoSubmitDetail from "./pages/InquiryReport/IcoSubmitDetail";
import Language from "./pages/setting/Language";
import Currency from "./pages/setting/Currency";
import PriceNotice from "./pages/setting/PriceNotice";
import NewsLetter from "./pages/mailing/NewsLetter";
import NewsLetterDetail from "./pages/mailing/NewsLetterDetail";
import Subscriber from "./pages/mailing/Subscriber";
import Mailing from "./pages/mailing/Mail";
import Member from "./pages/member";
import MemberUpdate from "./pages/memberUpdate";
import MemberDetail from "./pages/memberDetail";

const LoggedOutRoutes = () => (
    <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/login" component={Login}/>
    </Switch>
);

const LoggedInRoutes = () => (
    <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/admin" component={Admin}/>
        <Route path="/member" component={Member}/>
        <Route path="/memberUpdate/:memberId" component={MemberUpdate}/>
        <Route path="/memberDetail/:memberId" component={MemberDetail}/>
        <Route path="/ico" component={ICO}/>
        <Route path="/icoDetail/:icoId" component={IcoDetail}/>
        <Route path="/icoUpdate/:icoId" component={IcoUpdate}/>
        <Route path="/coinInfo" component={CoinInfo}/>
        <Route path="/coinInfoDetail/:coinId" component={CoinInfoDetail}/>
        <Route path="/coinUpdate/:coinId" component={CoinInfoUpdate}/>
        <Route path="/category" component={Category}/>
        <Route path="/categoryDetail/:categoryId" component={CategoryDetail}/>
        <Route path="/tag" component={Tag}/>
        <Route path="/nft" component={Nft}/>
        <Route path="/nftDetail/:nftId" component={NftDetail}/>
        <Route path="/relatedNews" component={RelatedNews}/>
        <Route path="/relatedNewsDetail/:newsId" component={RelatedNewsDetail}/>
        <Route path="/trade" component={Trade}/>
        <Route path="/tradeDetail/:tradeId" component={TradeDetail}/>
        <Route path="/api" component={CryptocurrencyAPI}/>
        <Route path="/apiUpdate" component={CryptocurrencyAPIUpdate}/>
        <Route path="/calculation" component={Calculation}/>
        <Route path="/recentNews" component={RecentNews}/>
        <Route path="/recentNewsDetail/:newsId" component={RecentNewsDetail}/>
        <Route path="/service" component={Service}/>
        <Route path="/faq" component={Faq} />
        <Route path="/faqUpdate/:faqId" component={FaqUpdate} />
        <Route path="/term" component={Term}/>
        <Route path="/privacy" component={Privacy}/>
        <Route path="/escapeClause" component={EscapeClause}/>
        <Route path="/cookie" component={Cookie}/>
        <Route path="/qna" component={Qna}/>
        <Route path="/qnaDetail/:qnaId" component={QnaDetail}/>
        <Route path="/errorReport" component={ErrorReport}/>
        <Route path="/icoSubmit" component={IcoSubmit}/>
        <Route path="/icoSubmitDetail/:icoId" component={IcoSubmitDetail}/>
        <Route path="/language" component={Language}/>
        <Route path="/currency" component={Currency}/>
        <Route path="/priceNotice" component={PriceNotice}/>
        <Route path="/newsLetter" component={NewsLetter}/>
        <Route path="/newsLetterDetail/:newsLetterId" component={NewsLetterDetail}/>
        <Route path="/subscriber" component={Subscriber}/>
        <Route path="/mailing" component={Mailing}/>
    </Switch>
);


const Router = ({isLoggedIn}) => {
    return (
        <>
            {isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}
        </>
    )
}

export default Router;