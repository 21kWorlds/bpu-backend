// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: m9sTNijpsuGxLr6622n67c
// Component: T0kg29-yPouZ
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
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import PageLayout from "../../PageLayout"; // plasmic-import: x2bZy_YU1m2F/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { RichList } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-list";
import NewRows2 from "../../NewRows2"; // plasmic-import: NP6K4NtaonuD/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: m9sTNijpsuGxLr6622n67c/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: T0kg29-yPouZ/css

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props) {
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
    bookings: usePlasmicDataOp(() => {
      return {
        sourceId: "4ACnaEgTThrwyGmam4pjE6",
        opId: "bf6197d5-f3e5-4fee-8b09-d30f0d9fb940",
        userArgs: {},
        cacheKey: `plasmic.$.bf6197d5-f3e5-4fee-8b09-d30f0d9fb940.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    contacts: usePlasmicDataOp(() => {
      return {
        sourceId: "4ACnaEgTThrwyGmam4pjE6",
        opId: "de66d1ae-38be-436d-b8cd-46441104c968",
        userArgs: {},
        cacheKey: `plasmic.$.de66d1ae-38be-436d-b8cd-46441104c968.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    inventory: usePlasmicDataOp(() => {
      return {
        sourceId: "4ACnaEgTThrwyGmam4pjE6",
        opId: "0ec4d106-bd31-43a7-9517-3aa9569d4209",
        userArgs: {},
        cacheKey: `plasmic.$.0ec4d106-bd31-43a7-9517-3aa9569d4209.$.`,
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
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <AntdButton
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    href={`/bookings-3/${""}`}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mgzgp
                      )}
                    >
                      {"Go to Catering Info"}
                    </div>
                  </AntdButton>
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Bookings"}
                  </h1>
                  <RichList
                    bordered={true}
                    className={classNames("__wab_instance", sty.dataList__hJ0Q)}
                    content={(() => {
                      const __composite = [
                        { key: "contactID", fieldId: null, role: "content" }
                      ];

                      __composite["0"]["fieldId"] = "description";
                      return __composite;
                    })()}
                    data={(() => {
                      try {
                        return $queries.bookings;
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
                    hideSearch={true}
                    linkTo={currentItem => {
                      return `/bookings/${(() => {
                        try {
                          return currentItem.id;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}`;
                    }}
                    onRowClick={async (rowKey, row, event) => {
                      const $steps = {};
                    }}
                    pagination={false}
                    title={(() => {
                      const __composite = [{ role: "title", fieldId: null }];
                      __composite["0"]["fieldId"] = "title";
                      return __composite;
                    })()}
                    type={"list"}
                  />

                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Organizations"}
                  </h2>
                  <RichList
                    bordered={true}
                    className={classNames(
                      "__wab_instance",
                      sty.dataList___7RRny
                    )}
                    content={[]}
                    data={(() => {
                      try {
                        return $queries.contacts.data.filter(
                          item => item.isOrg
                        );
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return (() => {
                            try {
                              return $queries.contacts;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })();
                        }
                        throw e;
                      }
                    })()}
                    hideSearch={true}
                    onRowClick={async (rowKey, row, event) => {
                      const $steps = {};
                    }}
                    pagination={false}
                  />

                  <h3
                    data-plasmic-name={"h3"}
                    data-plasmic-override={overrides.h3}
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3
                    )}
                  >
                    {"Contacts"}
                  </h3>
                  <RichList
                    bordered={true}
                    className={classNames(
                      "__wab_instance",
                      sty.dataList__w3G5X
                    )}
                    content={[]}
                    data={(() => {
                      try {
                        return $queries.contacts.data.filter(
                          item => !item.isOrg
                        );
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
                    hideSearch={true}
                    onRowClick={async (rowKey, row, event) => {
                      const $steps = {};
                    }}
                    pagination={false}
                  />

                  <h4
                    data-plasmic-name={"h4"}
                    data-plasmic-override={overrides.h4}
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4
                    )}
                  >
                    {"Inventory"}
                  </h4>
                  <RichList
                    bordered={true}
                    className={classNames("__wab_instance", sty.dataList__yNHb)}
                    content={[{}]}
                    data={(() => {
                      try {
                        return $queries.inventory.data;
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
                    hideSearch={true}
                    onRowClick={async (rowKey, row, event) => {
                      const $steps = {};
                    }}
                    pagination={false}
                    title={(() => {
                      const __composite = [{ role: "title", fieldId: null }];
                      __composite["0"]["fieldId"] = "memo";
                      return __composite;
                    })()}
                  />

                  <NewRows2
                    data-plasmic-name={"newRows2"}
                    data-plasmic-override={overrides.newRows2}
                    className={classNames("__wab_instance", sty.newRows2)}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bQxFq
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return undefined;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "button", "h1", "h2", "h3", "h4", "newRows2"],
  pageLayout: ["pageLayout", "button", "h1", "h2", "h3", "h4", "newRows2"],
  button: ["button"],
  h1: ["h1"],
  h2: ["h2"],
  h3: ["h3"],
  h4: ["h4"],
  newRows2: ["newRows2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
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

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    button: makeNodeComponent("button"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    h3: makeNodeComponent("h3"),
    h4: makeNodeComponent("h4"),
    newRows2: makeNodeComponent("newRows2"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
