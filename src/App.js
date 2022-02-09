import React from "react";
import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import Layout from "./layout/Layout";
import theme from "./layout/Theme";
import Search from "./components/search/Search";
import Results from "./components/results/Results";
import Details from "./components/details/Details";
import NotFound from "./components/notFound/NotFound";

function App() {
    return <ThemeProvider theme={theme}>
        <Layout>
            <Routes>
                <Route path='/' index element={<Search/>}/>
                <Route path='/:pair' element={<Results/>}/>
                <Route path='/:pair/details' element={<Details/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Layout>
    </ThemeProvider>
}

export default App;
