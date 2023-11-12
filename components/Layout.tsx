import { Footer } from ".";
import { Nav } from ".";
import React from "react";
import AuthWrapper from "./AuthWrapper";
// import ReactDOM from "react-dom";
import { ProductsProvider } from "../context/products_context";
import { FilterProvider } from "../context/filter_context";
import { CartProvider } from "../context/cart_context";
import { UserProvider } from "../context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Auth0Provider
        domain="dev-74yaitxhvcrqnokk.us.auth0.com"
        clientId="foBK6yAWSNoFZKNvxtmG6Ns8jcD14E45"
        redirectUri={window.location.origin}
        cacheLocation="localstorage">
        <UserProvider>
          <ProductsProvider>
            <FilterProvider>
              <CartProvider>
                <AuthWrapper>
                  <Nav />
                  {children}
                  <Footer />
                </AuthWrapper>
              </CartProvider>
            </FilterProvider>
          </ProductsProvider>
        </UserProvider>
      </Auth0Provider>
    </>
  );
}
