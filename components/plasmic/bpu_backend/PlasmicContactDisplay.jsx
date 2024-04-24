// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: m9sTNijpsuGxLr6622n67c
// Component: 5r_sXaPlWptQ
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  set as $stateSet,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { RichList } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-list";
import InventoryModal from "../../InventoryModal"; // plasmic-import: PUOjAEVuITrD/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../app_starter/plasmic.module.css"; // plasmic-import: m9sTNijpsuGxLr6622n67c/projectcss
import sty from "./PlasmicContactDisplay.module.css"; // plasmic-import: 5r_sXaPlWptQ/css

createPlasmicElementProxy;

export const PlasmicContactDisplay__VariantProps = new Array("updateLayout");

export const PlasmicContactDisplay__ArgProps = new Array("contact");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContactDisplay__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          contact: {
            name: "Elizabeth",
            last_name: "Garcia",
            email: "elizabeth.garcia@example.com",
            phone_number: "+1-715-881-6976",
            partnershiptype: "Caterer",
            id: "8329e76d-7de8-48c2-bfd2-71d33ba5cbb4",
            isOrg: false
          }
        },
        props.args
      ),
    [props.args]
  );
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
        path: "update",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "updateLayout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.update;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.updateLayout
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.contact.email;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })(),
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.contact.phone_number;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })(),
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
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
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "4ACnaEgTThrwyGmam4pjE6",
        opId: "71736dc2-bf8a-44af-a362-d2160d4843a7",
        userArgs: {
          filters: [$props.contact.id]
        },
        cacheKey: `plasmic.$.71736dc2-bf8a-44af-a362-d2160d4843a7.$.`,
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
        sty.root,
        {
          [sty.rootupdateLayout]: hasVariant(
            $state,
            "updateLayout",
            "updateLayout"
          )
        }
      )}
    >
      <section
        data-plasmic-name={"section"}
        data-plasmic-override={overrides.section}
        className={classNames(projectcss.all, sty.section, {
          [sty.sectionupdateLayout]: hasVariant(
            $state,
            "updateLayout",
            "updateLayout"
          )
        })}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__gkAup
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.contact.isOrg ? "Organization" : "Individual";
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
          </h4>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__cW94
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.contact.partnershiptype;
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
          </h4>
        </div>
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
          <React.Fragment>
            {(() => {
              try {
                return $props.contact.name;
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
        </h1>
        <h3
          className={classNames(
            projectcss.all,
            projectcss.h3,
            projectcss.__wab_text,
            sty.h3__v7T3T,
            {
              [sty.h3updateLayout__v7T3TEo86C]: hasVariant(
                $state,
                "updateLayout",
                "updateLayout"
              )
            }
          )}
        >
          {hasVariant($state, "updateLayout", "updateLayout") ? (
            <React.Fragment>
              {(() => {
                try {
                  return "Email:";
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
          ) : (
            <React.Fragment>
              {(() => {
                try {
                  return "Email: " + $props.contact.email;
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
          )}
        </h3>
        {(() => {
          const child$Props = {
            className: classNames("__wab_instance", sty.input, {
              [sty.inputupdateLayout]: hasVariant(
                $state,
                "updateLayout",
                "updateLayout"
              )
            }),
            onChange: generateStateOnChangePropForCodeComponents(
              $state,
              "value",
              ["input", "value"],
              AntdInput_Helpers
            ),
            value: generateStateValueProp($state, ["input", "value"])
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "input.value"
              }
            ],

            [],
            AntdInput_Helpers ?? {},
            child$Props
          );
          return (
            <AntdInput
              data-plasmic-name={"input"}
              data-plasmic-override={overrides.input}
              {...child$Props}
            />
          );
        })()}
        <h3
          className={classNames(
            projectcss.all,
            projectcss.h3,
            projectcss.__wab_text,
            sty.h3__bfxEj,
            {
              [sty.h3updateLayout__bfxEjEo86C]: hasVariant(
                $state,
                "updateLayout",
                "updateLayout"
              )
            }
          )}
        >
          {hasVariant($state, "updateLayout", "updateLayout") ? (
            <React.Fragment>
              {(() => {
                try {
                  return "Phone Number:";
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
          ) : (
            <React.Fragment>
              {(() => {
                try {
                  return "Phone Number: " + $props.contact.phone_number;
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
          )}
        </h3>
        {(() => {
          const child$Props = {
            className: classNames("__wab_instance", sty.input2, {
              [sty.input2updateLayout]: hasVariant(
                $state,
                "updateLayout",
                "updateLayout"
              )
            }),
            onChange: generateStateOnChangePropForCodeComponents(
              $state,
              "value",
              ["input2", "value"],
              AntdInput_Helpers
            ),
            value: generateStateValueProp($state, ["input2", "value"])
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "input2.value"
              }
            ],

            [],
            AntdInput_Helpers ?? {},
            child$Props
          );
          return (
            <AntdInput
              data-plasmic-name={"input2"}
              data-plasmic-override={overrides.input2}
              {...child$Props}
            />
          );
        })()}
        <AntdButton
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button, {
            [sty.buttonupdateLayout]: hasVariant(
              $state,
              "updateLayout",
              "updateLayout"
            )
          })}
          onClick={async () => {
            const $steps = {};
            $steps["updateUpdate"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["update"]
                    },
                    operation: 4
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    const oldValue = $stateGet(objRoot, variablePath);
                    $stateSet(objRoot, variablePath, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateUpdate"] != null &&
              typeof $steps["updateUpdate"] === "object" &&
              typeof $steps["updateUpdate"].then === "function"
            ) {
              $steps["updateUpdate"] = await $steps["updateUpdate"];
            }
          }}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Update"}
          </div>
        </AntdButton>
      </section>
      <RichList
        data-plasmic-name={"dataList"}
        data-plasmic-override={overrides.dataList}
        bordered={true}
        className={classNames("__wab_instance", sty.dataList)}
        content={(() => {
          const __composite = [
            {
              key: "partnerID",
              fieldId: null,
              role: "content",
              expr: null,
              dataType: null
            }
          ];

          __composite["0"]["fieldId"] = "memo";
          __composite["0"]["expr"] = (currentItem, currentValue) => {
            return currentItem.memo;
          };
          __composite["0"]["dataType"] = "string";
          return __composite;
        })()}
        data={(() => {
          try {
            return $queries.query;
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
        pagination={false}
      />

      <InventoryModal
        data-plasmic-name={"inventoryModal"}
        data-plasmic-override={overrides.inventoryModal}
        className={classNames("__wab_instance", sty.inventoryModal)}
        contact={args.contact}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "freeBox",
    "h1",
    "input",
    "input2",
    "button",
    "text",
    "dataList",
    "inventoryModal"
  ],

  section: ["section", "freeBox", "h1", "input", "input2", "button", "text"],
  freeBox: ["freeBox"],
  h1: ["h1"],
  input: ["input"],
  input2: ["input2"],
  button: ["button", "text"],
  text: ["text"],
  dataList: ["dataList"],
  inventoryModal: ["inventoryModal"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContactDisplay__ArgProps,
          internalVariantPropNames: PlasmicContactDisplay__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactDisplay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactDisplay";
  } else {
    func.displayName = `PlasmicContactDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicContactDisplay = Object.assign(
  // Top-level PlasmicContactDisplay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    dataList: makeNodeComponent("dataList"),
    inventoryModal: makeNodeComponent("inventoryModal"),
    // Metadata about props expected for PlasmicContactDisplay
    internalVariantProps: PlasmicContactDisplay__VariantProps,
    internalArgProps: PlasmicContactDisplay__ArgProps
  }
);

export default PlasmicContactDisplay;
/* prettier-ignore-end */
