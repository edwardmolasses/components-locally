import React from 'react';
import makeAsyncScriptLoader from "react-async-script";

export const Locally = props => {
  const LclyScriptEl = props =>  {
    return <script id="lcly-script-0" src={props.src} async></script>;
  }
console.log(` %c props.upc: ${props.upc} `, 'background: lightcoral; color: white');
  // LOCALLY.COM WIDGET EMBED CODE 
  const lcly_config_0 = {
    "company_name": "Arc'teryx",
    "button_id": "HTML",
    "company_id": "31",
    "css": "4",
    "always_hide_button": "1",
    // "upc": "686487493797",
    "upc": props.upc,
    "n_related_styles": "3",
    "show_location_switcher": "1",
    "show_location_prompt": "1",
    "lang": props.countryCode,
    "show_dealers": "1",
    "n_dealers": "3",
    "category": "arc",
    "show_only_upc_stocking_dealers": "1ç",
    "include_dealer_data": "1",
    "link_opens_modal": "1"
  };
  const lcly_query_0 = Object.keys(lcly_config_0)
    .reduce(function(a,k){a.push(encodeURIComponent(k) 
      + '=' 
      + encodeURIComponent(lcly_config_0[k]));return a},[]).join('&');
  const lcly_endpoint_0 = 'https://Arcteryx.locally.com/stores/map.js?' + lcly_query_0;
  const AsyncScriptComponent = makeAsyncScriptLoader(lcly_endpoint_0, { removeOnUnmount: true })(LclyScriptEl);

  return props.upc && (
    <React.Fragment>
      <div id="lcly-button-0">
        <a id="lcly-link-0" href="https://brands.locally.com" target="_blank"></a>
      </div>
      <AsyncScriptComponent src={lcly_endpoint_0} />
      <style dangerouslySetInnerHTML={{__html: `
        #locally-root {
          margin-top: 30px;
        }
        #locally-root > #lcly-button-0 {
          width: 380px;
          margin: 0 auto;
        }
        .product__need-to-know__purchase-info { 
          height: auto !important;
        }
        .lcly-dealer-distance,
        .lcly-icon-marker {
          display: none;
        }
        .lcly-location-prompt-link {
          text-transform: lowercase;
          text-decoration: underline !important;
        }
          .lcly-location-prompt a {
            color: #000;
          }
          .lcly-location-prompt-link:before {
            content: "\\0028 ";
          }
          .lcly-location-prompt-link:after {
            content: "\\0029 ";
          }
          .lcly-location-prompt-label {
            text-transform: uppercase;
            color: #000;
            // font: normal normal 900 15px/17px Avenir LT Pro;
            font-size: 15px;
          }
        .lcly-dealers-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .lcly-dealer {
          width: 380px;
          padding: 0;
          border-radius: 0;
          outline: 1px solid #ccc;
          background: #fff;
          padding: 10px 0;
        }
        .lcly-dealer:hover {
            background: none;
            outline: 1px solid #000;
        }
          .lcly-dealer-name {
            position: relative;
            height: 30px;
            width: 100%;
            padding-left: 30px;
            max-width: 300px;
            margin: 0 auto;
            text-transform: uppercase;
            font-weight: normal;
            font-size: 15px;
            text-align: center;
            line-height: 1.5;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
            .lcly-dealer-name:before {
              content: url('https://s3-us-west-2.amazonaws.com/images.arcteryx.com/virtual-advisor-callout/ArcPin_Icon.png');
              position: absolute;
              margin-left: -30px;
            }
          .lcly-location-features {
            display: flex;
            flex-direction: column;
          }
          .lcly-location-prompt-label {
            font-weight: bold;
          }
            .lcly-location-feature-primary,
            .lcly-location-feature-secondary,
            .lcly-location-feature-tertiary {
              font-size: 12px !important;
              text-transform: lowercase;
              color: #000;
            }
            .lcly-location-feature-primary:before,
            .lcly-location-feature-secondary:before,
            .lcly-location-feature-tertiary:before {
              content: "\\2713 ";
              // content: " ";
              color: green;
            }
            .lcly-location-feature-primary::first-letter,
            .lcly-location-feature-secondary::first-letter,
            .lcly-location-feature-tertiary::first-letter {
              text-transform: uppercase;
            }
            .lcly-icon-check-mark {
              display: none;
            }
            .lcly-toggleable-0::first-letter {
              text-transform: uppercase;
            }
        .lcly-primary-trigger { 
          align-self: flex-end;
        }
        .lcly-primary-trigger {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 380px !important;
        }
        #lcly-link-0.lcly-anchor {
          padding-top: 7px;
        }
      `}} />
    </React.Fragment>
  )
}
