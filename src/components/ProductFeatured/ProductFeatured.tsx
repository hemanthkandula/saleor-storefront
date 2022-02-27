// import divider from "../../../../images/divider.svg";
import { Button, Grid, makeStyles, Theme, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import classNames from "classnames";
import React from "react";

import { maybe } from "@temp/core/utils";
import NewGalleryCarousel from "@temp/views/Product/NewGalleryCarousel";

import featureimage from "../../images/featured_image.png";
import { TypedFeaturedProductsQuery } from "./queries";
import * as S from "./styles";

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
}


const MainButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    fontFamily: "Helvetica Neue",
    borderRadius: 0,
    textTransform: "none",
    padding: "1rem 4rem",
    fontSize: "small",
    marginTop: "5rem",
  },
}))(Button);

export const ProductFeatured: React.FC<ProductsFeaturedProps> = ({ title }) => {
  return (
    <TypedFeaturedProductsQuery displayError={false}>
      {({ data }) => {
        const products = maybe(
          () => data.shop.homepageCollection.products.edges,
          []
        );

        if (products.length) {
          return (
            <div className="product-featured">
              <Grid
                className="product-featured__product__main_element"
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={4} lg={4}>
                  {/* <div className="product-featured__product__info"> */}
                  {/*  <div className={classNames("product-featured__product__info--fixed")}> */}

                  {/*  </div> */}
                  {/* </div> */}
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <div id="exampleContent">
                    <img
                      className="product-featured__image"
                      src={products[0].node.thumbnail.url}
                      alt=""
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <div className="product-featured__product__attr">
                    <div
                      className={classNames(
                        "product-featured__product__attr--fixed"
                      )}
                    >
                      <div>
                        <p className="product-featured__product__attrlist">
                          <S.AttributeName> Product Name </S.AttributeName>{" "}
                        </p>
                        <p>
                          <S.AttributeValue>Descriptioon</S.AttributeValue>
                        </p>

                        <MainButton
                          variant="outlined"
                          size="large"
                          color="inherit"
                          className="home-page__hero__center_button"
                        >
                          Our Philosophy
                        </MainButton>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          );
        }
        return null;
      }}
    </TypedFeaturedProductsQuery>
  );
};
