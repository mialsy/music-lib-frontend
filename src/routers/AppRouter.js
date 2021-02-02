import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../App.less";
import { Layout } from 'antd';
import TopBar from "../components/TopBar";
import MainContent from "../components/MainContent";
import AllSongContent from "../components/AllSongContent";
import RankingContent from "../components/RankingContent";
import FavoriteConent from "../components/FavoriteContent";
import NotFound from "../components/NotFound";
import SearchContent from "../components/SearchContent";
import LoginContent from "../components/LoginContent";
import RegisterContent from "../components/RegisterContent";

const { Footer } = Layout;

const AppRouter = () => (
  
        <BrowserRouter>
          <div>
          <Layout>
            <TopBar />
                <Layout>
                  <Switch>
                    <Route path="/" component={MainContent} exact={true} />
                    <Route path="/allsongs" component={AllSongContent} />
                    <Route path="/ranking" component={RankingContent} />
                    <Route path="/favorite" component={FavoriteConent} />
                    <Route path="/search/:input" component={SearchContent} />
                    <Route path="/login" component={LoginContent} />
                    <Route path="/register" component={RegisterContent} />
                    <Route component={NotFound} />
                    {/* <Route path="/create" component={AddExpensePage} />
                    <Route path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} /> */}
                  </Switch>
                </Layout>
              <Footer style={{ textAlign: 'center' }}>Music Library Created by CW</Footer>
            </Layout>
          </div>
        </BrowserRouter>
);

export default AppRouter;
