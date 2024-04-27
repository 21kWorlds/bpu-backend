// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: m9sTNijpsuGxLr6622n67c
// Component: HNh49Ai2o5aV
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import Card from "../../Card"; // plasmic-import: 8T8zBtcWG137/component
import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../app_starter/plasmic.module.css"; // plasmic-import: m9sTNijpsuGxLr6622n67c/projectcss
import sty from "./PlasmicCateringDisplay.module.css"; // plasmic-import: HNh49Ai2o5aV/css

createPlasmicElementProxy;

export const PlasmicCateringDisplay__VariantProps = new Array();

export const PlasmicCateringDisplay__ArgProps = new Array(
  "inventory",
  "caterers"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCateringDisplay__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "select4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const new$Queries = {
    partners: usePlasmicDataOp(() => {
      return {
        sourceId: "4ACnaEgTThrwyGmam4pjE6",
        opId: "f9c2469c-3ab5-462f-bfbb-97910e60a119",
        userArgs: {},
        cacheKey: `plasmic.$.f9c2469c-3ab5-462f-bfbb-97910e60a119.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    inventory: usePlasmicDataOp(() => {
      return {
        sourceId: "4ACnaEgTThrwyGmam4pjE6",
        opId: "4566c2a3-bf60-4a84-806c-800f5cd719fb",
        userArgs: {},
        cacheKey: `plasmic.$.4566c2a3-bf60-4a84-806c-800f5cd719fb.$.`,
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
      <div className={classNames(projectcss.all, sty.freeBox__pkraj)}>
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
          {"Community Caterers:"}
        </h1>
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return $queries.partners.data.filter(
                partner => partner.PartnerType === "Community Caterer"
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <section
              className={classNames(projectcss.all, sty.section__sjyRn)}
              key={currentIndex}
            >
              <div className={classNames(projectcss.all, sty.freeBox__hmD0)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__oF7Vz
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.name;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "You won't believe what happens next.";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h3>
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__pusVw
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.website;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "Website";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h5>
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6___9Eiqo
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.email;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "You won't believe what happens next.";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h6>
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6__wCdQf
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.phoneNumber;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "You won't believe what happens next.";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h6>
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6__uSmlp
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.display_notes;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "You won't believe what happens next.";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h6>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__kp97B)}>
                <div className={classNames(projectcss.all, sty.freeBox__erTsh)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yLbyr
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Memo"}
                      </span>
                    </React.Fragment>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sAycz
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Price"}
                      </span>
                    </React.Fragment>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pJNbm
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Notes"}
                      </span>
                    </React.Fragment>
                  </div>
                </div>
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $queries.inventory.data.filter(
                        obj => obj.partnerID === currentItem.id
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()
                ).map((__plasmic_item_1, __plasmic_idx_1) => {
                  const currentItem = __plasmic_item_1;
                  const currentIndex = __plasmic_idx_1;
                  return (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__cV1Hg)}
                      key={currentIndex}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__nlDxH
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.memo;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Memo";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ixJcu
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return "$" + currentItem.price.toFixed(2);
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Price";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__xMk
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.notes;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Notes";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__dqv7K)}>
        <h3
          className={classNames(
            projectcss.all,
            projectcss.h3,
            projectcss.__wab_text,
            sty.h3__azSHq
          )}
        >
          {"Commercial Caterers:"}
        </h3>
        <div className={classNames(projectcss.all, sty.freeBox__n0EuW)}>
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $queries.partners.data.filter(
                  partner => partner.PartnerType === "Commercial Caterer"
                );
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()
          ).map((__plasmic_item_0, __plasmic_idx_0) => {
            const currentItem = __plasmic_item_0;
            const currentIndex = __plasmic_idx_0;
            return (
              <section
                className={classNames(projectcss.all, sty.section__lwkgq)}
                key={currentIndex}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___8F6
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.name;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "You won't believe what happens next.";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h3>
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__pd8LM
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.website;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "Website";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h5>
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6__gwBBm
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.email;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "You won't believe what happens next.";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h6>
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6__rjNk
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.phoneNumber;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "You won't believe what happens next.";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h6>
                <div className={classNames(projectcss.all, sty.freeBox__m2KgY)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__e6V6J)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fctGv
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"Memo"}
                        </span>
                      </React.Fragment>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__u3Ck
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"Price"}
                        </span>
                      </React.Fragment>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hzNqx
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"Notes"}
                        </span>
                      </React.Fragment>
                    </div>
                  </div>
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $queries.inventory.data.filter(
                          obj => obj.partnerID === currentItem.id
                        );
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()
                  ).map((__plasmic_item_1, __plasmic_idx_1) => {
                    const currentItem = __plasmic_item_1;
                    const currentIndex = __plasmic_idx_1;
                    return (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__dSwlp
                        )}
                        key={currentIndex}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__t8Ntg
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem.memo;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "Memo";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__uUr24
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return "$" + currentItem.price.toFixed(2);
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "Price";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ivPjg
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem.notes;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "Notes";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___5VHhZ)}>
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return $queries.inventory.data.filter(
                item => item.category === "Snacks"
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <Card
              data-plasmic-name={"card"}
              data-plasmic-override={overrides.card}
              className={classNames("__wab_instance", sty.card)}
              key={currentIndex}
              title={
                <React.Fragment>
                  {(() => {
                    try {
                      return currentItem.memo;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Card title";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__biKmv
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return "$" + currentItem.price.toFixed(2);
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "something here";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___694U
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return currentItem.notes;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "something here";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Card>
          );
        })}
      </div>
      <section className={classNames(projectcss.all, sty.section__u8CUg)}>
        <div className={classNames(projectcss.all, sty.freeBox__i4Et0)}>
          <div className={classNames(projectcss.all, sty.freeBox__hs9Gd)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__rw0Wq
              )}
            >
              {"Select Caterer: "}
            </h4>
            <AntdSelect
              data-plasmic-name={"select"}
              data-plasmic-override={overrides.select}
              className={classNames("__wab_instance", sty.select)}
              defaultStylesClassName={classNames(
                projectcss.root_reset,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens,
                plasmic_antd_5_hostless_css.plasmic_tokens,
                plasmic_plasmic_rich_components_css.plasmic_tokens
              )}
              onChange={generateStateOnChangeProp($state, ["select", "value"])}
              options={(() => {
                try {
                  return $queries.partners.data.map(caterer => ({
                    value: caterer.id,
                    label: caterer.name
                  }));
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [
                      { value: "option1", label: "Option 1", type: "option" },
                      { value: "option2", label: "Option 2", type: "option" }
                    ];
                  }
                  throw e;
                }
              })()}
              placeholder={"Select..."}
              popupScopeClassName={sty["select__popup"]}
              value={generateStateValueProp($state, ["select", "value"])}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__aisRp)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__cfSw
              )}
            >
              {"Select Snacks: "}
            </h4>
            <AntdSelect
              data-plasmic-name={"select4"}
              data-plasmic-override={overrides.select4}
              className={classNames("__wab_instance", sty.select4)}
              defaultStylesClassName={classNames(
                projectcss.root_reset,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens,
                plasmic_antd_5_hostless_css.plasmic_tokens,
                plasmic_plasmic_rich_components_css.plasmic_tokens
              )}
              onChange={generateStateOnChangeProp($state, ["select4", "value"])}
              options={(() => {
                try {
                  return $queries.inventory.data
                    .filter(item => item.category === "Snacks")
                    .map(item => ({
                      value: item.id,
                      label: item.memo
                    }));
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [
                      { value: "option1", label: "Option 1", type: "option" },
                      { value: "option2", label: "Option 2", type: "option" }
                    ];
                  }
                  throw e;
                }
              })()}
              placeholder={"Select..."}
              popupScopeClassName={sty["select4__popup"]}
              value={generateStateValueProp($state, ["select4", "value"])}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "h1", "card", "select", "select4"],
  h1: ["h1"],
  card: ["card"],
  select: ["select"],
  select4: ["select4"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCateringDisplay__ArgProps,
          internalVariantPropNames: PlasmicCateringDisplay__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCateringDisplay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCateringDisplay";
  } else {
    func.displayName = `PlasmicCateringDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicCateringDisplay = Object.assign(
  // Top-level PlasmicCateringDisplay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    card: makeNodeComponent("card"),
    select: makeNodeComponent("select"),
    select4: makeNodeComponent("select4"),
    // Metadata about props expected for PlasmicCateringDisplay
    internalVariantProps: PlasmicCateringDisplay__VariantProps,
    internalArgProps: PlasmicCateringDisplay__ArgProps
  }
);

export default PlasmicCateringDisplay;
/* prettier-ignore-end */
