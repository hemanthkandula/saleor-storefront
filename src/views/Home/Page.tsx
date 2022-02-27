import { Button, Theme, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import classNames from "classnames";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
// import homevideo from "../../videos/HomeVideo.mp4";
import { Link } from "react-router-dom";

import { getProductPrice } from "@components/organisms";
import { ProductFeatured } from "@temp/components/ProductFeatured";

import { Loader, ProductsFeatured } from "../../components";
import { structuredData } from "../../core/SEO/Homepage/structuredData";
import { generateCategoryUrl } from "../../core/utils";
import noPhotoImg from "../../images/no-photo.svg";
import homeVideo from "../../videos/homevideo.mp4";
import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_homepageCollection_backgroundImage,
} from "./gqlTypes/ProductsList";

import "./scss/index.scss";

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
const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ loading, categories, backgroundImage, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  const intl = useIntl();

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>

      <div
        className="home-page__hero"
        // style={
        //   backgroundImage
        //     ? { backgroundImage: `url(${backgroundImage.url})` }
        //     : null
        // }
      >
        {/* <ReactPlayer */}
        {/*    className='react-player fixed-bottom' */}
        {/*    url="/videos/HomeVideo.mp4" */}
        {/*    width='100%' */}
        {/*    height='100%' */}
        {/*    controls = {true} */}
        {/*  /> */}
        <video autoPlay loop muted id="video" className="home-page-video">
          <source
            // src={`${process.env.PUBLIC_URL}/homevideo.mp4`}
            src={homeVideo}
            type="video/mp4"
          />
        </video>
        <div className="home-page__hero-text">
          <p>
            <span className="home-page__hero-text_reg">A </span>
            <span className="home-page__hero-text_italic">Poetry </span>
            <span className="home-page__hero-text_reg">of </span>
          </p>
          <p>
            <span className="home-page__hero-text_reg">scent </span>
          </p>
        </div>
        <div className="bottom_aligner" />

        <div className="home-page__hero__center ">
          <div className="home-page__hero-text">
            <p className="home-page__hero__center_reg">
              Perfume is an art form.
            </p>
            <p className="home-page__hero__center_reg">
              It’s only when we learn the story behind it,
            </p>
            <p className="home-page__hero__center_reg">
              that our emotions truly link.
            </p>
          </div>
          <MainButton
            variant="outlined"
            size="large"
            color="inherit"
            className="home-page__hero__center_button"
          >
            Our Philosophy
          </MainButton>
        </div>

        {/* <div className="home-page__hero-text"> */}
        {/*  <h1>A Poetry of</h1> */}

        {/*  <div> */}
        {/*    <span className="home-page__hero__title"> */}
        {/*      <h1>A Poetry of</h1> */}
        {/*    </span> */}
        {/*  </div> */}
        {/*  <div> */}
        {/*    <span className="home-page__hero__title"> */}
        {/*      <h1>scent</h1> */}
        {/*    </span> */}
        {/*  </div> */}
        {/* </div> */}
        {/* <div className="home-page__hero-action"> */}
        {/*  {loading && !categories ? ( */}
        {/*    <Loader /> */}
        {/*  ) : ( */}
        {/*    categoriesExist() && ( */}
        {/*      <Link */}
        {/*        to={generateCategoryUrl( */}
        {/*          categories.edges[0].node.id, */}
        {/*          categories.edges[0].node.name */}
        {/*        )} */}
        {/*      > */}
        {/*        <Button testingContext="homepageHeroActionButton"> */}
        {/*          <FormattedMessage defaultMessage="Shop sale" /> */}
        {/*        </Button> */}
        {/*      </Link> */}
        {/*    ) */}
        {/*  )} */}
        {/* </div> */}
      </div>
      {/*<ProductsFeatured*/}
      {/*  title={intl.formatMessage({ defaultMessage: "Featured" })}*/}
      {/*/>*/}
      <ProductFeatured
        title={intl.formatMessage({ defaultMessage: "Featured" })}
      />

      {/* {categoriesExist() && ( */}
      {/*  <div className="home-page__categories"> */}
      {/*    <div className="container"> */}
      {/*      <h3> */}
      {/*        <FormattedMessage defaultMessage="Shop by category" /> */}
      {/*      </h3> */}
      {/*      <div className="home-page__categories__list"> */}
      {/*        {categories.edges.map(({ node: category }) => ( */}
      {/*          <div key={category.id}> */}
      {/*            <Link */}
      {/*              to={generateCategoryUrl(category.id, category.name)} */}
      {/*              key={category.id} */}
      {/*            > */}
      {/*              <div */}
      {/*                className={classNames( */}
      {/*                  "home-page__categories__list__image", */}
      {/*                  { */}
      {/*                    "home-page__categories__list__image--no-photo": !category.backgroundImage, */}
      {/*                  } */}
      {/*                )} */}
      {/*                style={{ */}
      {/*                  backgroundImage: `url(${ */}
      {/*                    category.backgroundImage */}
      {/*                      ? category.backgroundImage.url */}
      {/*                      : noPhotoImg */}
      {/*                  })`, */}
      {/*                }} */}
      {/*              /> */}
      {/*              <h3>{category.name}</h3> */}
      {/*            </Link> */}
      {/*          </div> */}
      {/*        ))} */}
      {/*      </div> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* )} */}
    </>
  );
};

export default Page;
