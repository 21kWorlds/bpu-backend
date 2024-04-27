// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: m9sTNijpsuGxLr6622n67c
// Component: iB4rR5cgbkRc
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicPageGuard as PlasmicPageGuard__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import CateringDisplay from "../../CateringDisplay"; // plasmic-import: HNh49Ai2o5aV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../app_starter/plasmic.module.css"; // plasmic-import: m9sTNijpsuGxLr6622n67c/projectcss
import sty from "./PlasmicCateringIntake.module.css"; // plasmic-import: iB4rR5cgbkRc/css

createPlasmicElementProxy;

export const PlasmicCateringIntake__VariantProps = new Array();

export const PlasmicCateringIntake__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCateringIntake__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  let [$queries, setDollarQueries] = React.useState({});
  const new$Queries = {
    caterers: usePlasmicDataOp(() => {
      return {
        sourceId: "4ACnaEgTThrwyGmam4pjE6",
        opId: "2152b6d2-c7e4-4ea2-9dc5-45fc8b74b742",
        userArgs: {},
        cacheKey: `plasmic.$.2152b6d2-c7e4-4ea2-9dc5-45fc8b74b742.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    snacks: usePlasmicDataOp(() => {
      return {
        sourceId: "4ACnaEgTThrwyGmam4pjE6",
        opId: "fa62a459-23d2-4784-8b0e-555c35a472ef",
        userArgs: {},
        cacheKey: `plasmic.$.fa62a459-23d2-4784-8b0e-555c35a472ef.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <CateringDisplay
            data-plasmic-name={"cateringDisplay"}
            data-plasmic-override={overrides.cateringDisplay}
            caterers={(() => {
              try {
                return $queries.caterers;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            className={classNames("__wab_instance", sty.cateringDisplay)}
            inventory={(() => {
              try {
                return $queries.snacks;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "cateringDisplay"],
  cateringDisplay: ["cateringDisplay"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCateringIntake__ArgProps,
          internalVariantPropNames: PlasmicCateringIntake__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCateringIntake__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCateringIntake";
  } else {
    func.displayName = `PlasmicCateringIntake.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"m9sTNijpsuGxLr6622n67c"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "m9sTNijpsuGxLr6622n67c"
    });
    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicCateringIntake = Object.assign(
  // Top-level PlasmicCateringIntake renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    cateringDisplay: makeNodeComponent("cateringDisplay"),
    // Metadata about props expected for PlasmicCateringIntake
    internalVariantProps: PlasmicCateringIntake__VariantProps,
    internalArgProps: PlasmicCateringIntake__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCateringIntake;
/* prettier-ignore-end */